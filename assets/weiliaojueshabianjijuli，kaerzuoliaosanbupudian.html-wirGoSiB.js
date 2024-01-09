import{_ as e,r as o,o as i,c as l,a as s,b as n,d as p,e as t}from"./app-pMbPEaNl.js";const c={},r=s("h1",{id:"动态规划之编辑距离总结篇",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#动态规划之编辑距离总结篇","aria-hidden":"true"},"#"),n(" 动态规划之编辑距离总结篇")],-1),d=s("p",null,"本周我们讲了动态规划之终极绝杀：编辑距离，为什么叫做终极绝杀呢？",-1),u=s("p",null,"细心的录友应该知道，我们在前三篇动态规划的文章就一直为 编辑距离 这道题目做铺垫。",-1),k=s("h2",{id:"判断子序列",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#判断子序列","aria-hidden":"true"},"#"),n(" 判断子序列")],-1),m={href:"https://programmercarl.com/0392.%E5%88%A4%E6%96%AD%E5%AD%90%E5%BA%8F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>这道题目 其实是可以用双指针或者贪心的的，但是我在开篇的时候就说了这是编辑距离的入门题目，因为从题意中我们也可以发现，只需要计算删除的情况，不用考虑增加和替换的情况。</p><ul><li>if (s[i - 1] == t[j - 1]) <ul><li>t中找到了一个字符在s中也出现了</li></ul></li><li>if (s[i - 1] != t[j - 1]) <ul><li>相当于t要删除元素，继续匹配</li></ul></li></ul><p>状态转移方程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (s[i - 1] == t[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
else dp[i][j] = dp[i][j - 1];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不同的子序列" tabindex="-1"><a class="header-anchor" href="#不同的子序列" aria-hidden="true">#</a> 不同的子序列</h2>`,5),h={href:"https://programmercarl.com/0115.%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%90%E5%BA%8F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},j={href:"https://programmercarl.com/0392.%E5%88%A4%E6%96%AD%E5%AD%90%E5%BA%8F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>当s[i - 1] 与 t[j - 1]相等时，dp[i][j]可以有两部分组成。</p><p>一部分是用s[i - 1]来匹配，那么个数为dp[i - 1][j - 1]。</p><p>一部分是不用s[i - 1]来匹配，个数为dp[i - 1][j]。</p><p>这里可能有同学不明白了，为什么还要考虑 不用s[i - 1]来匹配，都相同了指定要匹配啊。</p><p>例如： s：bagg 和 t：bag ，s[3] 和 t[2]是相同的，但是字符串s也可以不用s[3]来匹配，即用s[0]s[1]s[2]组成的bag。</p><p>当然也可以用s[3]来匹配，即：s[0]s[1]s[3]组成的bag。</p><p>所以当s[i - 1] 与 t[j - 1]相等时，dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];</p><p>当s[i - 1] 与 t[j - 1]不相等时，dp[i][j]只有一部分组成，不用s[i - 1]来匹配，即：dp[i - 1][j]</p><p>所以递推公式为：dp[i][j] = dp[i - 1][j];</p><p>状态转移方程：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (s[i - 1] == t[j - 1]) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
} else {
    dp[i][j] = dp[i - 1][j];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两个字符串的删除操作" tabindex="-1"><a class="header-anchor" href="#两个字符串的删除操作" aria-hidden="true">#</a> 两个字符串的删除操作</h2>`,12),w={href:"https://programmercarl.com/0583.%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C.html",target:"_blank",rel:"noopener noreferrer"},E={href:"https://programmercarl.com/0115.%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%90%E5%BA%8F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},_=t(`<ul><li>当word1[i - 1] 与 word2[j - 1]相同的时候</li><li>当word1[i - 1] 与 word2[j - 1]不相同的时候</li></ul><p>当word1[i - 1] 与 word2[j - 1]相同的时候，dp[i][j] = dp[i - 1][j - 1];</p><p>当word1[i - 1] 与 word2[j - 1]不相同的时候，有三种情况：</p><p>情况一：删word1[i - 1]，最少操作次数为dp[i - 1][j] + 1</p><p>情况二：删word2[j - 1]，最少操作次数为dp[i][j - 1] + 1</p><p>情况三：同时删word1[i - 1]和word2[j - 1]，操作的最少次数为dp[i - 1][j - 1] + 2</p><p>那最后当然是取最小值，所以当word1[i - 1] 与 word2[j - 1]不相同的时候，递推公式：dp[i][j] = min({dp[i - 1][j - 1] + 2, dp[i - 1][j] + 1, dp[i][j - 1] + 1});</p><p>状态转移方程：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (word1[i - 1] == word2[j - 1]) {
    dp[i][j] = dp[i - 1][j - 1];
} else {
    dp[i][j] = min({dp[i - 1][j - 1] + 2, dp[i - 1][j] + 1, dp[i][j - 1] + 1});
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编辑距离" tabindex="-1"><a class="header-anchor" href="#编辑距离" aria-hidden="true">#</a> 编辑距离</h2>`,10),f={href:"https://programmercarl.com/0072.%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB.html",target:"_blank",rel:"noopener noreferrer"},g=s("strong",null,"有了前面三道题目的铺垫，应该有思路了",-1),A={href:"https://programmercarl.com/0392.%E5%88%A4%E6%96%AD%E5%AD%90%E5%BA%8F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},B={href:"https://programmercarl.com/0115.%E4%B8%8D%E5%90%8C%E7%9A%84%E5%AD%90%E5%BA%8F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},x={href:"https://programmercarl.com/0583.%E4%B8%A4%E4%B8%AA%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%9A%84%E5%88%A0%E9%99%A4%E6%93%8D%E4%BD%9C.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<p>在确定递推公式的时候，首先要考虑清楚编辑的几种操作，整理如下：</p><ul><li>if (word1[i - 1] == word2[j - 1]) <ul><li>不操作</li></ul></li><li>if (word1[i - 1] != word2[j - 1]) <ul><li>增</li><li>删</li><li>换</li></ul></li></ul><p>也就是如上四种情况。</p><p>if (word1[i - 1] == word2[j - 1]) 那么说明不用任何编辑，dp[i][j] 就应该是 dp[i - 1][j - 1]，即dp[i][j] = dp[i - 1][j - 1];</p><p>此时可能有同学有点不明白，为啥要即dp[i][j] = dp[i - 1][j - 1]呢？</p><p>那么就在回顾上面讲过的dp[i][j]的定义，word1[i - 1] 与 word2[j - 1]相等了，那么就不用编辑了，以下标i-2为结尾的字符串word1和以下标j-2为结尾的字符串word2的最近编辑距离dp[i - 1][j - 1] 就是 dp[i][j]了。</p><p>在下面的讲解中，如果哪里看不懂，就回想一下dp[i][j]的定义，就明白了。</p><p><strong>在整个动规的过程中，最为关键就是正确理解dp[i][j]的定义！</strong></p><p>if (word1[i - 1] != word2[j - 1])，此时就需要编辑了，如何编辑呢？</p><p>操作一：word1增加一个元素，使其word1[i - 1]与word2[j - 1]相同，那么就是以下标i-2为结尾的word1 与 i-1为结尾的word2的最近编辑距离 加上一个增加元素的操作。</p><p>即 dp[i][j] = dp[i - 1][j] + 1;</p><p>操作二：word2添加一个元素，使其word1[i - 1]与word2[j - 1]相同，那么就是以下标i-1为结尾的word1 与 j-2为结尾的word2的最近编辑距离 加上一个增加元素的操作。</p><p>即 dp[i][j] = dp[i][j - 1] + 1;</p><p>这里有同学发现了，怎么都是添加元素，删除元素去哪了。</p><p><strong>word2添加一个元素，相当于word1删除一个元素</strong>，例如 word1 = &quot;ad&quot; ，word2 = &quot;a&quot;，word2添加一个元素d，也就是相当于word1删除一个元素d，操作数是一样！</p><p>操作三：替换元素，word1替换word1[i - 1]，使其与word2[j - 1]相同，此时不用增加元素，那么以下标i-2为结尾的word1 与 j-2为结尾的word2的最近编辑距离 加上一个替换元素的操作。</p><p>即 dp[i][j] = dp[i - 1][j - 1] + 1;</p><p>综上，当 if (word1[i - 1] != word2[j - 1]) 时取最小的，即：dp[i][j] = min({dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]}) + 1;</p><p>递归公式代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>if (word1[i - 1] == word2[j - 1]) {
    dp[i][j] = dp[i - 1][j - 1];
}
else {
    dp[i][j] = min({dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]}) + 1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>`,21),D={href:"https://programmercarl.com/0072.%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB.html",target:"_blank",rel:"noopener noreferrer"},C=t(`<h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">minDistance</span><span class="token punctuation">(</span><span class="token class-name">String</span> word1<span class="token punctuation">,</span> <span class="token class-name">String</span> word2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> m <span class="token operator">=</span> word1<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> word2<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>m<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">int</span> left <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> mid <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">int</span> right <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>word1<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">!=</span> word2<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                    mid <span class="token operator">++</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>mid<span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dp<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function P(F,q){const a=o("ExternalLinkIcon");return i(),l("div",null,[r,d,u,k,s("p",null,[s("a",m,[n("动态规划：392.判断子序列"),p(a)]),n(" 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。")]),v,s("p",null,[s("a",h,[n("动态规划：115.不同的子序列"),p(a)]),n(" 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。")]),s("p",null,[n("本题虽然也只有删除操作，不用考虑替换增加之类的，但相对于"),s("a",j,[n("动态规划：392.判断子序列"),p(a)]),n("就有难度了，这道题目双指针法可就做不了。")]),b,s("p",null,[s("a",w,[n("动态规划：583.两个字符串的删除操作"),p(a)]),n("给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最少步数，每步可以删除任意一个字符串中的一个字符。")]),s("p",null,[n("本题和"),s("a",E,[n("动态规划：115.不同的子序列"),p(a)]),n("相比，其实就是两个字符串可以都可以删除了，情况虽说复杂一些，但整体思路是不变的。")]),_,s("p",null,[s("a",f,[n("动态规划：72.编辑距离"),p(a)]),n(" 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。")]),s("p",null,[n("编辑距离终于来了，"),g,n("，本题是两个字符串可以增删改，比 "),s("a",A,[n("动态规划：判断子序列"),p(a)]),n("，"),s("a",B,[n("动态规划：不同的子序列"),p(a)]),n("，"),s("a",x,[n("动态规划：两个字符串的删除操作"),p(a)]),n("都要复杂的多。")]),y,s("p",null,[n("心思的录友应该会发现我用了三道题做铺垫，才最后引出了"),s("a",D,[n("动态规划：72.编辑距离"),p(a)]),n(" ，Carl的良苦用心呀，你们体会到了嘛！")]),C])}const S=e(c,[["render",P],["__file","weiliaojueshabianjijuli，kaerzuoliaosanbupudian.html.vue"]]);export{S as default};
