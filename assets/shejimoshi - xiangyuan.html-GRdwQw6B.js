import{_ as n}from"./5f5c22d5-9c0e-49e1-b5b0-6cc7032724d4-tS07Qemc.js";import{_ as s,o as a,c as t,e}from"./app-pMbPEaNl.js";const p={},i=e('<h1 id="享元-flyweight" tabindex="-1"><a class="header-anchor" href="#享元-flyweight" aria-hidden="true">#</a> 享元（Flyweight）</h1><h3 id="intent" tabindex="-1"><a class="header-anchor" href="#intent" aria-hidden="true">#</a> Intent</h3><p>利用共享的方式来支持大量细粒度的对象，这些对象一部分内部状态是相同的。</p><h3 id="class-diagram" tabindex="-1"><a class="header-anchor" href="#class-diagram" aria-hidden="true">#</a> Class Diagram</h3><ul><li>Flyweight：享元对象</li><li>IntrinsicState：内部状态，享元对象共享内部状态</li><li>ExtrinsicState：外部状态，每个享元对象的外部状态不同</li></ul><p><img src="'+n+`" alt="image-20220324093855618"></p><h3 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Flyweight</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token class-name">String</span> extrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFlyweight</span> <span class="token keyword">implements</span> <span class="token class-name">Flyweight</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> intrinsicState<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">ConcreteFlyweight</span><span class="token punctuation">(</span><span class="token class-name">String</span> intrinsicState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>intrinsicState <span class="token operator">=</span> intrinsicState<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token class-name">String</span> extrinsicState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Object address: &quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">identityHashCode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;IntrinsicState: &quot;</span> <span class="token operator">+</span> intrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ExtrinsicState: &quot;</span> <span class="token operator">+</span> extrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FlyweightFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Flyweight</span><span class="token punctuation">&gt;</span></span> flyweights <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Flyweight</span> <span class="token function">getFlyweight</span><span class="token punctuation">(</span><span class="token class-name">String</span> intrinsicState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flyweights<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>intrinsicState<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Flyweight</span> flyweight <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteFlyweight</span><span class="token punctuation">(</span>intrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
            flyweights<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>intrinsicState<span class="token punctuation">,</span> flyweight<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> flyweights<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>intrinsicState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FlyweightFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FlyweightFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Flyweight</span> flyweight1 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getFlyweight</span><span class="token punctuation">(</span><span class="token string">&quot;aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Flyweight</span> flyweight2 <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">getFlyweight</span><span class="token punctuation">(</span><span class="token string">&quot;aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        flyweight1<span class="token punctuation">.</span><span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        flyweight2<span class="token punctuation">.</span><span class="token function">doOperation</span><span class="token punctuation">(</span><span class="token string">&quot;y&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Object address: 1163157884
IntrinsicState: aa
ExtrinsicState: x
Object address: 1163157884
IntrinsicState: aa
ExtrinsicState: y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk" tabindex="-1"><a class="header-anchor" href="#jdk" aria-hidden="true">#</a> JDK</h3><p>Java 利用缓存来加速大量小对象的访问时间。</p><ul><li>java.lang.Integer#valueOf(int)</li><li>java.lang.Boolean#valueOf(boolean)</li><li>java.lang.Byte#valueOf(byte)</li><li>java.lang.Character#valueOf(char)</li></ul>`,15),c=[i];function l(o,u){return a(),t("div",null,c)}const k=s(p,[["render",l],["__file","shejimoshi - xiangyuan.html.vue"]]);export{k as default};