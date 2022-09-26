(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{415:function(n,e,l){"use strict";l.r(e),e.default="# 基础饼图\n\n饼图主要用于表现不同类目的数据在总和中的占比。每个的弧度表示数据数量的比例。\n\n## 最简单的饼图\n\n饼图的配置和折线图、柱状图略有不同，不再需要配置坐标轴，而是把数据名称和值都写在系列中。以下是一个最简单的饼图的例子。\n\n```js live\noption = {\n  series: [\n    {\n      type: 'pie',\n      data: [\n        {\n          value: 335,\n          name: '直接访问'\n        },\n        {\n          value: 234,\n          name: '联盟广告'\n        },\n        {\n          value: 1548,\n          name: '搜索引擎'\n        }\n      ]\n    }\n  ]\n};\n```\n\n需要注意的是，这里是 `value` 不需要是百分比数据，ECharts 会根据所有数据的 `value` ，按比例分配它们在饼图中对应的弧度。\n\n## 饼图样式设置\n\n### 饼图的半径\n\n饼图的半径可以通过 [`series.radius`](${optionPath}series-pie.radius) 设置，可以是诸如 `'60%'` 这样相对的百分比字符串，或是 `200` 这样的绝对像素数值。当它是百分比字符串时，它是相对于容器宽高中较小的一条边的。也就是说，如果宽度大于高度，则百分比是相对于高度的，反之则反；当它是数值型时，它表示绝对的像素大小。\n\n```js live\noption = {\n  series: [\n    {\n      type: 'pie',\n      data: [\n        {\n          value: 335,\n          name: '直接访问'\n        },\n        {\n          value: 234,\n          name: '联盟广告'\n        },\n        {\n          value: 1548,\n          name: '搜索引擎'\n        }\n      ],\n      radius: '50%'\n    }\n  ]\n};\n```\n\n## 如果数据和为 0，不显示饼图\n\n在默认情况下，如果数据值和为 0，会显示平均分割的扇形。比如，如果有 4 个数据项，并且每个数据项都是 0，则每个扇形都是 90°。如果我们希望在这种情况下不显示任何扇形，可以将 [`series.stillShowZeroSum`](${optionPath}series-pie.stillShowZeroSum) 设为 `false`。\n\n```js live\noption = {\n  series: [\n    {\n      type: 'pie',\n      stillShowZeroSum: false,\n      data: [\n        {\n          value: 0,\n          name: '直接访问'\n        },\n        {\n          value: 0,\n          name: '联盟广告'\n        },\n        {\n          value: 0,\n          name: '搜索引擎'\n        }\n      ]\n    }\n  ]\n};\n```\n\n如果希望扇形对应的标签也不显示，可以将 [`series.label.show`](${optionPath}series-pie.label.show) 设为 `false`。\n\n```js live\noption = {\n  series: [\n    {\n      type: 'pie',\n      stillShowZeroSum: false,\n      label: {\n        show: false\n      },\n      data: [\n        {\n          value: 0,\n          name: '直接访问'\n        },\n        {\n          value: 0,\n          name: '联盟广告'\n        },\n        {\n          value: 0,\n          name: '搜索引擎'\n        }\n      ]\n    }\n  ]\n};\n```\n"}}]);