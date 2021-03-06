---
group:
  title: 函数
  path: /function
title: debounce 防抖动
---

## 用法

```js | pure
import { debounce } from 'lodash-wechat';
debounce(func, [wait=0], [options=])
```

## 使用示例

```tsx
import React, { useCallback, useState, useRef } from 'react';
import { Input, Typography, Divider } from 'antd';
import { debounce } from 'lodash-wechat';

export default () => {
  const [value, setValue] = useState<string>('');
  const searchTime = useRef<string>(Date());
  const handleSearch = useCallback(
    debounce((inputValue: string) => {
      setValue(inputValue);
      searchTime.current = Date();
    }, 200),
    [],
  );
  return (
    <Typography>
      <Input
        placeholder="这是一个带有防抖的搜索框"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Divider />
      <Typography.Paragraph>当前搜索值: {value}</Typography.Paragraph>
      <Typography.Paragraph>当前搜索时间: {searchTime.current}</Typography.Paragraph>
    </Typography>
  );
};
```
