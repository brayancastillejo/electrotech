import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerDTO } from "../interfaces/registerDTO";
import { signup } from "../api/auth";
import { Link } from "react-router-dom";

export default function Register() {
  // router-dom

  const navigate = useNavigate();

  // states
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // hooks

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // function - OnSubmit

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmpassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const form: registerDTO = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      await signup(form);

      navigate("/login");
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
  });

  return (
    <form
      action=""
      method="post"
      className="flex flex-col gap-4 rounded-lg bg-neutral-200 p-4 dark:bg-neutral-800 dark:text-white"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          placeholder="Daniel Smith"
          className="w-64 rounded-md bg-neutral-300 px-2 py-1 md:w-80 dark:bg-neutral-700"
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
          className="w-64 rounded-md bg-neutral-300 px-2 py-1 md:w-80 dark:bg-neutral-700"
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
          className="w-64 rounded-md bg-neutral-300 px-2 py-1 md:w-80 dark:bg-neutral-700"
          {...register("password", {
            required: true,
            minLength: {
              value: 7,
              message: "Password must have at least 7 characters",
            },
          })}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirm-password">Confirm password: </label>
        <input
          type="password"
          id="confirm-password"
          placeholder="••••••••"
          className="w-64 rounded-md bg-neutral-300 px-2 py-1 md:w-80 dark:bg-neutral-700"
          {...register("confirmpassword", { required: true })}
        />
      </div>
      <Link to="/login" className="text-xs text-primary underline">
        Login
      </Link>

      {errors.password && typeof errors.password.message === "string" && (
        <span className="text-center text-sm text-red-500">
          {errors.password.message}
        </span>
      )}

      {error && (
        <div>
          <p className="text-center font-semibold text-red-600">{error}</p>
        </div>
      )}

      <button
        type="submit"
        className="w-64 rounded-md bg-primary px-2 py-1 text-white md:w-80"
      >
        Register
      </button>
    </form>
  );
}
