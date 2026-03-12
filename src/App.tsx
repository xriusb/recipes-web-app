import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Recipe App
        </h1>
        <p className="text-gray-600">
          Your personal recipe collection
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 text-center">
            Welcome to your recipe app! Ready to start building.
          </p>
        </div>
      </main>

      <footer className="text-center mt-12 text-gray-600 text-sm">
        Copyright &copy; xriusb.com {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default App
