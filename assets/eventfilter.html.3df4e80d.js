import{r as t,o,c as r,a as n,b as e,F as c,e as p,d as s}from"./app.2e037717.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=p(`<h1 id="\u4E8B\u4EF6\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#\u4E8B\u4EF6\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u4E8B\u4EF6\u8FC7\u6EE4\u5668</h1><p>\u5728\u914D\u7F6E\u6587\u4EF6\u586B\u5199\u5BF9\u5E94\u901A\u4FE1\u65B9\u5F0F\u7684 <code>middlewares.filter</code> \u5373\u53EF\u5F00\u542F\u4E8B\u4EF6\u8FC7\u6EE4\u5668\uFF0C\u542F\u52A8\u65F6\u4F1A\u8BFB\u53D6\u8BE5\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u8FC7\u6EE4\u89C4\u5219\uFF08\u4F7F\u7528 JSON \u7F16\u5199\uFF09\uFF0C\u82E5\u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u6216\u8FC7\u6EE4\u89C4\u5219\u8BED\u6CD5\u9519\u8BEF\uFF0C\u5219\u4E0D\u4F1A\u542F\u7528\u4E8B\u4EF6\u8FC7\u6EE4\u5668\u3002 \u4E8B\u4EF6\u8FC7\u6EE4\u5668\u4F1A\u5904\u7406\u6240\u6709\u4E8B\u4EF6(\u5305\u62EC\u5FC3\u8DF3\u4E8B\u4EF6\u5728\u5185\u7684\u5143\u4E8B\u4EF6),\u8BF7\u8C28\u614E\u4F7F\u7528\uFF01\uFF01</p><p>\u6CE8\u610F: \u4E0E\u5BA2\u6237\u7AEF\u5EFA\u7ACB\u8FDE\u63A5\u7684\u63E1\u624B\u4E8B\u4EF6<strong>\u4E0D\u4F1A</strong>\u7ECF\u8FC7\u4E8B\u4EF6\u8FC7\u6EE4\u5668</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><p>\u8FD9\u8282\u9996\u5148\u7ED9\u51FA\u4E00\u4E9B\u793A\u4F8B, \u6F14\u793A\u8FC7\u6EE4\u5668\u7684\u57FA\u672C\u7528\u6CD5, \u4E0B\u4E00\u8282\u5C06\u7ED9\u51FA\u5177\u4F53\u8BED\u6CD5\u8BF4\u660E\u3002</p><h3 id="\u8FC7\u6EE4\u6240\u6709\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u6240\u6709\u4E8B\u4EF6" aria-hidden="true">#</a> \u8FC7\u6EE4\u6240\u6709\u4E8B\u4EF6</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;.not&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u53EA\u4E0A\u62A5\u4EE5\u300C-\u300D\u5F00\u5934\u7684\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u53EA\u4E0A\u62A5\u4EE5\u300C-\u300D\u5F00\u5934\u7684\u6D88\u606F" aria-hidden="true">#</a> \u53EA\u4E0A\u62A5\u4EE5\u300C!!\u300D\u5F00\u5934\u7684\u6D88\u606F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;raw_message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;.regex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^!!&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u53EA\u4E0A\u62A5\u7FA4\u7EC4\u7684\u975E\u533F\u540D\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u53EA\u4E0A\u62A5\u7FA4\u7EC4\u7684\u975E\u533F\u540D\u6D88\u606F" aria-hidden="true">#</a> \u53EA\u4E0A\u62A5\u7FA4\u7EC4\u7684\u975E\u533F\u540D\u6D88\u606F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;message_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;group&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;anonymous&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;.eq&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u53EA\u4E0A\u62A5\u79C1\u804A\u6216\u7279\u5B9A\u7FA4\u7EC4\u7684\u975E\u533F\u540D\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u53EA\u4E0A\u62A5\u79C1\u804A\u6216\u7279\u5B9A\u7FA4\u7EC4\u7684\u975E\u533F\u540D\u6D88\u606F" aria-hidden="true">#</a> \u53EA\u4E0A\u62A5\u79C1\u804A\u6216\u7279\u5B9A\u7FA4\u7EC4\u7684\u975E\u533F\u540D\u6D88\u606F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;.or&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;message_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;private&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;message_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;group&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;group_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;.in&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token number">123456</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;anonymous&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;.eq&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h3 id="\u53EA\u4E0A\u62A5\u7FA4\u7EC4-11111\u300122222\u300133333-\u4E2D\u4E0D\u662F\u7528\u6237-12345-\u53D1\u9001\u7684\u6D88\u606F-\u4EE5\u53CA\u7528\u6237-66666-\u53D1\u9001\u7684\u6240\u6709\u6D88\u606F" tabindex="-1"><a class="header-anchor" href="#\u53EA\u4E0A\u62A5\u7FA4\u7EC4-11111\u300122222\u300133333-\u4E2D\u4E0D\u662F\u7528\u6237-12345-\u53D1\u9001\u7684\u6D88\u606F-\u4EE5\u53CA\u7528\u6237-66666-\u53D1\u9001\u7684\u6240\u6709\u6D88\u606F" aria-hidden="true">#</a> \u53EA\u4E0A\u62A5\u7FA4\u7EC4 11111\u300122222\u300133333 \u4E2D\u4E0D\u662F\u7528\u6237 12345 \u53D1\u9001\u7684\u6D88\u606F, \u4EE5\u53CA\u7528\u6237 66666 \u53D1\u9001\u7684\u6240\u6709\u6D88\u606F</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;.or&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;group_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;.in&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11111</span><span class="token punctuation">,</span> <span class="token number">22222</span><span class="token punctuation">,</span> <span class="token number">33333</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;.neq&quot;</span><span class="token operator">:</span> <span class="token number">12345</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token number">66666</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u4E00\u4E2A\u66F4\u590D\u6742\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u66F4\u590D\u6742\u7684\u4F8B\u5B50" aria-hidden="true">#</a> \u4E00\u4E2A\u66F4\u590D\u6742\u7684\u4F8B\u5B50</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;.or&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;message_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;private&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;user_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;.not&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token property">&quot;.in&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11111</span><span class="token punctuation">,</span> <span class="token number">22222</span><span class="token punctuation">,</span> <span class="token number">33333</span><span class="token punctuation">]</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token property">&quot;.neq&quot;</span><span class="token operator">:</span> <span class="token number">44444</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;message_type&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token property">&quot;.regex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;group|discuss&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">&quot;.or&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;group_id&quot;</span><span class="token operator">:</span> <span class="token number">12345</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;raw_message&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token property">&quot;.contains&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\u901A\u77E5&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="\u8FDB\u9636\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#\u8FDB\u9636\u6307\u5357" aria-hidden="true">#</a> \u8FDB\u9636\u6307\u5357</h2><ol><li>\u5BF9\u4E8E\u5D4C\u5957\u7684\u503C\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>.</code> \u8FDB\u884C\u7B80\u5316\uFF0C\u5982</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;sender&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0E\u4E0B\u9762\u7684\u914D\u7F6E\u6587\u4EF6\u4F5C\u7528\u76F8\u540C</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sender.sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;male&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u5BF9\u4E8E\u6570\u7EC4\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6570\u5B57\u7D22\u5F15\uFF0C\u5982</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;message.0.type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,24),d=s("\u66F4\u591A\u8FDB\u9636\u8BED\u6CD5\u8BF7\u53C2\u8003"),b={href:"https://github.com/tidwall/gjson/blob/master/SYNTAX.md",target:"_blank",rel:"noopener noreferrer"},k=s("GJSON\u8BED\u6CD5"),m=p('<h2 id="\u8BED\u6CD5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5\u8BF4\u660E" aria-hidden="true">#</a> \u8BED\u6CD5\u8BF4\u660E</h2><p>\u8FC7\u6EE4\u89C4\u5219\u6700\u5916\u5C42\u662F\u4E00\u4E2A JSON \u5BF9\u8C61, \u5176\u4E2D\u7684\u952E, \u5982\u679C\u4EE5 <code>.</code>\uFF08\u70B9\u53F7\uFF09\u5F00\u5934, \u5219\u8868\u793A\u8FD0\u7B97\u7B26, \u5176\u503C\u4E3A\u8FD0\u7B97\u7B26\u7684\u53C2\u6570, \u5982\u679C\u4E0D\u4EE5 <code>.</code> \u5F00\u5934, \u5219\u8868\u793A\u5BF9\u4E8B\u4EF6\u6570\u636E\u5BF9\u8C61\u4E2D\u76F8\u5E94\u952E\u7684\u8FC7\u6EE4\u3002\u8FC7\u6EE4\u89C4\u5219\u4E2D\u4EFB\u4F55\u4E00\u4E2A\u5BF9\u8C61, \u53EA\u6709\u5728\u5B83\u7684\u6240\u6709\u9879\u90FD\u5339\u914D\u7684\u60C5\u51B5\u4E0B, \u624D\u4F1A\u8BA9\u4E8B\u4EF6\u901A\u8FC7\uFF08\u7B49\u4EF7\u4E8E\u4E00\u4E2A <code>and</code> \u8FD0\u7B97\uFF09\uFF1B\u5176\u4E2D, \u4E0D\u4EE5 <code>.</code> \u5F00\u5934\u7684\u952E, \u82E5\u5176\u503C\u4E0D\u662F\u5BF9\u8C61, \u5219\u53EA\u6709\u5728\u8FD9\u4E2A\u503C\u548C\u4E8B\u4EF6\u6570\u636E\u76F8\u5E94\u503C\u76F8\u7B49\u7684\u60C5\u51B5\u4E0B, \u624D\u4F1A\u901A\u8FC7\uFF08\u7B49\u4EF7\u4E8E\u4E00\u4E2A <code>eq</code> \u8FD0\u7B97\u7B26\uFF09\u3002</p><p>\u4E0B\u9762\u5217\u51FA\u6240\u6709\u8FD0\u7B97\u7B26\uFF08\u300C\u8981\u6C42\u7684\u53C2\u6570\u7C7B\u578B\u300D\u662F\u6307\u8FD0\u7B97\u7B26\u7684\u952E\u6240\u5BF9\u5E94\u7684\u503C\u7684\u7C7B\u578B, \u300C\u53EF\u4F5C\u7528\u4E8E\u7684\u7C7B\u578B\u300D\u662F\u6307\u5728\u8FC7\u6EE4\u65F6\u4E8B\u4EF6\u5BF9\u8C61\u76F8\u5E94\u503C\u7684\u7C7B\u578B\uFF09\uFF1A</p><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u8981\u6C42\u7684\u53C2\u6570\u7C7B\u578B</th><th>\u53EF\u4F5C\u7528\u4E8E\u7684\u7C7B\u578B</th></tr></thead><tbody><tr><td><code>.not</code></td><td>object</td><td>\u4EFB\u4F55</td></tr><tr><td><code>.and</code></td><td>object</td><td>\u82E5\u53C2\u6570\u4E2D\u5168\u4E3A\u8FD0\u7B97\u7B26, \u5219\u4EFB\u4F55; \u82E5\u4E0D\u5168\u4E3A\u8FD0\u7B97\u7B26, \u5219 object</td></tr><tr><td><code>.or</code></td><td>array\uFF08\u6570\u7EC4\u5143\u7D20\u4E3A object\uFF09</td><td>\u4EFB\u4F55</td></tr><tr><td><code>.eq</code></td><td>\u4EFB\u4F55</td><td>\u4EFB\u4F55</td></tr><tr><td><code>.neq</code></td><td>\u4EFB\u4F55</td><td>\u4EFB\u4F55</td></tr><tr><td><code>.in</code></td><td>string/array</td><td>\u82E5\u53C2\u6570\u4E3A string, \u5219 string ; \u82E5\u53C2\u6570\u4E3A array, \u5219\u4EFB\u4F55</td></tr><tr><td><code>.contains</code></td><td>string</td><td>string</td></tr><tr><td><code>.regex</code></td><td>string</td><td>string</td></tr></tbody></table><h2 id="\u8FC7\u6EE4\u65F6\u7684\u4E8B\u4EF6\u6570\u636E\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u8FC7\u6EE4\u65F6\u7684\u4E8B\u4EF6\u6570\u636E\u5BF9\u8C61" aria-hidden="true">#</a> \u8FC7\u6EE4\u65F6\u7684\u4E8B\u4EF6\u6570\u636E\u5BF9\u8C61</h2>',5),h=s("\u8FC7\u6EE4\u5668\u5728go-cqhttp\u6784\u5EFA\u597D\u4E8B\u4EF6\u6570\u636E\u540E\u8FD0\u884C, \u5404\u4E8B\u4EF6\u7684\u6570\u636E\u5B57\u6BB5\u89C1 "),q={href:"https://github.com/howmanybots/onebot/blob/master/v11/specs/event/README.md",target:"_blank",rel:"noopener noreferrer"},g=s("OneBot\u6807\u51C6"),_=s("\u3002"),y=n("p",null,"\u8FD9\u91CC\u6709\u51E0\u70B9\u9700\u8981\u6CE8\u610F\uFF1A",-1),v=n("code",null,"message",-1),j=s(" \u5B57\u6BB5\u5728\u8FD0\u884C\u8FC7\u6EE4\u5668\u65F6\u548C\u4E0A\u62A5\u4FE1\u606F\u7C7B\u578B\u76F8\u540C (\u89C1 "),x={href:"https://github.com/howmanybots/onebot/blob/master/v11/specs/message/array.md",target:"_blank",rel:"noopener noreferrer"},f=s("\u6D88\u606F\u683C\u5F0F"),w=s(" )"),N=n("li",null,[n("code",null,"raw_message"),s(" \u5B57\u6BB5\u4E3A\u672A\u7ECF "),n("strong",null,"CQ\u7801"),s(" \u5904\u7406\u7684\u539F\u59CB\u6D88\u606F\u5B57\u7B26\u4E32, \u8FD9\u610F\u5473\u7740\u5176\u4E2D\u53EF\u80FD\u4F1A\u51FA\u73B0\u5F62\u5982 "),n("code",null,"[CQ:face,id=123]"),s(" \u7684 CQ \u7801")],-1);function E(S,B){const a=t("ExternalLinkIcon");return o(),r(c,null,[i,n("p",null,[d,n("a",b,[k,e(a)])]),m,n("p",null,[h,n("a",q,[g,e(a)]),_]),y,n("ul",null,[n("li",null,[v,j,n("a",x,[f,e(a)]),w]),N])],64)}var V=l(u,[["render",E]]);export{V as default};
