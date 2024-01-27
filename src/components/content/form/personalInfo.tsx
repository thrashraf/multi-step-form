import useFormJotai from "../../../hooks/useForm"
import Footer from "../../Footer"
import { SubmitHandler, useForm } from "react-hook-form"
import Error from "../../error"

type IPersonalInfo = {
  name: string
  email: string
  phoneNumber: string
}

const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IPersonalInfo>()

  const { handleSubmit: handleSubmitForm, form } = useFormJotai()

  const onFinish: SubmitHandler<IPersonalInfo> = (data: IPersonalInfo) => {
    return handleSubmitForm({
      ...form,
      name: data?.name,
      email: data.email,
      phoneNumber: data?.phoneNumber,
    })
  }

  return (
    <form onSubmit={handleSubmit(onFinish)}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="name"
            className="personal-input active:bg-white"
            {...register("name", { required: true })}
          />
          {errors.name && <Error />}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="personal-input"
            {...register("email", { required: true })}
          />
          {errors.email && <Error />}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="number"
            id="phoneNumber"
            className="personal-input"
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && <Error />}
        </div>
      </div>

      <Footer />
    </form>
  )
}

export default PersonalInfo
