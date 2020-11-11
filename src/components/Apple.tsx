import React from 'react';
import { accountLogin, accountLogout } from '../services/user';

const Apple = () => {
  /**登录 */
  const handleLogin = async () => {
    try {
      const res = await accountLogin({ username: 'lisa', password: '123456' });
      console.log('handleLogin -> res', res);
    } catch (error) {
      console.log('handleLogin -> error', error);
    }
  };

  /**退出登录 */
  const handleLogout = async () => {
    try {
      const res = await accountLogout();
      console.log('handleLogout -> res', res);
    } catch (error) {
      console.log('handleLogout -> error', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleLogin()}>登录</button>
      <button onClick={() => handleLogout()}>退出登录</button>
    </div>
  );
};

export default Apple;
