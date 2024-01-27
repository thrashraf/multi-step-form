import "./App.css"
import Content from "./components/content"
import Navbar from "./components/navbar"

function App() {
  return (
    <div className="h-screen relative bg-slate-200 lg:bg-white lg:flex">
      <Navbar />
      <Content />
    </div>
  )
}

export default App
