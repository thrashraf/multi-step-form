import { FieldErrors, UseFormRegister } from "react-hook-form"
import Error from "../../error"
import { FormValues } from "../../../hooks/useForm"

type Props = {
  register: UseFormRegister<FormValues>
  errors: FieldErrors
}

const PersonalInfo = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="name"
            className="personal-input active:bg-white"
            {...props.register("name", { required: true })}
          />
          {props.errors.name && <Error />}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="personal-input"
            {...props.register("email", { required: true })}
          />
          {props.errors.email && <Error />}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            className="personal-input"
            {...props.register("phoneNumber", { required: true })}
          />
          {props.errors.phoneNumber && <Error />}
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo
