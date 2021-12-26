---
group:
  title: 函数
  path: /function
title: throttle 节流
---

## 用法

```js | pure
import { throttle } from 'lodash-wechat';
throttle(func, [(wait = 0)], [(options = {})]);
```

## 使用示例

```tsx
import React, { useCallback, useState, useRef } from 'react';
import { Input, Typography, Divider } from 'antd';
import { throttle } from 'lodash-wechat';

export default () => {
  const [value, setValue] = useState<string>('');
  const searchTime = useRef<string>(Date());
  const handleSearch = useCallback(
    throttle((inputValue: string) => {
      setValue(inputValue);
      searchTime.current = Date();
    }, 200),
    [],
  );
  return (
    <Typography>
      <Input
        placeholder="这是一个带有节流的搜索框"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Divider />
      <Typography.Paragraph>当前搜索值: {value}</Typography.Paragraph>
      <Typography.Paragraph>当前搜索时间: {searchTime.current}</Typography.Paragraph>
    </Typography>
  );
};
```
