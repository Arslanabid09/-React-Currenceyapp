import React from 'react'
import { useId } from 'react'

const Inputbox = ({
  lable,
  amount,
  currenceyChange,
  currenceyoptions=[],
  selectoption='usd',
  onAmountchange,
  className = "",


}) => {
  const amountInputId = useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
            <label htmlFor={amountInputId}  className="text-black/40 mb-2 inline-block">
                {lable}
            </label>
            <input
                id={amountInputId}
                className="outline-none w-full bg-transparent py-1.5"
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => onAmountchange && onAmountchange(Number(e.target.value))}
            />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                value={selectoption}
                onChange={(e) => currenceyChange && currenceyChange(e.target.value)}
            >
                
                    {currenceyoptions.map((currency) => (
                        <option key={currency} value={currency}>
                        {currency}
                        </option>
                    ))}
            
            </select>
        </div>
    </div>
);
}

export default Inputbox