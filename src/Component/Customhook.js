 import { useEffect, useState } from "react";
 const useCurrenceyinfo = (currencey)=>{
    const [currenceyData,setCurrenceyData] = useState({})
    const data = async()=>{
        const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencey}.json`)
        const result = await response.json()
        setCurrenceyData(result[currencey])
    }
    useEffect(()=>{
        data();
    },[currencey])
    return currenceyData;
 }

export default useCurrenceyinfo