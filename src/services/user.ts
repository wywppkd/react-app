import request from '../utils/request';
import { Result } from './ResultType';

/** 数据类型
 * -------------------------------------------------------------------------------- */

/**登录接口入参 */
type LoginRequest = {
  /**用户名 */
  username: string;
  /**密码 */
  password: string;
};

/**登录接口出参 */
type LoginResponse = {
  token: string;
};

/** 请求方法
 * -------------------------------------------------------------------------------- */

/**
 * 登录
 */
export const accountLogin = (data: LoginRequest): Promise<Result<LoginResponse>> => {
  return request.post({
    url: '/user/login',
    data,
  });
};

/**
 * 退出登录
 */
export const accountLogout = (): Promise<Result<null>> => {
  return request.post({
    url: '/user/logout',
  });
};
