(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{348:function(e,n,t){"use strict";t.r(n),n.default="# Basic Line Chart\n\n## Simple Example\n\nWe can use the following code to build a line chart which has x-axis as `category`, y-axis as `value`:\n\n```js live\noption = {\n  xAxis: {\n    type: 'category',\n    data: ['A', 'B', 'C']\n  },\n  yAxis: {\n    type: 'value'\n  },\n  series: [\n    {\n      data: [120, 200, 150],\n      type: 'line'\n    }\n  ]\n};\n```\n\nIn this case, we set the type of axis to `category` and `value` under `xAxis` and `yAxis`. We also clarified the content on the x-axis through `data`. In `series`, we set the type to `line`, and specify the values of three points through `data`. In this way, we got a simple line chart.\n\n> The `type` here can be omitted because the defaults of the axis are `value` while `xAxis` has specified the category's `data`. In this case, `ECharts` can recognize that this is a category axis.\n\n## Line Chart in Cartesian Coordinate System\n\nHow to implement if we want the line chart to be continuous? The answer is simple, as long as every value in `data` of the `series` is represented by an array containing two elements.\n\n```js live\noption = {\n  xAxis: {},\n  yAxis: {},\n  series: [\n    {\n      data: [\n        [20, 120],\n        [50, 200],\n        [40, 50]\n      ],\n      type: 'line'\n    }\n  ]\n};\n```\n\n## Customized Line Chart\n\n### Line Style\n\nLine style can be changed by `lineStyle` setting. You can specify color, line width, polyline type and opacity etc.. For details, please see the handbook [`series.lineStyle`](${optionPath}series-line.lineStyle) to figure out.\n\nHere is an example of setting color, line width and type.\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [10, 22, 28, 23, 19],\n      type: 'line',\n      lineStyle: {\n        normal: {\n          color: 'green',\n          width: 4,\n          type: 'dashed'\n        }\n      }\n    }\n  ]\n};\n```\n\nWhen we set the line width here, the line width of items will not change. The line style of items needs to be set separately.\n\n### Item Style\n\nItem style can be change by [`series.itemStyle`](${optionPath}series-line.itemStyle). It included `color`, `borderColor`, `borderStyle`, `borderWidth`, `borderType`, `shadowColor`, `opacity` and so on. It works the same as the `lineType`, so we will not do further discuss.\n\n## Display Value on Items.\n\nIn the series, the label of the item was specified by [`series.label`](${optionPath}series-line.label). If we change the `show` under `label` to `true`, the value will be displayed by default. Otherwise, if [`series.emphasis.label.show`](${optionPath}series-line.emphasis.label.show) is `true`, the label will show only if the mouse moved across the item.\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [10, 22, 28, 23, 19],\n      type: 'line',\n      label: {\n        show: true,\n        position: 'bottom',\n        textStyle: {\n          fontSize: 20\n        }\n      }\n    }\n  ]\n};\n```\n\n## Empty Data\n\nIn a `series`, there are empty data. It has some difference with `0`. While there are empty elements, the lines chart will ignore that point without pass through it----empty elements will not be connected by the points next by.\n\nIn ECharts, we use `'-'` to represent null data, It is applicable for data in other series.\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [0, 22, '-', 23, 19],\n      type: 'line'\n    }\n  ]\n};\n```\n\n> Please note the difference between the empty data and 0.\n"}}]);