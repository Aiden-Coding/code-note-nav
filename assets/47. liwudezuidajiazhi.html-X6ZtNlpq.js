import{_ as t,r as p,o as e,c as o,a as n,b as s,d as c,e as l}from"./app-pMbPEaNl.js";const u={},i=n("h1",{id:"_47-礼物的最大价值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_47-礼物的最大价值","aria-hidden":"true"},"#"),s(" 47. 礼物的最大价值")],-1),r={href:"https://www.nowcoder.com/questionTerminal/72a99e28381a407991f2c96d8cb238ab",target:"_blank",rel:"noopener noreferrer"},k=l(`<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>在一个 m*n 的棋盘的每一个格都放有一个礼物，每个礼物都有一定价值（大于 0）。从左上角开始拿礼物，每次向右或向下移动一格，直到右下角结束。给定一个棋盘，求拿到礼物的最大价值。例如，对于如下棋盘</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1    10   3    8
12   2    9    6
5    7    4    11
3    7    16   5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>礼物的最大价值为 1+12+5+7+7+16+5=53。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>应该用动态规划求解，而不是深度优先搜索，深度优先搜索过于复杂，不是最优解。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getMost</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>values <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> values<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value <span class="token operator">:</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> value<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dp<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function d(v,m){const a=p("ExternalLinkIcon");return e(),o("div",null,[i,n("p",null,[n("a",r,[s("NowCoder"),c(a)])]),k])}const h=t(u,[["render",d],["__file","47. liwudezuidajiazhi.html.vue"]]);export{h as default};
