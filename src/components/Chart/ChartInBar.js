import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import chartData from '../utilities/chartData';

const ChartInBar = () => {
    const data = chartData()
    return (
        <div  >
            <div>
                <h1 className='text-4xl font-bold my-5  text-center text-[#7B68EE]'>
                    Monthly Wise Sell
                </h1>

            </div>

            <div className='flex justify-center'>
                <ResponsiveContainer width='98%' height={300}>
                    <BarChart
                        width={630}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="sell" fill="#7B68EE" />

                    </BarChart>
                </ResponsiveContainer>
            </div>


        </div>
    );
};

export default ChartInBar;