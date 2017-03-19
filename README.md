# redirect-server

启动简单、实用、方便的转发服务，解决开发时的跨域问题

支持 get,post,put,delete 方法

## 用法

### 安装

```shell
sudo npm install redirect-server -g
```

### 命令

启动转发到指定地址的服务

```shell
redirect-server http://www.xxx.com
```

启动不包含转发地址的服务（需发送请求时在参数里加入remoteAddress字段)
```shell
redirect-server
```

### 请求参数（启动不包含转发地址的服务时必需提供，启动转发到指定地址的服务若提供则覆盖）

get请求，url中包含remoteAddress字段

post请求，请求体中包含remoteAddress字段

put请求，请求体中包含remoteAddress字段

delete请求，url中包含remoteAddress字段


## 依赖

Node.js v7.6+