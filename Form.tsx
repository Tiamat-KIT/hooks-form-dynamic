import {useForm} from "react-hook-form"

export type InputType = {
  category: string
  label: string,
  type: string
}

function App({objectArray}: {objectArray: InputType[]}) {
  const {register,handleSubmit} = useForm()

  return (
    <>
      <form onSubmit={handleSubmit((res) => console.log(res))}>
        {
          objectArray.map((obj,i) => {
            return (
              <div key={i}>
                <label>{obj.label}</label>
                <input type={obj.type} {...register(obj.category)} />
              </div>
            )
          })
        }
      </form>
    </>
  );
}
