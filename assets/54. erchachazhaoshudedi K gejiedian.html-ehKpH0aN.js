import{_ as e,r as t,o,c as p,a as n,b as s,d as c,e as i}from"./app-pMbPEaNl.js";const l={},r=n("h1",{id:"_54-二叉查找树的第-k-个结点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_54-二叉查找树的第-k-个结点","aria-hidden":"true"},"#"),s(" 54. 二叉查找树的第 K 个结点")],-1),u={href:"https://www.nowcoder.com/practice/ef068f602dde4d28aab2b210e859150a?tpId=13&tqId=11215&tPage=1&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking&from=cyc_github",target:"_blank",rel:"noopener noreferrer"},d=i(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>利用二叉查找树中序遍历有序的特点。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">TreeNode</span> ret<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token class-name">TreeNode</span> <span class="token class-name">KthNode</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> pRoot<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>pRoot<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">inOrder</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> cnt <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cnt<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cnt <span class="token operator">==</span> k<span class="token punctuation">)</span>
        ret <span class="token operator">=</span> root<span class="token punctuation">;</span>
    <span class="token function">inOrder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function k(v,m){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,n("p",null,[n("a",u,[s("NowCoder"),c(a)])]),d])}const _=e(l,[["render",k],["__file","54. erchachazhaoshudedi K gejiedian.html.vue"]]);export{_ as default};