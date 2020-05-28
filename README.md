

<h1 align="center">Qiankun Admin</h1>


##### 各位朋友好,基于qiankun开发的Single SPA来啦!

> ​    由于工作需要,设计了这套系统,主系统仍然基于Ant Design Pro Vue,在此之上支持了React, Vue, Jquery等常见框架设计的子系统,路由采用了hash,这也是很多种小型公司常用的路由模式,history则模式根据qiankun官网配置即可

###### 该系统解决了如下问题:

   1.主应用无法使用hsah,(主,子应用同时使用hash报错)

   2.子应用懒加载

   3.同主应用左侧菜单可以绑定子应用的多个路由

   4.普通html页面接入hash主系统

   5.整理出Vue demo, React Demo, Jq Demo

   6.完善的说明文档

   7.webpack解决跨域问题:react,vue devServer配置headers实现跨域,jq只能自己改服务器了(vsCode live server自带跨域支持)

   8.权限管理

   9.react作为子应用路由切换不了(升级router到6)

###### 问题总结以及解决方案

​    1.如果子应用使用hash模式,activeRule需要写上完整url,比如:/#/a/b

​    2.entry写成子应用根目录就行了,例如://localhost:3000

​    3.activeRule支持数组,对应子应用的多个路由

​    4.经过测试,只有一子应用时,如果主/子应用如果路由一致,可以activeRule: ""(目前测试中发现hash下必须路由一致)

​    5.经测试,react项目使用react-router v5, hash模式下点击左侧菜单子应用页面不跳转(虽然路由有变化),切换到react-router 6.0.0-alpha.5可以了

   6.经过测试,传统jq项目想要接入的话每一个页面要建立一个单独的子应用,例如master/main.js示例中的qiankunsubjq,和qiankunsubjq2

   7.主应用build完成后启动url,地址可能会变成http://127.0.0.1:5503/index.html#/sub-react/p4,这样就不能识别子应用了,需要把url改成http://127.0.0.1:5503/#/sub-react/p4,也就是去掉index.html才行

   5.引入图片的路径:把webpack的publicPath规定成绝对路径就行了,例如:publicPath:"/",改成publicPath:"http://127.0.0.1:5503"

   8.entry是否可以为./的形式(不可以,必须是绝对路径)

   10.不要history,hash混用,主/子应用要用同一种路由模式

   11.react 懒加载报找不到chunk.js,所以在webpack中把改成 publicPath = isEnvProduction ? paths.servedPath : isEnvDevelopment && '//localhost:3000/'; 文件位置搜索:TODO:为了微前端而把端口写死3000即可

###### BUGS:
   1.setDefaultMountApp('/#/sub-vue/p1') 目前不管用
<div>
<img src="https://gitee.com/Onces/images/raw/master/money.png" width=200>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://gitee.com/Onces/images/raw/master/zhifubaohongbao.jpg" width=200>
<div>你的支持就是我最大的动力
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
可怜可怜吧,实在不行扫个红包也行啊o(╥﹏╥)o</div>   
</div>


