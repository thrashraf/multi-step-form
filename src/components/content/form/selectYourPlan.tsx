import { useState } from "react"
import { FieldErrors, Control, Controller } from "react-hook-form"
import Error from "../../error"
import { FormValues } from "../../../hooks/useForm"

type Props = {
  control: Control<FormValues>
  errors: FieldErrors
}

const SelectYourPlan = (props: Props) => {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "yearly">(
    "monthly"
  )

  const plans = [
    {
      title: "Arcade",
      price: {
        monthly: "$9/mo",
        yearly: "$90/yr",
      },
      discount: "2 months free",
      icon: "/assets/images/icon-arcade.svg",
    },
    {
      title: "Advance",
      price: {
        monthly: "$12/mo",
        yearly: "$120/yr",
      },
      discount: "2 months free",
      icon: "/assets/images/icon-advanced.svg",
    },
    {
      title: "Pro",
      price: {
        monthly: "$15/mo",
        yearly: "$150/yr",
      },
      discount: "2 months free",
      icon: "/assets/images/icon-pro.svg",
    },
  ]

  const [selectedBox, setSelectedBox] = useState<number | null>(null)

  return (
    <>
      <div className="flex flex-col gap-4">
        {plans.map((plan, index) => (
          <Controller
            control={props.control}
            name={`plan`}
            rules={{ required: "A plan is required" }}
            render={({ field }) => (
              <div
                className={`flex gap-5 pl-5 p-2 rounded-xl hover:border-purple-500 hover:border ${
                  selectedBox === index && "border-purple-500 border-2"
                }`}
                key={index}
                onClick={() => {
                  setSelectedBox(index)
                  field.onChange(plan)
                }}>
                <img src={plan.icon} alt="plan" width={40} height={40} />
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold">{plan.title}</h1>
                  <h3 className="font-semibold text-gray-400">
                    {plan.price[selectedPlan]}
                  </h3>
                  <p className="text-sm">{plan.discount}</p>
                </div>
              </div>
            )}
          />
        ))}
        {props.errors.plan && <Error />}
      </div>
      <div className="mt-8 flex justify-center items-center gap-5 bg-blue-50 rounded-xl mx-5 p-1">
        <label htmlFor="terms" className="ml-2">
          <span className="text-blue-800 font-semibold">Monthly</span>
        </label>
        <input
          type="checkbox"
          id="terms"
          className="hidden"
          onChange={(e) => {
            setSelectedPlan(e.target.checked ? "yearly" : "monthly")
          }}
        />
        <label
          htmlFor="terms"
          className={`ml-2 cursor-pointer relative inline-block w-8 h-4 rounded-full ${
            selectedPlan === "yearly" ? "bg-blue-400" : "bg-gray-400"
          }`}>
          <span
            className="checkbox-mark absolute left-0 top-0 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out"
            style={{
              transform:
                selectedPlan === "yearly"
                  ? "translateX(100%)"
                  : "translateX(0)",
            }}></span>
        </label>
        <label htmlFor="terms" className="ml-2">
          <span className="text-blue-800 font-semibold">Yearly</span>
        </label>
      </div>
    </>
  )
}

export default SelectYourPlan
