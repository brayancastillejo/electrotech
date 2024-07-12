import { useForm } from "react-hook-form";
import { login } from "../api/auth";
import { useState } from "react";
import { loginDTO } from "../interfaces/loginDTO";
import { useNavigate } from "react-router-dom";

export default function Login() {

  // router-dom

  const navigate = useNavigate();

  // states

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // hooks

  const { register, handleSubmit } = useForm();


  // function - OnSubmit

  const onSubmit = handleSubmit(async data => {

    try {

    const form: loginDTO = {
      email: data.email,
      password: data.password
    }

    const response = await login(form);

    if(response){
      localStorage.setItem("token", response.accessToken);
      navigate("/")
    }

    }catch(error){
      
      if (typeof error === "object" && error !== null && "response" in error) {
        const err = error as { response: { status: number } };
        if (err.response.status === 401) {
          setError("Invalid credentials");
        }
        if (err.response.status === 404) {
          setError("User doesn't exist");
        }
      } else {
        console.error("Unexpected error:", error);
      }

    }

  })


  return (
    <form
      onSubmit={onSubmit}
      action=""
      method="post"
      className="bg-neutral-200 flex flex-col gap-4 rounded-lg p-4"
    >
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
          {...register("password", { required: true })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && 
      <div>
        <p className="text-red-500 font-semibold text-center">{error}</p>
      </div>
      }


      <button
        type="submit"
        className="bg-primary text-white mt-6 w-64 rounded-md px-2 py-1 md:w-80"
      >
        Login
      </button>


    </form>
  );
}
