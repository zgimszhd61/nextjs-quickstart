// app/b/page.tsx
import React from 'react';
import Link from 'next/link';


const PageB = () => {
  return (
    <div>
      <h1>Page B</h1>
      <Link href="/bbb">Home</Link>
      <Link href="https://www.baidu.com" target="_blank" rel="noopener noreferrer">Home</Link>
    </div>
  );
};

export default PageB;