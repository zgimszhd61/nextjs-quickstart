// pages/ddd.tsx
'use client'; // 添加这行
import React, { useEffect } from 'react';

const DddPage: React.FC = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        console.log('YES');
        event.preventDefault(); // 阻止默认行为，例如浏览器的查找功能
      }
    };

    // 添加事件监听器
    document.addEventListener('keydown', handleKeyDown);

    // 组件卸载时清理事件监听器
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>DDD Page</h1>
    </div>
  );
};

export default DddPage;