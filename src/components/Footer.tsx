import useFormJotai from "../hooks/useForm"
const Footer = () => {
  const { step, goBack } = useFormJotai()

  const Button = () => (
    <button
      className="bg-blue-800 p-2 rounded-lg text-white"
      onClick={() => {}}>
      Next Step
    </button>
  )

  return (
    <>
      <div className="w-full bg-white absolute bottom-0 flex justify-between px-5 py-3 lg:hidden">
        <button
          className={`${step === 0 ? "invisible" : "block"}`}
          onClick={goBack}>
          Go Back
        </button>
        <Button />
      </div>

      <div className="hidden lg:block absolute bottom-10 -right-5">
        <Button />
      </div>
    </>
  )
}

export default Footer
