import { useState } from "react";
import { logInSchema, LogInType } from "../../utils/validations/AdminSchema";

const Test = () => {
  // const loginSchema = z.object({
  //     email: z.string({
  //         required_error: "E-mail Is Required!"
  //     }).email("Must Be A Valid E-Mail Address!"),
  //     password: z.string({
  //         required_error: "Password Is Required!"
  //     }).min(8, "Password Must Be At Least 8 Characters Long!")
  // });

  // type Login = z.infer<typeof loginSchema>;

  const defaultValues: LogInType = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState<LogInType>(defaultValues);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const handleLogin = (event: React.FormEvent) => {
    // const validation = loginSchema.safeParse(values);
    // if (validation.error) {
    //     return alert(validation.error.errors[0].message);
    // }
    // alert("Log In Successfully!");

    event.preventDefault();

    const result = logInSchema.safeParse(values);

    if (result.error) {
      const errorMessages = result.error.flatten().fieldErrors;
      setErrors({
        email: errorMessages.email?.[0],
        password: errorMessages.password?.[0],
      });
    } else {
      setErrors({});
      setValues(defaultValues);
      alert("Logged In Successfully!");
    }
  };

  return (
    <>
      <div>
        <form className="flex flex-col">
          <input
            name="email"
            value={values.email}
            placeholder="E-mail Address"
            onChange={handleChange}
          />
          {errors.email && (
            <p className="font-poppins text-red-700">{errors.email}</p>
          )}
          <input
            name="password"
            type="password"
            value={values.password}
            placeholder="Password"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="font-poppins text-red-700">{errors.password}</p>
          )}
          <button onClick={handleLogin}>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Test;
