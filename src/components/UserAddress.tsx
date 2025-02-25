"use client";
import Button from "./Button";
import AddressFormModal from "./AddressFormModal";
import { useState } from "react";

export type Address = {
  address_type: string;
  valid_from: string;
  post_code: string;
  city: string;
  country_code: string;
  street: string;
  building_number: string;
};

export type UserAddressProps = {
  addresses: Address[];
};

const UserAddress = ({ addresses }: UserAddressProps) => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const formatDate = (date: string) => {
    const parsedDate = new Date(date);
    return parsedDate.toLocaleDateString();
  };

  return (
    <div>
      {showCreateModal && (
        <AddressFormModal onClose={() => setShowCreateModal(false)} />
      )}
      {addresses.map((address, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow my-4">
          <div className="flex justify-between items-center pb-5">
            <h2 className="text-lg font-semibold text-gray-800">
              Address {index + 1}
            </h2>
            <Button
              variant="createButton"
              text="Create a new user address"
              onClick={() => setShowCreateModal(true)}
            />
          </div>
          <div>
            {Object.entries(address).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-bold">{key.toUpperCase()}:</span>
                <span>{key === "valid_from" ? formatDate(value) : value} </span>
              </div>
            ))}
            <div className="flex justify-end gap-2 pt-5">
              <Button variant="editButton" text="Edit" />
              <Button variant="deleteButton" text="Delete" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserAddress;
