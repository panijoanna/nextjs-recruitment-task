"use client";
import { useRouter } from "next/navigation";

type User = {
  id: number;
  first_name: string;
  last_name: string;
};

type UserListProps = {
  users: User[];
  currentPage: number;
  hasNextPage: boolean;
};

const UserList = ({ users, currentPage, hasNextPage }: UserListProps) => {
  const router = useRouter();

  const handleNextPage = () => {
    if (hasNextPage) {
      router.push(`/users?page=${currentPage + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push(`/users?page=${currentPage - 1}`);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-gray-100 py-14">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Users List
        </h1>

        <div className="flex justify-end mb-6">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all">
            Create a new user
          </button>
        </div>

        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow"
            >
              <div className="text-lg font-medium text-gray-700">
                {user.first_name} {user.last_name}
              </div>

              <div className="space-x-2">
                <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition-all">
                  Edit
                </button>
                <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-all">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-6">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-6 py-1 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 transition-all ${
            currentPage === 1
              ? "bg-slate-300"
              : "bg-gray-800 hover:bg-gray-700 focus:ring-blue-500"
          }`}
        >
          Previous
        </button>
        <span className="text-lg text-gray-800 font-medium">{currentPage}</span>
        <button
          onClick={handleNextPage}
          disabled={!hasNextPage}
          className={`px-6 py-1 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 transition-all ${
            !hasNextPage
              ? "bg-slate-300"
              : "bg-gray-800 hover:bg-gray-700 focus:ring-blue-500"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
