import{_ as e,r as o,o as c,c as l,a as n,b as s,d as p,e as t}from"./app-pMbPEaNl.js";const u={},i=n("h1",{id:"_189-旋转数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_189-旋转数组","aria-hidden":"true"},"#"),s(" 189. 旋转数组")],-1),r={href:"https://leetcode.cn/problems/rotate-array/",target:"_blank",rel:"noopener noreferrer"},k=t('<p>给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。</p><p>进阶：</p><p>尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？</p><p>示例 1:</p><ul><li>输入: nums = [1,2,3,4,5,6,7], k = 3</li><li>输出: [5,6,7,1,2,3,4]</li><li>解释: 向右旋转 1 步: [7,1,2,3,4,5,6]。 向右旋转 2 步: [6,7,1,2,3,4,5]。 向右旋转 3 步: [5,6,7,1,2,3,4]。</li></ul><p>示例 2:</p><ul><li>输入：nums = [-1,-100,3,99], k = 2</li><li>输出：[3,99,-1,-100]</li><li>解释: 向右旋转 1 步: [99,-1,-100,3]。 向右旋转 2 步: [3,99,-1,-100]。</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题目在字符串里其实很常见，我把字符串反转相关的题目列一下：</p>',9),d={href:"https://programmercarl.com/0541.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2II.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://programmercarl.com/0151.%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%87%8C%E7%9A%84%E5%8D%95%E8%AF%8D.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://programmercarl.com/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"},b={href:"https://programmercarl.com/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,[s("注意题目要求是"),n("strong",null,"要求使用空间复杂度为 O(1) 的 原地 算法")],-1),f=n("p",null,"那么我来提供一种旋转的方式哈。",-1),g={href:"https://programmercarl.com/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html",target:"_blank",rel:"noopener noreferrer"},y=t(`<ol><li>反转区间为前n的子串</li><li>反转区间为n到末尾的子串</li><li>反转整个字符串</li></ol><p>本题是右旋转，其实就是反转的顺序改动一下，优先反转整个字符串，步骤如下：</p><ol><li>反转整个字符串</li><li>反转区间为前k的子串</li><li>反转区间为k到末尾的子串</li></ol><p><strong>需要注意的是，本题还有一个小陷阱，题目输入中，如果k大于nums.size了应该怎么办？</strong></p><p>举个例子，比较容易想，</p><p>例如，1,2,3,4,5,6,7 如果右移动15次的话，是 7 1 2 3 4 5 6 。</p><p>所以其实就是右移 k % nums.size() 次，即：15 % 7 = 1</p><p>C++代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    void rotate(vector&lt;int&gt;&amp; nums, int k) {
        k = k % nums.size();
        reverse(nums.begin(), nums.end());
        reverse(nums.begin(), nums.begin() + k);
        reverse(nums.begin() + k, nums.end());

    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> start<span class="token punctuation">,</span> j <span class="token operator">=</span> end<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">,</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
            nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        k <span class="token operator">%=</span> n<span class="token punctuation">;</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> k<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><p>方法一：局部翻转 + 整体翻转</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">rotate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> A<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        <span class="token keyword">def</span> <span class="token function">reverse</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">while</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">:</span>
                A<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> A<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> A<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
                i <span class="token operator">+=</span> <span class="token number">1</span>
                j <span class="token operator">-=</span> <span class="token number">1</span>
        n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>A<span class="token punctuation">)</span>
        k <span class="token operator">%=</span> n
        reverse<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        reverse<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
        reverse<span class="token punctuation">(</span>k<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：利用余数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">rotate</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        copy <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            nums<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">+</span> k<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token builtin">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> copy<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        
        <span class="token keyword">return</span> nums

        <span class="token comment"># 备注：这个方法会导致空间复杂度变成 O(n) 因为我们要创建一个 copy 数组。但是不失为一种思路。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">rotate</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    l<span class="token operator">:=</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    index<span class="token operator">:=</span>l<span class="token operator">-</span>k<span class="token operator">%</span>l
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span><span class="token punctuation">:</span>l<span class="token operator">-</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>l<span class="token operator">-</span>index<span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">func</span> <span class="token function">reverse</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    l<span class="token operator">:=</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>l<span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>l<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">rotate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 解构赋值</span>
      i<span class="token operator">++</span><span class="token punctuation">;</span>
      j<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  k <span class="token operator">%=</span> n<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> k<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">rotate</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> k<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    k <span class="token operator">%=</span> length<span class="token punctuation">;</span>
    <span class="token function">reverseByRange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">reverseByRange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">reverseByRange</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> k<span class="token punctuation">,</span> length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">reverseByRange</span><span class="token punctuation">(</span>nums<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> left<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> right<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
        left<span class="token operator">++</span><span class="token punctuation">;</span>
        right<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function _(w,E){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("p",null,[n("a",r,[s("力扣题目链接"),p(a)])]),k,n("ul",null,[n("li",null,[n("a",d,[s("字符串：力扣541.反转字符串II"),p(a)])]),n("li",null,[n("a",v,[s("字符串：力扣151.翻转字符串里的单词"),p(a)])]),n("li",null,[n("a",m,[s("字符串：剑指Offer58-II.左旋转字符串"),p(a)])])]),n("p",null,[s("本题其实和"),n("a",b,[s("字符串：剑指Offer58-II.左旋转字符串"),p(a)]),s("就非常像了，剑指offer上左旋转，本题是右旋转。")]),h,f,n("p",null,[s("在"),n("a",g,[s("字符串：剑指Offer58-II.左旋转字符串"),p(a)]),s("中，我们提到，如下步骤就可以坐旋转字符串：")]),y])}const B=e(u,[["render",_],["__file","0189.xuanzhuanshuzu.html.vue"]]);export{B as default};