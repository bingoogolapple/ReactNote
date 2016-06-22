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
>browser-sync开启本地服务,修改指定文件保存后自动同步刷新浏览器

```
browser-sync start --server --no-notify --files 'index.html, app/**\/*.js'
```