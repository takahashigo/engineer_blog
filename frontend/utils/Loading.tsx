import { Loader } from '@mantine/core';
import React from 'react';

const Loading = () => {
  return (
    <div className="mt-12 flex justify-center">
      <Loader color="red" variant="bars" />
    </div>
  );
};

export default Loading;
