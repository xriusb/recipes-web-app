# Recipe Web App

A modern recipe management application built with React, TypeScript, and best practices.

## Tech Stack

### Core
- **React 18** - UI framework
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and dev server

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **clsx + tailwind-merge** - Class name utilities

### Routing & State
- **React Router v6** - Client-side routing
- **TanStack Query (React Query)** - Server state management
- **Zustand** - Client state management (lightweight alternative to Redux)

### Forms & Validation
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation

### HTTP & Utilities
- **Axios** - HTTP client with interceptors
- **date-fns** - Date manipulation
- **react-hot-toast** - Toast notifications
- **react-icons** - Icon library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Vitest** - Unit testing
- **React Testing Library** - Component testing

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components (route components)
├── hooks/          # Custom React hooks
├── services/       # API services
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
├── lib/            # Library configurations (axios, etc.)
├── test/           # Test setup and utilities
├── App.tsx         # Main app component with routing
├── main.tsx        # App entry point
└── index.css       # Global styles with Tailwind
```

## Getting Started

### Prerequisites
- Node.js 22.x or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Copy the environment variables:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (includes TypeScript check)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests with Vitest
- `npm run test:ui` - Run tests with UI

## Key Concepts for Backend Engineers

### React Fundamentals
- **Components**: Reusable UI pieces (similar to functions/classes)
- **Props**: Data passed to components (like function parameters)
- **State**: Component's internal data that triggers re-renders when changed
- **Hooks**: Functions that let you use React features (useState, useEffect, etc.)

### TypeScript Benefits
- Catch errors at compile time
- Better IDE autocomplete and refactoring
- Self-documenting code through types
- See `src/types/index.ts` for example type definitions

### React Query (TanStack Query)
- Handles API calls, caching, and synchronization
- Replaces need for manual loading/error states
- Automatic background refetching
- Similar to ORM patterns in backend

### Tailwind CSS
- Utility classes instead of writing custom CSS
- Example: `className="bg-blue-500 text-white p-4 rounded"`
- Highly productive once you learn the patterns

### Form Handling
- React Hook Form minimizes re-renders (performance)
- Zod provides type-safe validation schemas
- Similar to validation libraries in backend frameworks

## Next Steps

Ready to start building features! Some suggestions:

1. Create a recipe list page
2. Add recipe detail view
3. Implement create/edit recipe forms
4. Add search and filtering
5. Implement categories and tags
6. Add image upload functionality

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [React Router](https://reactrouter.com)
- [React Hook Form](https://react-hook-form.com)

## License

Private project
