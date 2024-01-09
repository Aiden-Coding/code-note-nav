import{_ as e,r as t,o as p,c as o,a as n,b as a,d as c,e as l}from"./app-pMbPEaNl.js";const i={},r=n("h1",{id:"_24-反转链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_24-反转链表","aria-hidden":"true"},"#"),a(" 24. 反转链表")],-1),d={href:"https://www.nowcoder.com/practice/75e878df47f24fdc9dc3e400ec6058ca?tpId=13&tqId=11168&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},u=l(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="递归" tabindex="-1"><a class="header-anchor" href="#递归" aria-hidden="true">#</a> 递归</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">ReverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> head<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> head<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    head<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> newHead <span class="token operator">=</span> <span class="token class-name">ReverseList</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    next<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">return</span> newHead<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迭代" tabindex="-1"><a class="header-anchor" href="#迭代" aria-hidden="true">#</a> 迭代</h3><p>使用头插法。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">ReverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> newList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> newList<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        newList<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
        head <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> newList<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function k(v,h){const s=t("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[n("a",d,[a("NowCoder"),c(s)])]),u])}const b=e(i,[["render",k],["__file","24. fanzhuanlianbiao.html.vue"]]);export{b as default};