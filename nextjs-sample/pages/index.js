import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <div>HomePage</div>
      <div>
        <Link href='news/dynamic-page1'>Dynamic-Page1</Link>
      </div>
    </>
  );
};

export default HomePage;
