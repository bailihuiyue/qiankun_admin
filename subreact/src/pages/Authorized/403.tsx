import { Button, Result } from 'antd';
import React from 'react';

const NoFoundPage: React.FC<{}> = () => (
  <div>
    <p>我是第二頁</p>
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you do not have permission."
      extra={<Button type="primary">Back</Button>}
    />
  </div>
);

export default NoFoundPage;
