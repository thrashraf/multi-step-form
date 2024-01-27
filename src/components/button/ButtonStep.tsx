type Props = {
  step: number
  currentStep: number
}

const ButtonStep = (props: Props) => {
  return (
    <button
      className={`${
        props.step - 1 === props.currentStep
          ? "bg-blue-300 text-white"
          : "bg-none text-white border-2 border-white"
      } w-10 h-10 rounded-full font-bold lg:w-14 lg:h-14 lg:text-xl`}>
      {props.step}
    </button>
  )
}

export default ButtonStep
