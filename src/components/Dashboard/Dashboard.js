import React from 'react';
import ChartInLine from '../Chart/ChartInLine';
import ChartInBar from '../Chart/ChartInBar';
const Dashboard = () => {
    return (
        <div className='lg:container md:container mx-auto flex lg:flex-row lg:justify-between md:flex-col md:justify-center sm:flex-col sm:justify-center flex-col justify-center'>
            <ChartInLine></ChartInLine>
            <ChartInBar></ChartInBar>
        </div>
    );
};

export default Dashboard;