import React from 'react';
import ChartInLine from '../Chart/ChartInLine';
import ChartInBar from '../Chart/ChartInBar';
const Dashboard = () => {
    return (
        <div className=' grid md:grid-cols-1 lg:grid-cols-2  sm:grid-cols-1 mx-auto '>
            <ChartInLine></ChartInLine>
            <ChartInBar></ChartInBar>
        </div>
    );
};

export default Dashboard;