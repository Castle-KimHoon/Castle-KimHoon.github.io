export default function Home() {
    return (
      <div className="container mx-auto p-4">
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-3xl">안녕하세요! GitHub Pages입니다.</h1>
        </header>
        <main className="mt-4">
          <p className="mb-4">이것은 Next.js와 Tailwind CSS를 사용하여 만든 웹사이트입니다.</p>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Tailwind 버튼
          </button>
        </main>
        <footer className="mt-8 text-center text-gray-500">
          © 2024 나의 GitHub Pages
        </footer>
      </div>
    )
  }