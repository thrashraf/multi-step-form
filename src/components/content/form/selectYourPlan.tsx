import React, { useContext } from "react"
import { FormContext } from "../../../formContext"

const SelectYourPlan = () => {
  const formContext = useContext(FormContext)

  if (!formContext) {
    return null
  }

  const {
    register,
    formState: { errors },
  } = formContext

  const plans = [
    {
      title: "Arcade",
      price: "$90/yr",
      discount: "2 months free",
      icon: "/assets/images/icon-arcade.svg",
    },
    {
      title: "Advance",
      price: "$120/yr",
      discount: "2 months free",
      icon: "/assets/images/icon-advanced.svg",
    },
    {
      title: "Pro",
      price: "$150/yr",
      discount: "2 months free",
      icon: "/assets/images/icon-pro.svg",
    },
  ]

  return (
    <form>
      <div className="flex flex-col gap-4">
        {plans.map((plan, index) => (
          <div
            className="flex gap-5 pl-5 p-2 rounded-xl hover:border-purple-500 hover:border"
            key={index}>
            <img src={plan.icon} alt="plan" width={40} height={40} />
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">{plan.title}</h1>
              <h3 className="font-semibold text-gray-400">{plan.price}</h3>
              <p className="text-sm">{plan.discount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center items-center gap-5 bg-blue-50 rounded-xl mx-5 p-1">
        <label htmlFor="terms" className="ml-2">
          <span className="text-blue-800 font-semibold">Monthly</span>
        </label>
        <input
          type="checkbox"
          id="terms"
          {...register("terms", { required: true })}
          className="hidden" // Hide the actual checkbox
        />
        <label
          htmlFor="terms"
          className="ml-2 cursor-pointer relative inline-block w-8 h-4 bg-gray-400 rounded-full">
          <span className="checkbox-mark absolute left-0 top-0 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out transform translate-x-0"></span>
        </label>
        <label htmlFor="terms" className="ml-2">
          <span className="text-blue-800 font-semibold">Yearly</span>
        </label>
      </div>
    </form>
  )
}

export default SelectYourPlan
