import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerDTO } from "../interfaces/registerDTO";
import { signup } from "../api/auth";

export default function Register() {

  // router-dom

  const navigate = useNavigate();

  // states
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // hooks

  const { register, handleSubmit, formState: {errors} } = useForm();


  // function - OnSubmit

  const onSubmit = handleSubmit(async data => {
      
      
      if( data.password !== data.confirmpassword ){
        setError("Passwords do not match");
        return;
      }

      try {
  
        const form : registerDTO = {
          name: data.name,
          email: data.email,
          password: data.password
        }
  
        await signup(form);
  
        navigate("/login")
        
  
      } catch (error) {
  
        if (typeof error === "object" && error !== null && "response" in error) {
          const err = error as { response: { status: number } };
          if (err.response.status === 401) {
            setError("User Already Exists");
          }
        } else {
          console.error("Unexpected error:", error);
        }
  
      }
  })

  return (
    <form
      action=""
      method="post"
      className="bg-neutral-200 flex flex-col gap-4 rounded-lg p-4"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Daniel Smith"
          className="bg-neutral-300 w-64 rounded-md px-2 py-1 md:w-80"
          {...register("name", { required: true })}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="daniel@gmail.com"
          className="bg-neutral-300 w-64 rounded-md px-2 py-1 md:w-80"
          {...register("email", { required: true })}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          className="bg-neutral-300 w-64 rounded-md px-2 py-1 md:w-80"
          {...register("password", { required: true,
            minLength: {
              value: 7,
              message: "Password must have at least 7 characters"
            }
           })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirm-password">Confirm password: </label>
        <input
          type="password"
          id="confirmpassword"
          placeholder="••••••••"
          className="bg-neutral-300 w-64 rounded-md px-2 py-1 md:w-80"
          {...register("confirmpassword", { required: true })}
        />
      </div>

      {errors.password && typeof errors.password.message === 'string' && (
        <span className="text-red-500 text-sm text-center">{errors.password.message}</span>
      )}

      {error && (
        <div>
          <p className="text-red-600 font-semibold text-center">{error}</p>
        </div>
      )}

      <button
        type="submit"
        className="bg-primary text-white mt-6 w-64 rounded-md px-2 py-1 md:w-80"
      >
        Register
      </button>
    </form>
  );
}
