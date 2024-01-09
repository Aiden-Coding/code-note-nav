import{_ as r,r as t,o,c as d,a as e,b as i,d as s,e as n}from"./app-pMbPEaNl.js";const p="/code-note-nav/assets/9daa3616-00a4-48c4-9146-792dc8499be3-sFDQcCcF.jpg",c="/code-note-nav/assets/bfea8772-d01b-4a51-8adc-edfd7d3dce84-y3Iz4gNG.jpg",h="/code-note-nav/assets/4ab87717-e264-4232-825d-8aaf08f14e8b-M2Z8GtGM.jpg",l="/code-note-nav/assets/e98deb5a-d5d4-4294-aa9b-9220d4483403-gmOH92ec.jpg",_="/code-note-nav/assets/43d323ac-9f07-4e4a-a315-4eaf8c38766c-YKR6ew4_.jpg",u="/code-note-nav/assets/a42ad3a7-3574-4c48-a783-ed3d08a0688a-hLNxyjAx.jpg",g="/code-note-nav/assets/0f399a9f-1351-4b2d-b8a4-2ebe82b1a703-l3qyZDTI.jpg",b="/code-note-nav/assets/02a1fbfd-7a9d-4114-95df-ca2445587a1f-M-bKM9UR.jpg",m="/code-note-nav/assets/d2c072cc-8b17-480c-813e-18cdb3b4b51f-lw8UkkFT.jpg",f="/code-note-nav/assets/1623f524-b011-40c8-b83f-eab38d538f76-CORpBzex.png",S="/code-note-nav/assets/40c6570d-c1d7-4c38-843e-ba991b2328c2-drA-5ExC.png",x="/code-note-nav/assets/fdc45a09-f838-4348-8959-d2c793727788-8gIkZuZN.png",v={},I=n('<h1 id="集群" tabindex="-1"><a class="header-anchor" href="#集群" aria-hidden="true">#</a> 集群</h1><h2 id="一、负载均衡" tabindex="-1"><a class="header-anchor" href="#一、负载均衡" aria-hidden="true">#</a> 一、负载均衡</h2><p>集群中的应用服务器（节点）通常被设计成无状态，用户可以请求任何一个节点。</p><p>负载均衡器会根据集群中每个节点的负载情况，将用户请求转发到合适的节点上。</p><p>负载均衡器可以用来实现高可用以及伸缩性：</p><ul><li>高可用：当某个节点故障时，负载均衡器会将用户请求转发到另外的节点上，从而保证所有服务持续可用；</li><li>伸缩性：根据系统整体负载情况，可以很容易地添加或移除节点。</li></ul><p>负载均衡器运行过程包含两个部分：</p><ol><li>根据负载均衡算法得到转发的节点；</li><li>进行转发。</li></ol><h3 id="负载均衡算法" tabindex="-1"><a class="header-anchor" href="#负载均衡算法" aria-hidden="true">#</a> 负载均衡算法</h3><h4 id="_1-轮询-round-robin" tabindex="-1"><a class="header-anchor" href="#_1-轮询-round-robin" aria-hidden="true">#</a> 1. 轮询（Round Robin）</h4><p>轮询算法把每个请求轮流发送到每个服务器上。</p><p>下图中，一共有 6 个客户端产生了 6 个请求，这 6 个请求按 (1, 2, 3, 4, 5, 6) 的顺序发送。(1, 3, 5) 的请求会被发送到服务器 1，(2, 4, 6) 的请求会被发送到服务器 2。</p><p><img src="'+p+'" alt="image-20220324093855618"></p><p>该算法比较适合每个服务器的性能差不多的场景，如果有性能存在差异的情况下，那么性能较差的服务器可能无法承担过大的负载（下图的 Server 2）。</p><p><img src="'+c+'" alt="image-20220324093855618"></p><h4 id="_2-加权轮询-weighted-round-robbin" tabindex="-1"><a class="header-anchor" href="#_2-加权轮询-weighted-round-robbin" aria-hidden="true">#</a> 2. 加权轮询（Weighted Round Robbin）</h4><p>加权轮询是在轮询的基础上，根据服务器的性能差异，为服务器赋予一定的权值，性能高的服务器分配更高的权值。</p><p>例如下图中，服务器 1 被赋予的权值为 5，服务器 2 被赋予的权值为 1，那么 (1, 2, 3, 4, 5) 请求会被发送到服务器 1，(6) 请求会被发送到服务器 2。</p><p><img src="'+h+'" alt="image-20220324093855618"></p><h4 id="_3-最少连接-least-connections" tabindex="-1"><a class="header-anchor" href="#_3-最少连接-least-connections" aria-hidden="true">#</a> 3. 最少连接（least Connections）</h4><p>由于每个请求的连接时间不一样，使用轮询或者加权轮询算法的话，可能会让一台服务器当前连接数过大，而另一台服务器的连接过小，造成负载不均衡。</p><p>例如下图中，(1, 3, 5) 请求会被发送到服务器 1，但是 (1, 3) 很快就断开连接，此时只有 (5) 请求连接服务器 1；(2, 4, 6) 请求被发送到服务器 2，只有 (2) 的连接断开，此时 (6, 4) 请求连接服务器 2。该系统继续运行时，服务器 2 会承担过大的负载。</p><p><img src="'+l+'" alt="image-20220324093855618"></p><p>最少连接算法就是将请求发送给当前最少连接数的服务器上。</p><p>例如下图中，服务器 1 当前连接数最小，那么新到来的请求 6 就会被发送到服务器 1 上。</p><p><img src="'+_+'" alt="image-20220324093855618"></p><h4 id="_4-加权最少连接-weighted-least-connection" tabindex="-1"><a class="header-anchor" href="#_4-加权最少连接-weighted-least-connection" aria-hidden="true">#</a> 4. 加权最少连接（Weighted Least Connection）</h4><p>在最少连接的基础上，根据服务器的性能为每台服务器分配权重，再根据权重计算出每台服务器能处理的连接数。</p><h4 id="_5-随机算法-random" tabindex="-1"><a class="header-anchor" href="#_5-随机算法-random" aria-hidden="true">#</a> 5. 随机算法（Random）</h4><p>把请求随机发送到服务器上。</p><p>和轮询算法类似，该算法比较适合服务器性能差不多的场景。</p><p><img src="'+u+'" alt="image-20220324093855618"></p><h4 id="_6-源地址哈希法-ip-hash" tabindex="-1"><a class="header-anchor" href="#_6-源地址哈希法-ip-hash" aria-hidden="true">#</a> 6. 源地址哈希法 (IP Hash)</h4><p>源地址哈希通过对客户端 IP 计算哈希值之后，再对服务器数量取模得到目标服务器的序号。</p><p>可以保证同一 IP 的客户端的请求会转发到同一台服务器上，用来实现会话粘滞（Sticky Session）</p><p><img src="'+g+'" alt="image-20220324093855618"></p><h3 id="转发实现" tabindex="-1"><a class="header-anchor" href="#转发实现" aria-hidden="true">#</a> 转发实现</h3><h4 id="_1-http-重定向" tabindex="-1"><a class="header-anchor" href="#_1-http-重定向" aria-hidden="true">#</a> 1. HTTP 重定向</h4><p>HTTP 重定向负载均衡服务器使用某种负载均衡算法计算得到服务器的 IP 地址之后，将该地址写入 HTTP 重定向报文中，状态码为 302。客户端收到重定向报文之后，需要重新向服务器发起请求。</p><p>缺点：</p><ul><li>需要两次请求，因此访问延迟比较高；</li><li>HTTP 负载均衡器处理能力有限，会限制集群的规模。</li></ul><p>该负载均衡转发的缺点比较明显，实际场景中很少使用它。</p><p><img src="'+b+'" alt="image-20220324093855618"></p><h4 id="_2-dns-域名解析" tabindex="-1"><a class="header-anchor" href="#_2-dns-域名解析" aria-hidden="true">#</a> 2. DNS 域名解析</h4><p>在 DNS 解析域名的同时使用负载均衡算法计算服务器 IP 地址。</p><p>优点：</p><ul><li>DNS 能够根据地理位置进行域名解析，返回离用户最近的服务器 IP 地址。</li></ul><p>缺点：</p><ul><li>由于 DNS 具有多级结构，每一级的域名记录都可能被缓存，当下线一台服务器需要修改 DNS 记录时，需要过很长一段时间才能生效。</li></ul><p>大型网站基本使用了 DNS 做为第一级负载均衡手段，然后在内部使用其它方式做第二级负载均衡。也就是说，域名解析的结果为内部的负载均衡服务器 IP 地址。</p><p><img src="'+m+'" alt="image-20220324093855618"></p><h4 id="_3-反向代理服务器" tabindex="-1"><a class="header-anchor" href="#_3-反向代理服务器" aria-hidden="true">#</a> 3. 反向代理服务器</h4><p>反向代理服务器位于源服务器前面，用户的请求需要先经过反向代理服务器才能到达源服务器。反向代理可以用来进行缓存、日志记录等，同时也可以用来做为负载均衡服务器。</p><p>在这种负载均衡转发方式下，客户端不直接请求源服务器，因此源服务器不需要外部 IP 地址，而反向代理需要配置内部和外部两套 IP 地址。</p><p>优点：</p><ul><li>与其它功能集成在一起，部署简单。</li></ul><p>缺点：</p><ul><li>所有请求和响应都需要经过反向代理服务器，它可能会成为性能瓶颈。</li></ul><h4 id="_4-网络层" tabindex="-1"><a class="header-anchor" href="#_4-网络层" aria-hidden="true">#</a> 4. 网络层</h4><p>在操作系统内核进程获取网络数据包，根据负载均衡算法计算源服务器的 IP 地址，并修改请求数据包的目的 IP 地址，最后进行转发。</p><p>源服务器返回的响应也需要经过负载均衡服务器，通常是让负载均衡服务器同时作为集群的网关服务器来实现。</p><p>优点：</p><ul><li>在内核进程中进行处理，性能比较高。</li></ul><p>缺点：</p><ul><li>和反向代理一样，所有的请求和响应都经过负载均衡服务器，会成为性能瓶颈。</li></ul><h4 id="_5-链路层" tabindex="-1"><a class="header-anchor" href="#_5-链路层" aria-hidden="true">#</a> 5. 链路层</h4><p>在链路层根据负载均衡算法计算源服务器的 MAC 地址，并修改请求数据包的目的 MAC 地址，并进行转发。</p><p>通过配置源服务器的虚拟 IP 地址和负载均衡服务器的 IP 地址一致，从而不需要修改 IP 地址就可以进行转发。也正因为 IP 地址一样，所以源服务器的响应不需要转发回负载均衡服务器，可以直接转发给客户端，避免了负载均衡服务器的成为瓶颈。</p><p>这是一种三角传输模式，被称为直接路由。对于提供下载和视频服务的网站来说，直接路由避免了大量的网络传输数据经过负载均衡服务器。</p><p>这是目前大型网站使用最广负载均衡转发方式，在 Linux 平台可以使用的负载均衡服务器为 LVS（Linux Virtual Server）。</p><p>参考：</p>',71),P={href:"http://www.jscape.com/blog/load-balancing-algorithms",target:"_blank",rel:"noopener noreferrer"},j={href:"http://slideplayer.com/slide/6599069/#",target:"_blank",rel:"noopener noreferrer"},k=n('<h2 id="二、集群下的-session-管理" tabindex="-1"><a class="header-anchor" href="#二、集群下的-session-管理" aria-hidden="true">#</a> 二、集群下的 Session 管理</h2><p>一个用户的 Session 信息如果存储在一个服务器上，那么当负载均衡器把用户的下一个请求转发到另一个服务器，由于服务器没有用户的 Session 信息，那么该用户就需要重新进行登录等操作。</p><h3 id="sticky-session" tabindex="-1"><a class="header-anchor" href="#sticky-session" aria-hidden="true">#</a> Sticky Session</h3><p>需要配置负载均衡器，使得一个用户的所有请求都路由到同一个服务器，这样就可以把用户的 Session 存放在该服务器中。</p><p>缺点：</p><ul><li>当服务器宕机时，将丢失该服务器上的所有 Session。</li></ul><p><img src="'+f+'" alt="image-20220324093855618"></p><h3 id="session-replication" tabindex="-1"><a class="header-anchor" href="#session-replication" aria-hidden="true">#</a> Session Replication</h3><p>在服务器之间进行 Session 同步操作，每个服务器都有所有用户的 Session 信息，因此用户可以向任何一个服务器进行请求。</p><p>缺点：</p><ul><li>占用过多内存；</li><li>同步过程占用网络带宽以及服务器处理器时间。</li></ul><p><img src="'+S+'" alt="image-20220324093855618"></p><h3 id="session-server" tabindex="-1"><a class="header-anchor" href="#session-server" aria-hidden="true">#</a> Session Server</h3><p>使用一个单独的服务器存储 Session 数据，可以使用传统的 MySQL，也使用 Redis 或者 Memcached 这种内存型数据库。</p><p>优点：</p><ul><li>为了使得大型网站具有伸缩性，集群中的应用服务器通常需要保持无状态，那么应用服务器不能存储用户的会话信息。Session Server 将用户的会话信息单独进行存储，从而保证了应用服务器的无状态。</li></ul><p>缺点：</p><ul><li>需要去实现存取 Session 的代码。</li></ul><p><img src="'+x+'" alt="image-20220324093855618"></p><p>参考：</p>',20),N={href:"https://sivalabs.in/2018/02/session-management-using-spring-session-jdbc-datastore/",target:"_blank",rel:"noopener noreferrer"};function R(T,w){const a=t("ExternalLinkIcon");return o(),d("div",null,[I,e("ul",null,[e("li",null,[e("a",P,[i("Comparing Load Balancing Algorithms"),s(a)])]),e("li",null,[e("a",j,[i("Redirection and Load Balancing"),s(a)])])]),k,e("ul",null,[e("li",null,[e("a",N,[i("Session Management using Spring Session with JDBC DataStore"),s(a)])])])])}const D=r(v,[["render",R],["__file","jiqun.html.vue"]]);export{D as default};