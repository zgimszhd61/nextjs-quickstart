// // app/a/page.tsx
// import Link from 'next/link';
// import React from 'react';
// import Image from 'next/image';


// const PageA = () => {
//   return (
//     <div>
//       <h1>Page A</h1>
//       <Image
//         src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png"
//         alt="Baidu Logo"
//         width={500} // 这里的值可以根据你的需要进行调整
//         height={300} // 这里的值可以根据你的需要进行调整
//       />
//       <Link href="/bbb">Home</Link>

//     </div>
    
//   );
// };

// export default PageA;

// pages/aaa.tsx
'use client';
// pages/aaa.tsx
import React, { useState, useEffect } from 'react';

const AaaPage = () => {
  // 创建一个函数来获取存储在localStorage中的计数值
  const getInitialCount = () => {
    const savedCount = localStorage.getItem('counter');
    return savedCount ? parseInt(savedCount, 10) : 0;
  };

  // 使用useState钩子和getInitialCount函数来初始化计数器状态
  const [count, setCount] = useState(getInitialCount);

  // 使用useEffect钩子在计数器状态变化时更新本地存储的值
  useEffect(() => {
    localStorage.setItem('counter', count.toString());
  }, [count]);

  // 增加计数的函数
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // 重置计数的函数
  const resetCount = () => {
    setCount(0);
  };

  // 页面内容
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>计数器: {count}</h1>
      <button onClick={incrementCount} style={{ marginRight: '10px' }}>加一</button>
      <button onClick={resetCount}>归零</button>
    </div>
  );
};

export default AaaPage;
