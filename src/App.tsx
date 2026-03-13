// App.tsx is pure routing configuration.
// It maps URL paths to page components — nothing else.
// No logic, no state, no data fetching, no layout.
//
// As the app grows, new routes are added here:
//   <Route path="/recipes/:id" element={<RecipeDetailPage />} />
//   <Route path="/recipes/new" element={<CreateRecipePage />} />

import { Routes, Route } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
