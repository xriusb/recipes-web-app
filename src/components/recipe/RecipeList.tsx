// RecipeList: renders the full list of recipes and handles all async states.
//
// Why does this component call useRecipes() directly instead of receiving recipes as props?
// Because RecipeList "owns" the recipe list feature. It knows it needs recipes,
// it knows how to show loading/error states. The page component above it stays clean.
//
// The 4 states of any async operation in React:
//   1. Loading  — data is being fetched (show skeleton)
//   2. Error    — fetch failed (show error message)
//   3. Empty    — fetch succeeded but returned nothing (show empty state)
//   4. Success  — data is ready (show the list)

import { useRecipes } from '@/hooks/useRecipes'
import { RecipeCard } from './RecipeCard'

export function RecipeList() {
  // Destructure only what we need from the hook.
  // data is typed as Recipe[] | undefined — undefined until first successful fetch.
  // We rename it to `recipes` for clarity.
  const { data: recipes, isLoading, isError } = useRecipes()

  // --- State 1: Loading ---
  // Show skeleton placeholders that match card dimensions.
  // This prevents layout shift when data arrives (better UX than a spinner).
  // animate-pulse is a Tailwind utility that fades the element in and out.
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-72 animate-pulse"
          >
            <div className="h-48 bg-gray-200" />
            <div className="p-4 space-y-2">
              <div className="h-3 bg-gray-200 rounded w-1/3" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  // --- State 2: Error ---
  if (isError) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 font-medium">Failed to load recipes.</p>
        <p className="text-gray-400 text-sm mt-1">Please try again later.</p>
      </div>
    )
  }

  // --- State 3: Empty ---
  // data could be an empty array even on success — guard for it explicitly.
  if (!recipes || recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No recipes found.</p>
      </div>
    )
  }

  // --- State 4: Success ---
  // .map() transforms each Recipe object into a RecipeCard React element.
  //
  // The key prop is mandatory when rendering lists.
  // React uses it to identify each item between re-renders — to know what
  // changed, was added, or was removed. It must be stable and unique.
  // Use recipe.id (like a database primary key), NOT the array index.
  // Using the index as key breaks when items are reordered or deleted.
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  )
}
