import React from 'react';
import Timer from './components/Timer/Timer';

const Home: React.FC = () => {
  return (
    <div className='grid place-content-center mx-auto p-4'>
      <h1 className='text-4xl text-center font-bold mb-4'>Pomodoro App</h1>
      <Timer name={'Timer'} count={1500} />
      <div className='columns-2 my-10'>
        <Timer name={'Short Break'} count={300} />
        <Timer name={'Break'} count={900} />
      </div>
    </div>
  );
};

export default Home;
