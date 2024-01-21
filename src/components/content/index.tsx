import PersonalInfo from "./form/personalInfo"
import SelectYourPlan from "./form/selectYourPlan"

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
    <div className="relative lg:w-full lg:h-screen">
      <div className="left-2 right-2 flex -top-5 absolute bg-white mx-4 rounded-xl py-7 px-3 lg:block lg:w-full lg:h-full">
        <div className="flex flex-col gap-2 text-start w-full h-full m-auto justify-center">
          <h1 className="font-bold text-xl">{forms[props.step].title}</h1>
          <h3 className="text-lg text-slate-400">
            {forms[props.step].description}
          </h3>
          <div className="mt-5">
            {/* <PersonalInfo /> */}
            <SelectYourPlan />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
