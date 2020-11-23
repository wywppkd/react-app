import React from 'react';
/**props类型 */
type AppleProps = {
  /**展示信息 */
  message: string;
};
/**state类型 */
type AppleState = {
  /**总数 */
  count: number;
};
/**
 * 类组件:
 * 一般不需使用修饰符: private, protected, public, readonly, static
 */

/**Apple组件 */
export default class Apple extends React.Component<AppleProps, AppleState> {
  /**使用 ref */
  refDiv = React.createRef<HTMLDivElement>();
  /**初始化 state */
  state: AppleState = {
    count: 0,
  };
  /**绑定事件函数并传参 */
  handleAdd(num: number) {
    this.setState({
      count: this.state.count + num,
    });
  }
  render() {
    return (
      <div>
        <div ref={this.refDiv}>
          <p>props.message: {this.props.message}</p>
          <p>state.count: {this.state.count}</p>
        </div>
        <button onClick={() => this.handleAdd(10)}>add</button>
      </div>
    );
  }
}
