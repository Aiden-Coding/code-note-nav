import{_ as e,r as t,o,c,a as n,b as a,d as p,e as i}from"./app-pMbPEaNl.js";const r="/code-note-nav/assets/image-20201105004127554-r67XqueU.png",l={},d=n("h1",{id:"_15-二进制中-1-的个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_15-二进制中-1-的个数","aria-hidden":"true"},"#"),a(" 15. 二进制中 1 的个数")],-1),u=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),a(" 题目链接")],-1),k={href:"https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8?tpId=13&tqId=11164&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},h=i('<h2 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h2><p>输入一个整数，输出该数二进制表示中 1 的个数。</p><h3 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h3><p>n&amp;(n-1) 位运算可以将 n 的位级表示中最低的那一位 1 设置为 0。不断将 1 设置为 0，直到 n 为 0。时间复杂度：O(M)，其中 M 表示 1 的个数。</p><p><img src="'+r+`" alt="image-20220324093855618"></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">NumberOf1</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        cnt<span class="token operator">++</span><span class="token punctuation">;</span>
        n <span class="token operator">&amp;=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cnt<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function _(m,v){const s=t("ExternalLinkIcon");return o(),c("div",null,[d,u,n("p",null,[n("a",k,[a("牛客网"),p(s)])]),h])}const g=e(l,[["render",_],["__file","15. erjinzhizhong 1 degeshu.html.vue"]]);export{g as default};