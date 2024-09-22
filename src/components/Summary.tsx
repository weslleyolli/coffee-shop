import React from 'react';

interface SummaryProps {
    totalPrice: number;
}

const Summary: React.FC<SummaryProps> = ({ totalPrice }) => (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
                <span className="text-baseText text-sm">Total items</span>
                <span className="text-baseText text-base font-bold">R$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
                <span className="text-baseText text-sm">Delivery</span>
                <span className="text-baseText text-base font-bold">R$ 3.50</span>
            </div>
            <div className="flex justify-between">
                <h1 className="text-baseSubtitle text-xl font-bold">Total</h1>
                <h1 className="text-baseSubtitle text-xl font-bold">R$ {(totalPrice + 3.50).toFixed(2)}</h1>
            </div>
        </div>
    </div>
);

export default Summary;
