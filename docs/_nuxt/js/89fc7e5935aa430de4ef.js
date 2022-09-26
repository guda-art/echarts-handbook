(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{413:function(n,t,e){"use strict";e.r(t),t.default="# 堆叠折线图\n\n与[堆叠柱状图](./zh/how-to/chart-types/bar/stacked-bar)类似，堆叠折线图也是用系列的 `stack` 设置哪些系列堆叠在一起。\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [10, 22, 28, 43, 49],\n      type: 'line',\n      stack: 'x'\n    },\n    {\n      data: [5, 4, 3, 5, 10],\n      type: 'line',\n      stack: 'x'\n    }\n  ]\n};\n```\n\n但是不同的是，如果不加说明的话，我们很难判断出这是一个堆叠折线图，还是一个普通的折线图。所以，对于堆叠折线图而言，一般建议使用区域填充色以表明堆叠的情况。\n\n```js live\noption = {\n  xAxis: {\n    data: ['A', 'B', 'C', 'D', 'E']\n  },\n  yAxis: {},\n  series: [\n    {\n      data: [10, 22, 28, 43, 49],\n      type: 'line',\n      stack: 'x',\n      areaStyle: {}\n    },\n    {\n      data: [5, 4, 3, 5, 10],\n      type: 'line',\n      stack: 'x',\n      areaStyle: {}\n    }\n  ]\n};\n```\n"}}]);