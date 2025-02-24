"use client";
import { useState, useEffect } from "react";
import { getUserAddressesPaginated, getUserAddressesCount } from "@/app/api/db";
import UserPagination from "./UserPagination";
import UserAddress, { Address } from "./UserAddress";
import Button from "./Button";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

type UserListProps = {
  users: User[];
  page: number;
  totalPages: number;
};

const UserList = ({ users, page, totalPages }: UserListProps) => {
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [userAddresses, setUserAddresses] = useState<Address[] | null>(null);
  const [addressPage, setAddressPage] = useState<number>(1);
  const [totalAddressPages, setTotalAddressPages] = useState<number>(1);

  const perPage = 1;

  useEffect(() => {
    if (selectedUserId !== null) {
      const fetchAddresses = async () => {
        const addresses = await getUserAddressesPaginated(
          selectedUserId,
          addressPage,
          perPage
        );
        setUserAddresses(addresses);

        const totalAddresses = await getUserAddressesCount(selectedUserId);
        setTotalAddressPages(Math.ceil(totalAddresses / perPage));
      };

      fetchAddresses();
    }
  }, [selectedUserId, addressPage]);

  const handleUserClick = (userId: number) => {
    if (selectedUserId === userId) {
      setSelectedUserId(null);
      setUserAddresses(null);
    } else {
      setSelectedUserId(userId);
      setAddressPage(1);
    }
  };

  return (
    <div className="flex justify-center flex-col items-center min-h-screen bg-gray-100 py-14">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Users List
        </h1>

        <div className="flex justify-end mb-6">
          <Button variant="createButton" text="Create a new user" />
        </div>

        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow cursor-pointer"
              onClick={() => handleUserClick(user.id)}
            >
              <div className="text-lg font-medium text-gray-700">
                {user.first_name} {user.last_name}
              </div>

              <div className="space-x-2">
                <Button variant="editButton" text="Edit" />
                <Button variant="deleteButton" text="Delete" />
              </div>
            </li>
          ))}
        </ul>
        {selectedUserId && userAddresses && (
          <>
            <UserAddress addresses={userAddresses} />
            <UserPagination
              currentPage={addressPage}
              totalPages={totalAddressPages}
              onPageChange={setAddressPage}
            />
          </>
        )}
      </div>
      <UserPagination currentPage={page} totalPages={totalPages} />
    </div>
  );
};

export default UserList;
