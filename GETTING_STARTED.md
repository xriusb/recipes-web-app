# Getting Started with React Development

This guide will help you understand the key concepts and get started with React development as a backend engineer.

## Understanding the File Structure

### Entry Point: `src/main.tsx`
This is where your app starts. Key setup here:
- **QueryClientProvider**: Wraps app for React Query (API calls)
- **BrowserRouter**: Enables client-side routing
- **Toaster**: Global toast notifications

### Main App: `src/App.tsx`
- Contains your routes (URL paths)
- Think of it like your backend router/controller mapping
- Each route renders a different page component

### Types: `src/types/index.ts`
- TypeScript interfaces and types
- Similar to DTOs or domain models in backend
- Defines the shape of your data

### API Client: `src/lib/axios.ts`
- Configured Axios instance
- Similar to HTTP client in backend
- Add interceptors for auth tokens, error handling, etc.

## Key React Concepts

### 1. Components
Components are functions that return JSX (HTML-like syntax):

```tsx
function MyComponent() {
  return (
    <div className="p-4">
      <h1>Hello World</h1>
    </div>
  )
}
```

### 2. Props
Pass data to components (like function parameters):

```tsx
interface Props {
  name: string
  age: number
}

function Greeting({ name, age }: Props) {
  return <p>Hello {name}, you are {age} years old</p>
}

// Usage
<Greeting name="John" age={30} />
```

### 3. State
Local component data that triggers re-renders when changed:

```tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
```

### 4. Effects
Run side effects (API calls, subscriptions):

```tsx
import { useEffect, useState } from 'react'

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Runs when component mounts or userId changes
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [userId]) // Dependency array

  return <div>{user?.name}</div>
}
```

## Working with React Query

React Query simplifies API calls. Instead of manual fetch + state:

```tsx
import { useQuery } from '@tanstack/react-query'
import { api } from '@/lib/axios'

function RecipeList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['recipes'],
    queryFn: async () => {
      const response = await api.get('/recipes')
      return response.data
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error loading recipes</div>

  return (
    <div>
      {data.map(recipe => (
        <div key={recipe.id}>{recipe.title}</div>
      ))}
    </div>
  )
}
```

Benefits:
- Automatic caching
- Background refetching
- Loading and error states
- No need for manual state management

## Form Handling with React Hook Form

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type FormData = z.infer<typeof schema>

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Call API here
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}

      <input type="password" {...register('password')} />
      {errors.password && <span>{errors.password.message}</span>}

      <button type="submit">Login</button>
    </form>
  )
}
```

## Styling with Tailwind

Instead of writing CSS files, use utility classes:

```tsx
function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      Click me
    </button>
  )
}
```

Common patterns:
- `flex`, `grid` - Layout
- `p-4`, `m-2` - Padding/margin (4 = 1rem)
- `text-xl`, `font-bold` - Typography
- `bg-blue-500`, `text-white` - Colors
- `rounded`, `shadow-md` - Effects
- `hover:`, `focus:` - States

## Routing with React Router

```tsx
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<RecipeList />} />
      <Route path="/recipes/:id" element={<RecipeDetail />} />
      <Route path="/recipes/new" element={<CreateRecipe />} />
    </Routes>
  )
}

// Navigation
function Navigation() {
  const navigate = useNavigate()

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
      <button onClick={() => navigate('/recipes/new')}>
        Create Recipe
      </button>
    </nav>
  )
}

// Access URL params
import { useParams } from 'react-router-dom'

function RecipeDetail() {
  const { id } = useParams()
  // Use id to fetch recipe
}
```

## Common Patterns

### Custom Hooks
Extract reusable logic:

```tsx
// src/hooks/useRecipes.ts
export function useRecipes() {
  return useQuery({
    queryKey: ['recipes'],
    queryFn: async () => {
      const response = await api.get('/recipes')
      return response.data
    },
  })
}

// Usage
function RecipeList() {
  const { data, isLoading } = useRecipes()
  // ...
}
```

### API Services
Organize API calls:

```tsx
// src/services/recipeService.ts
import { api } from '@/lib/axios'
import type { Recipe, CreateRecipeInput } from '@/types'

export const recipeService = {
  getAll: () => api.get<Recipe[]>('/recipes'),
  getById: (id: string) => api.get<Recipe>(`/recipes/${id}`),
  create: (data: CreateRecipeInput) => api.post<Recipe>('/recipes', data),
  update: (id: string, data: Partial<Recipe>) => api.patch<Recipe>(`/recipes/${id}`, data),
  delete: (id: string) => api.delete(`/recipes/${id}`),
}
```

## Development Workflow

1. **Start dev server**: `npm run dev`
2. **Make changes**: Files auto-reload (HMR)
3. **Check types**: TypeScript shows errors in IDE
4. **Lint code**: `npm run lint`
5. **Format code**: `npm run format`
6. **Run tests**: `npm run test`

## Debugging Tips

1. **Use React DevTools** (browser extension)
2. **Console.log** still works great
3. **TypeScript errors**: Read them carefully, they're helpful
4. **Network tab**: Check API requests
5. **Vite errors**: Usually show exact line with issue

## Next Steps

1. Study the existing structure
2. Try creating a simple component
3. Add a new route
4. Make an API call with React Query
5. Create a form with React Hook Form

## Common Gotchas

1. **Array keys**: Always use unique `key` prop when mapping
2. **State updates**: setState is async, don't rely on immediate value
3. **useEffect deps**: Include all dependencies in array
4. **Event handlers**: Need arrow functions or bind
5. **CSS classes**: Use `className` not `class`

## Resources for Backend Engineers

- [React Docs](https://react.dev) - New docs are excellent
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TanStack Query](https://tanstack.com/query/latest) - Like an ORM for APIs
- [Tailwind CSS](https://tailwindcss.com/docs) - Search for what you need

Ready to build! Start with something small and iterate.
