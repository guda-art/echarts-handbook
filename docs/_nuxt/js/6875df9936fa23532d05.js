(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{373:function(n,e,t){"use strict";t.r(e),e.default="# 无障碍访问\n\nW3C 制定了无障碍富互联网应用规范集（[WAI-ARIA](https://www.w3.org/WAI/intro/aria)，the Accessible Rich Internet Applications Suite），致力于使得网页内容和网页应用能够被更多残障人士访问。\n\nApache ECharts 4 遵从这一规范，支持自动根据图表配置项智能生成描述，使得盲人可以在朗读设备的帮助下了解图表内容，让图表可以被更多人群访问。Apache ECharts 5 新增了贴花功能，让图表数据除了可以用颜色区分之外，还能用贴花图案区分，提供了更好的无障碍访问体验。\n\n无障碍访问功能默认关闭，需要通过将 [aria.show](${optionPath}aria.show) 设置为 `true` 开启。\n\n## 图表描述\n\n开启 [aria.show](${optionPath}aria.show) 后，会根据图表、数据、标题等情况，自动智能生成关于图表的描述，用户也可以通过配置项修改描述。\n\n对于配置项：\n\n```js\noption = {\n  aria: {\n    show: true\n  },\n  title: {\n    text: '某站点用户访问来源',\n    x: 'center'\n  },\n  series: [\n    {\n      name: '访问来源',\n      type: 'pie',\n      data: [\n        { value: 335, name: '直接访问' },\n        { value: 310, name: '邮件营销' },\n        { value: 234, name: '联盟广告' },\n        { value: 135, name: '视频广告' },\n        { value: 1548, name: '搜索引擎' }\n      ]\n    }\n  ]\n};\n```\n\n<md-example src=\"doc-example/aria-pie\"></md-example>\n\n生成的图表 DOM 上，会有一个 `aria-label` 属性，在朗读设备的帮助下，盲人能够了解图表的内容。其值为：\n\n```\n这是一个关于“某站点用户访问来源”的图表。图表类型是饼图，表示访问来源。其数据是——直接访问的数据是335，邮件营销的数据是310，联盟广告的数据是234，视频广告的数据是135，搜索引擎的数据是1548。\n```\n\n默认语言会根据语言包（默认中文）选择，也可以使用配置项自定义模板。\n\n### 整体修改描述\n\n对于有些图表，默认生成的数据点的描述并不足以表现整体的信息。比如下图的散点图，默认生成的描述可以包含数据点的坐标值，但是知道几百几千个点的坐标并不能帮助我们有效地理解图表表达的信息。\n\n这时候，用户可以通过 [aria.description](${optionPath}aria.description) 配置项指定图表的整体描述。\n\n### 定制模板描述\n\n除了整体性修改描述之外，我们还提供了生成描述的模板，可以方便地进行细粒度的修改。\n\n生成描述的基本流程为，如果 [aria.show](${optionPath}aria.show) 设置为 `true`，则生成无障碍访问描述，否则不生成。如果定义了 [aria.description](${optionPath}aria.description)，则将其作为图表的完整描述，否则根据模板拼接生成描述。我们提供了默认的生成描述的算法，仅当生成的描述不太合适时，才需要修改这些模板，甚至使用 `aria.description` 完全覆盖。\n\n使用模板拼接时，先根据是否存在标题 [title.text](${optionPath}title.text) 决定使用 [aria.general.withTitle](${optionPath}aria.general.withTitle) 还是 [aria.general.withoutTitle](${optionPath}aria.general.withoutTitle) 作为整体性描述。其中，`aria.general.withTitle` 配置项包括模板变量 `'{title}'`，将会被替换成图表标题。也就是说，如果 `aria.general.withTitle` 被设置为 `'图表的标题是：{title}。'`，则如果包含标题 `'价格分布图'`，这部分的描述为 `'图表的标题是：价格分布图。'`。\n\n拼接完标题之后，会依次拼接系列的描述（[aria.series](${optionPath}aria.series)），和每个系列的数据的描述（[aria.data](${optionPath}aria.data)）。同样，每个模板都有可能包括模板变量，用以替换实际的值。\n\n完整的描述生成流程请参见 [ARIA 文档](${optionPath}aria.label)。\n\n## 贴花图案\n\n除此之外，Apache ECharts 5 新增支持贴花纹理，作为颜色的辅助表达，进一步用以区分数据。在 `aria.enabled` 为 `true` 的前提下，将 `aria.decal.show` 设为 `true` 即可采用默认的贴花样式。\n\n<md-example src=\"doc-example/aria-decal-simple\"></md-example>\n\n如果需要自定义贴花图案，可以使用 [aria.decal.decals](option.html#aria.decal.decals) 配置出灵活多变的图案。\n\n更具体的信息请参见 [ARIA 文档](${optionPath}aria.decal)。\n"}}]);