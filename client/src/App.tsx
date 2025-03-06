export default function App() {
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800 font-bold text-white">
        <h1 className="text-3xl">Ready to code</h1>

        <p>Server running on</p>
        <a
          href="http://localhost:3000/"
          className="text-sky-300"
          target="_blank"
        >
          http://localhost:3000/
        </a>
      </div>
    </>
  )
}
