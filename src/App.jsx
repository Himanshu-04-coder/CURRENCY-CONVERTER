import {useState} from 'react';
import {InputBox} from './components';
import useCurrencyInfo from './customHooks/useCurrencyInfo'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('usd')
    const [to, setTo] = useState('inr')
    const [convertedAmt, setConvertedAmt] = useState(0)

    const currencyInfo = useCurrencyInfo(from)
    const currencyOpt = Object.keys(currencyInfo)

    const swap = () =>{
        setAmount(convertedAmt)
        setConvertedAmt(amount)
        setFrom(to)
        setTo(from)
    }
    
    const conversion = () => {
      setConvertedAmt(amount * currencyInfo[to])
    }
    return (
        <div
            className="w-full h-screen flex flex-wrap object-fit items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2019/12/13/09/46/umbrella-4692572_1280.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm text-white"
                >
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            conversion()
                        }}
                    className='bg-gray-800 rounded-lg'
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                onAmountChange = {(amount) => setAmount(amount)} 
                                currencyOptions = {currencyOpt}
                                onCurrencyChange = {(currency)=> setFrom(currency)}
                                selectCurrency = {from} 
                            
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white/60 rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-800"
                                onClick={swap}
                            
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {convertedAmt}
                                currencyOptions = {currencyOpt}
                                onCurrencyChange = {(currency) => setTo(currency)}
                                selectCurrency = {to}
                                amountDisabled
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-800">
                            Convert ${from.toUpperCase()} to ${to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App