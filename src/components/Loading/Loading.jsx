import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import laodingImg from "../../assets/1.png";
import './laoding.css'; // Import the custom CSS file

const Loading = () => {
  return (
    <div className='h-screen bg-black flex flex-col items-center justify-center'>
      <img
        src={laodingImg}
        className='rounded-full h-[200px] w-[200px] rotate-twice'
      />
      <p className="text-white text-center text-lg md:text-3xl font-bold mb-4">
        Loading into DevAshura's Portfolio...
      </p>
      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: 'grey.900' }} />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    </div>
  );
};

export default Loading;
