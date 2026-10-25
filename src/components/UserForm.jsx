import { useForm } from "react-hook-form";

function UserForm({ users, setUsers }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data) {
    const newUser = {
      id: users.length + 1,
      ...data,
    };

    setUsers((users) => [...users, newUser]);
  }

  return (
    <form
      className="flex items-center gap-6 rounded-lg border border-[#00569c] bg-[#b1ffe6] px-3 py-2 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="flex flex-col gap-1.5">
        <span>Name</span>
        <input
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters",
            },
          })}
          className="rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[#00569c]"
          placeholder="Enter your name"
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-1.5">
        <span>Username</span>
        <input
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message:
                "Username must only contain letters, numbers, and underscores",
            },
          })}
          className="rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[#00569c]"
          placeholder="Enter your username"
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
      </label>

      <label className="flex flex-col gap-1.5">
        <span>Email</span>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^.+@.+\..+$/,
              message: "Enter a valid email address",
            },
          })}
          className="rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:border-[#00569c]"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <button
        type="submit"
        className="ml-auto rounded-lg bg-[#acffa8] px-3 py-1.5 font-bold text-[#1a7600] hover:bg-[#e9ffe8] transition duration-300 cursor-pointer"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
}

export default UserForm;
