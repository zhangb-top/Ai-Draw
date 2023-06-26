# 免费版的midjourney对接，值得一学！

一直想找一个AI的API来对接练练手，碍于调用API都需要收费。在网上冲浪了好久，终于找到了一个免费的[MidJourneyAPI](https://console-docs.apipost.cn/preview/adb4968a6ef2d371/8a04adfb8ba2a8de)，但是前端请求会有浏览器的跨域限制，所有本人对API进行了封装（根据图片生成描述接口未封装），只需要将上述文档对应的接口URL改为 http://www.zhangb.top:8111/(最后的后缀) 即可。对应所有请求所需的请求头都已经封装好，无需再次添加请求头，只需要根据上述API文档添加对应的请求体即可

## 在线体验网站

本人使用github，将前端静态页面进行了部署，由于接口为http协议，网站为https协议，所有PC端暂不支持，可以使用手机，复制下面的网址，使用QQ浏览器、百度（暂时尝试这两个可以）打开，或者直接在QQ、微信中打开网站均可。网站地址为https://zhangb-top.github.io/Ai-Draw/

## 本地运行（PC端也可）

如果一定要PC端使用，可以拉取[github仓库](https://github.com/zhangb-top/Ai-Draw)的代码，然后使用浏览器打开index.html文件即可
