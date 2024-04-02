"use client";
import React, { useState } from 'react';

const GggPage = () => {
  // 使用useState管理username和password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // 处理表单提交
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // 阻止表单默认提交行为

    // 构建请求选项
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    };

    // 发送请求到后端
    try {
      const response = await fetch('http://localhost', requestOptions);
      const data = await response.json();
      console.log(data); // 处理响应数据
    } catch (error) {
      console.error('请求失败:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">用户名:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">密码:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">提交</button>
    </form>
  );
};

export default GggPage;
