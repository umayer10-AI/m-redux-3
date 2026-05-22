import Counter from '@/component/Counter';
import Display from '@/component/Display';
import Naming from '@/component/Naming';
import React from 'react';

const page = () => {
  return (
    <div>
      <Counter></Counter>
      <Display></Display>
      <Naming></Naming>
    </div>
  );
};

export default page;