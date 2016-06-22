[JSPM官网](http://jspm.io/)
[JSPM文档](http://jspm.io/docs/getting-started.html)
[browsersync官网](https://browsersync.io/)

>初始化npm和jspm,SystemJS可以加载JavaScript,Babel可以编译JavaScript,而且会把JSX格式的代码编译成JavaScript

```
npm init

npm install jspm -g
npm install jspm --save-dev
jspm init
```
>安装React

```
jspm install react    or指定对应版本   jspm install react@0.14.0-rc1
jspm install react-dom
jspm install react-router
```
>安装semantic-ui

```
jspm install semantic-ui
jspm install css
```
>安装jquery

```
jspm install jquery
```
>打包 bundle,在浏览器控制台的网络tab里就看不到加载多个js文件

```
jspm bundle app/main app/build.js

加上--inject后会在config.js中添加bundles信息，这样就不用在html中添加<script src="app/build.js"></script>
jspm bundle app/main app/build.js --inject
```
>browser-sync开启本地服务,修改指定文件保存后自动同步刷新浏览器

```
browser-sync start --server --no-notify --files 'index.html, app/**\/*.js'
```