import{_ as p,r as t,o,c,a as n,b as a,d as e,e as i}from"./app-pMbPEaNl.js";const l="/code-note-nav/assets/15313ed8-a520-4799-a300-2b6b36be314f-Au5TGSUf.jpg",u="/code-note-nav/assets/68b110b9-76c6-4ee2-b541-4145e65adb3e-SbWdmC0L.jpg",d="/code-note-nav/assets/66402828-fb2b-418f-83f6-82153491bcfe-wTZlog85.jpg",r={},k=i('<h1 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h1><h2 id="一、缓存特征" tabindex="-1"><a class="header-anchor" href="#一、缓存特征" aria-hidden="true">#</a> 一、缓存特征</h2><h3 id="命中率" tabindex="-1"><a class="header-anchor" href="#命中率" aria-hidden="true">#</a> 命中率</h3><p>当某个请求能够通过访问缓存而得到响应时，称为缓存命中。</p><p>缓存命中率越高，缓存的利用率也就越高。</p><h3 id="最大空间" tabindex="-1"><a class="header-anchor" href="#最大空间" aria-hidden="true">#</a> 最大空间</h3><p>缓存通常位于内存中，内存的空间通常比磁盘空间小的多，因此缓存的最大空间不可能非常大。</p><p>当缓存存放的数据量超过最大空间时，就需要淘汰部分数据来存放新到达的数据。</p><h3 id="淘汰策略" tabindex="-1"><a class="header-anchor" href="#淘汰策略" aria-hidden="true">#</a> 淘汰策略</h3><ul><li><p>FIFO（First In First Out）：先进先出策略，在实时性的场景下，需要经常访问最新的数据，那么就可以使用 FIFO，使得最先进入的数据（最晚的数据）被淘汰。</p></li><li><p>LRU（Least Recently Used）：最近最久未使用策略，优先淘汰最久未使用的数据，也就是上次被访问时间距离现在最久的数据。该策略可以保证内存中的数据都是热点数据，也就是经常被访问的数据，从而保证缓存命中率。</p></li><li><p>LFU（Least Frequently Used）：最不经常使用策略，优先淘汰一段时间内使用次数最少的数据。</p></li></ul><h2 id="二、缓存位置" tabindex="-1"><a class="header-anchor" href="#二、缓存位置" aria-hidden="true">#</a> 二、缓存位置</h2><h3 id="浏览器" tabindex="-1"><a class="header-anchor" href="#浏览器" aria-hidden="true">#</a> 浏览器</h3><p>当 HTTP 响应允许进行缓存时，浏览器会将 HTML、CSS、JavaScript、图片等静态资源进行缓存。</p><h3 id="isp" tabindex="-1"><a class="header-anchor" href="#isp" aria-hidden="true">#</a> ISP</h3><p>网络服务提供商（ISP）是网络访问的第一跳，通过将数据缓存在 ISP 中能够大大提高用户的访问速度。</p><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h3><p>反向代理位于服务器之前，请求与响应都需要经过反向代理。通过将数据缓存在反向代理，在用户请求反向代理时就可以直接使用缓存进行响应。</p><h3 id="本地缓存" tabindex="-1"><a class="header-anchor" href="#本地缓存" aria-hidden="true">#</a> 本地缓存</h3><p>使用 Guava Cache 将数据缓存在服务器本地内存中，服务器代码可以直接读取本地内存中的缓存，速度非常快。</p><h3 id="分布式缓存" tabindex="-1"><a class="header-anchor" href="#分布式缓存" aria-hidden="true">#</a> 分布式缓存</h3><p>使用 Redis、Memcache 等分布式缓存将数据缓存在分布式缓存系统中。</p><p>相对于本地缓存来说，分布式缓存单独部署，可以根据需求分配硬件资源。不仅如此，服务器集群都可以访问分布式缓存，而本地缓存需要在服务器集群之间进行同步，实现难度和性能开销上都非常大。</p><h3 id="数据库缓存" tabindex="-1"><a class="header-anchor" href="#数据库缓存" aria-hidden="true">#</a> 数据库缓存</h3><p>MySQL 等数据库管理系统具有自己的查询缓存机制来提高查询效率。</p><h3 id="java-内部的缓存" tabindex="-1"><a class="header-anchor" href="#java-内部的缓存" aria-hidden="true">#</a> Java 内部的缓存</h3><p>Java 为了优化空间，提高字符串、基本数据类型包装类的创建效率，设计了字符串常量池及 Byte、Short、Character、Integer、Long、Boolean 这六种包装类缓冲池。</p><h3 id="cpu-多级缓存" tabindex="-1"><a class="header-anchor" href="#cpu-多级缓存" aria-hidden="true">#</a> CPU 多级缓存</h3><p>CPU 为了解决运算速度与主存 IO 速度不匹配的问题，引入了多级缓存结构，同时使用 MESI 等缓存一致性协议来解决多核 CPU 缓存数据一致性的问题。</p><h2 id="三、cdn" tabindex="-1"><a class="header-anchor" href="#三、cdn" aria-hidden="true">#</a> 三、CDN</h2><p>内容分发网络（Content distribution network，CDN）是一种互连的网络系统，它利用更靠近用户的服务器从而更快更可靠地将 HTML、CSS、JavaScript、音乐、图片、视频等静态资源分发给用户。</p><p>CDN 主要有以下优点：</p><ul><li>更快地将数据分发给用户；</li><li>通过部署多台服务器，从而提高系统整体的带宽性能；</li><li>多台服务器可以看成是一种冗余机制，从而具有高可用性。</li></ul><p><img src="'+l+'" alt="image-20220324093855618"></p><h2 id="四、缓存问题" tabindex="-1"><a class="header-anchor" href="#四、缓存问题" aria-hidden="true">#</a> 四、缓存问题</h2><h3 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h3><p>指的是对某个一定不存在的数据进行请求，该请求将会穿透缓存到达数据库。</p><p>解决方案：</p><ul><li>对这些不存在的数据缓存一个空数据；</li><li>对这类请求进行过滤。</li></ul><h3 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h3><p>指的是由于数据没有被加载到缓存中，或者缓存数据在同一时间大面积失效（过期），又或者缓存服务器宕机，导致大量的请求都到达数据库。</p><p>在有缓存的系统中，系统非常依赖于缓存，缓存分担了很大一部分的数据请求。当发生缓存雪崩时，数据库无法处理这么大的请求，导致数据库崩溃。</p><p>解决方案：</p><ul><li>为了防止缓存在同一时间大面积过期导致的缓存雪崩，可以通过观察用户行为，合理设置缓存过期时间来实现；</li><li>为了防止缓存服务器宕机出现的缓存雪崩，可以使用分布式缓存，分布式缓存中每一个节点只缓存部分的数据，当某个节点宕机时可以保证其它节点的缓存仍然可用。</li><li>也可以进行缓存预热，避免在系统刚启动不久由于还未将大量数据进行缓存而导致缓存雪崩。</li></ul><h3 id="缓存一致性" tabindex="-1"><a class="header-anchor" href="#缓存一致性" aria-hidden="true">#</a> 缓存一致性</h3><p>缓存一致性要求数据更新的同时缓存数据也能够实时更新。</p><p>解决方案：</p><ul><li>在数据更新的同时立即去更新缓存；</li><li>在读缓存之前先判断缓存是否是最新的，如果不是最新的先进行更新。</li></ul><p>要保证缓存一致性需要付出很大的代价，缓存数据最好是那些对一致性要求不高的数据，允许缓存数据存在一些脏数据。</p><h3 id="缓存-无底洞-现象" tabindex="-1"><a class="header-anchor" href="#缓存-无底洞-现象" aria-hidden="true">#</a> 缓存 “无底洞” 现象</h3><p>指的是为了满足业务要求添加了大量缓存节点，但是性能不但没有好转反而下降了的现象。</p><p>产生原因：缓存系统通常采用 hash 函数将 key 映射到对应的缓存节点，随着缓存节点数目的增加，键值分布到更多的节点上，导致客户端一次批量操作会涉及多次网络操作，这意味着批量操作的耗时会随着节点数目的增加而不断增大。此外，网络连接数变多，对节点的性能也有一定影响。</p><p>解决方案：</p><ul><li>优化批量数据操作命令；</li><li>减少网络通信次数；</li><li>降低接入成本，使用长连接 / 连接池，NIO 等。</li></ul><h2 id="五、数据分布" tabindex="-1"><a class="header-anchor" href="#五、数据分布" aria-hidden="true">#</a> 五、数据分布</h2><h3 id="哈希分布" tabindex="-1"><a class="header-anchor" href="#哈希分布" aria-hidden="true">#</a> 哈希分布</h3><p>哈希分布就是将数据计算哈希值之后，按照哈希值分配到不同的节点上。例如有 N 个节点，数据的主键为 key，则将该数据分配的节点序号为：hash(key)%N。</p><p>传统的哈希分布算法存在一个问题：当节点数量变化时，也就是 N 值变化，那么几乎所有的数据都需要重新分布，将导致大量的数据迁移。</p><h3 id="顺序分布" tabindex="-1"><a class="header-anchor" href="#顺序分布" aria-hidden="true">#</a> 顺序分布</h3><p>将数据划分为多个连续的部分，按数据的 ID 或者时间分布到不同节点上。例如 User 表的 ID 范围为 1 ~ 7000，使用顺序分布可以将其划分成多个子表，对应的主键范围为 1 ~ 1000，1001 ~ 2000，...，6001 ~ 7000。</p><p>顺序分布相比于哈希分布的主要优点如下：</p><ul><li>能保持数据原有的顺序；</li><li>并且能够准确控制每台服务器存储的数据量，从而使得存储空间的利用率最大。</li></ul><h2 id="六、一致性哈希" tabindex="-1"><a class="header-anchor" href="#六、一致性哈希" aria-hidden="true">#</a> 六、一致性哈希</h2><p>Distributed Hash Table（DHT） 是一种哈希分布方式，其目的是为了克服传统哈希分布在服务器节点数量变化时大量数据迁移的问题。</p><h3 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h3><p>将哈希空间 [0, 2<sup>n</sup>-1] 看成一个哈希环，每个服务器节点都配置到哈希环上。每个数据对象通过哈希取模得到哈希值之后，存放到哈希环中顺时针方向第一个大于等于该哈希值的节点上。</p><p><img src="'+u+'" alt="image-20220324093855618"></p><p>一致性哈希在增加或者删除节点时只会影响到哈希环中相邻的节点，例如下图中新增节点 X，只需要将它前一个节点 C 上的数据重新进行分布即可，对于节点 A、B、D 都没有影响。</p><p><img src="'+d+`" alt="image-20220324093855618"></p><h3 id="虚拟节点" tabindex="-1"><a class="header-anchor" href="#虚拟节点" aria-hidden="true">#</a> 虚拟节点</h3><p>上面描述的一致性哈希存在数据分布不均匀的问题，节点存储的数据量有可能会存在很大的不同。</p><p>数据不均匀主要是因为节点在哈希环上分布的不均匀，这种情况在节点数量很少的情况下尤其明显。</p><p>解决方式是通过增加虚拟节点，然后将虚拟节点映射到真实节点上。虚拟节点的数量比真实节点来得多，那么虚拟节点在哈希环上分布的均匀性就会比原来的真实节点好，从而使得数据分布也更加均匀。</p><h2 id="七、lru" tabindex="-1"><a class="header-anchor" href="#七、lru" aria-hidden="true">#</a> 七、LRU</h2><p>以下是基于 双向链表 + HashMap 的 LRU 算法实现，对算法的解释如下：</p><ul><li>访问某个节点时，将其从原来的位置删除，并重新插入到链表头部。这样就能保证链表尾部存储的就是最近最久未使用的节点，当节点数量大于缓存最大空间时就淘汰链表尾部的节点。</li><li>为了使删除操作时间复杂度为 O(1)，就不能采用遍历的方式找到某个节点。HashMap 存储着 Key 到节点的映射，通过 Key 就能以 O(1) 的时间得到节点，然后再以 O(1) 的时间将其从双向队列中删除。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LRU</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Node</span> head<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Node</span> tail<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">&gt;</span></span> map<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> maxSize<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">class</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>

        <span class="token class-name">Node</span> pre<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next<span class="token punctuation">;</span>
        <span class="token class-name">K</span> k<span class="token punctuation">;</span>
        <span class="token class-name">V</span> v<span class="token punctuation">;</span>

        <span class="token keyword">public</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">K</span> k<span class="token punctuation">,</span> <span class="token class-name">V</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>k <span class="token operator">=</span> k<span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>v <span class="token operator">=</span> v<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token function">LRU</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>maxSize <span class="token operator">=</span> maxSize<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>maxSize <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        tail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        head<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">;</span>
        tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Node</span> node <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">unlink</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">appendHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> node<span class="token punctuation">.</span>v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> node <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">unlink</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
        map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">appendHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> maxSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span> toRemove <span class="token operator">=</span> <span class="token function">removeTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            map<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>toRemove<span class="token punctuation">.</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">unlink</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Node</span> pre <span class="token operator">=</span> node<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
        <span class="token class-name">Node</span> next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        next<span class="token punctuation">.</span>pre <span class="token operator">=</span> pre<span class="token punctuation">;</span>

        node<span class="token punctuation">.</span>pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">appendHead</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        next<span class="token punctuation">.</span>pre <span class="token operator">=</span> node<span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
        head<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">removeTail</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">Node</span> node <span class="token operator">=</span> tail<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>

        <span class="token class-name">Node</span> pre <span class="token operator">=</span> node<span class="token punctuation">.</span>pre<span class="token punctuation">;</span>
        tail<span class="token punctuation">.</span>pre <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        pre<span class="token punctuation">.</span>next <span class="token operator">=</span> tail<span class="token punctuation">;</span>

        node<span class="token punctuation">.</span>pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        node<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> node<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">private</span> <span class="token class-name">Node</span> cur <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> cur <span class="token operator">!=</span> tail<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">K</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Node</span> node <span class="token operator">=</span> cur<span class="token punctuation">;</span>
                cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>k<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,77),v=n("li",null,"大规模分布式存储系统",-1),h={href:"https://tech.meituan.com/cache_about.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://my.oschina.net/jayhu/blog/732849",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zh.wikipedia.org/wiki/%E5%85%A7%E5%AE%B9%E5%82%B3%E9%81%9E%E7%B6%B2%E8%B7%AF",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.aspirationhosting.com/aspiration-cdn/",target:"_blank",rel:"noopener noreferrer"};function f(w,x){const s=t("ExternalLinkIcon");return o(),c("div",null,[k,n("ul",null,[v,n("li",null,[n("a",h,[a("缓存那些事"),e(s)])]),n("li",null,[n("a",m,[a("一致性哈希算法"),e(s)])]),n("li",null,[n("a",b,[a("内容分发网络"),e(s)])]),n("li",null,[n("a",y,[a("How Aspiration CDN helps to improve your website loading speed?"),e(s)])])])])}const N=p(r,[["render",f],["__file","huancun.html.vue"]]);export{N as default};