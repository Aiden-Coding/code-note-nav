import{_ as c,r as a,o as l,c as o,a as i,b as p,d as n,e}from"./app-pMbPEaNl.js";const r={},s=e('<h1 id="如何在github上提交pr-pull-request" tabindex="-1"><a class="header-anchor" href="#如何在github上提交pr-pull-request" aria-hidden="true">#</a> 如何在Github上提交PR（pull request）</h1><ul><li>如何提交代码</li><li>合入不规范 <ul><li>提交信息不规范</li><li>Markdown 代码格式</li><li>pull request里的commit数量</li><li>代码注释</li><li>说明具体是哪种方法</li><li>代码规范</li><li>代码逻辑</li><li>处理冲突</li></ul></li></ul>',2),h={href:"https://github.com/youngyangyang04/leetcode-master",target:"_blank",rel:"noopener noreferrer"},m=e('<h2 id="如何合入代码" tabindex="-1"><a class="header-anchor" href="#如何合入代码" aria-hidden="true">#</a> 如何合入代码</h2><p>首先来说一说如何合入代码，不少录友还不太会使用github，所以这里也做一下科普。</p><p>我特意申请一个新的Github账号，给大家做一个示范。</p><p>需要强调一下，一个commit就只更新一道题目，不要很多题目一起放在一个commit里，那样就很乱。</p><p>首先LeetCode-Master每天都有更新，如何保持你fork到自己的仓库是最新的版本呢。</p><p>点击这里Fetch upstream。</p><p>cs/20230721172815.png)</p><p>点击之后，这里就会显示最新的信息了 <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210516213032568.png" alt="img"></p><p>注意这时是你的远端仓库为最新版本，本地还不是最新的，本地要git pull一下。</p><p>基于最新的版本，大家在去提交代码。</p><p>如何提交代码呢，首先把自己的代码提交到自己的fork的远端仓库中，然后open pull request，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210516215102296.png" alt="img"></p><p>点击 open pull request之后，就是如下画面，一个pull request有多个commit。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210516215646937.png" alt="img"></p><p>然后就是给pull request 添加备注，pull request是对本次commit的一个总结。如果一个pull request就一个commit，那么就和commit的备注保持一次。 然后点击 create pull request 就可以了</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210516220219891.png" alt="img"></p><p>此时你就提交成功了，我会在项目中的pull requests 处理列表里看到你的请求。 <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210516220502485.png" alt="img"></p><p>然后如果你发现自己的代码没有合入多半是有问题，如果有问题都有会在pull request里给出留言的，</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><h3 id="提交信息不规范" tabindex="-1"><a class="header-anchor" href="#提交信息不规范" aria-hidden="true">#</a> 提交信息不规范</h3><p>大家提交代码的时候有两个地方需要写备注，一个是commit，一个是pull request，pull request包好多个commit。</p><p>commit 说清楚本文件多了哪些修改，而pull request则是对本次合入的所有commit做一个总结性描述。</p><p>commit备注，举例：添加Rust python3，那么commit备注就是：添加0001两数之和 Rust python3 版本</p><p>而pull request 如果只有一个commit，那么就也是：添加0001两数之和 Rust python3 版本</p><p>如果是多个commit ，则把本次commit都描述一遍。</p><h3 id="markdown-语法" tabindex="-1"><a class="header-anchor" href="#markdown-语法" aria-hidden="true">#</a> Markdown 语法</h3><p>关于 Markdown 代码格式，例如 添加C++代码，需要有代码块语法</p><p>```C++ C++代码 ```</p><p>例如这个commit，在添加java代码的时候，就直接添加代码 <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210512141514272.png" alt="img"></p><p>正确的格式应该是这样： thinking-1253855093.file.myqcloud.com/pics/20210513101029336.png)</p><p>一般发现问题，我也会在代码中给出评论：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2021051309401135.png" alt="img"></p><p>这样大家也可以学习一些 提交代码的规范方面的知识</p><p>有的录友 是添加的代码块语法，但没有标记是哪种语言，这样的话 代码就不会针对某种语言高亮显示了，也比较影响阅读，例如：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/2021051214212374.png" alt="img"></p><p>提交python代码的话，要注释好，是python2还是python3</p><p>例如这样：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210513174147165.png" alt="img"></p><p>当然python2的话，只这么写就行</p><p>```python python代码 ```</p><h3 id="pull-request里的commit数量" tabindex="-1"><a class="header-anchor" href="#pull-request里的commit数量" aria-hidden="true">#</a> pull request里的commit数量</h3><p>有的录友是一个pull request 里有很多commit （一个commit是一道题目的代码）。</p><p>有的录友是一个pull request 里有有一个commit。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210512221535670.png" alt="img"></p><p>其实如果大家是平时一天写了两三道题目的话，那么分三个commit，一个pull request提交上来就行。</p><p>一个pull request 一个commit也可以，这样大家就会麻烦一点。</p><p>但注意一个pull request也不要放太多的commit，一旦有一道题目代码不合格，我没有合入，就这个pull request里影响其他所有代码的合入了。</p><h3 id="代码注释" tabindex="-1"><a class="header-anchor" href="#代码注释" aria-hidden="true">#</a> 代码注释</h3><p>提交的代码最好要有注释，这样也方便读者理解。</p><p>例如这位录友，在提交Java代码的时候，按照题解的意思对Java版本的代码进行的注释，这就很棒👍</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210512212151438.png" alt="img"></p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210513101321112.png" alt="img"></p><p>当然如果大家感觉 已有的代码 不符合以上要求的话，例如 代码思路不够清晰不够规范，注释不够友好，依然欢迎提交优化代码，要记得详细注释哦。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210516082342756.png" alt="img"></p><h3 id="说明具体是哪种方法" tabindex="-1"><a class="header-anchor" href="#说明具体是哪种方法" aria-hidden="true">#</a> 说明具体是哪种方法</h3><p>有的题解有两种甚至三四种解法，在添加代码的时候，注释上也清楚具体是哪一种方法的版本。</p><p>下面这位录友做的就很好</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210512221951251.png" alt="img"></p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210513101551819.png" alt="img"></p><p>有的题解，是一起给出了多道题目的讲解，例如项目中0102.二叉树的层序遍历.md 中有八道题目，那么大家添加代码的时候 应该在代码注释上，或者 直接写上 是哪个题目的代码。</p><h3 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范" aria-hidden="true">#</a> 代码规范</h3><p>大家提交代码要规范，当然代码可以在力扣上运行通过是最基本的。</p><p>虽然我主张没有绝对正确的代码风格，但既然是给LeetCode-Master提交代码，尽量遵循Google编程规范。</p><p>经常看我的代码的录友应该都知道，我的代码格严格按照 Google C++ 编程规范来的，这样看上去会比较整洁。</p><p>大家提交代码的时候遇到规范性问题，例如哪里应该由空格，哪里没有空格，可以参考我的代码来。</p><p>有一位录友在提交代码的时候会把之前的代码 做一下规范性的调整，这就很棒。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210514093012603.png" alt="img"></p><p><strong>代码规范从你我做起！</strong></p><h3 id="代码逻辑" tabindex="-1"><a class="header-anchor" href="#代码逻辑" aria-hidden="true">#</a> 代码逻辑</h3><p><strong>提交的代码要按照题解思路来写</strong>。</p><p>虽然大家自己发挥想象空间是好的，但是题解还是要一脉相承，读者看完题解，发现代码和题解不是一个思路的话，那和重新读代码有啥区别了。</p><p>所以和题解不是一个思路的代码，除非详细注释了自己的思路 或者 写一段自己代码的描述说明思路和优化的地方，否则我就不会通过合入了哈。</p><p>大家的代码 最好也将关键地方放上注释，这样有助于别人快速理解你的代码。</p><h3 id="处理冲突" tabindex="-1"><a class="header-anchor" href="#处理冲突" aria-hidden="true">#</a> 处理冲突</h3><p>在合入的过程中还要处理冲突的代码， 理解大家代码的思路，解决冲突，然后在力扣提交一下，确保是没问题。</p><p>例如同一道题目， 一位录友提交了， 我还没处理如何，另一位录友也对这道题也提交了代码，这样就会发生冲突 <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210514092248192.png" alt="img"></p><p>大家提交代码的热情太高了，我有时候根本处理不过来，但我必须当天处理完，否则第二天代码冲突会越来越多。 <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210514091457392.png" alt="img"></p><p>一天晚分别有两位录友提交了 30多道 java代码，全部冲突，解决冲突处理的我脖子疼[哭]</p><p>那么在处理冲突的时候 保留谁的代码，删点谁的代码呢？</p><p>我一定是看谁 代码逻辑和题解一致，代码风格好，注释友好，就保留谁的。</p><p>所以例如当你想提交Java代码的时候，即使发现该题解已经有Java版本了，只要你的代码写的好，一样可以提交，我评审合格一样可以合入代码库。</p><h3 id="不要做额外修改" tabindex="-1"><a class="header-anchor" href="#不要做额外修改" aria-hidden="true">#</a> 不要做额外修改</h3><p>确保这种额外文件不要提交。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210514093430534.png" alt="img"></p><p>还有添加不同方法的时候，直接用正文格式写，哪种方法就可以了，不要添加目录 ，例如这样，这样整篇文章目录结构就有影响了。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210513102640556.png" alt="img"></p><p>前面不要加 <code>## 前序遍历（迭代法）</code>，直接写<code>前序遍历（迭代法）</code>就可以了。</p><p>当然这里也没有给代码块标记上对应的语言，应该是</p><p>``` Go Go语言代码 ```</p><h2 id="对代码保持敬畏" tabindex="-1"><a class="header-anchor" href="#对代码保持敬畏" aria-hidden="true">#</a> 对代码保持敬畏</h2><p>有的录友甚至提交的代码并不是本题的代码，虽然我是鼓励大家提交代码的，但是大家贡献代码的时候也要对 自己的代码有敬畏之心，自己的代码是要给很多读者看的。</p><ul><li>代码运行无误</li><li>写的够不够简洁</li><li>注释清不清晰</li><li>备注规不规范</li></ul><p>这也是培养大家以后协调工作的一种能力。</p><h2 id="优化" tabindex="-1"><a class="header-anchor" href="#优化" aria-hidden="true">#</a> 优化</h2><p>目前 leetcode-master中大部分题解已经补充了其他语言，但如果你发现了可以优化的地方，依然可以提交PR来优化。</p><p>甚至发现哪里有语病，也欢迎提交PR来修改，例如下面：就是把【下表】 纠正为【下标】</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210811144337.png" alt="img"></p><p>不用非要写出牛逼的代码才能提交PR，只要发现 文章中有任何问题，或者错别字，都欢迎提交PR，成为contributor。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210927113149.png" alt="img"></p><h2 id="特别注意" tabindex="-1"><a class="header-anchor" href="#特别注意" aria-hidden="true">#</a> 特别注意</h2><p>git add之前，要git diff 查看一下，本次提交所修改的代码是不是 自己修改的，是否 误删，或者误加的文件。</p><p>提交代码，不要使用git push -f 这种命令，要足够了解 -f 意味着什么。</p>',102);function d(u,g){const t=a("ExternalLinkIcon");return l(),o("div",null,[s,i("p",null,[p("以下在 "),i("a",h,[p("https://github.com/youngyangyang04/leetcode-master"),n(t)]),p(" 上提交pr为为例")]),m])}const q=c(r,[["render",d],["__file","join.html.vue"]]);export{q as default};
