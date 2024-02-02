"use client"
import CarouselBarner from "@/components/CarouselBarner";
import HotDeals from "@/components/HotDeals";
import ShortCuts from "@/components/ShortCuts";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [carouselData, setCarouselData] = useState([]);
  useEffect(()=>{

    const fetchData = async ()=>{
      try {
        const response = await fetch('https://api.testvalley.kr/main-banner/all');
        const data = await response.json();
        setCarouselData(data)
        
      } catch (error) {
        console.error("Error fetching Data", error)
        
      }
    };

    fetchData();
  },[])



  return (
    <main className="mt-20">
      <CarouselBarner data={carouselData}/>  
      <div className=" mt-4  justify-center">
        <ShortCuts/>
        <HotDeals/>
        
      </div>    

    </main>
  );
}
