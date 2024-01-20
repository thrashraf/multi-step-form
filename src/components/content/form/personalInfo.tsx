import React, { useContext } from "react"
import { FormContext } from "../../../formContext"

const PersonalInfo = () => {
  const formContext = useContext(FormContext)

  if (!formContext) {
    return null
  }

  const {
    register,
    formState: { errors },
  } = formContext

  return (
    <form>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="personal-input"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <span>This field is required</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="personal-input"
            {...register("email", { required: true })}
          />
          {errors.email && <span>This field is required</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            className="personal-input"
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && <span>This field is required</span>}
        </div>
      </div>
    </form>
  )
}

export default PersonalInfo
