import React from 'react';
import { Input, Button } from 'antd';

function LoginPage() {
  return (
    <div>
      <h1>Đăng nhập</h1>
      <Input placeholder="Tài khoản" />
      <Input.Password placeholder="Mật khẩu" />
      <Button type="primary">Đăng nhập</Button>
    </div>
  );
}

export default LoginPage;