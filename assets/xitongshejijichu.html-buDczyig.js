import{_ as a,o as e,c as h,e as r}from"./app-pMbPEaNl.js";const i={},d=r('<h1 id="系统设计基础" tabindex="-1"><a class="header-anchor" href="#系统设计基础" aria-hidden="true">#</a> 系统设计基础</h1><h2 id="一、性能" tabindex="-1"><a class="header-anchor" href="#一、性能" aria-hidden="true">#</a> 一、性能</h2><h3 id="性能指标" tabindex="-1"><a class="header-anchor" href="#性能指标" aria-hidden="true">#</a> 性能指标</h3><h4 id="_1-响应时间" tabindex="-1"><a class="header-anchor" href="#_1-响应时间" aria-hidden="true">#</a> 1. 响应时间</h4><p>指某个请求从发出到接收到响应消耗的时间。</p><p>在对响应时间进行测试时，通常采用重复请求的方式，然后计算平均响应时间。</p><h4 id="_2-吞吐量" tabindex="-1"><a class="header-anchor" href="#_2-吞吐量" aria-hidden="true">#</a> 2. 吞吐量</h4><p>指系统在单位时间内可以处理的请求数量，通常使用每秒的请求数来衡量。</p><h4 id="_3-并发用户数" tabindex="-1"><a class="header-anchor" href="#_3-并发用户数" aria-hidden="true">#</a> 3. 并发用户数</h4><p>指系统能同时处理的并发用户请求数量。</p><p>在没有并发存在的系统中，请求被顺序执行，此时响应时间为吞吐量的倒数。例如系统支持的吞吐量为 100 req/s，那么平均响应时间应该为 0.01s。</p><p>目前的大型系统都支持多线程来处理并发请求，多线程能够提高吞吐量以及缩短响应时间，主要有两个原因：</p><ul><li>多 CPU</li><li>IO 等待时间</li></ul><p>使用 IO 多路复用等方式，系统在等待一个 IO 操作完成的这段时间内不需要被阻塞，可以去处理其它请求。通过将这个等待时间利用起来，使得 CPU 利用率大大提高。</p><p>并发用户数不是越高越好，因为如果并发用户数太高，系统来不及处理这么多的请求，会使得过多的请求需要等待，那么响应时间就会大大提高。</p><h3 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h3><h4 id="_1-集群" tabindex="-1"><a class="header-anchor" href="#_1-集群" aria-hidden="true">#</a> 1. 集群</h4><p>将多台服务器组成集群，使用负载均衡将请求转发到集群中，避免单一服务器的负载压力过大导致性能降低。</p><h4 id="_2-缓存" tabindex="-1"><a class="header-anchor" href="#_2-缓存" aria-hidden="true">#</a> 2. 缓存</h4><p>缓存能够提高性能的原因如下：</p><ul><li>缓存数据通常位于内存等介质中，这种介质对于读操作特别快；</li><li>缓存数据可以位于靠近用户的地理位置上；</li><li>可以将计算结果进行缓存，从而避免重复计算。</li></ul><h4 id="_3-异步" tabindex="-1"><a class="header-anchor" href="#_3-异步" aria-hidden="true">#</a> 3. 异步</h4><p>某些流程可以将操作转换为消息，将消息发送到消息队列之后立即返回，之后这个操作会被异步处理。</p><h2 id="二、伸缩性" tabindex="-1"><a class="header-anchor" href="#二、伸缩性" aria-hidden="true">#</a> 二、伸缩性</h2><p>指不断向集群中添加服务器来缓解不断上升的用户并发访问压力和不断增长的数据存储需求。</p><h3 id="伸缩性与性能" tabindex="-1"><a class="header-anchor" href="#伸缩性与性能" aria-hidden="true">#</a> 伸缩性与性能</h3><p>如果系统存在性能问题，那么单个用户的请求总是很慢的；</p><p>如果系统存在伸缩性问题，那么单个用户的请求可能会很快，但是在并发数很高的情况下系统会很慢。</p><h3 id="实现伸缩性" tabindex="-1"><a class="header-anchor" href="#实现伸缩性" aria-hidden="true">#</a> 实现伸缩性</h3><p>应用服务器只要不具有状态，那么就可以很容易地通过负载均衡器向集群中添加新的服务器。</p><p>关系型数据库的伸缩性通过 Sharding 来实现，将数据按一定的规则分布到不同的节点上，从而解决单台存储服务器的存储空间限制。</p><p>对于非关系型数据库，它们天生就是为海量数据而诞生，对伸缩性的支持特别好。</p><h2 id="三、扩展性" tabindex="-1"><a class="header-anchor" href="#三、扩展性" aria-hidden="true">#</a> 三、扩展性</h2><p>指的是添加新功能时对现有系统的其它应用无影响，这就要求不同应用具备低耦合的特点。</p><p>实现可扩展主要有两种方式：</p><ul><li>使用消息队列进行解耦，应用之间通过消息传递进行通信；</li><li>使用分布式服务将业务和可复用的服务分离开来，业务使用分布式服务框架调用可复用的服务。新增的产品可以通过调用可复用的服务来实现业务逻辑，对其它产品没有影响。</li></ul><h2 id="四、可用性" tabindex="-1"><a class="header-anchor" href="#四、可用性" aria-hidden="true">#</a> 四、可用性</h2><h3 id="冗余" tabindex="-1"><a class="header-anchor" href="#冗余" aria-hidden="true">#</a> 冗余</h3><p>保证高可用的主要手段是使用冗余，当某个服务器故障时就请求其它服务器。</p><p>应用服务器的冗余比较容易实现，只要保证应用服务器不具有状态，那么某个应用服务器故障时，负载均衡器将该应用服务器原先的用户请求转发到另一个应用服务器上，不会对用户有任何影响。</p><p>存储服务器的冗余需要使用主从复制来实现，当主服务器故障时，需要提升从服务器为主服务器，这个过程称为切换。</p><h3 id="监控" tabindex="-1"><a class="header-anchor" href="#监控" aria-hidden="true">#</a> 监控</h3><p>对 CPU、内存、磁盘、网络等系统负载信息进行监控，当某个信息达到一定阈值时通知运维人员，从而在系统发生故障之前及时发现问题。</p><h3 id="服务降级" tabindex="-1"><a class="header-anchor" href="#服务降级" aria-hidden="true">#</a> 服务降级</h3><p>服务降级是系统为了应对大量的请求，主动关闭部分功能，从而保证核心功能可用。</p><h2 id="五、安全性" tabindex="-1"><a class="header-anchor" href="#五、安全性" aria-hidden="true">#</a> 五、安全性</h2><p>要求系统在应对各种攻击手段时能够有可靠的应对措施。</p><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2><ul><li>大型网站技术架构：核心原理与案例分析</li></ul>',49),n=[d];function t(c,s){return e(),h("div",null,n)}const l=a(i,[["render",t],["__file","xitongshejijichu.html.vue"]]);export{l as default};