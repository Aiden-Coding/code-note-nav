import{_ as t,r as p,o as i,c as l,a as n,b as s,d as c,e as a}from"./app-pMbPEaNl.js";const o={},d=a(`<h1 id="sql-练习" tabindex="-1"><a class="header-anchor" href="#sql-练习" aria-hidden="true">#</a> SQL 练习</h1><h2 id="_595-big-countries" tabindex="-1"><a class="header-anchor" href="#_595-big-countries" aria-hidden="true">#</a> 595. Big Countries</h2><p>https://leetcode.com/problems/big-countries/description/</p><h3 id="description" tabindex="-1"><a class="header-anchor" href="#description" aria-hidden="true">#</a> Description</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+-----------------+------------+------------+--------------+---------------+
| name            | continent  | area       | population   | gdp           |
+-----------------+------------+------------+--------------+---------------+
| Afghanistan     | Asia       | 652230     | 25500100     | 20343000      |
| Albania         | Europe     | 28748      | 2831741      | 12960000      |
| Algeria         | Africa     | 2381741    | 37100000     | 188681000     |
| Andorra         | Europe     | 468        | 78115        | 3712000       |
| Angola          | Africa     | 1246700    | 20609294     | 100990000     |
+-----------------+------------+------------+--------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找面积超过 3,000,000 或者人口数超过 25,000,000 的国家。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+--------------+-------------+--------------+
| name         | population  | area         |
+--------------+-------------+--------------+
| Afghanistan  | 25500100    | 652230       |
| Algeria      | 37100000    | 2381741      |
+--------------+-------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> name<span class="token punctuation">,</span>
    population<span class="token punctuation">,</span>
    area
<span class="token keyword">FROM</span>
    World
<span class="token keyword">WHERE</span>
    area <span class="token operator">&gt;</span> <span class="token number">3000000</span>
    <span class="token operator">OR</span> population <span class="token operator">&gt;</span> <span class="token number">25000000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema" tabindex="-1"><a class="header-anchor" href="#sql-schema" aria-hidden="true">#</a> SQL Schema</h3><p>SQL Schema 用于在本地环境下创建表结构并导入数据，从而方便在本地环境调试。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> World<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> World <span class="token punctuation">(</span> NAME <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> continent <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> area <span class="token keyword">INT</span><span class="token punctuation">,</span> population <span class="token keyword">INT</span><span class="token punctuation">,</span> gdp <span class="token keyword">INT</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> World <span class="token punctuation">(</span> NAME<span class="token punctuation">,</span> continent<span class="token punctuation">,</span> area<span class="token punctuation">,</span> population<span class="token punctuation">,</span> gdp <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;Afghanistan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Asia&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;652230&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;25500100&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;203430000&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;Albania&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Europe&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;28748&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2831741&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;129600000&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;Algeria&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Africa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2381741&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;37100000&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1886810000&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;Andorra&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Europe&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;468&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;78115&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;37120000&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;Angola&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Africa&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1246700&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;20609294&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1009900000&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_627-swap-salary" tabindex="-1"><a class="header-anchor" href="#_627-swap-salary" aria-hidden="true">#</a> 627. Swap Salary</h2><p>https://leetcode.com/problems/swap-salary/description/</p><h3 id="description-1" tabindex="-1"><a class="header-anchor" href="#description-1" aria-hidden="true">#</a> Description</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>| id | name | sex | salary |
|----|------|-----|--------|
| 1  | A    | m   | 2500   |
| 2  | B    | f   | 1500   |
| 3  | C    | m   | 5500   |
| 4  | D    | f   | 500    |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只用一个 SQL 查询，将 sex 字段反转。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>| id | name | sex | salary |
|----|------|-----|--------|
| 1  | A    | f   | 2500   |
| 2  | B    | m   | 1500   |
| 3  | C    | f   | 5500   |
| 4  | D    | m   | 500    |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-1" tabindex="-1"><a class="header-anchor" href="#solution-1" aria-hidden="true">#</a> Solution</h3><p>两个相等的数异或的结果为 0，而 0 与任何一个数异或的结果为这个数。</p><p>sex 字段只有两个取值：&#39;f&#39; 和 &#39;m&#39;，并且有以下规律：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&#39;f&#39; ^ (&#39;m&#39; ^ &#39;f&#39;) = &#39;m&#39; ^ (&#39;f&#39; ^ &#39;f&#39;) = &#39;m&#39;
&#39;m&#39; ^ (&#39;m&#39; ^ &#39;f&#39;) = &#39;f&#39; ^ (&#39;m&#39; ^ &#39;m&#39;) = &#39;f&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>因此将 sex 字段和 &#39;m&#39; ^ &#39;f&#39; 进行异或操作，最后就能反转 sex 字段。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">UPDATE</span> salary
<span class="token keyword">SET</span> sex <span class="token operator">=</span> <span class="token keyword">CHAR</span> <span class="token punctuation">(</span> ASCII<span class="token punctuation">(</span>sex<span class="token punctuation">)</span> <span class="token operator">^</span> ASCII<span class="token punctuation">(</span> <span class="token string">&#39;m&#39;</span> <span class="token punctuation">)</span> <span class="token operator">^</span> ASCII<span class="token punctuation">(</span> <span class="token string">&#39;f&#39;</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-1" tabindex="-1"><a class="header-anchor" href="#sql-schema-1" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> salary<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> salary <span class="token punctuation">(</span> id <span class="token keyword">INT</span><span class="token punctuation">,</span> NAME <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">100</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> sex <span class="token keyword">CHAR</span> <span class="token punctuation">(</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> salary <span class="token keyword">INT</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> salary <span class="token punctuation">(</span> id<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span> sex<span class="token punctuation">,</span> salary <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2500&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1500&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;m&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5500&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_620-not-boring-movies" tabindex="-1"><a class="header-anchor" href="#_620-not-boring-movies" aria-hidden="true">#</a> 620. Not Boring Movies</h2><p>https://leetcode.com/problems/not-boring-movies/description/</p><h3 id="description-2" tabindex="-1"><a class="header-anchor" href="#description-2" aria-hidden="true">#</a> Description</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   1     | War       |   great 3D   |   8.9     |
|   2     | Science   |   fiction    |   8.5     |
|   3     | irish     |   boring     |   6.2     |
|   4     | Ice song  |   Fantacy    |   8.6     |
|   5     | House card|   Interesting|   9.1     |
+---------+-----------+--------------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找 id 为奇数，并且 description 不是 boring 的电影，按 rating 降序。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+---------+-----------+--------------+-----------+
|   id    | movie     |  description |  rating   |
+---------+-----------+--------------+-----------+
|   5     | House card|   Interesting|   9.1     |
|   1     | War       |   great 3D   |   8.9     |
+---------+-----------+--------------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-2" tabindex="-1"><a class="header-anchor" href="#solution-2" aria-hidden="true">#</a> Solution</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    <span class="token operator">*</span>
<span class="token keyword">FROM</span>
    cinema
<span class="token keyword">WHERE</span>
    id <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token operator">AND</span> description <span class="token operator">!=</span> <span class="token string">&#39;boring&#39;</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    rating <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-2" tabindex="-1"><a class="header-anchor" href="#sql-schema-2" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> cinema<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> cinema <span class="token punctuation">(</span> id <span class="token keyword">INT</span><span class="token punctuation">,</span> movie <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> description <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> rating <span class="token keyword">FLOAT</span> <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> cinema <span class="token punctuation">(</span> id<span class="token punctuation">,</span> movie<span class="token punctuation">,</span> description<span class="token punctuation">,</span> rating <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;War&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;great 3D&#39;</span><span class="token punctuation">,</span> <span class="token number">8.9</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Science&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fiction&#39;</span><span class="token punctuation">,</span> <span class="token number">8.5</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;irish&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;boring&#39;</span><span class="token punctuation">,</span> <span class="token number">6.2</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Ice song&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Fantacy&#39;</span><span class="token punctuation">,</span> <span class="token number">8.6</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&#39;House card&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Interesting&#39;</span><span class="token punctuation">,</span> <span class="token number">9.1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_596-classes-more-than-5-students" tabindex="-1"><a class="header-anchor" href="#_596-classes-more-than-5-students" aria-hidden="true">#</a> 596. Classes More Than 5 Students</h2><p>https://leetcode.com/problems/classes-more-than-5-students/description/</p><h3 id="description-3" tabindex="-1"><a class="header-anchor" href="#description-3" aria-hidden="true">#</a> Description</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+---------+------------+
| student | class      |
+---------+------------+
| A       | Math       |
| B       | English    |
| C       | Math       |
| D       | Biology    |
| E       | Math       |
| F       | Computer   |
| G       | Math       |
| H       | Math       |
| I       | Math       |
+---------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找有五名及以上 student 的 class。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+---------+
| class   |
+---------+
| Math    |
+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-3" tabindex="-1"><a class="header-anchor" href="#solution-3" aria-hidden="true">#</a> Solution</h3><p>对 class 列进行分组之后，再使用 count 汇总函数统计每个分组的记录个数，之后使用 HAVING 进行筛选。HAVING 针对分组进行筛选，而 WHERE 针对每个记录（行）进行筛选。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    class
<span class="token keyword">FROM</span>
    courses
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
    class
<span class="token keyword">HAVING</span>
    <span class="token function">count</span><span class="token punctuation">(</span> <span class="token keyword">DISTINCT</span> student <span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-3" tabindex="-1"><a class="header-anchor" href="#sql-schema-3" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> courses<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> courses <span class="token punctuation">(</span> student <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> class <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> courses <span class="token punctuation">(</span> student<span class="token punctuation">,</span> class <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Math&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;English&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Math&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Biology&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Math&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Computer&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;G&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Math&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;H&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Math&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Math&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_182-duplicate-emails" tabindex="-1"><a class="header-anchor" href="#_182-duplicate-emails" aria-hidden="true">#</a> 182. Duplicate Emails</h2><p>https://leetcode.com/problems/duplicate-emails/description/</p><h3 id="description-4" tabindex="-1"><a class="header-anchor" href="#description-4" aria-hidden="true">#</a> Description</h3><p>邮件地址表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+---------+
| Id | Email   |
+----+---------+
| 1  | a@b.com |
| 2  | c@d.com |
| 3  | a@b.com |
+----+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找重复的邮件地址：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+---------+
| Email   |
+---------+
| a@b.com |
+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-4" tabindex="-1"><a class="header-anchor" href="#solution-4" aria-hidden="true">#</a> Solution</h3><p>对 Email 进行分组，如果并使用 COUNT 进行计数统计，结果大于等于 2 的表示 Email 重复。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    Email
<span class="token keyword">FROM</span>
    Person
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
    Email
<span class="token keyword">HAVING</span>
    <span class="token function">COUNT</span><span class="token punctuation">(</span> <span class="token operator">*</span> <span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-4" tabindex="-1"><a class="header-anchor" href="#sql-schema-4" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> Person<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Person <span class="token punctuation">(</span> Id <span class="token keyword">INT</span><span class="token punctuation">,</span> Email <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Person <span class="token punctuation">(</span> Id<span class="token punctuation">,</span> Email <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;a@b.com&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;c@d.com&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;a@b.com&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_196-delete-duplicate-emails" tabindex="-1"><a class="header-anchor" href="#_196-delete-duplicate-emails" aria-hidden="true">#</a> 196. Delete Duplicate Emails</h2><p>https://leetcode.com/problems/delete-duplicate-emails/description/</p><h3 id="description-5" tabindex="-1"><a class="header-anchor" href="#description-5" aria-hidden="true">#</a> Description</h3><p>邮件地址表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+---------+
| Id | Email   |
+----+---------+
| 1  | john@example.com |
| 2  | bob@example.com |
| 3  | john@example.com |
+----+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除重复的邮件地址：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+------------------+
| Id | Email            |
+----+------------------+
| 1  | john@example.com |
| 2  | bob@example.com  |
+----+------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-5" tabindex="-1"><a class="header-anchor" href="#solution-5" aria-hidden="true">#</a> Solution</h3><p>只保留相同 Email 中 Id 最小的那一个，然后删除其它的。</p><p>连接查询：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> p1
<span class="token keyword">FROM</span>
    Person p1<span class="token punctuation">,</span>
    Person p2
<span class="token keyword">WHERE</span>
    p1<span class="token punctuation">.</span>Email <span class="token operator">=</span> p2<span class="token punctuation">.</span>Email
    <span class="token operator">AND</span> p1<span class="token punctuation">.</span>Id <span class="token operator">&gt;</span> p2<span class="token punctuation">.</span>Id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子查询：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span>
<span class="token keyword">FROM</span>
    Person
<span class="token keyword">WHERE</span>
    id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span>
        <span class="token keyword">SELECT</span> id 
        <span class="token keyword">FROM</span> <span class="token punctuation">(</span> 
            <span class="token keyword">SELECT</span> <span class="token function">min</span><span class="token punctuation">(</span> id <span class="token punctuation">)</span> <span class="token keyword">AS</span> id 
            <span class="token keyword">FROM</span> Person
            <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> email
        <span class="token punctuation">)</span> <span class="token keyword">AS</span> m
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>应该注意的是上述解法额外嵌套了一个 SELECT 语句，如果不这么做，会出现错误：You can&#39;t specify target table &#39;Person&#39; for update in FROM clause。以下演示了这种错误解法。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span>
<span class="token keyword">FROM</span>
    Person
<span class="token keyword">WHERE</span>
    id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span> 
        <span class="token keyword">SELECT</span> <span class="token function">min</span><span class="token punctuation">(</span> id <span class="token punctuation">)</span> <span class="token keyword">AS</span> id 
        <span class="token keyword">FROM</span> Person 
        <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> email 
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,74),r={href:"https://stackoverflow.com/questions/45494/mysql-error-1093-cant-specify-target-table-for-update-in-from-clause",target:"_blank",rel:"noopener noreferrer"},u=a(`<h3 id="sql-schema-5" tabindex="-1"><a class="header-anchor" href="#sql-schema-5" aria-hidden="true">#</a> SQL Schema</h3><p>与 182 相同。</p><h2 id="_175-combine-two-tables" tabindex="-1"><a class="header-anchor" href="#_175-combine-two-tables" aria-hidden="true">#</a> 175. Combine Two Tables</h2><p>https://leetcode.com/problems/combine-two-tables/description/</p><h3 id="description-6" tabindex="-1"><a class="header-anchor" href="#description-6" aria-hidden="true">#</a> Description</h3><p>Person 表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| PersonId    | int     |
| FirstName   | varchar |
| LastName    | varchar |
+-------------+---------+
PersonId is the primary key column for this table.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Address 表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| AddressId   | int     |
| PersonId    | int     |
| City        | varchar |
| State       | varchar |
+-------------+---------+
AddressId is the primary key column for this table.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找 FirstName, LastName, City, State 数据，而不管一个用户有没有填地址信息。</p><h3 id="solution-6" tabindex="-1"><a class="header-anchor" href="#solution-6" aria-hidden="true">#</a> Solution</h3><p>涉及到 Person 和 Address 两个表，在对这两个表执行连接操作时，因为要保留 Person 表中的信息，即使在 Address 表中没有关联的信息也要保留。此时可以用左外连接，将 Person 表放在 LEFT JOIN 的左边。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    FirstName<span class="token punctuation">,</span>
    LastName<span class="token punctuation">,</span>
    City<span class="token punctuation">,</span>
    State
<span class="token keyword">FROM</span>
    Person P
    <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> Address A
    <span class="token keyword">ON</span> P<span class="token punctuation">.</span>PersonId <span class="token operator">=</span> A<span class="token punctuation">.</span>PersonId<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-6" tabindex="-1"><a class="header-anchor" href="#sql-schema-6" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> Person<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Person <span class="token punctuation">(</span> PersonId <span class="token keyword">INT</span><span class="token punctuation">,</span> FirstName <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> LastName <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> Address<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Address <span class="token punctuation">(</span> AddressId <span class="token keyword">INT</span><span class="token punctuation">,</span> PersonId <span class="token keyword">INT</span><span class="token punctuation">,</span> City <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> State <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Person <span class="token punctuation">(</span> PersonId<span class="token punctuation">,</span> LastName<span class="token punctuation">,</span> FirstName <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Wang&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Allen&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Address <span class="token punctuation">(</span> AddressId<span class="token punctuation">,</span> PersonId<span class="token punctuation">,</span> City<span class="token punctuation">,</span> State <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;New York City&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;New York&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_181-employees-earning-more-than-their-managers" tabindex="-1"><a class="header-anchor" href="#_181-employees-earning-more-than-their-managers" aria-hidden="true">#</a> 181. Employees Earning More Than Their Managers</h2><p>https://leetcode.com/problems/employees-earning-more-than-their-managers/description/</p><h3 id="description-7" tabindex="-1"><a class="header-anchor" href="#description-7" aria-hidden="true">#</a> Description</h3><p>Employee 表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找薪资大于其经理薪资的员工信息。</p><h3 id="solution-7" tabindex="-1"><a class="header-anchor" href="#solution-7" aria-hidden="true">#</a> Solution</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    E1<span class="token punctuation">.</span>NAME <span class="token keyword">AS</span> Employee
<span class="token keyword">FROM</span>
    Employee E1
    <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> Employee E2
    <span class="token keyword">ON</span> E1<span class="token punctuation">.</span>ManagerId <span class="token operator">=</span> E2<span class="token punctuation">.</span>Id
    <span class="token operator">AND</span> E1<span class="token punctuation">.</span>Salary <span class="token operator">&gt;</span> E2<span class="token punctuation">.</span>Salary<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-7" tabindex="-1"><a class="header-anchor" href="#sql-schema-7" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> Employee<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Employee <span class="token punctuation">(</span> Id <span class="token keyword">INT</span><span class="token punctuation">,</span> NAME <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> Salary <span class="token keyword">INT</span><span class="token punctuation">,</span> ManagerId <span class="token keyword">INT</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Employee <span class="token punctuation">(</span> Id<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span> Salary<span class="token punctuation">,</span> ManagerId <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Joe&#39;</span><span class="token punctuation">,</span> <span class="token number">70000</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Henry&#39;</span><span class="token punctuation">,</span> <span class="token number">80000</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Sam&#39;</span><span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Max&#39;</span><span class="token punctuation">,</span> <span class="token number">90000</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_183-customers-who-never-order" tabindex="-1"><a class="header-anchor" href="#_183-customers-who-never-order" aria-hidden="true">#</a> 183. Customers Who Never Order</h2><p>https://leetcode.com/problems/customers-who-never-order/description/</p><h3 id="description-8" tabindex="-1"><a class="header-anchor" href="#description-8" aria-hidden="true">#</a> Description</h3><p>Customers 表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Orders 表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找没有订单的顾客信息：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-8" tabindex="-1"><a class="header-anchor" href="#solution-8" aria-hidden="true">#</a> Solution</h3><p>左外链接</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    C<span class="token punctuation">.</span>Name <span class="token keyword">AS</span> Customers
<span class="token keyword">FROM</span>
    Customers C
    <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> Orders O
    <span class="token keyword">ON</span> C<span class="token punctuation">.</span>Id <span class="token operator">=</span> O<span class="token punctuation">.</span>CustomerId
<span class="token keyword">WHERE</span>
    O<span class="token punctuation">.</span>CustomerId <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    Name <span class="token keyword">AS</span> Customers
<span class="token keyword">FROM</span>
    Customers
<span class="token keyword">WHERE</span>
    Id <span class="token operator">NOT</span> <span class="token operator">IN</span> <span class="token punctuation">(</span> 
        <span class="token keyword">SELECT</span> CustomerId 
        <span class="token keyword">FROM</span> Orders 
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-8" tabindex="-1"><a class="header-anchor" href="#sql-schema-8" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> Customers<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Customers <span class="token punctuation">(</span> Id <span class="token keyword">INT</span><span class="token punctuation">,</span> NAME <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> Orders<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Orders <span class="token punctuation">(</span> Id <span class="token keyword">INT</span><span class="token punctuation">,</span> CustomerId <span class="token keyword">INT</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Customers <span class="token punctuation">(</span> Id<span class="token punctuation">,</span> NAME <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Joe&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Henry&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Sam&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Max&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Orders <span class="token punctuation">(</span> Id<span class="token punctuation">,</span> CustomerId <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_184-department-highest-salary" tabindex="-1"><a class="header-anchor" href="#_184-department-highest-salary" aria-hidden="true">#</a> 184. Department Highest Salary</h2><p>https://leetcode.com/problems/department-highest-salary/description/</p><h3 id="description-9" tabindex="-1"><a class="header-anchor" href="#description-9" aria-hidden="true">#</a> Description</h3><p>Employee 表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+-------+--------+--------------+
| Id | Name  | Salary | DepartmentId |
+----+-------+--------+--------------+
| 1  | Joe   | 70000  | 1            |
| 2  | Henry | 80000  | 2            |
| 3  | Sam   | 60000  | 2            |
| 4  | Max   | 90000  | 1            |
+----+-------+--------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Department 表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+----------+
| Id | Name     |
+----+----------+
| 1  | IT       |
| 2  | Sales    |
+----+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找一个 Department 中收入最高者的信息：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+------------+----------+--------+
| Department | Employee | Salary |
+------------+----------+--------+
| IT         | Max      | 90000  |
| Sales      | Henry    | 80000  |
+------------+----------+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-9" tabindex="-1"><a class="header-anchor" href="#solution-9" aria-hidden="true">#</a> Solution</h3><p>创建一个临时表，包含了部门员工的最大薪资。可以对部门进行分组，然后使用 MAX() 汇总函数取得最大薪资。</p><p>之后使用连接找到一个部门中薪资等于临时表中最大薪资的员工。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    D<span class="token punctuation">.</span>NAME Department<span class="token punctuation">,</span>
    E<span class="token punctuation">.</span>NAME Employee<span class="token punctuation">,</span>
    E<span class="token punctuation">.</span>Salary
<span class="token keyword">FROM</span>
    Employee E<span class="token punctuation">,</span>
    Department D<span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> DepartmentId<span class="token punctuation">,</span> <span class="token function">MAX</span><span class="token punctuation">(</span> Salary <span class="token punctuation">)</span> Salary 
     <span class="token keyword">FROM</span> Employee 
     <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> DepartmentId <span class="token punctuation">)</span> M
<span class="token keyword">WHERE</span>
    E<span class="token punctuation">.</span>DepartmentId <span class="token operator">=</span> D<span class="token punctuation">.</span>Id
    <span class="token operator">AND</span> E<span class="token punctuation">.</span>DepartmentId <span class="token operator">=</span> M<span class="token punctuation">.</span>DepartmentId
    <span class="token operator">AND</span> E<span class="token punctuation">.</span>Salary <span class="token operator">=</span> M<span class="token punctuation">.</span>Salary<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-9" tabindex="-1"><a class="header-anchor" href="#sql-schema-9" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> Employee<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Employee <span class="token punctuation">(</span> Id <span class="token keyword">INT</span><span class="token punctuation">,</span> NAME <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span><span class="token punctuation">,</span> Salary <span class="token keyword">INT</span><span class="token punctuation">,</span> DepartmentId <span class="token keyword">INT</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> Department<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Department <span class="token punctuation">(</span> Id <span class="token keyword">INT</span><span class="token punctuation">,</span> NAME <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Employee <span class="token punctuation">(</span> Id<span class="token punctuation">,</span> NAME<span class="token punctuation">,</span> Salary<span class="token punctuation">,</span> DepartmentId <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;Joe&#39;</span><span class="token punctuation">,</span> <span class="token number">70000</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Henry&#39;</span><span class="token punctuation">,</span> <span class="token number">80000</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;Sam&#39;</span><span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token string">&#39;Max&#39;</span><span class="token punctuation">,</span> <span class="token number">90000</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Department <span class="token punctuation">(</span> Id<span class="token punctuation">,</span> NAME <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;IT&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;Sales&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_176-second-highest-salary" tabindex="-1"><a class="header-anchor" href="#_176-second-highest-salary" aria-hidden="true">#</a> 176. Second Highest Salary</h2><p>https://leetcode.com/problems/second-highest-salary/description/</p><h3 id="description-10" tabindex="-1"><a class="header-anchor" href="#description-10" aria-hidden="true">#</a> Description</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+--------+
| Id | Salary |
+----+--------+
| 1  | 100    |
| 2  | 200    |
| 3  | 300    |
+----+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找工资第二高的员工。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+---------------------+
| SecondHighestSalary |
+---------------------+
| 200                 |
+---------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没有找到返回 null 而不是不返回数据。</p><h3 id="solution-10" tabindex="-1"><a class="header-anchor" href="#solution-10" aria-hidden="true">#</a> Solution</h3><p>为了在没有查找到数据时返回 null，需要在查询结果外面再套一层 SELECT。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> Salary 
     <span class="token keyword">FROM</span> Employee 
     <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> Salary <span class="token keyword">DESC</span> 
     <span class="token keyword">LIMIT</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span> SecondHighestSalary<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-10" tabindex="-1"><a class="header-anchor" href="#sql-schema-10" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> Employee<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Employee <span class="token punctuation">(</span> Id <span class="token keyword">INT</span><span class="token punctuation">,</span> Salary <span class="token keyword">INT</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Employee <span class="token punctuation">(</span> Id<span class="token punctuation">,</span> Salary <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">200</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">300</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_177-nth-highest-salary" tabindex="-1"><a class="header-anchor" href="#_177-nth-highest-salary" aria-hidden="true">#</a> 177. Nth Highest Salary</h2><h3 id="description-11" tabindex="-1"><a class="header-anchor" href="#description-11" aria-hidden="true">#</a> Description</h3><p>查找工资第 N 高的员工。</p><h3 id="solution-11" tabindex="-1"><a class="header-anchor" href="#solution-11" aria-hidden="true">#</a> Solution</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> getNthHighestSalary <span class="token punctuation">(</span> N <span class="token keyword">INT</span> <span class="token punctuation">)</span> <span class="token keyword">RETURNS</span> <span class="token keyword">INT</span> <span class="token keyword">BEGIN</span>

<span class="token keyword">SET</span> N <span class="token operator">=</span> N <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">RETURN</span> <span class="token punctuation">(</span> 
    <span class="token keyword">SELECT</span> <span class="token punctuation">(</span> 
        <span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> Salary 
        <span class="token keyword">FROM</span> Employee 
        <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> Salary <span class="token keyword">DESC</span> 
        <span class="token keyword">LIMIT</span> N<span class="token punctuation">,</span> <span class="token number">1</span> 
    <span class="token punctuation">)</span> 
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-11" tabindex="-1"><a class="header-anchor" href="#sql-schema-11" aria-hidden="true">#</a> SQL Schema</h3><p>同 176。</p><h2 id="_178-rank-scores" tabindex="-1"><a class="header-anchor" href="#_178-rank-scores" aria-hidden="true">#</a> 178. Rank Scores</h2><p>https://leetcode.com/problems/rank-scores/description/</p><h3 id="description-12" tabindex="-1"><a class="header-anchor" href="#description-12" aria-hidden="true">#</a> Description</h3><p>得分表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+-------+
| Id | Score |
+----+-------+
| 1  | 3.50  |
| 2  | 3.65  |
| 3  | 4.00  |
| 4  | 3.85  |
| 5  | 4.00  |
| 6  | 3.65  |
+----+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将得分排序，并统计排名。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+-------+------+
| Score | Rank |
+-------+------+
| 4.00  | 1    |
| 4.00  | 1    |
| 3.85  | 2    |
| 3.65  | 3    |
| 3.65  | 3    |
| 3.50  | 4    |
+-------+------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-12" tabindex="-1"><a class="header-anchor" href="#solution-12" aria-hidden="true">#</a> Solution</h3><p>要统计某个 score 的排名，只要统计大于等于该 score 的 score 数量。</p><table><thead><tr><th style="text-align:center;">Id</th><th style="text-align:center;">score</th><th style="text-align:center;">大于等于该 score 的 score 数量</th><th style="text-align:center;">排名</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td><td style="text-align:center;">3</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td><td style="text-align:center;">2</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">4.3</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td></tr></tbody></table><p>使用连接操作找到某个 score 对应的大于等于其值的记录：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
	<span class="token operator">*</span>
<span class="token keyword">FROM</span>
    Scores S1
    <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> Scores S2
    <span class="token keyword">ON</span> S1<span class="token punctuation">.</span>score <span class="token operator">&lt;=</span> S2<span class="token punctuation">.</span>score
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    S1<span class="token punctuation">.</span>score <span class="token keyword">DESC</span><span class="token punctuation">,</span> S1<span class="token punctuation">.</span>Id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">S1.Id</th><th style="text-align:center;">S1.score</th><th style="text-align:center;">S2.Id</th><th style="text-align:center;">S2.score</th></tr></thead><tbody><tr><td style="text-align:center;">3</td><td style="text-align:center;">4.3</td><td style="text-align:center;">3</td><td style="text-align:center;">4.3</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td><td style="text-align:center;">3</td><td style="text-align:center;">4.3</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td><td style="text-align:center;">3</td><td style="text-align:center;">4.3</td></tr></tbody></table><p>可以看到每个 S1.score 都有对应好几条记录，我们再进行分组，并统计每个分组的数量作为 &#39;Rank&#39;</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    S1<span class="token punctuation">.</span>score <span class="token string">&#39;Score&#39;</span><span class="token punctuation">,</span>
    <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token string">&#39;Rank&#39;</span>
<span class="token keyword">FROM</span>
    Scores S1
    <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> Scores S2
    <span class="token keyword">ON</span> S1<span class="token punctuation">.</span>score <span class="token operator">&lt;=</span> S2<span class="token punctuation">.</span>score
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
    S1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> S1<span class="token punctuation">.</span>score
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    S1<span class="token punctuation">.</span>score <span class="token keyword">DESC</span><span class="token punctuation">,</span> S1<span class="token punctuation">.</span>Id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;">score</th><th style="text-align:center;">Rank</th></tr></thead><tbody><tr><td style="text-align:center;">4.3</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">4.2</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">4.1</td><td style="text-align:center;">3</td></tr></tbody></table><p>上面的解法看似没问题，但是对于以下数据，它却得到了错误的结果：</p><table><thead><tr><th style="text-align:center;">Id</th><th style="text-align:center;">score</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">4.2</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">score</th><th style="text-align:center;">Rank</th></tr></thead><tbody><tr><td style="text-align:center;">4.2</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">4.2</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">4.1</td><td style="text-align:center;">3</td></tr></tbody></table><p>而我们希望的结果为：</p><table><thead><tr><th style="text-align:center;">score</th><th style="text-align:center;">Rank</th></tr></thead><tbody><tr><td style="text-align:center;">4.2</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">4.2</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">4.1</td><td style="text-align:center;">2</td></tr></tbody></table><p>连接情况如下：</p><table><thead><tr><th style="text-align:center;">S1.Id</th><th style="text-align:center;">S1.score</th><th style="text-align:center;">S2.Id</th><th style="text-align:center;">S2.score</th></tr></thead><tbody><tr><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td><td style="text-align:center;">3</td><td style="text-align:center;">4.2</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">4.2</td><td style="text-align:center;">3</td><td style="text-align:center;">4.2</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">4.2</td><td style="text-align:center;">2</td><td style="text-align:center;">4.1</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td><td style="text-align:center;">3</td><td style="text-align:center;">4.2</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td><td style="text-align:center;">2</td><td style="text-align:center;">4.2</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td><td style="text-align:center;">1</td><td style="text-align:center;">4.1</td></tr></tbody></table><p>我们想要的结果是，把分数相同的放在同一个排名，并且相同分数只占一个位置，例如上面的分数，Id=2 和 Id=3 的记录都有相同的分数，并且最高，他们并列第一。而 Id=1 的记录应该排第二名，而不是第三名。所以在进行 COUNT 计数统计时，我们需要使用 COUNT( DISTINCT S2.score ) 从而只统计一次相同的分数。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    S1<span class="token punctuation">.</span>score <span class="token string">&#39;Score&#39;</span><span class="token punctuation">,</span>
    <span class="token function">COUNT</span><span class="token punctuation">(</span> <span class="token keyword">DISTINCT</span> S2<span class="token punctuation">.</span>score <span class="token punctuation">)</span> <span class="token string">&#39;Rank&#39;</span>
<span class="token keyword">FROM</span>
    Scores S1
    <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> Scores S2
    <span class="token keyword">ON</span> S1<span class="token punctuation">.</span>score <span class="token operator">&lt;=</span> S2<span class="token punctuation">.</span>score
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span>
    S1<span class="token punctuation">.</span>id<span class="token punctuation">,</span> S1<span class="token punctuation">.</span>score
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    S1<span class="token punctuation">.</span>score <span class="token keyword">DESC</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-12" tabindex="-1"><a class="header-anchor" href="#sql-schema-12" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> Scores<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> Scores <span class="token punctuation">(</span> Id <span class="token keyword">INT</span><span class="token punctuation">,</span> Score <span class="token keyword">DECIMAL</span> <span class="token punctuation">(</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> Scores <span class="token punctuation">(</span> Id<span class="token punctuation">,</span> Score <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4.1</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4.1</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4.2</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4.2</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4.3</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">4.3</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_180-consecutive-numbers" tabindex="-1"><a class="header-anchor" href="#_180-consecutive-numbers" aria-hidden="true">#</a> 180. Consecutive Numbers</h2><p>https://leetcode.com/problems/consecutive-numbers/description/</p><h3 id="description-13" tabindex="-1"><a class="header-anchor" href="#description-13" aria-hidden="true">#</a> Description</h3><p>数字表：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+----+-----+
| Id | Num |
+----+-----+
| 1  |  1  |
| 2  |  1  |
| 3  |  1  |
| 4  |  2  |
| 5  |  1  |
| 6  |  2  |
| 7  |  2  |
+----+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找连续出现三次的数字。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+-----------------+
| ConsecutiveNums |
+-----------------+
| 1               |
+-----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-13" tabindex="-1"><a class="header-anchor" href="#solution-13" aria-hidden="true">#</a> Solution</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span>
    <span class="token keyword">DISTINCT</span> L1<span class="token punctuation">.</span>num ConsecutiveNums
<span class="token keyword">FROM</span>
    Logs L1<span class="token punctuation">,</span>
    Logs L2<span class="token punctuation">,</span>
    Logs L3
<span class="token keyword">WHERE</span> L1<span class="token punctuation">.</span>id <span class="token operator">=</span> l2<span class="token punctuation">.</span>id <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token operator">AND</span> L2<span class="token punctuation">.</span>id <span class="token operator">=</span> L3<span class="token punctuation">.</span>id <span class="token operator">-</span> <span class="token number">1</span>
    <span class="token operator">AND</span> L1<span class="token punctuation">.</span>num <span class="token operator">=</span> L2<span class="token punctuation">.</span>num
    <span class="token operator">AND</span> l2<span class="token punctuation">.</span>num <span class="token operator">=</span> l3<span class="token punctuation">.</span>num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-13" tabindex="-1"><a class="header-anchor" href="#sql-schema-13" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> LOGS<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> LOGS <span class="token punctuation">(</span> Id <span class="token keyword">INT</span><span class="token punctuation">,</span> Num <span class="token keyword">INT</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> LOGS <span class="token punctuation">(</span> Id<span class="token punctuation">,</span> Num <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_626-exchange-seats" tabindex="-1"><a class="header-anchor" href="#_626-exchange-seats" aria-hidden="true">#</a> 626. Exchange Seats</h2><p>https://leetcode.com/problems/exchange-seats/description/</p><h3 id="description-14" tabindex="-1"><a class="header-anchor" href="#description-14" aria-hidden="true">#</a> Description</h3><p>seat 表存储着座位对应的学生。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Abbot   |
|    2    | Doris   |
|    3    | Emerson |
|    4    | Green   |
|    5    | Jeames  |
+---------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要求交换相邻座位的两个学生，如果最后一个座位是奇数，那么不交换这个座位上的学生。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>+---------+---------+
|    id   | student |
+---------+---------+
|    1    | Doris   |
|    2    | Abbot   |
|    3    | Green   |
|    4    | Emerson |
|    5    | Jeames  |
+---------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="solution-14" tabindex="-1"><a class="header-anchor" href="#solution-14" aria-hidden="true">#</a> Solution</h3><p>使用多个 union。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">## 处理偶数 id，让 id 减 1</span>
<span class="token comment">## 例如 2,4,6,... 变成 1,3,5,...</span>
<span class="token keyword">SELECT</span>
    s1<span class="token punctuation">.</span>id <span class="token operator">-</span> <span class="token number">1</span> <span class="token keyword">AS</span> id<span class="token punctuation">,</span>
    s1<span class="token punctuation">.</span>student
<span class="token keyword">FROM</span>
    seat s1
<span class="token keyword">WHERE</span>
    s1<span class="token punctuation">.</span>id MOD <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0</span> <span class="token keyword">UNION</span>
<span class="token comment">## 处理奇数 id，让 id 加 1。但是如果最大的 id 为奇数，则不做处理</span>
<span class="token comment">## 例如 1,3,5,... 变成 2,4,6,...</span>
<span class="token keyword">SELECT</span>
    s2<span class="token punctuation">.</span>id <span class="token operator">+</span> <span class="token number">1</span> <span class="token keyword">AS</span> id<span class="token punctuation">,</span>
    s2<span class="token punctuation">.</span>student
<span class="token keyword">FROM</span>
    seat s2
<span class="token keyword">WHERE</span>
    s2<span class="token punctuation">.</span>id MOD <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token operator">AND</span> s2<span class="token punctuation">.</span>id <span class="token operator">!=</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">max</span><span class="token punctuation">(</span> s3<span class="token punctuation">.</span>id <span class="token punctuation">)</span> <span class="token keyword">FROM</span> seat s3 <span class="token punctuation">)</span> <span class="token keyword">UNION</span>
<span class="token comment">## 如果最大的 id 为奇数，单独取出这个数</span>
<span class="token keyword">SELECT</span>
    s4<span class="token punctuation">.</span>id <span class="token keyword">AS</span> id<span class="token punctuation">,</span>
    s4<span class="token punctuation">.</span>student
<span class="token keyword">FROM</span>
    seat s4
<span class="token keyword">WHERE</span>
    s4<span class="token punctuation">.</span>id MOD <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token operator">AND</span> s4<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token keyword">SELECT</span> <span class="token function">max</span><span class="token punctuation">(</span> s5<span class="token punctuation">.</span>id <span class="token punctuation">)</span> <span class="token keyword">FROM</span> seat s5 <span class="token punctuation">)</span>
<span class="token keyword">ORDER</span> <span class="token keyword">BY</span>
    id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sql-schema-14" tabindex="-1"><a class="header-anchor" href="#sql-schema-14" aria-hidden="true">#</a> SQL Schema</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">TABLE</span>
<span class="token keyword">IF</span>
    <span class="token keyword">EXISTS</span> seat<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> seat <span class="token punctuation">(</span> id <span class="token keyword">INT</span><span class="token punctuation">,</span> student <span class="token keyword">VARCHAR</span> <span class="token punctuation">(</span> <span class="token number">255</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> seat <span class="token punctuation">(</span> id<span class="token punctuation">,</span> student <span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Abbot&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Doris&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Emerson&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Green&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Jeames&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,125);function k(v,m){const e=p("ExternalLinkIcon");return i(),l("div",null,[d,n("p",null,[s("参考："),n("a",r,[s("pMySQL Error 1093 - Can't specify target table for update in FROM clause"),c(e)])]),u])}const h=t(o,[["render",k],["__file","SQL lianxi.html.vue"]]);export{h as default};
