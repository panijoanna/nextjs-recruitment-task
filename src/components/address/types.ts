export type AddressFormModalProps = {
  onClose: () => void;
  onSubmit: (address: Address) => void;
  initialAddress?: Address;
};

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
  onEditAddress: (updatedAddress: Address) => void;
};
