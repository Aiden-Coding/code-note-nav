import{_ as a,r as n,o,c as i,a as e,b as p,d as t,e as l}from"./app-pMbPEaNl.js";const c={},s=e("h1",{id:"一台服务器有什么用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一台服务器有什么用","aria-hidden":"true"},"#"),p(" 一台服务器有什么用！")],-1),h={href:"https://www.aliyun.com/minisite/goods?taskCode=shareNew2205&recordId=3641992&userCode=roof0wob",target:"_blank",rel:"noopener noreferrer"},d={href:"https://curl.qcloud.com/EiaMXllu",target:"_blank",rel:"noopener noreferrer"},u=l('<p>但在组织这场活动的时候，了解到大家都有一个共同的问题： <strong>这个服务器究竟有啥用？？</strong></p><p>这真是一个好问题，而且我一句两句还说不清楚，所以就专门发文来讲一讲。</p><p>同时我还录制的一期视频，我的视频号，大家可以关注一波。</p><p>一说到服务器，可能很多人都说搞分布式，做计算，搞爬虫，做程序后台服务，多人合作等等。</p><p>其实这些普通人都用不上，我来说一说大家能用上的吧。</p><h2 id="搭建git私服" tabindex="-1"><a class="header-anchor" href="#搭建git私服" aria-hidden="true">#</a> 搭建git私服</h2><p>大家平时工作的时候一定有一个自己的工作文件夹，学生的话就是自己的课件，考试，准备面试的资料等等。</p><p>已经工作的录友，会有一个文件夹放着自己重要的文档，Markdown，图片，简历等等。</p><p>这么重要的文件夹，而且我们每天都要更新，也担心哪天电脑丢了，或者坏了，突然这些都不见了。</p><p>所以我们想备份嘛。</p><p>还有就是我们经常个人电脑和工作电脑要同步一些私人资料，而不是用微信传来传去。</p><p>这些都是git私服的使用场景，而且很好用。</p><p>大家也知道 github，gitee也可以搞私人仓库 用来备份，同步文件，但自己的文档可能放着很多重要的信息，包括自己的各种密码，密钥之类的，放到上面未必安全。你就不怕哪些重大bug把你的信息都泄漏了么[机智]</p><p>更关键的是，github 和 gitee都限速的。毕竟人家的功能定位并不是网盘。</p><p>项目里有大文件（几百M以上），例如pdf，ppt等等 其上传和下载速度会让你窒息。</p><p><strong>后面我会发文专门来讲一讲，如何大家git私服！</strong></p><h2 id="搞一个文件存储" tabindex="-1"><a class="header-anchor" href="#搞一个文件存储" aria-hidden="true">#</a> 搞一个文件存储</h2><p>这个可以用来生成文件的下载链接，也可以把本地文件传到服务器上。</p><p>相当于自己做一个对象存储，其实云厂商也有对象存储的产品。</p><p>不过我们自己也可以做一个，不够很多很同学应该都不知道对象存储怎么用吧，其实我们用服务器可以自己做一个类似的公司。</p><p>我现在就用自己用go写的一个工具，部署在服务器上。 用来和服务器传文件，或者生成一些文件的临时下载链接。</p><p>这些都是直接命令行操作的，</p><p>操作方式这样，我把命令包 包装成一个shell命令，想传那个文件，直接 uploadtomyserver，然后就返回可以下载的链接，这个文件也同时传到了我的服务器上。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20211126165643.png" alt=""></p><p>我也把我的项目代码放在了github上：</p><p>https://github.com/youngyangyang04/fileHttpServer</p><p>感兴趣的录友可以去学习一波，顺便给个star。</p><h2 id="网站" tabindex="-1"><a class="header-anchor" href="#网站" aria-hidden="true">#</a> 网站</h2><p>做网站，例如 大家知道用html 写几行代码，就可以生成一个网页，但怎么给别人展示呢？</p><p>大家如果用自己的电脑做服务器，只能同一个路由器下的设备可以访问你的网站，可能这个设备出了这个屋子 都访问不了你的网站了。</p><p>因为你的IP不是公网IP。</p><p>如果有了一台云服务器，都是配公网IP，你的网站就可以让任何人访问了。</p><p>或者说 你提供的一个服务就可以让任何人使用。</p><p>例如第二个例子中，我们可以自己开发一个文件存储，这个服务，我只把把命令行给其他人，其他人都可以使用我的服务来生成链接，当然他们的文件也都传到了我的服务器上。</p><p>再说一个使用场景。</p><p>我之前在组织免费里服务器的活动的时候，阿里云给我一个excel，让面就是从我这里买服务器录友的名单，我直接把这个名单甩到群里，让大家自己检查，出现在名单里就可以找我返现，这样做是不是也可以。</p><p>这么做有几个很大的问题：</p><ul><li>大家都要去下载excel，做对比，会有人改excel的内容然后就说是从你这里买的，我不可能挨个去比较excel有没有改动</li><li>excel有其他人的个人信息，这是不能暴漏的。</li><li>如果每个人自己用excel查询，私信我返现，一个将近两千人找我返现，我微信根本处理不过来，这就变成体力活了。</li></ul><p>那应该怎么做呢，</p><p>我就简单写一个查询的页面，后端逻辑就是读一个execel表格，大家在查询页面输入自己的阿里云ID，如果在excel里，页面就会返回返现群的二维码，大家就可以自主扫码加群了。</p><p>这样，我最后就直接在返现群里 发等额红包就好了，是不是极大降低人力成本了</p><p>当然我是把 17个返现群的二维码都生成好了，按照一定的规则，展现给查询通过的录友。</p><p>就是这样一个非常普通的查询页面。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20211126160200.png" alt=""></p><p>查询通过之后，就会展现返现群二维码。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20211127160558.png" alt=""></p><p>但要部署在服务器上，因为没有公网IP，别人用不了你的服务。</p><h2 id="学习linux" tabindex="-1"><a class="header-anchor" href="#学习linux" aria-hidden="true">#</a> 学习linux</h2><p>学习linux其实在自己的电脑上搞一台虚拟机，或者安装双系统也可以学习，不过这很考验你的电脑性能如何了。</p><p>如果你有一个服务器，那就是独立的一台电脑，你怎么霍霍就怎么霍霍，而且一年都不用关机的，可以一直跑你的任务，和你本地电脑也完全隔离。</p><p>更方便的是，你目前系统假如是CentOS，想做一个实验需要在Ubuntu上，如果是云服务器，更换系统就是在 后台点一下，一键重装，云厂商基本都是支持所有系统一件安装的。</p><p>我们平时自己玩linux经常是配各种环境，然后这个linux就被自己玩坏了（一般都是毫无节制使用root权限导致的），总之就是环境配不起来了，基本就要重装了。</p><p>那云服务器重装系统可太方便了。</p><p>还有就是加入你好不容易配好的环境，如果以后把这个环境玩坏了，你先回退这之前配好的环境而不是重装系统在重新配一遍吧。</p><p>那么可以用云服务器的镜像保存功能，就是你配好环境的那一刻就可以打一个镜像包，以后如果环境坏了，直接回退到上次镜像包的状态，这是不是就很香了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>其实云服务器还有很多其他用处，不过我就说一说大家普遍能用的上的。</p>',57),g={href:"https://www.aliyun.com/minisite/goods?taskCode=shareNew2205&recordId=3641992&userCode=roof0wob",target:"_blank",rel:"noopener noreferrer"},_={href:"https://curl.qcloud.com/EiaMXllu",target:"_blank",rel:"noopener noreferrer"};function f(m,x){const r=n("ExternalLinkIcon");return o(),i("div",null,[s,e("ul",null,[e("li",null,[e("a",h,[p("阿里云活动期间服务器购买"),t(r)])]),e("li",null,[e("a",d,[p("腾讯云活动期间服务器购买"),t(r)])])]),u,e("ul",null,[e("li",null,[e("a",g,[p("阿里云活动期间服务器购买"),t(r)])]),e("li",null,[e("a",_,[p("腾讯云活动期间服务器购买"),t(r)])])])])}const k=a(c,[["render",f],["__file","server.html.vue"]]);export{k as default};
