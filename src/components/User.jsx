function User({ id, name, username, email, setUsers }) {
  return (
    <div className="flex items-center gap-6 rounded-lg border border-[#00569c] bg-[#b1ffe6] px-3 py-2 text-sm">
      <span className="text-gray-400">#{id}</span>

      <div className="min-w-40">
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-gray-500">@{username}</p>
      </div>

      <p className="min-w-52 text-gray-600">{email}</p>

      <button
        onClick={() =>
          setUsers((users) => users.filter((user) => user.id !== id))
        }
        className="ml-auto rounded-lg px-3 py-1.5 text-[#ff2f2f] bg-[#ffe8d6] hover:bg-red-50 font-bold transition duration-300 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}

export default User;
