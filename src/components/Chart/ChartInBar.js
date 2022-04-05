import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import chartData from '../utilities/chartData';

const ChartInBar = () => {
    const data = chartData()
    return (
        <div className='md:shadow lg:shadow-lg lg:ml-5  my-8 md:ml-5' >
            <div>
                <h1 className='text-4xl font-bold  text-center my-8 text-[#7B68EE]'>
                    Monthly Wise Sell
                </h1>

            </div>

            <div className='flex justify-center'>
                <ResponsiveContainer width='100%' height={400}
                    margin={{
                        top: 20,
                        bottom: 5,
                    }}
                >
                    <BarChart
                        width={580}
                        height={350}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
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