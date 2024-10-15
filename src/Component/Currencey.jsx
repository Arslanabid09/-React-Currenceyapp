import React, { useState } from 'react'
import {Inputbox} from '../Component/'
import useCurrenceyinfo from '../Component/Customhook'
const Currencey = () => {
    const [amount,setAmount] = useState(null)
    const [from,setFrom] = useState('usd')
    const [to,setTo] = useState('pkr')
    const [convertedAmount,setConvertedamount] = useState(null)

    const currenceyinfo = useCurrenceyinfo(from)
    const option= Object.keys(currenceyinfo)

    const swap = ()=>{
        setFrom(to)
        setTo(from)
        setAmount(convertedAmount)
        setConvertedamount(amount)
    }
    const convert = ()=>{
     setConvertedamount(amount*currenceyinfo[to])
    }

    return (
        <>
        <div className=" w-full h-screen flex flex-wrap justify-center items-center bg-gradient-to-t from-blue-700 to-indigo-400/10 "
    
        >
    <form 

    onSubmit={(e)=>{
    e.preventDefault();
    convert()
    ;}
    }
    >
        
      <div className="w-full p-10  max-w-lg mx-auto h-fit  border border-white rounded-lg bg-slate-200">
            <div className='w-full'>
                <Inputbox 
                 lable="From"
                 amount={amount}
                 onAmountchange={(amount)=>setAmount(amount)}
                 currenceyChange={(currencey)=>setFrom(currencey)}
                 currenceyoptions={option}
                 selectoption={from}
                 />                
            </div>
            <div className=' relative h-1.5'>
                <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>Swap</button>
            </div>
            <div className='w-full'>
            <Inputbox 
                  lable="To"
                  amount={convertedAmount}
                  onAmountchange={(amount)=>setAmount(amount)}
                  currenceyChange={(currencey)=>setTo(currencey)}
                  currenceyoptions={option}
                  selectoption={to}
                 />
            </div>
            <button type='submit' className=' uppercase text-left px-2 mt-2 mx-28 h-10  w-48 rounded-md bg-black font-semibold text-white shadow-sm hover:bg-black/90 '>Convert {from} To {to}</button>
            
</div>

    </form>
      
        </div>
        </>
    )
}

export default Currencey