import{_ as e,r as c,o,c as i,a as n,b as s,d as t,e as p}from"./app-pMbPEaNl.js";const l={},u=n("h1",{id:"_797-所有可能的路径",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_797-所有可能的路径","aria-hidden":"true"},"#"),s(" 797.所有可能的路径")],-1),r={href:"https://leetcode.cn/problems/all-paths-from-source-to-target/",target:"_blank",rel:"noopener noreferrer"},d=p('<p>给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）</p><p>graph[i] 是一个从节点 i 可以访问的所有节点的列表（即从节点 i 到节点 graph[i][j]存在一条有向边）。</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20221203135439.png" alt=""></p><p>提示：</p><ul><li>n == graph.length</li><li>2 &lt;= n &lt;= 15</li><li>0 &lt;= graph[i][j] &lt; n</li><li>graph[i][j] != i（即不存在自环）</li><li>graph[i] 中的所有元素 互不相同</li><li>保证输入为 有向无环图（DAG）</li></ul><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>这道题目是深度优先搜索，比较好的入门题。</p>',7),k={href:"https://programmercarl.com/%E5%9B%BE%E8%AE%BA%E6%B7%B1%E6%90%9C%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},v=n("p",null,"我依然总结了深搜三部曲，如果按照代码随想录刷题的录友，应该刷过 二叉树的递归三部曲，回溯三部曲。",-1),m=n("p",null,[n("strong",null,"大家可能有疑惑，深搜 和 二叉树和回溯算法 有什么区别呢"),s("？ 什么时候用深搜 什么时候用回溯？")],-1),b={href:"https://programmercarl.com/%E4%BA%8C%E5%8F%89%E6%A0%91%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html",target:"_blank",rel:"noopener noreferrer"},h=n("strong",null,"二叉树的前中后序遍历其实就是深搜在二叉树这种数据结构上的应用",-1),g=p(`<p>那么回溯算法呢，<strong>其实 回溯算法就是 深搜，只不过 我们给他一个更细分的定义，叫做回溯算法</strong>。</p><p>那有的录友可能说：那我以后称回溯算法为深搜，是不是没毛病？</p><p>理论上来说，没毛病，但 就像是 二叉树 你不叫它二叉树，叫它数据结构，有问题不？ 也没问题对吧。</p><p>建议是 有细分的场景，还是称其细分场景的名称。 所以回溯算法可以独立出来，但回溯确实就是深搜。</p><p>接下来我们使用深搜三部曲来分析题目：</p><ol><li>确认递归函数，参数</li></ol><p>首先我们dfs函数一定要存一个图，用来遍历的，还要存一个目前我们遍历的节点，定义为x</p><p>至于 单一路径，和路径集合可以放在全局变量，那么代码是这样的：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>vector&lt;vector&lt;int&gt;&gt; result; // 收集符合条件的路径
vector&lt;int&gt; path; // 0节点到终点的路径
// x：目前遍历的节点
// graph：存当前的图
void dfs (vector&lt;vector&lt;int&gt;&gt;&amp; graph, int x) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>确认终止条件</li></ol><p>什么时候我们就找到一条路径了？</p><p>当目前遍历的节点 为 最后一个节点的时候，就找到了一条，从 出发点到终止点的路径。</p><p>当前遍历的节点，我们定义为x，最后一点节点，就是 graph.size() - 1（因为题目描述是找出所有从节点 0 到节点 n-1 的路径并输出）。</p><p>所以 但 x 等于 graph.size() - 1 的时候就找到一条有效路径。 代码如下：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>// 要求从节点 0 到节点 n-1 的路径并输出，所以是 graph.size() - 1
if (x == graph.size() - 1) { // 找到符合条件的一条路径
    result.push_back(path); // 收集有效路径
    return;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>处理目前搜索节点出发的路径</li></ol><p>接下来是走 当前遍历节点x的下一个节点。</p><p>首先是要找到 x节点链接了哪些节点呢？ 遍历方式是这样的：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>for (int i = 0; i &lt; graph[x].size(); i++) { // 遍历节点n链接的所有节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>接下来就是将 选中的x所连接的节点，加入到 单一路径来。</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>path.push_back(graph[x][i]); // 遍历到的节点加入到路径中来

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一些录友可以疑惑这里如果找到x 链接的节点的，例如如果x目前是节点0，那么目前的过程就是这样的：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20221204111937.png" alt=""></p><p>二维数组中，graph[x][i] 都是x链接的节点，当前遍历的节点就是 <code>graph[x][i]</code> 。</p><p>进入下一层递归</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>dfs(graph, graph[x][i]); // 进入下一层递归
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后就是回溯的过程，撤销本次添加节点的操作。 该过程整体代码：</p><div class="language-C++ line-numbers-mode" data-ext="C++"><pre class="language-C++"><code>for (int i = 0; i &lt; graph[x].size(); i++) { // 遍历节点n链接的所有节点
    path.push_back(graph[x][i]); // 遍历到的节点加入到路径中来
    dfs(graph, graph[x][i]); // 进入下一层递归
    path.pop_back(); // 回溯，撤销本节点
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本题整体代码如下：</p><div class="language-c++ line-numbers-mode" data-ext="c++"><pre class="language-c++"><code>class Solution {
private:
    vector&lt;vector&lt;int&gt;&gt; result; // 收集符合条件的路径
    vector&lt;int&gt; path; // 0节点到终点的路径
    // x：目前遍历的节点
    // graph：存当前的图
    void dfs (vector&lt;vector&lt;int&gt;&gt;&amp; graph, int x) {
        // 要求从节点 0 到节点 n-1 的路径并输出，所以是 graph.size() - 1
        if (x == graph.size() - 1) { // 找到符合条件的一条路径
            result.push_back(path);
            return;
        }
        for (int i = 0; i &lt; graph[x].size(); i++) { // 遍历节点n链接的所有节点
            path.push_back(graph[x][i]); // 遍历到的节点加入到路径中来
            dfs(graph, graph[x][i]); // 进入下一层递归
            path.pop_back(); // 回溯，撤销本节点
        }
    }
public:
    vector&lt;vector&lt;int&gt;&gt; allPathsSourceTarget(vector&lt;vector&lt;int&gt;&gt;&amp; graph) {
        path.push_back(0); // 无论什么路径已经是从0节点出发
        dfs(graph, 0); // 开始遍历
        return result;
    }
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本题是比较基础的深度优先搜索模板题，这种有向图路径问题，最合适使用深搜，当然本题也可以使用广搜，但广搜相对来说就麻烦了一些，需要记录一下路径。</p><p>而深搜和广搜都适合解决颜色类的问题，例如岛屿系列，其实都是 遍历+标记，所以使用哪种遍历都是可以的。</p><p>至于广搜理论基础，我们在下一篇在好好讲解，敬请期待！</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 深度优先遍历
class Solution {
    List&lt;List&lt;Integer&gt;&gt; ans;		// 用来存放满足条件的路径
    List&lt;Integer&gt; cnt;		// 用来保存 dfs 过程中的节点值

    public void dfs(int[][] graph, int node) {
        if (node == graph.length - 1) {		// 如果当前节点是 n - 1，那么就保存这条路径
            ans.add(new ArrayList&lt;&gt;(cnt));
            return;
        }
        for (int index = 0; index &lt; graph[node].length; index++) {
            int nextNode = graph[node][index];
            cnt.add(nextNode);
            dfs(graph, nextNode);
            cnt.remove(cnt.size() - 1);		// 回溯
        }
    }

    public List&lt;List&lt;Integer&gt;&gt; allPathsSourceTarget(int[][] graph) {
        ans = new ArrayList&lt;&gt;();
        cnt = new ArrayList&lt;&gt;();
        cnt.add(0);			// 注意，0 号节点要加入 cnt 数组中
        dfs(graph, 0);
        return ans;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        self<span class="token punctuation">.</span>path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

    <span class="token keyword">def</span> <span class="token function">allPathsSourceTarget</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> graph<span class="token punctuation">:</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span>List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> graph<span class="token punctuation">:</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

        self<span class="token punctuation">.</span>dfs<span class="token punctuation">(</span>graph<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>result
    
    <span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> graph<span class="token punctuation">,</span> root<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> root <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>graph<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">:</span>  <span class="token comment"># 成功找到一条路径时</span>
            <span class="token comment"># ***Python的list是mutable类型***</span>
            <span class="token comment"># ***回溯中必须使用Deep Copy***</span>
            self<span class="token punctuation">.</span>result<span class="token punctuation">.</span>append<span class="token punctuation">(</span>self<span class="token punctuation">.</span>path<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
            <span class="token keyword">return</span>
        
        <span class="token keyword">for</span> node <span class="token keyword">in</span> graph<span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">:</span>   <span class="token comment"># 遍历节点n的所有后序节点</span>
            self<span class="token punctuation">.</span>path<span class="token punctuation">.</span>append<span class="token punctuation">(</span>node<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>dfs<span class="token punctuation">(</span>graph<span class="token punctuation">,</span> node<span class="token punctuation">)</span>
            self<span class="token punctuation">.</span>path<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 回溯</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">allPathsSourceTarget</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">graph</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>path<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>

    <span class="token keyword">function</span> <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">graph<span class="token punctuation">,</span>start</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>start<span class="token operator">===</span>graph<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>path<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>graph<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>graph<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span>graph<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> res
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">allPathsSourceTarget</span><span class="token punctuation">(</span>graph <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span> <span class="token punctuation">{</span>
    result <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>

    <span class="token keyword">var</span> dfs <span class="token keyword">func</span><span class="token punctuation">(</span>path <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> step <span class="token builtin">int</span><span class="token punctuation">)</span>
    dfs <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>path <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> step <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 从0遍历到length-1</span>
        <span class="token keyword">if</span> step <span class="token operator">==</span> <span class="token function">len</span><span class="token punctuation">(</span>graph<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">{</span>
            tmp <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">copy</span><span class="token punctuation">(</span>tmp<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
            result <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> tmp<span class="token punctuation">)</span>
            <span class="token keyword">return</span> 
        <span class="token punctuation">}</span>

        <span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>graph<span class="token punctuation">[</span>step<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">{</span>
            next <span class="token operator">:=</span> <span class="token function">append</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> graph<span class="token punctuation">[</span>step<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token function">dfs</span><span class="token punctuation">(</span>next<span class="token punctuation">,</span> graph<span class="token punctuation">[</span>step<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 从0开始，开始push 0进去</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result 
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">impl</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">all_paths_source_target</span><span class="token punctuation">(</span>graph<span class="token punctuation">:</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> <span class="token punctuation">(</span><span class="token keyword">mut</span> res<span class="token punctuation">,</span> <span class="token keyword">mut</span> path<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token macro property">vec!</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">dfs</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>graph<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> path<span class="token punctuation">,</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> res<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        res
    <span class="token punctuation">}</span>

    <span class="token keyword">pub</span> <span class="token keyword">fn</span> <span class="token function-definition function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> res<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token keyword">mut</span> <span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token class-name">Vec</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span> node<span class="token punctuation">:</span> <span class="token keyword">usize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> node <span class="token operator">==</span> graph<span class="token punctuation">.</span><span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token operator">&amp;</span>v <span class="token keyword">in</span> <span class="token operator">&amp;</span>graph<span class="token punctuation">[</span>node<span class="token punctuation">]</span> <span class="token punctuation">{</span>
            path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">Self</span><span class="token punctuation">::</span><span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> path<span class="token punctuation">,</span> res<span class="token punctuation">,</span> v <span class="token keyword">as</span> <span class="token keyword">usize</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            path<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45);function f(y,x){const a=c("ExternalLinkIcon");return o(),i("div",null,[u,n("p",null,[n("a",r,[s("力扣题目链接"),t(a)])]),d,n("p",null,[s("如果对深度优先搜索还不够了解，可以先看这里："),n("a",k,[s("深度优先搜索的理论基础"),t(a)])]),v,m,n("p",null,[s("我在讲解"),n("a",b,[s("二叉树理论基础"),t(a)]),s("的时候，提到过，"),h,s("。")]),g])}const _=e(l,[["render",f],["__file","0797.suoyoukenendelujing.html.vue"]]);export{_ as default};