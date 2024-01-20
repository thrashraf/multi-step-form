import PersonalInfo from "./form/personalInfo"

type Props = {
  step: number
}

const Content = (props: Props) => {
  const forms = [
    {
      title: "Personal Info",
      description: "Please provide your name, email address and phone number.",
    },
    {
      title: "Select Plan",
      description: "You have the option of monthly or yearly billing.",
    },
    {
      title: "Picks Add Ons",
      description: "Add-ons help enhance your gaming experience.",
    },
    {
      title: "Finishing Up",
      description: "Double-check your everything looks OK before confirming.",
    },
  ]

  return (
    <div className="relative h-min">
      <div className="left-2 right-2 flex -top-5 absolute bg-white mx-4 lg:hidden rounded-xl py-7 px-3">
        <div className="flex flex-col gap-2 text-start">
          <h1 className="font-bold text-xl">{forms[props.step].title}</h1>
          <h3 className="text-lg text-slate-400">
            {forms[props.step].description}
          </h3>
          <div className="mt-5">
            <PersonalInfo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
