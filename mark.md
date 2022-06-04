### 树

- dfs 使用 stack
- bfs 使用 queue
- 莫里斯遍历 不需要额外空间
- 前序遍历 --> dfs 先进 right 在进 left
- 中序遍历 --> 二重循环 递归 node.left break 输出 并将 node 置为 node.right
- 后序遍历 --> 前序遍历 使用 unshift 插入即可

### 字符串

- KMP 算法
- 后缀数组

### 其他

滑动窗口

## TODO

475 https://leetcode-cn.com/problems/heaters/
392. https://leetcode-cn.com/problems/is-subsequence/ 
108 https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
剑指 offer 33 https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-hou-xu-bian-li-xu-lie-lcof/



## 技巧
高斯求和公式[0...n] nums.length*(nums.length + 1)/2;
位运算: 亦或, 移位
快慢指针
