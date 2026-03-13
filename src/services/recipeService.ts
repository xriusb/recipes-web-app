// The service layer: responsible for data access only.
// The UI never knows or cares where data comes from.
// Today: hardcoded mock data. Tomorrow: a real API call.
// Only THIS file changes when the backend is ready.

import type { Recipe } from '@/types'
// import { api } from '@/lib/axios'   // <-- uncomment when backend is ready

const MOCK_RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    description: 'A classic Roman pasta dish made with eggs, cheese, pancetta, and black pepper.',
    ingredients: [
      { id: 'i1', name: 'Spaghetti', amount: 400, unit: 'g' },
      { id: 'i2', name: 'Pancetta', amount: 150, unit: 'g' },
      { id: 'i3', name: 'Eggs', amount: 4, unit: 'pcs' },
      { id: 'i4', name: 'Parmesan', amount: 100, unit: 'g' },
    ],
    instructions: [
      'Cook spaghetti in salted boiling water.',
      'Fry pancetta until crispy.',
      'Mix eggs and cheese in a bowl.',
      'Combine pasta, pancetta, and egg mixture off the heat.',
    ],
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    difficulty: 'medium',
    category: 'Pasta',
    tags: ['italian', 'classic'],
    imageUrl: '/src/img/placeholder.jpg',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Avocado Toast',
    description: 'Simple, nutritious toast topped with creamy smashed avocado and a squeeze of lemon.',
    ingredients: [
      { id: 'i5', name: 'Sourdough bread', amount: 2, unit: 'slices' },
      { id: 'i6', name: 'Avocado', amount: 1, unit: 'pcs' },
      { id: 'i7', name: 'Lemon juice', amount: 1, unit: 'tbsp' },
    ],
    instructions: [
      'Toast the bread.',
      'Mash avocado with lemon juice, salt and pepper.',
      'Spread onto toast.',
    ],
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    difficulty: 'easy',
    category: 'Breakfast',
    tags: ['vegetarian', 'quick'],
    imageUrl: '/src/img/placeholder.jpg',
    createdAt: '2024-01-02T00:00:00Z',
    updatedAt: '2024-01-02T00:00:00Z',
  },
  {
    id: '3',
    title: 'Beef Wellington',
    description: 'Tender beef fillet wrapped in mushroom duxelles and golden puff pastry. A showstopper.',
    ingredients: [
      { id: 'i8', name: 'Beef fillet', amount: 800, unit: 'g' },
      { id: 'i9', name: 'Puff pastry', amount: 500, unit: 'g' },
      { id: 'i10', name: 'Mushrooms', amount: 300, unit: 'g' },
      { id: 'i11', name: 'Parma ham', amount: 100, unit: 'g' },
    ],
    instructions: [
      'Sear the beef fillet all over.',
      'Prepare mushroom duxelles.',
      'Wrap beef in Parma ham and duxelles.',
      'Encase in puff pastry and bake at 200°C for 25 minutes.',
    ],
    prepTime: 45,
    cookTime: 30,
    servings: 6,
    difficulty: 'hard',
    category: 'Main Course',
    tags: ['british', 'special occasion'],
    imageUrl: '/src/img/placeholder.jpg',
    createdAt: '2024-01-03T00:00:00Z',
    updatedAt: '2024-01-03T00:00:00Z',
  },
  {
    id: '4',
    title: 'Greek Salad',
    description: 'Fresh cucumber, tomato, olives, and feta cheese with a simple olive oil dressing.',
    ingredients: [
      { id: 'i12', name: 'Cucumber', amount: 1, unit: 'pcs' },
      { id: 'i13', name: 'Tomatoes', amount: 3, unit: 'pcs' },
      { id: 'i14', name: 'Feta cheese', amount: 200, unit: 'g' },
      { id: 'i15', name: 'Kalamata olives', amount: 100, unit: 'g' },
    ],
    instructions: [
      'Chop cucumber and tomatoes into chunks.',
      'Add olives and crumbled feta.',
      'Drizzle with olive oil, season with salt and dried oregano.',
    ],
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: 'easy',
    category: 'Salad',
    tags: ['greek', 'vegetarian', 'no-cook'],
    imageUrl: '/src/img/placeholder.jpg',
    createdAt: '2024-01-04T00:00:00Z',
    updatedAt: '2024-01-04T00:00:00Z',
  },
  {
    id: '5',
    title: 'Chicken Tikka Masala',
    description: 'Chunks of grilled chicken in a rich, creamy, spiced tomato sauce. A true crowd pleaser.',
    ingredients: [
      { id: 'i16', name: 'Chicken breast', amount: 600, unit: 'g' },
      { id: 'i17', name: 'Tomato passata', amount: 400, unit: 'ml' },
      { id: 'i18', name: 'Heavy cream', amount: 150, unit: 'ml' },
      { id: 'i19', name: 'Garam masala', amount: 2, unit: 'tsp' },
    ],
    instructions: [
      'Marinate chicken in yogurt and spices for 30 minutes.',
      'Grill or pan-fry chicken pieces until charred.',
      'Simmer passata with spices for 10 minutes.',
      'Add chicken and cream, cook for 5 more minutes.',
    ],
    prepTime: 20,
    cookTime: 35,
    servings: 4,
    difficulty: 'medium',
    category: 'Main Course',
    tags: ['indian', 'curry'],
    imageUrl: '/src/img/placeholder.jpg',
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z',
  },
]

// This function signature will NEVER change, even when we swap to a real API.
// The Promise return type works identically with local data and async network calls.
export async function getRecipes(): Promise<Recipe[]> {
  // Simulate network latency so the loading skeleton in RecipeList is visible.
  // Delete these two lines when switching to the real API.
  await new Promise(resolve => setTimeout(resolve, 600))
  return MOCK_RECIPES

  // --- Real API (uncomment when backend is ready, delete the two lines above) ---
  // const response = await api.get<Recipe[]>('/recipes')
  // return response.data
}
