import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import chartData from '../utilities/chartData';

const ChartInLine = () => {
    const data = chartData()
    return (
        <div className='md:shadow lg:shadow-lg '>
            <div>
                <h1 className='text-4xl font-bold text-center my-8'>
                    <span className='text-[#8884d8]'>Investment </span>
                    vs
                    <span className='text-[#00CED1] ml-4'>Revenue</span>
                </h1>
            </div>
            <div className='flex justify-center'>
                <ResponsiveContainer width='80%' height={400}
                    margin={{
                        top: 20,
                        bottom: 5,
                    }}
                >
                    <LineChart

                        width={580}
                        height={350}
                        data={data}
                        margin={{
                            top: 5,
                            bottom: 5,
                        }}>

                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Line type="monotone" dataKey="investment" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="revenue" stroke="#00CED1	" activeDot={{ r: 8 }} />

                    </LineChart>
                </ResponsiveContainer>
            </div>


        </div >
    )
};

export default ChartInLine;