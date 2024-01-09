import{_ as p,o as s,c as n,e as a}from"./app-pMbPEaNl.js";const t={},e=a(`<blockquote><p>来看看栈和队列不为人知的一面</p></blockquote><h1 id="栈与队列理论基础" tabindex="-1"><a class="header-anchor" href="#栈与队列理论基础" aria-hidden="true">#</a> 栈与队列理论基础</h1><p>我想栈和队列的原理大家应该很熟悉了，队列是先进先出，栈是先进后出。</p><p>如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210104235346563.png" alt="栈与队列理论1"></p><p>那么我这里再列出四个关于栈的问题，大家可以思考一下。以下是以C++为例，使用其他编程语言的同学也对应思考一下，自己使用的编程语言里栈和队列是什么样的。</p><ol><li>C++中stack 是容器么？</li><li>我们使用的stack是属于哪个版本的STL？</li><li>我们使用的STL中stack是如何实现的？</li><li>stack 提供迭代器来遍历stack空间么？</li></ol><p>相信这四个问题并不那么好回答， 因为一些同学使用数据结构会停留在非常表面上的应用，稍稍往深一问，就会有好像懂，好像也不懂的感觉。</p><p>有的同学可能仅仅知道有栈和队列这么个数据结构，却不知道底层实现，也不清楚所使用栈和队列和STL是什么关系。</p><p>所以这里我再给大家扫一遍基础知识，</p><p>首先大家要知道 栈和队列是STL（C++标准库）里面的两个数据结构。</p><p>C++标准库是有多个版本的，要知道我们使用的STL是哪个版本，才能知道对应的栈和队列的实现原理。</p><p>那么来介绍一下，三个最为普遍的STL版本：</p><ol><li><p>HP STL 其他版本的C++ STL，一般是以HP STL为蓝本实现出来的，HP STL是C++ STL的第一个实现版本，而且开放源代码。</p></li><li><p>P.J.Plauger STL 由P.J.Plauger参照HP STL实现出来的，被Visual C++编译器所采用，不是开源的。</p></li><li><p>SGI STL 由Silicon Graphics Computer Systems公司参照HP STL实现，被Linux的C++编译器GCC所采用，SGI STL是开源软件，源码可读性甚高。</p></li></ol><p>接下来介绍的栈和队列也是SGI STL里面的数据结构， 知道了使用版本，才知道对应的底层实现。</p><p>来说一说栈，栈先进后出，如图所示：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210104235434905.png" alt="栈与队列理论2"></p><p>栈提供push 和 pop 等等接口，所有元素必须符合先进后出规则，所以栈不提供走访功能，也不提供迭代器(iterator)。 不像是set 或者map 提供迭代器iterator来遍历所有元素。</p><p><strong>栈是以底层容器完成其所有的工作，对外提供统一的接口，底层容器是可插拔的（也就是说我们可以控制使用哪种容器来实现栈的功能）。</strong></p><p>所以STL中栈往往不被归类为容器，而被归类为container adapter（容器适配器）。</p><p>那么问题来了，STL 中栈是用什么容器实现的？</p><p>从下图中可以看出，栈的内部结构，栈的底层实现可以是vector，deque，list 都是可以的， 主要就是数组和链表的底层实现。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20210104235459376.png" alt="栈与队列理论3"></p><p><strong>我们常用的SGI STL，如果没有指定底层实现的话，默认是以deque为缺省情况下栈的底层结构。</strong></p><p>deque是一个双向队列，只要封住一段，只开通另一端就可以实现栈的逻辑了。</p><p><strong>SGI STL中 队列底层实现缺省情况下一样使用deque实现的。</strong></p><p>我们也可以指定vector为栈的底层实现，初始化语句如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> <span class="token operator">&gt;</span> third<span class="token punctuation">;</span>  <span class="token comment">// 使用vector为底层容器的栈</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>刚刚讲过栈的特性，对应的队列的情况是一样的。</p><p>队列中先进先出的数据结构，同样不允许有遍历行为，不提供迭代器, <strong>SGI STL中队列一样是以deque为缺省情况下的底部结构。</strong></p><p>也可以指定list 为起底层实现，初始化queue的语句如下：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>queue<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token punctuation">,</span> std<span class="token double-colon punctuation">::</span>list<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;&gt;</span> third<span class="token punctuation">;</span> <span class="token comment">// 定义以list为底层容器的队列</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以STL 队列也不被归类为容器，而被归类为container adapter（ 容器适配器）。</p><p>我这里讲的都是C++ 语言中的情况， 使用其他语言的同学也要思考栈与队列的底层实现问题， 不要对数据结构的使用浅尝辄止，而要深挖其内部原理，才能夯实基础。</p>`,34),o=[e];function c(l,i){return s(),n("div",null,o)}const u=p(t,[["render",c],["__file","zhanyuduilielilunjichu.html.vue"]]);export{u as default};
