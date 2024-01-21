import { useForm } from "react-hook-form"
import "./App.css"
import Content from "./components/content"
import Navbar from "./components/navbar"
import { FormContext } from "./formContext"
import Footer from "./components/Footer"

function App() {
  const formMethods = useForm()

  return (
    <FormContext.Provider value={formMethods}>
      <div className="h-screen relative bg-slate-200 lg:bg-white lg:flex">
        <Navbar />
        <Content step={2} />
        <Footer />
      </div>
    </FormContext.Provider>
  )
}

export default App
