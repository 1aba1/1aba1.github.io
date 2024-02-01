import{_ as t,c as a,o as e,V as d}from"./chunks/framework.RLOxJhMo.js";const u=JSON.parse('{"title":"交叉熵","description":"","frontmatter":{},"headers":[],"relativePath":"guide/blog/2024/crossEntropy.md","filePath":"guide/blog/2024/crossEntropy.md","lastUpdated":1706771168000}'),o={name:"guide/blog/2024/crossEntropy.md"},r=d('<h1 id="交叉熵" tabindex="-1">交叉熵 <a class="header-anchor" href="#交叉熵" aria-label="Permalink to &quot;交叉熵&quot;">​</a></h1><p>交叉熵（cross entropy）是深度学习中常用的一个概念，一般用来求目标与预测值之间的差距。</p><h2 id="信息论" tabindex="-1">信息论 <a class="header-anchor" href="#信息论" aria-label="Permalink to &quot;信息论&quot;">​</a></h2><h3 id="_1-信息量" tabindex="-1">1 信息量 <a class="header-anchor" href="#_1-信息量" aria-label="Permalink to &quot;1 信息量&quot;">​</a></h3><ul><li><p>信息量小：概率大的事件发生了。</p></li><li><p>信息量大：概率小的事件发生了。</p></li></ul><p>越不可能的事件发生时，我们获取到的信息量就越大。越可能发生的事件发生了，我们获取到的信息量就越小。</p><p>假设X是一个离散型随机变量，概率分布函数为 Pr(X=x)=p(x)，则定义事件X=x0的信息量为：</p><p>p(x)取值范围[0,1]，信息量图：</p><p><img src="https://img-blog.csdn.net/20180125164333234?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvdHN5Y2NuaA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast" alt=""></p><p>横坐标为概率p，纵坐标为信息量 I。概率越小，信息量越大，概率越大，信息量越小。</p><h3 id="_2-熵" tabindex="-1">2 熵 <a class="header-anchor" href="#_2-熵" aria-label="Permalink to &quot;2 熵&quot;">​</a></h3><p>对于某个事件，有n种可能性，每一种可能性都有一个概率p(xi)，可以计算出每个可能性的信息量，比如按下电脑开关的三种可能性：</p><table><thead><tr><th>序号</th><th>事件</th><th>概率p</th><th>信息量I</th></tr></thead><tbody><tr><td>A</td><td>电脑正常开机</td><td>0.7</td><td>-log(p(A))=0.36</td></tr><tr><td>B</td><td>电脑无法开机</td><td>0.2</td><td>-log(p(B))=1.61</td></tr><tr><td>C</td><td>电脑爆炸了</td><td>0.1</td><td>-log(p(C))=2.30</td></tr></tbody></table><p>熵表示所有信息量的期望，定义熵为：</p><p>其实就是以每个可能性的概率为权重，对信息量做加权求和。</p><p>所以上面电脑开机问题的熵为</p><p>此外还有一类比较特殊的问题，比如投掷硬币只有两种可能，我们称之为0-1分布问题（二项分布的特例），对于这类问题，熵的计算方法可以简化为如下算式：</p><h3 id="_3-相对熵-kl散度" tabindex="-1">3 相对熵（KL散度） <a class="header-anchor" href="#_3-相对熵-kl散度" aria-label="Permalink to &quot;3 相对熵（KL散度）&quot;">​</a></h3><p>KL 散度用来衡量两个单独的概率分布 P(x) 和 Q(x)的差异，即如果用 P 来描述目标问题，而不是用 Q 来描述目标问题，得到的信息增量。</p><p>在机器学习中，用 P 来表示样本的真实分布，比如[1,0,0]表示当前样本属于第一类。用 Q 来表示模型所预测的分布，比如[0.7,0.2,0.1]。</p><p>用 Q 来描述样本，虽然可以大致描述，但是信息量不足，需要额外的一些“信息增量”才能达到和 P 一样完美的描述。模型训练就是为了降低这个所需的“信息增量”。如果我们的Q通过反复训练，直到不再需要额外的“信息增量”也能完美的描述样本，此时Q等价于P。</p><p>KL散度的计算公式：</p><p>KL散度值越小，表示P分布和Q分布越接近。</p><h3 id="_4-交叉熵" tabindex="-1">4 交叉熵 <a class="header-anchor" href="#_4-交叉熵" aria-label="Permalink to &quot;4 交叉熵&quot;">​</a></h3><p>KL散度公式拆开：</p><p>等式的前一部分恰巧就是p的熵的相反数，等式的后一部分，就是交叉熵：</p><p>在机器学习中，我们需要评估label和predicts之间的差距，原本应该是使用KL散度的，但是由于KL散度中的前一部分 −H(p(x)) 只与真实label有关，是固定不变的，故在优化过程中，只需要关注交叉熵就可以了。所以一般在机器学习中直接用用交叉熵做loss，评估模型。</p><h2 id="机器学习中交叉熵的应用" tabindex="-1">机器学习中交叉熵的应用 <a class="header-anchor" href="#机器学习中交叉熵的应用" aria-label="Permalink to &quot;机器学习中交叉熵的应用&quot;">​</a></h2><h3 id="_1-交叉熵在单分类问题中的使用" tabindex="-1">1 交叉熵在单分类问题中的使用 <a class="header-anchor" href="#_1-交叉熵在单分类问题中的使用" aria-label="Permalink to &quot;1 交叉熵在单分类问题中的使用&quot;">​</a></h3><p>单分类问题，每一张图像样本只能有一个类别，交叉熵在单分类问题上基本是标配的loss function</p><p>比如一个样本的label和预测概率分布：</p><table><thead><tr><th>*</th><th>猫</th><th>青蛙</th><th>老鼠</th></tr></thead><tbody><tr><td>Label</td><td>0</td><td>1</td><td>0</td></tr><tr><td>Pred</td><td>0.3</td><td>0.6</td><td>0.1</td></tr></tbody></table><blockquote><p>单分类的Pred是用softmax算出来的，各个类别的概率之和为1</p></blockquote><p>此样本的交叉熵计算过程如下：</p><p>一个batch的loss则是每个sample的交叉熵loss平均值。</p><h3 id="_2-交叉熵在多分类问题中的使用" tabindex="-1">2 交叉熵在多分类问题中的使用 <a class="header-anchor" href="#_2-交叉熵在多分类问题中的使用" aria-label="Permalink to &quot;2 交叉熵在多分类问题中的使用&quot;">​</a></h3><p>多分类问题，每一张图像样本可以同时有多个类别。单分类问题的标签为one-hot，多分类的标签是n-hot。</p><p>比如一个样本的label和预测概率分布：</p><table><thead><tr><th>*</th><th>猫</th><th>青蛙</th><th>老鼠</th></tr></thead><tbody><tr><td>Label</td><td>0</td><td>1</td><td>1</td></tr><tr><td>Pred</td><td>0.1</td><td>0.7</td><td>0.8</td></tr></tbody></table><blockquote><p>多分类的Pred是用sigmoid算出来的，每个类别概率独立分布，交叉熵在这里是单独对每一个节点进行计算，每一个节点只有两种可能值，所以是一个二项分布。前面说过对于二项分布这种特殊的分布，熵的计算可以进行简化。同样的，交叉熵的计算也可以简化：</p></blockquote><p>此样本的交叉熵计算过程如下：</p><p>同样，一个batch的loss则是每个sample的交叉熵loss平均值。</p><blockquote><p>参考博客 <a href="https://blog.csdn.net/tsyccnh/article/details/79163834" target="_blank" rel="noreferrer">一文搞懂交叉熵在机器学习中的使用，透彻理解交叉熵背后的直觉</a></p></blockquote>',43),l=[r];function p(h,s,i,n,c,b){return e(),a("div",null,l)}const m=t(o,[["render",p]]);export{u as __pageData,m as default};
