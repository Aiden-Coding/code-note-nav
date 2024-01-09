import{_ as s,r as l,o as a,c as p,a as e,b as i,d,e as r}from"./app-pMbPEaNl.js";const t={},o=e("h1",{id:"本周小结-动态规划系列一",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本周小结-动态规划系列一","aria-hidden":"true"},"#"),i(" 本周小结！（动态规划系列一）")],-1),c=e("p",null,"这周我们正式开始动态规划的学习！",-1),m=e("h2",{id:"周一",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周一","aria-hidden":"true"},"#"),i(" 周一")],-1),v={href:"https://programmercarl.com/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},u=r('<p>首先讲一下动规和贪心的区别，其实大家不用太强调理论上的区别，做做题，就感受出来了。</p><p>然后我们讲了动规的五部曲：</p><ol><li>确定dp数组（dp table）以及下标的含义</li><li>确定递推公式</li><li>dp数组如何初始化</li><li>确定遍历顺序</li><li>举例推导dp数组</li></ol><p>后序我们在讲解动规的题目时候，都离不开这五步！</p><p>本周都是简单题目，大家可能会感觉 按照这五部来好麻烦，凭感觉随手一写，直接就过，越到后面越会感觉，凭感觉这个事还是不靠谱的。</p><p>最后我们讲了动态规划题目应该如何debug，相信一些录友做动规的题目，一旦报错也是凭感觉来改。</p><p>其实只要把dp数组打印出来，哪里有问题一目了然！</p><p><strong>如果代码写出来了，一直AC不了，灵魂三问：</strong></p><ol><li>这道题目我举例推导状态转移公式了么？</li><li>我打印dp数组的日志了么？</li><li>打印出来了dp数组和我想的一样么？</li></ol><p>专治各种代码写出来了但AC不了的疑难杂症。</p><h2 id="周二" tabindex="-1"><a class="header-anchor" href="#周二" aria-hidden="true">#</a> 周二</h2>',11),h={href:"https://programmercarl.com/0509.%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91%E6%95%B0.html",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"简单题，我们就是用来了解方法论的，用动规五部曲走一遍，题目其实已经把递推公式，和dp数组如何初始化都给我们了。",-1),b=e("h2",{id:"周三",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周三","aria-hidden":"true"},"#"),i(" 周三")],-1),_={href:"https://programmercarl.com/0070.%E7%88%AC%E6%A5%BC%E6%A2%AF.html",target:"_blank",rel:"noopener noreferrer"},g=r(`<p>但正常思考过程应该是推导完递推公式之后，发现这是斐波那契，而不是上来就知道这是斐波那契。</p><p>在这道题目的第三步，确认dp数组如何初始化，其实就可以看出来，对dp[i]定义理解的深度。</p><p>dp[0]其实就是一个无意义的存在，不用去初始化dp[0]。</p><p>有的题解是把dp[0]初始化为1，然后遍历的时候i从2开始遍历，这样是可以解题的，然后强行解释一波dp[0]应该等于1的含义。</p><p>一个严谨的思考过程，应该是初始化dp[1] = 1，dp[2] = 2，然后i从3开始遍历，代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>dp[1] = 1;
dp[2] = 2;
for (int i = 3; i &lt;= n; i++) { // 注意i是从3开始的
    dp[i] = dp[i - 1] + dp[i - 2];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个可以是面试的一个小问题，考察候选人对dp[i]定义的理解程度。</p><p>这道题目还可以继续深化，就是一步一个台阶，两个台阶，三个台阶，直到 m个台阶，有多少种方法爬到n阶楼顶。</p><p>这又有难度了，这其实是一个完全背包问题，但力扣上没有这种题目，所以后续我在讲解背包问题的时候，今天这道题还会拿从背包问题的角度上来再讲一遍。</p><p>这里我先给出我的实现代码：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int climbStairs(int n) {
        vector&lt;int&gt; dp(n + 1, 0);
        dp[0] = 1;
        for (int i = 1; i &lt;= n; i++) {
            for (int j = 1; j &lt;= m; j++) { // 把m换成2，就可以AC爬楼梯这道题
                if (i - j &gt;= 0) dp[i] += dp[i - j];
            }
        }
        return dp[n];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码中m表示最多可以爬m个台阶。</p><p><strong>以上代码不能运行哈，我主要是为了体现只要把m换成2，粘过去，就可以AC爬楼梯这道题，不信你就粘一下试试</strong>。</p><p><strong>此时我就发现一个绝佳的大厂面试题</strong>，第一道题就是单纯的爬楼梯，然后看候选人的代码实现，如果把dp[0]的定义成1了，就可以发难了，为什么dp[0]一定要初始化为1，此时可能候选人就要强行给dp[0]应该是1找各种理由。那这就是一个考察点了，对dp[i]的定义理解的不深入。</p><p>然后可以继续发难，如果一步一个台阶，两个台阶，三个台阶，直到 m个台阶，有多少种方法爬到n阶楼顶。这道题目leetcode上并没有原题，绝对是考察候选人算法能力的绝佳好题。</p><p>这一连套问下来，候选人算法能力如何，面试官心里就有数了。</p><p><strong>其实大厂面试最喜欢问题的就是这种简单题，然后慢慢变化，在小细节上考察候选人</strong>。</p><p>这道绝佳的面试题我没有用过，如果录友们有面试别人的需求，就把这个套路拿去吧。</p>`,18),A={href:"https://programmercarl.com/%E5%89%8D%E5%BA%8F/%E9%80%9A%E8%BF%87%E4%B8%80%E9%81%93%E9%9D%A2%E8%AF%95%E9%A2%98%E7%9B%AE%EF%BC%8C%E8%AE%B2%E4%B8%80%E8%AE%B2%E9%80%92%E5%BD%92%E7%AE%97%E6%B3%95%E7%9A%84%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6%EF%BC%81.html",target:"_blank",rel:"noopener noreferrer"},B=e("h2",{id:"周四",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周四","aria-hidden":"true"},"#"),i(" 周四")],-1),f={href:"https://programmercarl.com/0746.%E4%BD%BF%E7%94%A8%E6%9C%80%E5%B0%8F%E8%8A%B1%E8%B4%B9%E7%88%AC%E6%A5%BC%E6%A2%AF.html",target:"_blank",rel:"noopener noreferrer"},C=r(`<p>这道题描述也确实有点魔幻。</p><p>题目描述为：每当你爬上一个阶梯你都要花费对应的体力值，一旦支付了相应的体力值，你就可以选择向上爬一个阶梯或者爬两个阶梯。</p><p>示例1：</p><p>输入：cost = [10, 15, 20] 输出：15</p><p><strong>从题目描述可以看出：要不是第一步不需要花费体力，要不就是第最后一步不需要花费体力，我个人理解：题意说的其实是第一步是要支付费用的！</strong>。因为是当你爬上一个台阶就要花费对应的体力值！</p><p>所以我定义的dp[i]意思是也是第一步是要花费体力的，最后一步不用花费体力了，因为已经支付了。</p><p>之后一些录友在留言区说 可以定义dp[i]为:第一步是不花费体力，最后一步是花费体力的。</p><p>所以代码也可以这么写：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>class Solution {
public:
    int minCostClimbingStairs(vector&lt;int&gt;&amp; cost) {
        vector&lt;int&gt; dp(cost.size() + 1);
        dp[0] = 0; // 默认第一步都是不花费体力的
        dp[1] = 0;
        for (int i = 2; i &lt;= cost.size(); i++) {
            dp[i] = min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
        }
        return dp[cost.size()];
    }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这么写看上去比较顺，但是就是感觉和题目描述的不太符。也没有必要这么细扣题意了，大家只要知道，题目的意思反正就是要不是第一步不花费，要不是最后一步不花费，都可以。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本周题目简单一些，也非常合适初学者来练练手。</p><p>下周开始上难度了哈，然后大下周就开始讲解背包问题，好戏还在后面，录友们跟上哈。</p><p>学算法，认准「代码随想录」就够了，Carl带你打怪升级！</p>`,14);function P(x,F){const n=l("ExternalLinkIcon");return a(),p("div",null,[o,c,m,e("p",null,[i("在"),e("a",v,[i("关于动态规划，你该了解这些！"),d(n)]),i("中我们讲解了动态规划的基础知识。")]),u,e("p",null,[i("这道题目"),e("a",h,[i("动态规划：斐波那契数"),d(n)]),i("是当之无愧的动规入门题。")]),E,b,e("p",null,[e("a",_,[i("动态规划：爬楼梯"),d(n)]),i(" 这道题目其实就是斐波那契数列。")]),g,e("p",null,[i("我在"),e("a",A,[i("通过一道面试题目，讲一讲递归算法的时间复杂度！"),d(n)]),i("中，以我自己面试别人的真实经历，通过求x的n次方 这么简单的题目，就可以考察候选人对算法性能以及递归的理解深度，录友们可以看看，绝对有收获！")]),B,e("p",null,[i("这道题目"),e("a",f,[i("动态规划：使用最小花费爬楼梯"),d(n)]),i("就是在爬台阶的基础上加了一个花费，")]),C])}const j=s(t,[["render",P],["__file","20210107dongguizhoumozongjie.html.vue"]]);export{j as default};