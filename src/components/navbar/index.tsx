import useFormJotai from "../../hooks/useForm"
import ButtonStep from "../button/ButtonStep"
const Navbar = () => {
  const { step } = useFormJotai()

  return (
    <div className="flex  lg:h-screen">
      <div className="bg-navbar-bg-mobile flex w-full h-36 bg-no-repeat bg-cover lg:hidden justify-center items-center gap-8">
        {Array.from(Array(4).keys()).map((_, i) => (
          <ButtonStep step={i + 1} currentStep={step} key={i} />
        ))}
      </div>
      <div className="hidden lg:block w-[400px] m-10 bg-navbar-bg-desktop bg-no-repeat bg-cover rounded-3xl">
        <div className="flex flex-col justify-center items-center gap-14 mt-20">
          {Array.from(Array(4).keys()).map((_, i) => (
            <div className="flex justify-center items-center gap-10">
              <div className="w-14">
                <ButtonStep step={i + 1} currentStep={step} key={i} />
              </div>
              <div className="flex flex-col gap-1 text-start">
                <h1 className="text-gray-400">STEP {i + 1}</h1>
                <h2 className="font-bold text-white">{steps[i]}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const steps = ["YOUR INFO", "SELECT PLAN", "ADD ONS", "SUMMARY"]

export default Navbar
