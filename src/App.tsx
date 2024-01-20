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
      <div className="h-screen relative ">
        <Navbar />
        <Content step={0} />
        <Footer />
      </div>
    </FormContext.Provider>
  )
}

export default App
