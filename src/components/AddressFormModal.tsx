"use client";
import { useState } from "react";

type AddressFormModalProps = {
  onClose: () => void;
};

const AddressFormModal = ({ onClose }: AddressFormModalProps) => {
  const [address, setAddress] = useState({
    street: "",
    building_number: "",
    post_code: "",
    city: "",
    country_code: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col bg-gray-50 rounded-lg shadow-md p-8">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-2xl mb-4">Address form</h2>
          <span className="close cursor-pointer text-xl" onClick={onClose}>
            &times;
          </span>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            name="street"
            placeholder="Street..."
            required
            className="w-full p-2 border rounded"
            value={address.street}
            onChange={handleChange}
          />
          <input
            type="text"
            name="building_number"
            placeholder="Building number..."
            required
            className="w-full p-2 border rounded"
            value={address.building_number}
            onChange={handleChange}
          />
          <input
            type="text"
            name="post_code"
            placeholder="Post code..."
            required
            className="w-full p-2 border rounded"
            value={address.post_code}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City..."
            required
            className="w-full p-2 border rounded"
            value={address.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="country_code"
            placeholder="Country code..."
            required
            className="w-full p-2 border rounded"
            value={address.country_code}
            onChange={handleChange}
          />
          <div className="mt-4 p-4 border rounded bg-white shadow-sm">
            <p className="font-semibold">Address Preview:</p>
            <p>
              {address.street} {address.building_number}
            </p>
            <p>
              {address.post_code} {address.city}
            </p>
            <p>{address.country_code}</p>
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressFormModal;
