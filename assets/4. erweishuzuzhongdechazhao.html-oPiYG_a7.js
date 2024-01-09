import{_ as e,r as t,o as p,c as o,a as n,b as s,d as c,e as i}from"./app-pMbPEaNl.js";const l="/code-note-nav/assets/35a8c711-0dc0-4613-95f3-be96c6c6e104-b7FUGVfN.gif",r={},u=n("h1",{id:"_4-二维数组中的查找",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-二维数组中的查找","aria-hidden":"true"},"#"),s(" 4. 二维数组中的查找")],-1),d=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/abc3fe2ce8e146608e868a70efebf62e?tpId=13&tqId=11154&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>给定一个二维数组，其每一行从左到右递增排序，从上到下也是递增排序。给定一个数，判断这个数是否在该二维数组中。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Consider the following matrix:
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]

Given target = 5, return true.
Given target = 20, return false.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要求时间复杂度 O(M + N)，空间复杂度 O(1)。其中 M 为行数，N 为 列数。</p><p>该二维数组中的一个数，小于它的数一定在其左边，大于它的数一定在其下边。因此，从右上角开始查找，就可以根据 target 和当前元素的大小关系来快速地缩小查找区间，每次减少一行或者一列的元素。当前元素的查找区间为左下角的所有元素。</p><p><img src="`+l+`" alt="image-20220324093855618"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token class-name">Find</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>matrix <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> matrix<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> rows <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">,</span> cols <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> c <span class="token operator">=</span> cols <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 从右上角开始</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;=</span> rows <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> c <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">==</span> matrix<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&gt;</span> matrix<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span>
            r<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            c<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function m(b,h){const a=t("ExternalLinkIcon");return p(),o("div",null,[u,d,n("p",null,[n("a",k,[s("牛客网"),c(a)])]),v])}const _=e(r,[["render",m],["__file","4. erweishuzuzhongdechazhao.html.vue"]]);export{_ as default};