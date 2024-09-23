import React from 'react';
import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react';

interface PaymentFormProps {
  formData: {
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

const PaymentForm: React.FC<PaymentFormProps> = ({ formData, setFormData }) => {
    const handlePaymentMethodChange = (method: string) => {
        setFormData((prevState) => ({
            ...prevState,
            paymentMethod: method,
        }));
    };

  return (
    <div className="bg-baseCard p-10 flex flex-col gap-8 rounded-md">
      <div className="flex gap-2">
        <CurrencyDollar size={22} color="#8047F8" weight="regular" />
        <div>
          <h2 className="text-base text-baseSubtitle">Payment</h2>
          <span className="text-sm text-baseText">Payment is made on delivery. Choose the way you want to pay</span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <PaymentOption
          placeholder="Credit card"
          icon={<CreditCard size={22} color="#8047F8" weight="regular" />}
          onClick={() => handlePaymentMethodChange('Credit card')}
          selected={formData.paymentMethod === 'Credit card'}
        />
        <PaymentOption
          placeholder="Debit card"
          icon={<Bank size={22} color="#8047F8" weight="regular" />}
          onClick={() => handlePaymentMethodChange('Debit card')}
          selected={formData.paymentMethod === 'Debit card'}
        />
        <PaymentOption
          placeholder="Money"
          icon={<Money size={22} color="#8047F8" weight="regular" />}
          onClick={() => handlePaymentMethodChange('Money')}
          selected={formData.paymentMethod === 'Money'}
        />
      </div>
    </div>
  );
};
interface PaymentOptionProps {
  placeholder: string;
  icon: React.ReactNode;
  onClick: () => void;
  selected: boolean;
}
const PaymentOption: React.FC<PaymentOptionProps> = ({ placeholder, icon, onClick, selected }) => (
  <button
    className={`w-full flex items-center justify-center py-3 rounded-md cursor-pointer 
      ${selected ? 'bg-purplelight' : 'bg-baseButton'} 
      transition-colors duration-300`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2 text-sm uppercase">{placeholder}</span>
  </button>
);

export default PaymentForm;
