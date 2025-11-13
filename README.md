# Cleeng Subscriptions Management

A React + TypeScript application for managing and displaying user subscriptions. Built as a technical assessment for Cleeng, demonstrating core React skills, asynchronous JavaScript handling, state management, and clean code practices.

## 🚀 Features

- **Subscription List Display** - View all active subscriptions in a clean, organized layout
- **Real-time Status Updates** - Visual status indicators (Active/Cancelled) with color-coded badges
- **Cancel Functionality** - Cancel active subscriptions with immediate UI feedback
- **Loading States** - Proper loading indicators during data fetching
- **Error Handling** - User-friendly error messages for failed operations
- **Responsive Design** - Clean, simple layout using flexbox

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Redux Toolkit** - State management
- **CSS** - Styling (flexbox layout)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 20.19+ or 22.12+)
- **npm** (comes with Node.js)

You can check your versions by running:
```bash
node --version
npm --version
```

## 🏃 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Cleeng-Task
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required dependencies including React, TypeScript, Vite, and Redux Toolkit.

### 3. Run the Development Server

```bash
npm run dev
```

The application will start and be available at `http://localhost:5173` (or the next available port).

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` directory.

### 5. Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

## 📁 Project Structure

```
Cleeng-Task/
├── src/
│   ├── components/
│   │   ├── SubscriptionsList.tsx    # Main container component
│   │   └── SubscriptionCard.tsx    # Individual subscription card
│   ├── store/
│   │   ├── store.ts                 # Redux store configuration
│   │   ├── subscriptionsSlice.ts    # Redux slice (actions & reducers)
│   │   └── hooks.ts                  # Typed Redux hooks
│   ├── utils/
│   │   └── formatters.ts            # Utility functions (price, date formatting)
│   ├── types.ts                     # TypeScript type definitions
│   ├── mock-data.ts                 # Mock data and API simulation
│   ├── App.tsx                      # Root component
│   ├── main.tsx                     # Application entry point
│   └── style.css                    # Global styles
├── public/                          # Static assets
├── index.html                       # HTML template
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── vite.config.ts                   # Vite configuration
└── README.md                        # This file
```

## 🎯 Key Features Explained

### State Management
- Uses **Redux Toolkit** for centralized state management
- Async operations handled with `createAsyncThunk`
- Typed Redux hooks for better TypeScript support

### Component Architecture
- **SubscriptionsList** - Container component managing data fetching and state
- **SubscriptionCard** - Presentational component displaying subscription details
- Clear separation of concerns

### Data Flow
1. Component mounts → Dispatches `fetchSubscriptionsAsync`
2. Redux thunk simulates API call (1-second delay)
3. State updates (loading → success/error)
4. Components re-render with new data
5. User interactions (cancel) dispatch actions → state updates → UI updates

## 🎨 Styling

- Clean, minimal design
- Flexbox layout for responsive cards
- Color-coded status badges (green for active, gray for cancelled)
- Hover effects for better interactivity
- Simple, readable typography

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 💡 How It Works

### Data Fetching
- On component mount, the app fetches subscriptions from a mock API
- The API simulation includes a 1-second delay to mimic real network conditions
- Loading state is displayed during the fetch operation

### State Management
- Uses Redux Toolkit for centralized state management
- All subscription data, loading, and error states are managed in Redux store
- Actions are dispatched to update state (e.g., cancel subscription)

### User Interactions
- Click "Cancel" on any active subscription to change its status to cancelled
- The button becomes disabled after cancellation
- Status badge updates to reflect the new state

## 📝 Technical Details

- **Mock Data**: Located in `src/mock-data.ts`
- **State Management**: Redux Toolkit with typed hooks
- **Type Safety**: Comprehensive TypeScript typing throughout
- **Styling**: Plain CSS with flexbox layout
- **Build Tool**: Vite for fast development and optimized builds

## 🎯 Project Requirements Met

✅ React project using Vite  
✅ TypeScript configuration  
✅ Mock data with API simulation  
✅ React hooks for state management  
✅ Loading and error states  
✅ Component composition  
✅ Clean CSS styling  
✅ TypeScript types throughout  

### Bonus Features Implemented

✅ Redux Toolkit for state management  
✅ Cancel subscription functionality  
✅ Visual status indicators  

## 📝 Notes

- Mock data is used to simulate API calls (no real backend required)
- All state changes are client-side only
- The application demonstrates modern React patterns and Redux Toolkit best practices

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual port number.

### Build Errors
If you encounter build errors:
1. Ensure Node.js version is 20.19+ or 22.12+
2. Delete `node_modules` and `package-lock.json`
3. Run `npm install` again

### TypeScript Errors
The project uses strict TypeScript. Ensure all types are properly defined and imported.

## 👤 Author Ahmed Olayinka



