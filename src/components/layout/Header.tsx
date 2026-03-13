// Layout component: purely presentational, no props, no hooks, no data.
//
// Not every component fetches or transforms data. This one just renders structure.
// It lives in layout/ (not recipe/) because it appears on every page — it is
// not tied to the recipes feature.
//
// Presentational components are the easiest to understand, test, and reuse.

export function Header() {
  return (
    <header className="bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Recipe App</h1>
          <p className="text-sm text-gray-500">Your personal recipe collection</p>
        </div>
      </div>
    </header>
  )
}
