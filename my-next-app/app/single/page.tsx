// pages/index.js 或其他组件文件
import React from 'react';
import RadioButton from '../components/RadioButton';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const MyPage = () => {
  return (
    <div>
      <h1>Choose an option</h1>
      <RadioButton options={options} name="myOptions" />
    </div>
  );
};

export default MyPage;