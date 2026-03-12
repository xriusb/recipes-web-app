// Common types for the Recipe App

export interface Recipe {
  id: string
  title: string
  description: string
  ingredients: Ingredient[]
  instructions: string[]
  prepTime: number
  cookTime: number
  servings: number
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  tags: string[]
  imageUrl?: string
  createdAt: string
  updatedAt: string
}

export interface Ingredient {
  id: string
  name: string
  amount: number
  unit: string
}

export interface CreateRecipeInput {
  title: string
  description: string
  ingredients: Omit<Ingredient, 'id'>[]
  instructions: string[]
  prepTime: number
  cookTime: number
  servings: number
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  tags: string[]
  imageUrl?: string
}

export interface UpdateRecipeInput extends Partial<CreateRecipeInput> {
  id: string
}
