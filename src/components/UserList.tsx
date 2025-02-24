"use client";
import UserPagination from "./UserPagination";

type User = {
  id: number;
  first_name: string;
  last_name: string;
};

type UserListProps = {
  users: User[];
  page: number;
  totalPages: number;
};

const UserList = ({ users, page, totalPages }: UserListProps) => {
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
      <UserPagination currentPage={page} totalPages={totalPages} />
    </div>
  );
};

export default UserList;
