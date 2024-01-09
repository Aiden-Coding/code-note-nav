import{_ as t,r as c,o as i,c as o,a as s,b as n,d as e,e as p}from"./app-pMbPEaNl.js";const l={},d=s("h1",{id:"深度优先搜索理论基础",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#深度优先搜索理论基础","aria-hidden":"true"},"#"),n(" 深度优先搜索理论基础")],-1),u={href:"https://www.bilibili.com/video/BV1fA4y1o715/",target:"_blank",rel:"noopener noreferrer"},r=p('<p>录视频其实是非常累的，也要花很多时间，所以图论这边就没抽出时间来。</p><p>后面计划先给大家讲图论里大家特别需要的深搜和广搜。</p><p>以下，开始讲解深度优先搜索理论基础：</p><h2 id="dfs-与-bfs-区别" tabindex="-1"><a class="header-anchor" href="#dfs-与-bfs-区别" aria-hidden="true">#</a> dfs 与 bfs 区别</h2><p>提到深度优先搜索（dfs），就不得不说和广度优先搜索（bfs）有什么区别</p><p>先来了解dfs的过程，很多录友可能对dfs（深度优先搜索），bfs（广度优先搜索）分不清。</p><p>先给大家说一下两者大概的区别：</p><ul><li>dfs是可一个方向去搜，不到黄河不回头，直到遇到绝境了，搜不下去了，再换方向（换方向的过程就涉及到了回溯）。</li><li>bfs是先把本节点所连接的所有节点遍历一遍，走到下一个节点的时候，再把连接节点的所有节点遍历一遍，搜索方向更像是广度，四面八方的搜索过程。</li></ul><p>当然以上讲的是，大体可以这么理解，接下来 我们详细讲解dfs，（bfs在用单独一篇文章详细讲解）</p><h2 id="dfs-搜索过程" tabindex="-1"><a class="header-anchor" href="#dfs-搜索过程" aria-hidden="true">#</a> dfs 搜索过程</h2><p>上面说道dfs是可一个方向搜，不到黄河不回头。 那么我们来举一个例子。</p><p>如图一，是一个无向图，我们要搜索从节点1到节点6的所有路径。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220707093643.png" alt="图一"></p><p>那么dfs搜索的第一条路径是这样的： （假设第一次延默认方向，就找到了节点6），图二</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220707093807.png" alt="图二"></p><p>此时我们找到了节点6，（遇到黄河了，是不是应该回头了），那么应该再去搜索其他方向了。 如图三：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220707094011.png" alt="图三"></p><p>路径2撤销了，改变了方向，走路径3（红色线）， 接着也找到终点6。 那么撤销路径2，改为路径3，在dfs中其实就是回溯的过程（这一点很重要，很多录友不理解dfs代码中回溯是用来干什么的）</p><p>又找到了一条从节点1到节点6的路径，又到黄河了，此时再回头，下图图四中，路径4撤销（回溯的过程），改为路径5。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220707094322.png" alt="图四"></p><p>又找到了一条从节点1到节点6的路径，又到黄河了，此时再回头，下图图五，路径6撤销（回溯的过程），改为路径7，路径8 和 路径7，路径9， 结果发现死路一条，都走到了自己走过的节点。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220707094813.png" alt="图五"></p><p>那么节点2所连接路径和节点3所链接的路径 都走过了，撤销路径只能向上回退，去选择撤销当初节点4的选择，也就是撤销路径5，改为路径10 。 如图图六：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220707095232.png" alt="图六"></p><p>上图演示中，其实我并没有把 所有的 从节点1 到节点6的dfs（深度优先搜索）的过程都画出来，那样太冗余了，但 已经把dfs 关键的地方都涉及到了，关键就两点：</p><ul><li>搜索方向，是认准一个方向搜，直到碰壁之后再换方向</li><li>换方向是撤销原路径，改为节点链接的下一个路径，回溯的过程。</li></ul><h2 id="代码框架" tabindex="-1"><a class="header-anchor" href="#代码框架" aria-hidden="true">#</a> 代码框架</h2><p>正是因为dfs搜索可一个方向，并需要回溯，所以用递归的方式来实现是最方便的。</p>',28),k={href:"https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},m=p(`<p>有递归的地方就有回溯，那么回溯在哪里呢？</p><p>就地递归函数的下面，例如如下代码：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    处理节点
    <span class="token function">dfs</span><span class="token punctuation">(</span>图，选择的节点<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归</span>
    回溯，撤销处理结果
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到回溯操作就在递归函数的下面，递归和回溯是相辅相成的。</p>`,4),v={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},f=s("p",null,[n("所以"),s("strong",null,"dfs，bfs其实是基础搜索算法，也广泛应用与其他数据结构与算法中"),n("。")],-1),h={href:"https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},b=p(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>终止条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        存放结果<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>选择：本层集合中元素（树中节点孩子的数量就是集合的大小）<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        处理节点<span class="token punctuation">;</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>路径，选择列表<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归</span>
        回溯，撤销处理结果
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回溯算法，其实就是dfs的过程，这里给出dfs的代码框架：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>终止条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        存放结果<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>选择：本节点所连接的其他节点<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        处理节点<span class="token punctuation">;</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>图，选择的节点<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归</span>
        回溯，撤销处理结果
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以发现dfs的代码框架和回溯算法的代码框架是差不多的。</p><p>下面我在用 深搜三部曲，来解读 dfs的代码框架。</p><h2 id="深搜三部曲" tabindex="-1"><a class="header-anchor" href="#深搜三部曲" aria-hidden="true">#</a> 深搜三部曲</h2>`,6),g={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E9%80%92%E5%BD%92%E9%81%8D%E5%8E%86.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://programmercarl.com/%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},_=p(`<p>其实深搜也是一样的，深搜三部曲如下：</p><ol><li>确认递归函数，参数</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">dfs</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通常我们递归的时候，我们递归搜索需要了解哪些参数，其实也可以在写递归函数的时候，发现需要什么参数，再去补充就可以。</p><p>一般情况，深搜需要 二维数组数组结构保存所有路径，需要一维数组保存单一路径，这种保存结果的数组，我们可以定义一个全局变量，避免让我们的函数参数过多。</p><p>例如这样：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>vector<span class="token operator">&lt;</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> result<span class="token punctuation">;</span> <span class="token comment">// 保存符合条件的所有路径</span>
vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> path<span class="token punctuation">;</span> <span class="token comment">// 起点到终点的路径</span>
<span class="token keyword">void</span> <span class="token function">dfs</span> <span class="token punctuation">(</span>图，目前搜索的节点<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但这种写法看个人习惯，不强求。</p><ol start="2"><li>确认终止条件</li></ol><p>终止条件很重要，很多同学写dfs的时候，之所以容易死循环，栈溢出等等这些问题，都是因为终止条件没有想清楚。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>终止条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    存放结果<span class="token punctuation">;</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>终止添加不仅是结束本层递归，同时也是我们收获结果的时候。</p><p>另外，其实很多dfs写法，没有写终止条件，其实终止条件写在了， 下面dfs递归的逻辑里了，也就是不符合条件，直接不会向下递归。这里如果大家不理解的话，没关系，后面会有具体题目来讲解。</p><ol start="3"><li>处理目前搜索节点出发的路径</li></ol><p>一般这里就是一个for循环的操作，去遍历 目前搜索节点 所能到的所有节点。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span>选择：本节点所连接的其他节点<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    处理节点<span class="token punctuation">;</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>图，选择的节点<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归</span>
    回溯，撤销处理结果
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不少录友疑惑的地方，都是 dfs代码框架中for循环里分明已经处理节点了，那么 dfs函数下面 为什么还要撤销的呢。</p><p>如图七所示， 路径2 已经走到了 目的地节点6，那么 路径2 是如何撤销，然后改为 路径3呢？ 其实这就是 回溯的过程，撤销路径2，走换下一个方向。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20220708093544.png" alt="图七"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>我们讲解了，dfs 和 bfs的大体区别（bfs详细过程下篇来讲），dfs的搜索过程以及代码框架。</p><p>最后还有 深搜三部曲来解读这份代码框架。</p><p>以上如果大家都能理解了，其实搜索的代码就很好写，具体题目套用具体场景就可以了。</p><p>后面我也会给大家安排具体练习的题目，依旧是代码随想录的风格，循序渐进由浅入深！</p>`,24);function A(B,y){const a=c("ExternalLinkIcon");return i(),o("div",null,[d,s("p",null,[n("录友们期待图论内容已久了，为什么鸽了这么久，主要是最近半年开始更新"),s("a",u,[n("代码随想录算法公开课"),e(a)]),n("，是开源在B站的算法视频，已经帮助非常多基础不好的录友学习算法。")]),r,s("p",null,[n("很多录友对回溯很陌生，建议先看看代码随想录，"),s("a",k,[n("回溯算法章节"),e(a)]),n("。")]),m,s("p",null,[n("在讲解"),s("a",v,[n("二叉树章节"),e(a)]),n("的时候，二叉树的递归法其实就是dfs，而二叉树的迭代法，就是bfs（广度优先搜索）")]),f,s("p",null,[n("我们在回顾一下"),s("a",h,[n("回溯法"),e(a)]),n("的代码框架：")]),b,s("p",null,[n("在 "),s("a",g,[n("二叉树递归讲解"),e(a)]),n("中，给出了递归三部曲。")]),s("p",null,[s("a",E,[n("回溯算法"),e(a)]),n("讲解中，给出了 回溯三部曲。")]),_])}const x=t(l,[["render",A],["__file","tulunshensoulilunjichu.html.vue"]]);export{x as default};