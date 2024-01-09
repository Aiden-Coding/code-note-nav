import{_ as p,r as t,o as e,c as o,a as n,b as s,d as c,e as i}from"./app-pMbPEaNl.js";const u={},l=n("h1",{id:"_56-数组中只出现一次的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_56-数组中只出现一次的数字","aria-hidden":"true"},"#"),s(" 56. 数组中只出现一次的数字")],-1),r=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/389fc1c3d3be4479a154f63f495abff8?tpId=13&tqId=11193&tab=answerKey&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},d=i(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>一个整型数组里除了两个数字之外，其他的数字都出现了两次，找出这两个数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>两个相等的元素异或的结果为 0，而 0 与任意数 x 异或的结果都为 x。</p><p>对本题给的数组的所有元素执行异或操作，得到的是两个不存在重复的元素异或的结果。例如对于数组 [x,x,y,y,z,k]，x^x^y^y^z^k = 0^y^y^z^k = y^y^z^k = 0^z^k = z^k。</p><p>两个不相等的元素在位级表示上一定会有所不同，因此这两个元素异或得到的结果 diff 一定不为 0。位运算 diff &amp; -diff 能得到 diff 位级表示中最右侧为 1 的位，令 diff = diff &amp; -diff。将 diff 作为区分两个元素的依据，一定有一个元素对 diff 进行异或的结果为 0，另一个结果非 0。设不相等的两个元素分别为 z 和 k，遍历数组所有元素，判断元素与 diff 的异或结果是否为 0，如果是的话将元素与 z 进行异或并赋值给 z，否则与 k 进行异或并赋值给 k。数组中相等的元素一定会同时与 z 或者与 k 进行异或操作，而不是一个与 z 进行异或，一个与 k 进行异或。而且这些相等的元素异或的结果为 0，因此最后 z 和 k 只是不相等的两个元素与 0 异或的结果，也就是不相等两个元素本身。</p><p>下面的解法中，num1 和 num2 数组的第一个元素是用来保持返回值的... 实际开发中不推荐这种返回值的方式。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token class-name">FindNumsAppearOnce</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> diff <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span>
        diff <span class="token operator">^=</span> num<span class="token punctuation">;</span>
    diff <span class="token operator">&amp;=</span> <span class="token operator">-</span>diff<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> num <span class="token operator">:</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">&amp;</span> diff<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">^=</span> num<span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">^=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">swap</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> t <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    nums<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> t<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(v,f){const a=t("ExternalLinkIcon");return e(),o("div",null,[l,r,n("p",null,[n("a",k,[s("牛客网"),c(a)])]),d])}const h=p(u,[["render",m],["__file","56. shuzuzhongzhichuxianyicideshuzi.html.vue"]]);export{h as default};