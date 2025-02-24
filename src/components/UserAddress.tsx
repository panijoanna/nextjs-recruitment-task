"use client";

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
  const formatDate = (date: string) => {
    const parsedDate = new Date(date);
    return parsedDate.toLocaleDateString();
  };

  return (
    <div>
      {addresses.map((address, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg shadow my-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Address {index + 1}
          </h2>
          <div>
            {Object.entries(address).map(([key, value]) => (
              <div key={key} className="flex justify-between">
                <span className="font-bold">{key.toUpperCase()}:</span>
                <span>{key === "valid_from" ? formatDate(value) : value} </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserAddress;
