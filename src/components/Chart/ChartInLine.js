import React from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import chartData from '../utilities/chartData';

const ChartInLine = () => {
    const data = chartData()
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center my-12'>
                    <span className='text-[#8884d8]'>Investment </span>
                    vs
                    <br />

                    <span className='text-[#00CED1] ml-4'>Revenue</span>
                </h1>
            </div>
            <div className='flex justify-center '>
                <ResponsiveContainer width='95%' height={300}>
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stroke="#00BFFF" fill="#00BFFF" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>


        </div >
    )
};

export default ChartInLine;