// A component is a function that receives data (props) and returns JSX.
//
// The Props interface is the "contract" for using this component — equivalent
// to a typed method signature in Java/C#. TypeScript enforces it at compile time:
// if you forget to pass `recipe`, or pass the wrong shape, you get a compile error.
//
// Rule: RecipeCard knows about ONE recipe. It renders it. Nothing else.

import type { Recipe } from '@/types'
import { cn } from '@/utils/cn'
import { FiClock, FiUsers } from 'react-icons/fi'

interface Props {
  recipe: Recipe
}

// Maps the difficulty union type to Tailwind badge colours.
// Record<Recipe['difficulty'], string> means: a key for every possible difficulty value.
// TypeScript will error if you forget to handle 'easy', 'medium', or 'hard'.
const difficultyStyles: Record<Recipe['difficulty'], string> = {
  easy: 'bg-green-100 text-green-800',
  medium: 'bg-yellow-100 text-yellow-800',
  hard: 'bg-red-100 text-red-800',
}

// Props are destructured in the function signature — { recipe } instead of (props).
// This is the idiomatic React + TypeScript pattern.
export function RecipeCard({ recipe }: Props) {
  const totalTime = recipe.prepTime + recipe.cookTime

  return (
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">

      {/* Image — conditional rendering: ternary decides what JSX to return */}
      <div className="h-48 bg-gray-100 overflow-hidden">
        {recipe.imageUrl ? (
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        ) : (
          // Fallback shown when imageUrl is undefined or empty
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
            No image
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col flex-1">

        {/* Badges row */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {recipe.category}
          </span>

          {/* cn() merges the fixed base classes with the difficulty-specific colour.
              Without cn(), conflicting Tailwind classes would silently override each other. */}
          <span
            className={cn(
              'text-xs font-medium px-2 py-0.5 rounded-full capitalize',
              difficultyStyles[recipe.difficulty]
            )}
          >
            {recipe.difficulty}
          </span>
        </div>

        <h2 className="text-lg font-semibold text-gray-900 mb-1 leading-snug">
          {recipe.title}
        </h2>

        {/* flex-1 makes this paragraph grow to fill remaining space,
            pushing the footer to the bottom regardless of description length */}
        <p className="text-sm text-gray-500 mb-4 flex-1 line-clamp-2">
          {recipe.description}
        </p>

        {/* Card footer: icons from react-icons — import as named exports */}
        <div className="flex items-center gap-4 text-sm text-gray-500 border-t border-gray-50 pt-3">
          <span className="flex items-center gap-1">
            <FiClock className="text-gray-400" />
            {totalTime} min
          </span>
          <span className="flex items-center gap-1">
            <FiUsers className="text-gray-400" />
            {recipe.servings} servings
          </span>
        </div>

      </div>
    </article>
  )
}
