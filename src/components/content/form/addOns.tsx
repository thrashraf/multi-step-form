import { useState } from "react"
import Footer from "../../Footer"
import { Control, Controller, FieldErrors } from "react-hook-form"
import Error from "../../error"
import { FormValues } from "../../../hooks/useForm"

type Props = {
  control: Control<FormValues>
  errors: FieldErrors
}

const AddOns = (props: Props) => {
  const plans = [
    {
      title: "Online service",
      price: "$1/mo",
      description: "Access to multiplayer games",
    },
    {
      title: "Larger storage",
      price: "$2/mo",
      description: "Extra 1TB of cloud save",
    },
    {
      title: "Customizable profile",
      price: "$2/mo",
      description: "Custom theme on your profile",
    },
  ]

  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  return (
    <>
      <div className="flex flex-col gap-4">
        {plans.map((plan, index) => (
          <Controller
            control={props.control}
            name="addOns"
            rules={{ required: "A plan is required" }}
            render={({ field }) => (
              <div
                className={`flex gap-10 pl-5 p-2 rounded-xl hover:border-purple-500 hover:border  items-center lg:ml-10 ${
                  selectedPlan === index ? "border-purple-500 border" : ""
                }`}
                key={index}
                onClick={() => {
                  setSelectedPlan(index)
                  field.onChange(plan)
                }}>
                <div className="w-20 ">
                  <input
                    type="checkbox"
                    id={plan.title}
                    className="p-2 rounded-xl checked:bg-blue-800 bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1 lg:w-[300px]">
                  <h1 className="font-bold">{plan.title}</h1>
                  <h3 className="font-semibold text-gray-400">
                    {plan.description}
                  </h3>
                </div>
                <div className="w-20 flex justify-end">
                  <p className="text-sm">{plan.price}</p>
                </div>
              </div>
            )}
          />
        ))}
        {props.errors.addOns && <Error />}
        <Footer />
      </div>
    </>
  )
}

export default AddOns
