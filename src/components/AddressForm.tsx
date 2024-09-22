import React from 'react';
import { MapPinLine } from 'phosphor-react';

interface AddressFormProps {
  formData: {
    cep: string;
    street: string;
    number: string;
    complement: string;
    name: string;
    city: string;
    uf: string;
    paymentMethod: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    cep: string;
    street: string;
    number: string;
    complement: string;
    name: string;
    city: string;
    uf: string;
    paymentMethod: string;
  }>>;
}

const AddressForm: React.FC<AddressFormProps> = ({ formData, setFormData }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="bg-baseCard p-10 flex flex-col gap-8 rounded-md">
      <article>
        <div className="flex gap-2">
          <MapPinLine size={22} color="#C47F17" weight="regular" />
          <div>
            <h2 className="text-base text-baseSubtitle">Delivery address</h2>
            <span className="text-sm text-baseText">Enter the address where you want to receive your order</span>
          </div>
        </div>
      </article>
      <article className="flex flex-col gap-4">
        <input
          className="p-3 bg-baseButton rounded h-11 w-1/3 placeholder:text-sm"
          type="text"
          placeholder="CEP"
          name="cep"
          value={formData.cep}
          onChange={handleInputChange}
        />
        <input
          className="p-3 bg-baseButton rounded h-11 w-full placeholder:text-sm"
          type="text"
          placeholder="Street"
          name="street"
          value={formData.street}
          onChange={handleInputChange}
        />
        <div className="flex gap-4">
          <input
            className="p-3 bg-baseButton rounded h-11 w-1/3 placeholder:text-sm"
            type="text"
            placeholder="Number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
          />
          <input
            className="p-3 bg-baseButton rounded h-11 w-2/3 placeholder:text-sm"
            type="text"
            placeholder="Complement"
            name="complement"
            value={formData.complement}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex gap-4">
          <input
            className="p-3 bg-baseButton rounded h-11 w-1/3 placeholder:text-sm"
            type="text"
            placeholder="street"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className="p-3 bg-baseButton rounded h-11 w-1/2 placeholder:text-sm"
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
          <input
            className="p-3 bg-baseButton rounded h-11 w-[15%] placeholder:text-sm"
            type="text"
            placeholder="UF"
            name="uf"
            value={formData.uf}
            onChange={handleInputChange}
          />
        </div>
      </article>
    </div>
  );
};

export default AddressForm;
