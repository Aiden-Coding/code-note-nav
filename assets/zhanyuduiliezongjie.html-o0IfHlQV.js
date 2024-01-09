import{_ as n,r as p,o as s,c as l,a as r,b as e,d as a,e as o}from"./app-pMbPEaNl.js";const h={},i=r("h1",{id:"栈与队列总结篇",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#栈与队列总结篇","aria-hidden":"true"},"#"),e(" 栈与队列总结篇")],-1),d=r("h2",{id:"栈与队列的理论基础",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#栈与队列的理论基础","aria-hidden":"true"},"#"),e(" 栈与队列的理论基础")],-1),c={href:"https://programmercarl.com/%E6%A0%88%E4%B8%8E%E9%98%9F%E5%88%97%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},E=o("<p>里面提到了灵魂四问：</p><ol><li>C++中stack，queue 是容器么？</li><li>我们使用的stack，queue是属于那个版本的STL？</li><li>我们使用的STL中stack，queue是如何实现的？</li><li>stack，queue 提供迭代器来遍历空间么？</li></ol><p>相信不仅仅是C++中有这些问题，那么大家使用其他编程语言，也可以考虑一下这四个问题，栈和队列是如何实现的。</p><p>栈与队列是我们熟悉的不能再熟悉的数据结构，但它们的底层实现，很多同学都比较模糊，这其实就是基础所在。</p><p>可以出一道面试题：栈里面的元素在内存中是连续分布的么？</p><p>这个问题有两个陷阱：</p><ul><li>陷阱1：栈是容器适配器，底层容器使用不同的容器，导致栈内数据在内存中不一定是连续分布的。</li><li>陷阱2：缺省情况下，默认底层容器是deque，那么deque在内存中的数据分布是什么样的呢？ 答案是：不连续的，下文也会提到deque。</li></ul><p>所以这就是考察候选者基础知识扎不扎实的好问题。</p><p>大家还是要多多重视起来！</p>",9),u={href:"https://programmercarl.com/0232.%E7%94%A8%E6%A0%88%E5%AE%9E%E7%8E%B0%E9%98%9F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://programmercarl.com/0225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://programmercarl.com/0225.%E7%94%A8%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E6%A0%88.html",target:"_blank",rel:"noopener noreferrer"},m=o(`<p><strong>一个队列在模拟栈弹出元素的时候只要将队列头部的元素（除了最后一个元素外） 重新添加到队列尾部，此时在去弹出元素就是栈的顺序了。</strong></p><h2 id="栈经典题目" tabindex="-1"><a class="header-anchor" href="#栈经典题目" aria-hidden="true">#</a> 栈经典题目</h2><h3 id="栈在系统中的应用" tabindex="-1"><a class="header-anchor" href="#栈在系统中的应用" aria-hidden="true">#</a> 栈在系统中的应用</h3><p>如果还记得编译原理的话，编译器在词法分析的过程中处理括号、花括号等这个符号的逻辑，就是使用了栈这种数据结构。</p><p>再举个例子，linux系统中，cd这个进入目录的命令我们应该再熟悉不过了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd a/b/c/../../
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令最后进入a目录，系统是如何知道进入了a目录呢 ，这就是栈的应用。<strong>这在leetcode上也是一道题目，编号：71. 简化路径，大家有空可以做一下。</strong></p><p><strong>递归的实现是栈：每一次递归调用都会把函数的局部变量、参数值和返回地址等压入调用栈中</strong>，然后递归返回的时候，从栈顶弹出上一次递归的各项参数，所以这就是递归为什么可以返回上一层位置的原因。</p><p>所以栈在计算机领域中应用是非常广泛的。</p><p>有的同学经常会想学的这些数据结构有什么用，也开发不了什么软件，大多数同学说的软件应该都是可视化的软件例如APP、网站之类的，那都是非常上层的应用了，底层很多功能的实现都是基础的数据结构和算法。</p><p><strong>所以数据结构与算法的应用往往隐藏在我们看不到的地方！</strong></p><h3 id="括号匹配问题" tabindex="-1"><a class="header-anchor" href="#括号匹配问题" aria-hidden="true">#</a> 括号匹配问题</h3>`,12),A={href:"https://programmercarl.com/0020.%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.html",target:"_blank",rel:"noopener noreferrer"},B=o('<p><strong>括号匹配是使用栈解决的经典问题。</strong></p><p>建议要写代码之前要分析好有哪几种不匹配的情况，如果不动手之前分析好，写出的代码也会有很多问题。</p><p>先来分析一下 这里有三种不匹配的情况，</p><ol><li>第一种情况，字符串里左方向的括号多余了，所以不匹配。</li><li>第二种情况，括号没有多余，但是括号的类型没有匹配上。</li><li>第三种情况，字符串里右方向的括号多余了，所以不匹配。</li></ol><p>这里还有一些技巧，在匹配左括号的时候，右括号先入栈，就只需要比较当前元素和栈顶相不相等就可以了，比左括号先入栈代码实现要简单的多了！</p><h3 id="字符串去重问题" tabindex="-1"><a class="header-anchor" href="#字符串去重问题" aria-hidden="true">#</a> 字符串去重问题</h3>',6),f={href:"https://programmercarl.com/1047.%E5%88%A0%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E7%9B%B8%E9%82%BB%E9%87%8D%E5%A4%8D%E9%A1%B9.html",target:"_blank",rel:"noopener noreferrer"},b=r("p",null,"思路就是可以把字符串顺序放到一个栈中，然后如果相同的话 栈就弹出，这样最后栈里剩下的元素都是相邻不相同的元素了。",-1),k=r("h3",{id:"逆波兰表达式问题",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#逆波兰表达式问题","aria-hidden":"true"},"#"),e(" 逆波兰表达式问题")],-1),x={href:"https://programmercarl.com/0150.%E9%80%86%E6%B3%A2%E5%85%B0%E8%A1%A8%E8%BE%BE%E5%BC%8F%E6%B1%82%E5%80%BC.html",target:"_blank",rel:"noopener noreferrer"},C={href:"https://programmercarl.com/1047.%E5%88%A0%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E7%9B%B8%E9%82%BB%E9%87%8D%E5%A4%8D%E9%A1%B9.html",target:"_blank",rel:"noopener noreferrer"},q=r("h2",{id:"队列的经典题目",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#队列的经典题目","aria-hidden":"true"},"#"),e(" 队列的经典题目")],-1),v=r("h3",{id:"滑动窗口最大值问题",tabindex:"-1"},[r("a",{class:"header-anchor",href:"#滑动窗口最大值问题","aria-hidden":"true"},"#"),e(" 滑动窗口最大值问题")],-1),D={href:"https://programmercarl.com/0239.%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3%E6%9C%80%E5%A4%A7%E5%80%BC.html",target:"_blank",rel:"noopener noreferrer"},F=o('<p>这道题目还是比较绕的，如果第一次遇到这种题目，需要反复琢磨琢磨</p><p>主要思想是<strong>队列没有必要维护窗口里的所有元素，只需要维护有可能成为窗口里最大值的元素就可以了，同时保证队列里的元素数值是由大到小的。</strong></p><p>那么这个维护元素单调递减的队列就叫做<strong>单调队列，即单调递减或单调递增的队列。C++中没有直接支持单调队列，需要我们自己来一个单调队列</strong></p><p>而且<strong>不要以为实现的单调队列就是 对窗口里面的数进行排序，如果排序的话，那和优先级队列又有什么区别了呢。</strong></p><p>设计单调队列的时候，pop，和push操作要保持如下规则：</p><ol><li>pop(value)：如果窗口移除的元素value等于单调队列的出口元素，那么队列弹出元素，否则不用任何操作</li><li>push(value)：如果push的元素value大于入口元素的数值，那么就将队列出口的元素弹出，直到push元素的数值小于等于队列入口元素的数值为止</li></ol><p>保持如上规则，每次窗口移动的时候，只要问que.front()就可以返回当前窗口的最大值。</p><p>一些同学还会对单调队列都有一些困惑，首先要明确的是，<strong>题解中单调队列里的pop和push接口，仅适用于本题。</strong></p><p><strong>单调队列不是一成不变的，而是不同场景不同写法</strong>，总之要保证队列里单调递减或递增的原则，所以叫做单调队列。</p><p><strong>不要以为本题中的单调队列实现就是固定的写法。</strong></p><p>我们用deque作为单调队列的底层数据结构，C++中deque是stack和queue默认的底层实现容器（这个我们之前已经讲过），deque是可以两边扩展的，而且deque里元素并不是严格的连续分布的。</p><h3 id="求前-k-个高频元素" tabindex="-1"><a class="header-anchor" href="#求前-k-个高频元素" aria-hidden="true">#</a> 求前 K 个高频元素</h3>',12),K={href:"https://programmercarl.com/0347.%E5%89%8DK%E4%B8%AA%E9%AB%98%E9%A2%91%E5%85%83%E7%B4%A0.html",target:"_blank",rel:"noopener noreferrer"},y=o('<p>通过求前 K 个高频元素，引出另一种队列就是<strong>优先级队列</strong>。</p><p>什么是优先级队列呢？</p><p>其实<strong>就是一个披着队列外衣的堆</strong>，因为优先级队列对外接口只是从队头取元素，从队尾添加元素，再无其他取元素的方式，看起来就是一个队列。</p><p>而且优先级队列内部元素是自动依照元素的权值排列。那么它是如何有序排列的呢？</p><p>缺省情况下priority_queue利用max-heap（大顶堆）完成对元素的排序，这个大顶堆是以vector为表现形式的complete binary tree（完全二叉树）。</p><p>什么是堆呢？</p><p><strong>堆是一棵完全二叉树，树中每个结点的值都不小于（或不大于）其左右孩子的值。</strong> 如果父亲结点是大于等于左右孩子就是大顶堆，小于等于左右孩子就是小顶堆。</p><p>所以大家经常说的大顶堆（堆头是最大元素），小顶堆（堆头是最小元素），如果懒得自己实现的话，就直接用priority_queue（优先级队列）就可以了，底层实现都是一样的，从小到大排就是小顶堆，从大到小排就是大顶堆。</p><p>本题就要<strong>使用优先级队列来对部分频率进行排序。</strong> 注意这里是对部分数据进行排序而不需要对所有数据排序！</p><p>所以排序的过程的时间复杂度是$O(\\log k)$，整个算法的时间复杂度是$O(n\\log k)$。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>在栈与队列系列中，我们强调栈与队列的基础，也是很多同学容易忽视的点。</p><p>使用抽象程度越高的语言，越容易忽视其底层实现，而C++相对来说是比较接近底层的语言。</p><p>我们用栈实现队列，用队列实现栈来掌握的栈与队列的基本操作。</p><p>接着，通过括号匹配问题、字符串去重问题、逆波兰表达式问题来系统讲解了栈在系统中的应用，以及使用技巧。</p><p>通过求滑动窗口最大值，以及前K个高频元素介绍了两种队列：单调队列和优先级队列，这是特殊场景解决问题的利器，是一定要掌握的。</p><p>好了，栈与队列我们就总结到这里了，接下来Carl就要带大家开启新的篇章了，大家加油！</p>',17);function z(L,N){const t=p("ExternalLinkIcon");return s(),l("div",null,[i,d,r("p",null,[e("首先我们在"),r("a",c,[e("栈与队列：来看看栈和队列不为人知的一面"),a(t)]),e("中讲解了栈和队列的理论基础。")]),E,r("p",null,[e("了解了栈与队列基础之后，那么可以用"),r("a",u,[e("栈与队列：栈实现队列"),a(t)]),e(" 和 "),r("a",_,[e("栈与队列：队列实现栈"),a(t)]),e(" 来练习一下栈与队列的基本操作。")]),r("p",null,[e("值得一提的是，用"),r("a",g,[e("栈与队列：用队列实现栈还有点别扭"),a(t)]),e("中，其实只用一个队列就够了。")]),m,r("p",null,[e("在"),r("a",A,[e("栈与队列：系统中处处都是栈的应用"),a(t)]),e("中我们讲解了括号匹配问题。")]),B,r("p",null,[e("在"),r("a",f,[e("栈与队列：匹配问题都是栈的强项"),a(t)]),e("中讲解了字符串去重问题。 1047. 删除字符串中的所有相邻重复项")]),b,k,r("p",null,[e("在"),r("a",x,[e("栈与队列：有没有想过计算机是如何处理表达式的？"),a(t)]),e("中讲解了求逆波兰表达式。")]),r("p",null,[e("本题中每一个子表达式要得出一个结果，然后拿这个结果再进行运算，那么"),r("strong",null,[e("这岂不就是一个相邻字符串消除的过程，和"),r("a",C,[e("栈与队列：匹配问题都是栈的强项"),a(t)]),e("中的对对碰游戏是不是就非常像了。")])]),q,v,r("p",null,[e("在"),r("a",D,[e("栈与队列：滑动窗口里求最大值引出一个重要数据结构"),a(t)]),e("中讲解了一种数据结构：单调队列。")]),F,r("p",null,[e("在"),r("a",K,[e("栈与队列：求前 K 个高频元素和队列有啥关系？"),a(t)]),e("中讲解了求前 K 个高频元素。")]),y])}const $=n(h,[["render",z],["__file","zhanyuduiliezongjie.html.vue"]]);export{$ as default};
