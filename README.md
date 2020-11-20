- [1. TypeScript](#1-typescript)
- [2. TypeScript 优点](#2-typescript-优点)
- [3. 先熟悉一些常用语法](#3-先熟悉一些常用语法)
  - [3.1. 定义变量](#31-定义变量)
  - [3.2. 定义函数](#32-定义函数)
  - [3.3. 类型推导](#33-类型推导)
  - [3.4. type 类型别名](#34-type-类型别名)
  - [3.5. 泛型](#35-泛型)
- [4. 初始化一个 React + TypeScript 项目](#4-初始化一个-react--typescript-项目)
- [5. 在 React 中使用 TS](#5-在-react-中使用-ts)
  - [5.1. 类组件](#51-类组件)
  - [5.2. 函数组件](#52-函数组件)
  - [5.3. React Hooks](#53-react-hooks)
  - [5.4. 发送请求](#54-发送请求)
- [6. 需要注意的地方](#6-需要注意的地方)
- [7. 相关资源](#7-相关资源)

## 1. TypeScript

- TypeScript 是 JavaScript 的一个超集，主要作用是为 js 增加了类型系统

## 2. TypeScript 优点

- 增强代码的可维护性: 丰富的代码提示, 编译阶段的类型检查
- 提升开发效率, 提升 coding 体验感
- ...

---

## 3. 先熟悉一些常用语法

> 常用语法: 定义变量, 定义函数, 类型推导, type 类型别名, 泛型...

### 3.1. 定义变量

- 常用数据类型: boolean, number, string, null, undefined, void, any, 联合类型, 数组

```ts
// 字符串类型
let username: string = "lisa"; // 字符串类型
username = 10; // 报错, 只能赋值字符串类型
username = "blue"; // ok

// any 类型
let username: any = "lisa";
username = 10; // ok
username = true; // ok

// 联合类型
let box: string | number;
box = "hello"; // ok
box = 10; // ok

// 数组
let arr: string[] = ["a", "b", "c"]; // 数组类型(成员类型必须是字符串)
```

### 3.2. 定义函数

```typescript
// 函数声明
function add(x: number, y: number): number {
  return x + y;
}

// 函数表达式
const myAdd = (x: number, y: number): number => {
  return x + y;
};
```

### 3.3. 类型推导

```ts
let username = "lisa"; // username 会被推导为 string
username = "blue"; //ok
username = 10; // 报错
```

### 3.4. type 类型别名

- 作用: 同 interface, 定义对象类型, 定义

```ts
// 给 string 类型起别名
type MyString = string;
let user: MyString = "hello";

// 给联合类型起别名
type Methods = "POST" | "GET" | "PUT" | "DELETE";
let method: Methods = "GET";

// 给对象类型起别名
type Props = {
  name: string;
  age: number;
  onClick: () => void;
};
let user: Props = {
  name: "lisa",
  age: 18,
  onClick() {
    console.log("hello");
  },
};
```

### 3.5. 泛型

- 适用: 定义函数, 接口, Type别名, 类...

```ts
// T: 约束了 getValue 函数的入参value的数据类型, 出参的数据类型
function getValue<T>(value: T): T {
  return value;
}

// 指定 number 类型
getValue<number>(100);
// 指定 string 类型
getValue<string>("hello");
```

---

## 4. 初始化一个 React + TypeScript 项目

```bash
$ npx create-react-app react-app --template typescript
```

- 配置文件

```js
// tsconfig.ts
{
  "compilerOptions": {
    "target": "es5", // 指定 ECMAScript 版本
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ], // 要包含在编译中的依赖库文件列表
    "allowJs": true, // 允许使用 js 文件
    "removeComments": false,// 是否将编译后的文件注释删掉
    "skipLibCheck": true, // 跳过所有声明文件的类型检查
    "esModuleInterop": true, // 禁用命名空间引用 (import * as fs from "fs") 启用 CJS/AMD/UMD 风格引用 (import fs from "fs")
    "allowSyntheticDefaultImports": true, // 允许从没有默认导出的模块进行默认导入
    "strict": true, // 启用所有严格类型检查选项
    "forceConsistentCasingInFileNames": true, // 不允许对同一个文件使用不一致格式的引用
    "module": "esnext", // 指定模块代码生成
    "moduleResolution": "node", // 使用 Node.js 风格解析模块
    "resolveJsonModule": true, // 允许使用 .json 扩展名导入的模块
    "noEmit": true, // 不输出(意思是不编译代码，只执行类型检查)
    "outDir": "lib",// 输出文件夹
    "jsx": "react", // 在.tsx文件中支持JSX
    "sourceMap": true, // 生成相应的.map文件
    "declaration": true, // 生成相应的.d.ts文件
    "noUnusedLocals": true, // 报告未使用的本地变量的错误
    "noUnusedParameters": true, // 报告未使用参数的错误
    "experimentalDecorators": true, // 启用对ES装饰器的实验性支持
    "incremental": true, // 通过从以前的编译中读取/写入信息到磁盘上的文件来启用增量编译
    "noFallthroughCasesInSwitch": true
  },
  "include": [
    "src/**/*" // *** TypeScript文件应该进行类型检查 ***
  ],
  "exclude": ["node_modules", "build"] // *** 不进行类型检查的文件 ***
}
```

## 5. 在 React 中使用 TS

### 5.1. 类组件

```ts
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
```

### 5.2. 函数组件

- 不推荐使用 `React.FC` 的理由: https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/

```tsx
import React from 'react';

/**props类型 */
type AppleProps = {
  /**展示信息 */
  message: string;
};

// const Apple: React.FC<AppleProps> = (props: AppleProps) => {
const Apple = (props: AppleProps) => {
  /**绑定事件函数 */
  const handleAdd = (num: number) => {
    console.log('handleAdd -> num', num);
  };

  return (
    <div>
      <div>props.message: {props.message}</div>
      <button onClick={() => handleAdd(10)}>add</button>
    </div>
  );
};

export default Apple;
```

### 5.3. React Hooks

```tsx
import React, { useRef, useState } from 'react';

/**props类型 */
type AppleProps = {
  /**展示信息 */
  message: string;
};

// const Apple: React.FC<AppleProps> = (props: AppleProps) => {
const Apple = (props: AppleProps) => {
  // 使用 useRef
  const refDiv = useRef<HTMLDivElement>(null);

  // 使用 useState
  const [count, setCount] = useState<number>(0); // 使用泛型进行类型注解
  // const [count, setCount] = useState(0); // 简写: 有初始值时, 可以借助类型推导
  // const [count, setCount] = useState<number | null>(null); // 联合类型时, 必须用泛型注解

  /**绑定事件函数 */
  const handleAdd = (num: number) => {
    console.log('handleAdd -> num', num);
    setCount((prev) => Number(prev) + num);
  };

  return (
    <div>
      <div ref={refDiv}>
        <p>props.message: {props.message}</p>
        <p>count: {count}</p>
      </div>
      <button onClick={() => handleAdd(10)}>add</button>
    </div>
  );
};

export default Apple;
```

```tsx
// 数据列表保存到 useState 中类型如何描述?
// [
//   {
//     id:1,
//     name: "lisa",
//     age: 18
//   },
//   {
//     id:2,
//     name: "blue",
//     age: 20
//   }
// ]

import React, { useState } from 'react';

/**用户类型 */
type User = {
  id: number;
  name: string;
  age: number;
};

const Apple = () => {
  // 用户列表
  const [userList, setUserList] = useState<User[]>([]);

  /**绑定事件函数 */
  const handleSetUserList = () => {
    setUserList([
      {
        id: 1,
        name: 'lisa',
        age: 18,
      },
      {
        id: 2,
        name: 'blue',
        age: 20,
      },
    ]);
  };

  return (
    <div>
      <button onClick={() => handleSetUserList()}>设置用户列表</button>
      <div>
        {userList.map((item) => {
          return (
            <p key={item.id}>
              name: {item.name}, age:{item.age}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Apple;
```

### 5.4. 发送请求

```tsx
// Apple.tsx
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
```

---

## 6. 需要注意的地方

- 注解方式 `/** */`
- 推荐使用 type 代替 interface: https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c
- 有些第三方库需要下载声明文件才能使用 TS 提示

```bash
$ yarn add lodash
$ yarn add @types/lodash -D
```

- 不要使用 defaultProps

  > 兼容问题: https://github.com/typescript-cheatsheets/react-typescript-cheatsheet/issues/87

  - 函数组件

  ```tsx
  import React from 'react';
  import App from '../App';

  type Props = {
    name?: string;
  };

  /**函数组件 */
  const Apple = ({ name = 'lisa' }: Props) => {
    // 参数解构时, 设置默认值
    return <div>{name}</div>;
  };

  export default Apple;
  ```

  - 类组件

  ```tsx
  import React from 'react';

  type Props = {
    name?: string;
  };

  /**类组件 */
  export default class Apple extends React.Component<Props> {
    render() {
      // 解构时设置默认值
      const { name = 'lisa' } = this.props;

      return <div>{name}</div>;
    }
  }
  ```

---

## 7. 相关资源

- 入门教程(阮一峰推荐): https://ts.xcatliu.com/introduction/index.html
- 官方文档: https://www.tslang.cn/docs/handbook/basic-types.html
- 在 React 中使用 TS: https://react-typescript-cheatsheet.netlify.app/docs/basic/setup
