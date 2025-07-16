import React,{useId} from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    currencyOptions=[],
    onCurrencyChange,
    selectCurrency='usd',
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const amtInputId= useId()
    return (
        <div className={`bg-gray-700 p-3 rounded-lg text-sm flex hover:bg-gray-500`}>
            <div className="w-1/2">
                <label  
                htmlFor={amtInputId}
                className="text-white/60 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amtInputId}
                    className="outline-none w-full bg-transparent py-1.5 text-white/60"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled = {amountDisabled}
                
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-white/60 mb-2 w-full">Currency Type</p>
                <select
                className="rounded-lg px-1 py-1 bg-gray-900 cursor-pointer outline-none text-white/60"
                value={selectCurrency}
                disabled={currencyDisabled}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) =>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
