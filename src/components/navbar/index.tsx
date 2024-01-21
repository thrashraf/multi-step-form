import ButtonStep from "../button/ButtonStep"

type Props = {
  step: number
  setStep: (step: number) => void
}
const Navbar = (props: Props) => {
  return (
    <div className="flex  lg:h-screen">
      <div className="bg-navbar-bg-mobile flex w-full h-36 bg-no-repeat bg-cover lg:hidden justify-center items-center gap-8">
        {Array.from(Array(4).keys()).map((step) => (
          <ButtonStep
            step={step + 1}
            currentStep={props.step}
            setStep={props.setStep}
            key={step}
          />
        ))}
      </div>
      <div className="hidden lg:block w-[400px] m-10 bg-navbar-bg-desktop bg-no-repeat bg-cover rounded-3xl">
        <div className="flex flex-col justify-center items-center gap-14 mt-20">
          {Array.from(Array(4).keys()).map((step) => (
            <div className="flex justify-center items-center gap-10">
              <div className="w-14">
                <ButtonStep
                  step={step + 1}
                  currentStep={1}
                  setStep={() => {}}
                  key={step}
                />
              </div>
              <div className="flex flex-col gap-1 text-start">
                <h1 className="text-gray-400">STEP {step + 1}</h1>
                <h2 className="font-bold text-white">{steps[step]}</h2>
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
