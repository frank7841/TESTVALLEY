import React, { useEffect, useState } from 'react'
import PriceCard from './PriceCard'

function HotDeals() {
    const [getDiscountdata, setDiscountData] = useState([]);
    useEffect(()=>{
        const fetchdata= async()=>{
            try {
                const response = await fetch('https://api.testvalley.kr/collections?prearrangedDiscount')
                const data = await response.json();
                const filteredData = data.items.filter(
                    item => item.viewType === 'TILE' && item.type === 'SINGLE'
                );
                setDiscountData(filteredData)
                
            } catch (error) {
                
            }
        }
        fetchdata()

    },[])
    console.log(getDiscountdata)
  return (
    <div className="flex space-x-4">
            <PriceCard data={getDiscountdata}/>
    </div>
  )
}

export default HotDeals