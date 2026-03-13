// Page component: assembles layout + feature components into a complete screen.
//
// The page's only job is composition — it decides what goes where on the screen.
// It contains no business logic and no data fetching of its own.
// The components it renders handle their own concerns.
//
// Backend analogy: this is the Controller layer.
// It orchestrates. It doesn't do the work itself.

import { Header } from '@/components/layout/Header'
import { RecipeList } from '@/components/recipe/RecipeList'

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800">All Recipes</h2>
          <p className="text-gray-500 text-sm mt-1">Browse your collection</p>
        </div>

        {/* RecipeList manages its own data fetching and all async states internally.
            From HomePage's perspective, it just "renders the recipe list". */}
        <RecipeList />
      </main>

      <footer className="text-center py-6 text-gray-400 text-sm border-t border-gray-100 mt-8">
        Copyright &copy; xriusb.com {new Date().getFullYear()}
      </footer>
    </div>
  )
}
