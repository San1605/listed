import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

const data02 = [
    {
        "name": "Group A",
        "value": 2400
    },
    {
        "name": "Group B",
        "value": 4567
    },
    {
        "name": "Group C",
        "value": 1398
    },
    {
        "name": "Group D",
        "value": 9800
    },
    {
        "name": "Group E",
        "value": 3908
    },
    {
        "name": "Group F",
        "value": 4800
    }
];

const PieCharts = () => {
    return (
        <div className='flex  items-start h-[9rem] w-[12rem] min-w-0 shrink sm:shrink-0  sm:block'>
            <ResponsiveContainer >
            <PieChart >
                <Pie data={data02} dataKey="value" nameKey="name" cx={"50%"}
                    cy="50%" innerRadius={0} outerRadius={65}>

                    {
                        data02.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))
                        }
                </Pie>

            </PieChart>
           </ResponsiveContainer>
        </div>
    )
}

export default PieCharts
