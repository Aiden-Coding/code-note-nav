import{_ as t,r as l,o as c,c as d,a as n,b as s,d as a,e as i}from"./app-pMbPEaNl.js";const r={},p=n("h1",{id:"右旋字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#右旋字符串","aria-hidden":"true"},"#"),s(" 右旋字符串")],-1),u={href:"https://kamacoder.com/problempage.php?pid=1065",target:"_blank",rel:"noopener noreferrer"},v=i(`<p>字符串的右旋转操作是把字符串尾部的若干个字符转移到字符串的前面。给定一个字符串 s 和一个正整数 k，请编写一个函数，将字符串中的后面 k 个字符移到字符串的前面，实现字符串的右旋转操作。</p><p>例如，对于输入字符串 &quot;abcdefg&quot; 和整数 2，函数应该将其转换为 &quot;fgabcde&quot;。</p><p>输入：输入共包含两行，第一行为一个正整数 k，代表右旋转的位数。第二行为字符串 s，代表需要旋转的字符串。</p><p>输出：输出共一行，为进行了右旋转操作后的字符串。</p><p>样例输入：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2
abcdefg 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>样例输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fgabcde
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>数据范围：1 &lt;= k &lt; 10000, 1 &lt;= s.length &lt; 10000;</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>为了让本题更有意义，提升一下本题难度：<strong>不能申请额外空间，只能在本串上操作</strong>。 （Java不能在字符串上修改，所以使用java一定要开辟新空间）</p><p>不能使用额外空间的话，模拟在本串操作要实现右旋转字符串的功能还是有点困难的。</p>`,12),o={href:"https://programmercarl.com/0151.%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%87%8C%E7%9A%84%E5%8D%95%E8%AF%8D.html",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>本题中，我们需要将字符串右移n位，字符串相当于分成了两个部分，如果n为2，符串相当于分成了两个部分，如图： （length为字符串长度）</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20231106170143.png" alt=""></p><p>右移n位， 就是将第二段放在前面，第一段放在后面，先不考虑里面字符的顺序，是不是整体倒叙不就行了。如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20231106171557.png" alt=""></p><p>此时第一段和第二段的顺序是我们想要的，但里面的字符位置被我们倒叙，那么此时我们在把 第一段和第二段里面的字符再倒叙一把，这样字符顺序不就正确了。 如果：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20231106172058.png" alt=""></p><p>其实，思路就是 通过 整体倒叙，把两段子串顺序颠倒，两个段子串里的的字符在倒叙一把，<strong>负负得正</strong>，这样就不影响子串里面字符的顺序了。</p><p>整体代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本一
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int main() {
    int n;
    string s;
    cin &gt;&gt; n;
    cin &gt;&gt; s;
    int len = s.size(); //获取长度

    reverse(s.begin(), s.end()); // 整体反转
    reverse(s.begin(), s.begin() + n); // 先反转前一段，长度n
    reverse(s.begin() + n, s.end()); // 再反转后一段

    cout &lt;&lt; s &lt;&lt; endl;

} 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么整体反正的操作放在下面，先局部反转行不行？</p><p>可以的，不过，要记得 控制好 局部反转的长度，如果先局部反转，那么先反转的子串长度就是 len - n，如图：</p><p><img src="https://code-thinking-1253855093.file.myqcloud.com/pics/20231106172534.png" alt=""></p><p>代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>// 版本二 
#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int main() {
    int n;
    string s;
    cin &gt;&gt; n;
    cin &gt;&gt; s;
    int len = s.size(); //获取长度
    reverse(s.begin(), s.begin() + len - n); // 先反转前一段，长度len-n ，注意这里是和版本一的区别
    reverse(s.begin() + len - n, s.end()); // 再反转后一段
    reverse(s.begin(), s.end()); // 整体反转
    cout &lt;&lt; s &lt;&lt; endl;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="拓展" tabindex="-1"><a class="header-anchor" href="#拓展" aria-hidden="true">#</a> 拓展</h2><p>大家在做剑指offer的时候，会发现 剑指offer的题目是左反转，那么左反转和右反转 有什么区别呢？</p><p>其实思路是一样一样的，就是反转的区间不同而已。如果本题是左旋转n，那么实现代码如下：</p><div class="language-CPP line-numbers-mode" data-ext="CPP"><pre class="language-CPP"><code>#include&lt;iostream&gt;
#include&lt;algorithm&gt;
using namespace std;
int main() {
    int n;
    string s;
    cin &gt;&gt; n;
    cin &gt;&gt; s;
    int len = s.size(); //获取长度
    reverse(s.begin(), s.begin() + n); //  反转第一段长度为n 
    reverse(s.begin() + n, s.end()); // 反转第二段长度为len-n 
    reverse(s.begin(), s.end());  // 整体反转
    cout &lt;&lt; s &lt;&lt; endl;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家可以感受一下 这份代码和 版本二的区别， 其实就是反转的区间不同而已。</p><p>那么左旋转的话，可以不可以先整体反转，例如想版本一的那样呢？</p><p>当然可以。</p><h2 id="其他语言版本" tabindex="-1"><a class="header-anchor" href="#其他语言版本" aria-hidden="true">#</a> 其他语言版本</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java：</h3><div class="language-Java line-numbers-mode" data-ext="Java"><pre class="language-Java"><code>// 版本一
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = Integer.parseInt(in.nextLine());
        String s = in.nextLine();

        int len = s.length();  //获取字符串长度
        char[] chars = s.toCharArray();
        reverseString(chars, 0, len - 1);  //反转整个字符串
        reverseString(chars, 0, n - 1);  //反转前一段字符串，此时的字符串首尾尾是0,n - 1
        reverseString(chars, n, len - 1);  //反转后一段字符串，此时的字符串首尾尾是n,len - 1
        
        System.out.println(chars);

    }

    public static void reverseString(char[] ch, int start, int end) {
        //异或法反转字符串，参照题目 344.反转字符串的解释
        while (start &lt; end) {
            ch[start] ^= ch[end];
            ch[end] ^= ch[start];
            ch[start] ^= ch[end];
            start++;
            end--;
        }
    }
}


// 版本二
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = Integer.parseInt(in.nextLine());
        String s = in.nextLine();

        int len = s.length();  //获取字符串长度
        char[] chars = s.toCharArray();
        reverseString(chars, 0, len - n - 1);  //反转前一段字符串，此时的字符串首尾是0,len - n - 1
        reverseString(chars, len - n, len - 1);  //反转后一段字符串，此时的字符串首尾是len - n,len - 1
        reverseString(chars, 0, len - 1);  //反转整个字符串

        System.out.println(chars);

    }

    public static void reverseString(char[] ch, int start, int end) {
        //异或法反转字符串，参照题目 344.反转字符串的解释
        while (start &lt; end) {
            ch[start] ^= ch[end];
            ch[end] ^= ch[start];
            ch[start] ^= ch[end];
            start++;
            end--;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python:</h3><h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> Go：</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main
<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> reverse <span class="token punctuation">(</span>strByte <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">byte</span><span class="token punctuation">,</span> l<span class="token punctuation">,</span> r <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> l <span class="token operator">&lt;</span> r <span class="token punctuation">{</span>
        strByte<span class="token punctuation">[</span>l<span class="token punctuation">]</span><span class="token punctuation">,</span> strByte<span class="token punctuation">[</span>r<span class="token punctuation">]</span> <span class="token operator">=</span> strByte<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">,</span> strByte<span class="token punctuation">[</span>l<span class="token punctuation">]</span>
        l<span class="token operator">++</span>
        r<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> str <span class="token builtin">string</span>
    <span class="token keyword">var</span> target <span class="token builtin">int</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>target<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Scanln</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>str<span class="token punctuation">)</span>
    strByte <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token function">byte</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>
    
    <span class="token function">reverse</span><span class="token punctuation">(</span>strByte<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>strByte<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>strByte<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> target <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">reverse</span><span class="token punctuation">(</span>strByte<span class="token punctuation">,</span> target<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>strByte<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>strByte<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> JavaScript：</h3><h3 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript：</h3><h3 id="swift" tabindex="-1"><a class="header-anchor" href="#swift" aria-hidden="true">#</a> Swift:</h3><h3 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP：</h3><h3 id="scala" tabindex="-1"><a class="header-anchor" href="#scala" aria-hidden="true">#</a> Scala:</h3><h3 id="rust" tabindex="-1"><a class="header-anchor" href="#rust" aria-hidden="true">#</a> Rust:</h3>`,33);function b(h,g){const e=l("ExternalLinkIcon");return c(),d("div",null,[p,n("p",null,[n("a",u,[s("卡码网题目链接"),a(e)])]),v,n("p",null,[s("那么我们可以想一下上一题目"),n("a",o,[s("字符串：花式反转还不够！"),a(e)]),s("中讲过，使用整体反转+局部反转就可以实现反转单词顺序的目的。")]),m])}const f=t(r,[["render",b],["__file","kama55.youxuanzifuchuan.html.vue"]]);export{f as default};
