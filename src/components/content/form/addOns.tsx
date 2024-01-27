import React from "react"

const AddOns = () => {
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

  return (
    <form>
      <div className="flex flex-col gap-4">
        {plans.map((plan, index) => (
          <div
            className="flex gap-10 pl-5 p-2 rounded-xl hover:border-purple-500 hover:border justify-center items-center"
            key={index}>
            <input
              type="checkbox"
              id={plan.title}
              className="p-2 rounded-xl checked:bg-blue-800 bg-white"
            />
            <div className="flex flex-col gap-1 max-w-[200px]">
              <h1 className="font-bold">{plan.title}</h1>
              <h3 className="font-semibold text-gray-400">
                {plan.description}
              </h3>
            </div>
            <p className="text-sm">{plan.price}</p>
          </div>
        ))}
      </div>
    </form>
  )
}

export default AddOns
