import React, { useEffect, useState } from 'react'
import { ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
import { pdata } from '../utils/constants';

const ChartBox = () => {
    const [data,setData]=useState(pdata);

    // const getData=async()=>{
    //     const data=await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY&symbol=IBM&apikey=1F9XEOFY85A7P8NM");
    //     const json=await data.json();
    //     // setData(json[1])
    //     const arr=Object.values(json)
    //     const obj=Object.values(arr[1])
    //     console.log(arr) 
    // }
    // useEffect(()=>{
    //     getData()
    // },[])
  return (
    <div className=' flex border border-black sm:h-[20.5rem] sm:w-[66.5rem] h-[30rem] w-[20rem]  bg-white  rounded-2xl p-4 mb-4 items-center overflow-auto'>
        <ResponsiveContainer>

       <LineChart width={400} height={300} data={data}>
    <XAxis dataKey="name"/>
    <YAxis/>
    <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
    <Legend/>
    <Tooltip/>

    <Line type="monotone" dataKey="student" stroke="#c90711" activeDot={{r:8}}/>
    <Line type="monotone" dataKey="fees" stroke="#82ca9d" activeDot={{r:8}}/>
   </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default ChartBox
