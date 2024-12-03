# CSV

- **has header**: 消息中是否拥有header值。
- **headers**: 给予消息中的header值。

示例：
配置为：
```text
has_header: true
headers: ["a", "b", "c"]
```

原始消息为：
```csv
aa,bb,cc
1,2,3
```
解码后的消息为：
```json
{
    "a": 1,
    "b": 2,
    "c": 3,
}
```