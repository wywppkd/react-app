/**接口响应基础数据类型 */
export type Result<T> = {
  /**错误码 */
  errcode: number;
  /**错误信息 */
  errmsg: string;
  /**业务处理正常 */
  success: boolean;
  /**业务数据 */
  data: T;
};
