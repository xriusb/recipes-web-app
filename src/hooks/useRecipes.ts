// Custom hook: the bridge between the data layer (service) and the UI layer (components).
//
// Why a custom hook instead of calling useQuery directly in a component?
// - Centralises query config: stale time, retry logic, error handling — all in one place
// - Reusable: any component that needs recipes calls useRecipes(), not useQuery(...)
// - When the queryKey or queryFn changes, only this file needs updating
//
// Backend analogy: this is the application/service layer sitting between
// the repository (recipeService) and the controller (page component).

import { useQuery } from '@tanstack/react-query'
import { getRecipes } from '@/services/recipeService'
import type { Recipe } from '@/types'

// The query key is a cache identifier — think of it like a Redis key.
// All components that call useRecipes() share the same cached result.
// Exported so mutations (create/update/delete) can invalidate this cache later:
//   queryClient.invalidateQueries({ queryKey: RECIPES_QUERY_KEY })
export const RECIPES_QUERY_KEY = ['recipes'] as const

export function useRecipes() {
  return useQuery<Recipe[], Error>({
    queryKey: RECIPES_QUERY_KEY,

    // queryFn is the async function TanStack Query calls and manages.
    // It handles the Promise lifecycle and gives back: data, isLoading, isError.
    // Shorthand: queryFn: getRecipes  is the same as  queryFn: () => getRecipes()
    queryFn: getRecipes,
  })
}
