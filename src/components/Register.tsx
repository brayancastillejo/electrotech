export default function Register() {
  return (
    <form
      action=""
      method="post"
      className="bg-neutral-200 flex flex-col gap-4 rounded-lg p-4"
    >
      <div className="flex flex-col">
        <label htmlFor="username">Name: </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Daniel Smith"
          className="bg-neutral-300 w-64 rounded-md px-2 py-1 md:w-80"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="daniel@gmail.com"
          className="bg-neutral-300 w-64 rounded-md px-2 py-1 md:w-80"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-neutral-300 w-64 rounded-md px-2 py-1 md:w-80"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="confirm-password">Confirm password: </label>
        <input
          type="password"
          name="password"
          id="confirm-password"
          placeholder="••••••••"
          className="bg-neutral-300 w-64 rounded-md px-2 py-1 md:w-80"
        />
      </div>
      <button
        type="submit"
        className="bg-primary text-white mt-6 w-64 rounded-md px-2 py-1 md:w-80"
      >
        Register
      </button>
    </form>
  );
}
