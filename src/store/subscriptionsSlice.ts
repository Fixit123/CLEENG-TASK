import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { Subscription } from '../types';
import { fetchSubscriptions } from '../mock-data';

interface SubscriptionsState {
  subscriptions: Subscription[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: SubscriptionsState = {
  subscriptions: null,
  loading: false,
  error: null,
};

export const fetchSubscriptionsAsync = createAsyncThunk(
  'subscriptions/fetchSubscriptions',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchSubscriptions();
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Failed to fetch subscriptions'
      );
    }
  }
);

const subscriptionsSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {
    cancelSubscription: (state, action: PayloadAction<string>) => {
      if (state.subscriptions) {
        const subscription = state.subscriptions.find(
          (sub) => sub.id === action.payload
        );
        if (subscription) {
          subscription.status = 'cancelled';
        }
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubscriptionsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubscriptionsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.subscriptions = action.payload;
        state.error = null;
      })
      .addCase(fetchSubscriptionsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.subscriptions = null;
      });
  },
});

// Export actions
export const { cancelSubscription, clearError } = subscriptionsSlice.actions;

// Export reducer
export default subscriptionsSlice.reducer;

