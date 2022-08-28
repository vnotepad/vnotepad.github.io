import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as p,a as n,b as t,e as s,d as c,r}from"./app.fec7fbe8.js";const d={},l=n("p",null,"\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u53C8\u79F0\u89C4\u5219\u8868\u8FBE\u5F0F\uFF0C\u662F\u4F7F\u7528\u5355\u4E2A\u5B57\u7B26\u4E32\u6765\u63CF\u8FF0\u3001\u5339\u914D\u4E00\u7CFB\u5217\u5339\u914D\u67D0\u4E2A\u53E5\u6CD5\u89C4\u5219\u7684\u5B57\u7B26\u4E32\uFF0C\u901A\u5E38\u88AB\u7528\u6765\u68C0\u7D22\u3001\u66FF\u6362\u90A3\u4E9B\u7B26\u5408\u67D0\u4E2A\u6A21\u5F0F\uFF08\u89C4\u5219\uFF09\u7684\u6587\u672C\u3002",-1),i=s("\u6B63\u5219\u5165\u95E8\uFF1A"),u={href:"https://deerchao.cn/tutorials/regex/regex.htm",target:"_blank",rel:"noopener noreferrer"},k=s("\u6B63\u5219 30 \u5206\u949F\u5165\u95E8"),h=s("\uFF0C"),m={href:"https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md",target:"_blank",rel:"noopener noreferrer"},v=s("LEARN REGEX \u4E2D\u6587\u7248"),b=c(`<h2 id="\u5B9E\u7528\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u7528\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> \u5B9E\u7528\u8868\u8FBE\u5F0F</h2><p><code>{}</code> \u9650\u5B9A\u7B26 (\u8868\u793A\u56FA\u5B9A\u4F4D\u6570)\u3002\u6BD4\u5982\uFF1A<code>\\\\d{5}</code> \u5339\u914D\u957F\u5EA6\u6709 5 \u4E2A\u7684\u6570\u5B57\uFF0C<code>\\\\d{1,5}</code> \u6700\u5C11\u5339\u914D 1 \u4E2A\uFF0C\u6700\u957F\u5339\u914D 5 \u4E2A\u6570\u5B57\u3002</p><p><code>.{30,}</code> \u6307\u5339\u914D\u957F\u5EA6 30 \u4EE5\u4E0A\u7684\u4EFB\u610F\u5B57\u7B26\u4E32\u3002</p><p><code>[aeiou]</code> \u5339\u914D\u4E2D\u62EC\u53F7\u4E2D\u4EFB\u610F\u5B57\u7B26\u3002 <code>[^aeiou]</code> \u5339\u914D\u9664\u4E86 aeiou \u8FD9\u51E0\u4E2A\u5B57\u6BCD\u4EE5\u5916\u7684\u4EFB\u610F\u5B57\u7B26\u3002</p><p>HTTP \u94FE\u63A5\u5339\u914D\uFF1A<code>https?://[^\\s&quot;\u3002\uFF1F,\uFF0C?)#]+</code>\uFF0C\u53E5\u5C3E\u4E0D\u542B\u7A7A\u683C\u3001\u4E2D\u82F1\u6587\u9017\u53F7\u3001\u4E2D\u6587\u53E5\u53F7\u3001\u95EE\u53F7\uFF0C\u4EC5\u5305\u542B http \u548C https \u94FE\u63A5</p><p>\u4E07\u80FD\u94FE\u63A5\u5339\u914D\uFF1A<code>[a-zA-Z]+://[^\\s&quot;\u3002\uFF1F,\uFF0C?)#]+</code> \u5339\u914D\u4E07\u80FD\u524D\u7F00\uFF0C\u5982 ftp\u3001tencent\u3001lark\u3002</p><p>\u5339\u914D\u884C\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5339\u914D\u542B\u67D0\u4E2A\u5B57\u7B26\u7684\u884C</span>
<span class="token keyword">var</span> ZZMactch <span class="token operator">=</span> <span class="token string">&quot;.*&quot;</span> <span class="token operator">+</span> inputMatch<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token string">&quot;.*&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//\u5339\u914D\u4E0D\u542B\u6307\u5B9A\u5B57\u7B26\u7684\u884C</span>
<span class="token keyword">var</span> ZZMactch <span class="token operator">=</span> <span class="token string">&quot;^((?!&quot;</span><span class="token operator">+</span>inputMatch<span class="token punctuation">.</span>value<span class="token operator">+</span><span class="token string">&quot;).)*$&quot;</span><span class="token punctuation">;</span>
<span class="token comment">//\u5339\u914D\u6240\u6709\u4E0D\u5305\u62EC CSDN \u7684\u884C</span>
<span class="token operator">^</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">!</span><span class="token constant">CSDN</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token operator">*</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5339\u914D\u4E0D\u540C\u6587\u672C\u7EC4\uFF0C<code>id=</code> \u6216 <code>contentId=</code> \u540E\u7684\u591A\u4E2A\u6570\u5B57\u7B26\u53F7</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span>id<span class="token operator">=</span><span class="token punctuation">)</span>\\d<span class="token operator">*</span>
<span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span><span class="token punctuation">[</span><span class="token operator">?</span><span class="token operator">&amp;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>id<span class="token operator">|</span>contentId<span class="token punctuation">)</span><span class="token operator">=</span><span class="token punctuation">)</span>\\d<span class="token operator">+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>^((?!abc).)*admin((?!abc).)*$</code> \u5339\u914D \u4E0D\u5305\u542B abc \u4F46\u5305\u542B admin \u7684\u5B57\u7B26\u4E32\uFF0C\u5339\u914D\u6574\u884C\u3002<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p><code>((?!social.tmall.com)(?!ugc/detail.html).)*$</code> \u5339\u914D\u4E0D\u5305\u542B <code>social.tmall.com</code> \u548C <code>ugc/detail.html</code> \u7684\u5B57\u7B26\u4E32\uFF0C\u5339\u914D\u6574\u884C\u3002<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p><code>[\u20B3$\xA2\u20B4\u20AC\u20A4\uFFE5\uFF04\u300A]([a-zA-Z0-9]{11})[\u20B3$\xA2\u20B4\u20AC\u20A4\uFFE5\uFF04\u300A]</code> \u5339\u914D\u6DD8\u53E3\u4EE4\uFF0C<code>[]</code> \u6307\u4E2D\u5185\u5BB9\u4EFB\u610F\u5339\u914D\u4E00\u9879\u7686\u53EF\u3002</p><h3 id="\u524D\u540E\u5339\u914D" tabindex="-1"><a class="header-anchor" href="#\u524D\u540E\u5339\u914D" aria-hidden="true">#</a> \u524D\u540E\u5339\u914D</h3><p>\u524D\u540E\u5339\u914D\uFF0C\u524D\u540E\u5143\u7D20\u53EA\u80FD\u51FA\u73B0\u4E00\u6B21\uFF0C\u5426\u5219\u5BB9\u6613\u8986\u76D6\u8FC7\u591A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5339\u914D\u4EFB\u610F\u4EE5 a \u5F00\u5934\u5E76\u4EE5 b \u7ED3\u5C3E\u7684\u5B57\u7B26\uFF0C\u5339\u914D\u5185\u5BB9\u4E0D\u542B a\u3001b</span>
<span class="token comment">//\u5982\u679C a \u6709 n \u4E2A\uFF0C\u5219\u540C\u4E00\u884C\u4E5F\u4F1A\u5339\u914D n \u6B21</span>
<span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span>b<span class="token punctuation">)</span>

<span class="token comment">//\u5982\u679C b \u6709 n \u4E2A\uFF0C\u5219\u5339\u914D\u6700\u540E\u4E00\u4E2A b\uFF1B</span>
<span class="token comment">//\u5982\u679C\u9700\u8981\u5339\u914D\u7B2C\u4E00\u4E2A b\uFF0C\u5219\u5339\u914D\u533A\u52A0\u61D2\u60F0\u9650\u5B9A\u7B26\uFF1F\uFF0C\u4EE3\u8868\u91CD\u590D 1 \u6B21\u6216\u66F4\u591A\u6B21\uFF0C\u4F46\u5C3D\u53EF\u80FD\u5C11\u91CD\u590D</span>
<span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span><span class="token punctuation">.</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token operator">?</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span>b<span class="token punctuation">)</span>

<span class="token comment">//\u5339\u914D\u4EFB\u610F\u4EE5 a \u5F00\u5934\u5E76\u4EE5 b \u7ED3\u5C3E\u7684\u5B57\u7B26\uFF0C\u5339\u914D\u5185\u5BB9\u5305\u542B a\u3001b</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span>b<span class="token punctuation">)</span>b

<span class="token comment">//\u5339\u914D\u5B57\u7B26\u4E32\u4E2D a \u548C\u8BCD\u7EC4 abc \u95F4\u7684\u5B57\u7B26\uFF0C\u5982\u679C abc \u4E0D\u5B58\u5728\u5219\u53BB\u5C3E\u90E8</span>
<span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">&lt;=</span><span class="token punctuation">.</span><span class="token operator">*</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token operator">+</span><span class="token punctuation">(</span><span class="token operator">?</span><span class="token operator">=</span>abc<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6B63\u5219\u66FF\u6362" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u66FF\u6362" aria-hidden="true">#</a> \u6B63\u5219\u66FF\u6362</h3><p>\u6B63\u5219\u5168\u5C40\u66FF\u6362\u4E0D\u80FD\u5E26 <code>\\\\</code>\uFF0C\u6B64\u65F6\u7528\u5206\u5272\u66FF\u6362\u66F4\u65B9\u4FBF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;dogdogdog&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">dog</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span><span class="token string">&quot;cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   #\u5168\u5C40\u66FF\u6362
<span class="token keyword">var</span> str2 <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;dog&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&quot;cat&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> #\u5206\u5272\u66FF\u6362
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8868\u8FBE\u5F0F\u4FEE\u9970\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8868\u8FBE\u5F0F\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u8868\u8FBE\u5F0F\u4FEE\u9970\u7B26</h2><p>\u5143\u5B57\u7B26\uFF1A\u533A\u5206\u5927\u5C0F\u5199</p><table><thead><tr><th>\u5E38\u7528\u6B63\u5219\u4EE3\u7801</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>.</td><td>\u5339\u914D\u9664\u6362\u884C\u7B26\u4EE5\u5916\u7684\u4EFB\u610F\u5B57\u7B26</td></tr><tr><td>*</td><td>\u5339\u914D 0 \u4E2A\u6216\u591A\u4E2A.(\u6709\u591A\u5C11\u5339\u914D\u591A\u5C11\uFF0C\u8D2A\u5A6A\u6A21\u5F0F)</td></tr><tr><td>?</td><td>\u5339\u914D 0 \u4E2A\u6216 1 \u4E2A (\u81F3\u5C11\u5339\u914D\u4E00\u4E2A)</td></tr><tr><td>$</td><td>\u4EE5\u4EC0\u4E48\u7ED3\u5C3E\u7684\uFF0C\u5982<code>\\\\d+0$</code> (\u4EE5 0 \u7ED3\u5C3E)</td></tr><tr><td>^</td><td>\u4EE5\u4EC0\u4E48\u5F00\u5934\u7684\uFF0C\u5982<code>^http</code>\u5339\u914D\u4EE5 http \u5F00\u5934\u7684\u5B57\u7B26\u4E32</td></tr><tr><td>\\w</td><td>\u5339\u914D\u5B57\u6BCD\u6216\u6570\u5B57\u6216\u4E0B\u5212\u7EBF\u6216\u6C49\u5B57</td></tr><tr><td>\\W</td><td>\u5339\u914D\u4EFB\u610F\u4E0D\u662F\u5B57\u6BCD\uFF0C\u6570\u5B57\uFF0C\u4E0B\u5212\u7EBF\uFF0C\u6C49\u5B57\u7684\u5B57\u7B26</td></tr><tr><td>\\d</td><td>\u5339\u914D\u6570\u5B57</td></tr><tr><td>\\D</td><td>\u5339\u914D\u4EFB\u610F\u975E\u6570\u5B57\u7684\u5B57\u7B26</td></tr><tr><td>\\s</td><td>\u5339\u914D\u4EFB\u610F\u7684\u7A7A\u767D\u7B26\uFF08\u7A7A\u683C ,\u5236\u8868\u7B26 )</td></tr><tr><td>\\S</td><td>\u5339\u914D\u4EFB\u610F\u4E0D\u662F\u7A7A\u767D\u7B26\u7684\u5B57\u7B26</td></tr><tr><td>\\r</td><td>\u56DE\u8F66\u7B26</td></tr><tr><td>\\n</td><td>\u6362\u884C\u7B26 (\u4E00\u822C\u60C5\u51B5\u4E0B\u4F7F\u7528\\r\\n \u5339\u914D\u56DE\u8F66\u6362\u884C)</td></tr><tr><td>\\t</td><td>\u5236\u8868\u7B26\uFF0CTab</td></tr><tr><td>\\u4e00-\\u9fa5</td><td>\u975E\u4E2D\u6587</td></tr></tbody></table><p>\u5E38\u7528\u5206\u7EC4\u8BED\u6CD5</p><table><thead><tr><th>\u5206\u7C7B</th><th>\u4EE3\u7801/\u8BED\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u6355\u83B7</td><td>(exp)</td><td>\u5339\u914D exp\uFF0C\u5E76\u6355\u83B7\u6587\u672C\u5230\u81EA\u52A8\u547D\u540D\u7684\u7EC4\u91CC</td></tr><tr><td></td><td><code>(?&lt;name&gt;exp)</code></td><td>\u5339\u914D exp\uFF0C\u5E76\u6355\u83B7\u6587\u672C\u5230\u540D\u79F0\u4E3A name \u7684\u7EC4\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5199\u6210 (?&#39;name&#39;exp)</td></tr><tr><td></td><td>(?:exp)</td><td>\u5339\u914D exp\uFF0C\u4E0D\u6355\u83B7\u5339\u914D\u7684\u6587\u672C\uFF0C\u4E5F\u4E0D\u7ED9\u6B64\u5206\u7EC4\u5206\u914D\u7EC4\u53F7</td></tr><tr><td>\u96F6\u5BBD\u65AD\u8A00</td><td>(?=exp)</td><td>\u5339\u914D exp \u524D\u9762\u7684\u4F4D\u7F6E</td></tr><tr><td></td><td>(?&lt;=exp)</td><td>\u5339\u914D exp \u540E\u9762\u7684\u4F4D\u7F6E</td></tr><tr><td></td><td>(?!exp)</td><td>\u5339\u914D\u540E\u9762\u8DDF\u7684\u4E0D\u662F exp \u7684\u4F4D\u7F6E</td></tr><tr><td></td><td>(?&lt;!exp)</td><td>\u5339\u914D\u524D\u9762\u4E0D\u662F exp \u7684\u4F4D\u7F6E</td></tr><tr><td>\u6CE8\u91CA</td><td>(?#comment)</td><td>\u8FD9\u79CD\u7C7B\u578B\u7684\u5206\u7EC4\u4E0D\u5BF9\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5904\u7406\u4EA7\u751F\u4EFB\u4F55\u5F71\u54CD\uFF0C\u7528\u4E8E\u63D0\u4F9B\u6CE8\u91CA\u8BA9\u4EBA\u9605\u8BFB</td></tr></tbody></table><hr class="footnotes-sep">`,25),f={class:"footnotes"},_={class:"footnotes-list"},g={id:"footnote1",class:"footnote-item"},x={href:"https://blog.csdn.net/thewindkee/article/details/52785763",target:"_blank",rel:"noopener noreferrer"},q=s("\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF1A\u5305\u542B\u4E14\u4E0D\u5305\u542B"),j=s(),y=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1),E={id:"footnote2",class:"footnote-item"},$={href:"https://blog.csdn.net/xiiii/article/details/89450341",target:"_blank",rel:"noopener noreferrer"},w=s("\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u4E0D\u5305\u542B\u67D0\u4E9B\u5B57\u7B26\u4E32\u7684\u6280\u5DE7"),N=s(),Z=n("a",{href:"#footnote-ref2",class:"footnote-backref"},"\u21A9\uFE0E",-1);function M(R,A){const a=r("ExternalLinkIcon");return o(),p("div",null,[l,n("p",null,[i,n("a",u,[k,t(a)]),h,n("a",m,[v,t(a)])]),b,n("section",f,[n("ol",_,[n("li",g,[n("p",null,[n("a",x,[q,t(a)]),j,y])]),n("li",E,[n("p",null,[n("a",$,[w,t(a)]),N,Z])])])])])}var S=e(d,[["render",M],["__file","Regex.html.vue"]]);export{S as default};
