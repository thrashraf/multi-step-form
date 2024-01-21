import { useForm } from "react-hook-form"
import "./App.css"
import Content from "./components/content"
import Navbar from "./components/navbar"
import { FormContext } from "./formContext"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const formMethods = useForm()
  const [step, setStep] = useState<number>(0)

  return (
    <FormContext.Provider value={formMethods}>
      <div className="h-screen relative bg-slate-200 lg:bg-white lg:flex">
        <Navbar setStep={setStep} step={step} />
        <Content step={step} />
        <Footer />
      </div>
    </FormContext.Provider>
  )
}

export default App
