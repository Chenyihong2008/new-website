export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-slate-50">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">
          New Project
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is the start of something amazing.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition">
          Get Started
        </button>
      </div>
    </main>
  )
}
