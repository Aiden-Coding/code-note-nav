import{_ as a,r as s,o as l,c,a as e,b as t,d as r,e as o}from"./app-pMbPEaNl.js";const p={},h=e("h1",{id:"本周小结-贪心算法系列三",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本周小结-贪心算法系列三","aria-hidden":"true"},"#"),t(" 本周小结！（贪心算法系列三）")],-1),i=e("p",null,"对于贪心，大多数同学都会感觉，不就是常识嘛，这算啥算法，那么本周的题目就可以带大家初步领略一下贪心的巧妙，贪心算法往往妙的出其不意。",-1),_=e("h2",{id:"周一",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周一","aria-hidden":"true"},"#"),t(" 周一")],-1),d={href:"https://programmercarl.com/0134.%E5%8A%A0%E6%B2%B9%E7%AB%99.html",target:"_blank",rel:"noopener noreferrer"},m=o('<p>这道题目咋眼一看，感觉是一道模拟题，模拟一下汽车从每一个节点出发看看能不能开一圈，时间复杂度是O(n^2)。</p><p>即使用模拟这种情况，也挺考察代码技巧的。</p><p><strong>for循环适合模拟从头到尾的遍历，而while循环适合模拟环形遍历，对于本题的场景要善于使用while！</strong></p><p>如果代码功力不到位，就模拟这种情况，可能写的也会很费劲。</p><p>本题的贪心解法，我给出两种解法。</p><p>对于解法一，其实我并不认为这是贪心，因为没有找出局部最优，而是直接从全局最优的角度上思考问题，但思路很巧妙，值得学习一下。</p><p>对于解法二，贪心的局部最优：当前累加rest[j]的和curSum一旦小于0，起始位置至少要是j+1，因为从j开始一定不行。全局最优：找到可以跑一圈的起始位置。</p><p>这里是可以从局部最优推出全局最优的，想不出反例，那就试试贪心。</p><p><strong>解法二就体现出贪心的精髓，同时大家也会发现，虽然贪心是常识，有些常识并不容易，甚至很难！</strong></p><h2 id="周二" tabindex="-1"><a class="header-anchor" href="#周二" aria-hidden="true">#</a> 周二</h2>',10),E={href:"https://programmercarl.com/0135.%E5%88%86%E5%8F%91%E7%B3%96%E6%9E%9C.html",target:"_blank",rel:"noopener noreferrer"},u=o('<p>例如这道题，是先考虑左边呢，还是考虑右边呢？</p><p><strong>先考虑哪一边都可以！ 就别两边一起考虑，那样就把自己陷进去了</strong>。</p><p>先贪心一边，局部最优：只要右边评分比左边大，右边的孩子就多一个糖果，全局最优：相邻的孩子中，评分高的右孩子获得比左边孩子更多的糖果</p><p>如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201117114916878-20230310133332759.png" alt="135.分发糖果"></p><p>接着在贪心另一边，左孩子大于右孩子，左孩子的糖果就要比右孩子多。</p><p>此时candyVec[i]（第i个小孩的糖果数量，左孩子）就有两个选择了，一个是candyVec[i + 1] + 1（从右孩子这个加1得到的糖果数量），一个是candyVec[i]（之前比较右孩子大于左孩子得到的糖果数量）。</p><p>那么第二次贪心的局部最优：取candyVec[i + 1] + 1 和 candyVec[i] 最大的糖果数量，保证第i个小孩的糖果数量即大于左边的也大于右边的。全局最优：相邻的孩子中，评分高的孩子获得更多的糖果。</p><p>局部最优可以推出全局最优。</p><p>如图： <img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20201117115658791-20230310133346127.png" alt="135.分发糖果1"></p><h2 id="周三" tabindex="-1"><a class="header-anchor" href="#周三" aria-hidden="true">#</a> 周三</h2>',11),f={href:"https://programmercarl.com/0860.%E6%9F%A0%E6%AA%AC%E6%B0%B4%E6%89%BE%E9%9B%B6.html",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"这道题目刚一看，可能会有点懵，这要怎么找零才能保证完整全部账单的找零呢？",-1),B=e("p",null,[e("strong",null,"但仔细一琢磨就会发现，可供我们做判断的空间非常少！")],-1),A=e("p",null,"美元10只能给账单20找零，而美元5可以给账单10和账单20找零，美元5更万能！",-1),k=e("p",null,"局部最优：遇到账单20，优先消耗美元10，完成本次找零。全局最优：完成全部账单的找零。",-1),b=e("p",null,"局部最优可以推出全局最优。",-1),x=e("p",null,"所以把能遇到的情况分析一下，只要分析到具体情况了，一下子就豁然开朗了。",-1),V=e("p",null,"这道题目其实是一道简单题，但如果一开始就想从整体上寻找找零方案，就会把自己陷进去，各种情况一交叉，只会越想越复杂了。",-1),y=e("h2",{id:"周四",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#周四","aria-hidden":"true"},"#"),t(" 周四")],-1),j={href:"https://programmercarl.com/0406.%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},F={href:"https://programmercarl.com/0135.%E5%88%86%E5%8F%91%E7%B3%96%E6%9E%9C.html",target:"_blank",rel:"noopener noreferrer"},z={href:"https://programmercarl.com/0406.%E6%A0%B9%E6%8D%AE%E8%BA%AB%E9%AB%98%E9%87%8D%E5%BB%BA%E9%98%9F%E5%88%97.html",target:"_blank",rel:"noopener noreferrer"},C=e("p",null,"那么本题先确定k还是先确定h呢，也就是究竟先按h排序呢，还先按照k排序呢？",-1),D=e("p",null,"这里其实很考察大家的思考过程，如果按照k来从小到大排序，排完之后，会发现k的排列并不符合条件，身高也不符合条件，两个维度哪一个都没确定下来。",-1),N=e("p",null,[e("strong",null,"所以先从大到小按照h排个序，再来贪心k"),t("。")],-1),v=e("p",null,"此时局部最优：优先按身高高的people的k来插入。插入操作过后的people满足队列属性。全局最优：最后都做完插入操作，整个队列满足题目队列属性。",-1),q=e("p",null,"局部最优可以推出全局最优，找不出反例，那么就来贪心。",-1),w=e("h2",{id:"总结",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#总结","aria-hidden":"true"},"#"),t(" 总结")],-1),I=e("p",null,"「代码随想录」里已经讲了十一道贪心题目了，大家可以发现在每一道题目的讲解中，我都是把什么是局部最优，和什么是全局最优说清楚。",-1),L={href:"https://programmercarl.com/0134.%E5%8A%A0%E6%B2%B9%E7%AB%99.html",target:"_blank",rel:"noopener noreferrer"},S=e("p",null,"而且大家也会发现，贪心并没有想象中的那么简单，贪心往往妙的出其不意，触不及防！",-1);function O(T,G){const n=s("ExternalLinkIcon");return l(),c("div",null,[h,i,_,e("p",null,[t("在"),e("a",d,[t("贪心算法：加油站"),r(n)]),t("中给出每一个加油站的汽油和开到这个加油站的消耗，问汽车能不能开一圈。")]),m,e("p",null,[t("在"),e("a",E,[t("贪心算法：分发糖果"),r(n)]),t("中我们第一次接触了需要考虑两个维度的情况。")]),u,e("p",null,[t("在"),e("a",f,[t("贪心算法：柠檬水找零"),r(n)]),t("中我们模拟了买柠檬水找零的过程。")]),g,B,A,k,b,x,V,y,e("p",null,[t("在"),e("a",j,[t("贪心算法：根据身高重建队列"),r(n)]),t("中，我们再一次遇到了需要考虑两个维度的情况。")]),e("p",null,[t("之前我们已经做过一道类似的了就是"),e("a",F,[t("贪心算法：分发糖果"),r(n)]),t("，但本题比分发糖果难不少！")]),e("p",null,[e("a",z,[t("贪心算法：根据身高重建队列"),r(n)]),t("中依然是要确定一边，然后在考虑另一边，两边一起考虑一定会蒙圈。")]),C,D,N,v,q,w,I,e("p",null,[t("虽然有时候感觉贪心就是常识，但如果真正是常识性的题目，其实是模拟题，就不是贪心算法了！例如"),e("a",L,[t("贪心算法：加油站"),r(n)]),t("中的贪心方法一，其实我就认为不是贪心算法，而是直接从全局最优的角度上来模拟，因为方法里没有体现局部最优的过程。")]),S])}const J=a(p,[["render",O],["__file","20201217tanxinzhoumozongjie.html.vue"]]);export{J as default};