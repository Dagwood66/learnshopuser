# vue-router
## 1. 组件动态加载
### 1.1 通用    
    component : () => import("组件路径") 
### 1.2 webpack异步块
    component : () => import(/* webpackChunkName: "文件名" */ "组件路径")    
## 2. 多级嵌套常见写法