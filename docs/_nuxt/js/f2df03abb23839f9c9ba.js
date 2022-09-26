(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{390:function(n,e,t){"use strict";t.r(e),e.default="# 坐标轴\n\n直角坐标系中的 x/y 轴。\n\n## x 轴、y 轴\n\nx 轴和 y 轴都由轴线、刻度、刻度标签、轴标题四个部分组成。部分图表中还会有网格线来帮助查看和计算数据\n\n<img max-width=\"830\" width=\"100%\" height=\"100%\" src=\"images/design/axis/charts_axis_img02.jpg\">\n</img>\n\n普通的二维数据坐标系都有 x 轴和 y 轴，通常情况下，x 轴显示在图表的底部，y 轴显示在左侧，一般配置如下：\n\n```js\noption = {\n  xAxis: {\n    // ...\n  },\n  yAxis: {\n    // ...\n  }\n};\n```\n\nx 轴常用来标示数据的维度，维度一般用来指数据的类别，是观察数据的角度，例如“销售时间” “销售地点” “产品名称”等。y 轴常常用来标示数据的数值，数值是用来具体考察某一类数据的数量值，也是我们需要分析的指标，例如“销售数量”和“销售金额”等。\n\n```js\noption = {\n  xAxis: {\n    type: 'time',\n    name: '销售时间'\n    // ...\n  },\n  yAxis: {\n    type: 'value',\n    name: '销售数量'\n    // ...\n  }\n  // ...\n};\n```\n\n当 x 轴（水平坐标轴）跨度很大，可以采用区域缩放方式灵活显示数据内容。\n\n```js\noption = {\n  xAxis: {\n    type: 'time',\n    name: '销售时间'\n    // ...\n  },\n  yAxis: {\n    type: 'value',\n    name: '销售数量'\n    // ...\n  },\n  dataZoom: [\n    // ...\n  ]\n  // ...\n};\n```\n\n在二维数据中，轴也可以有多个。ECharts 中一般情况下单个 grid 组件最多只能放两个 x/y 轴，多于两个 x/y 轴需要通过配置 [offset](${optionPath}xAxis.offset) 属性防止同个位置多个轴的重叠。两个 x 轴显示在上下，两个 y 轴显示在左右两侧。\n\n```js\noption = {\n  xAxis: {\n    type: 'time',\n    name: '销售时间'\n    // ...\n  },\n  yAxis: [\n    {\n      type: 'value',\n      name: '销售数量'\n      // ...\n    },\n    {\n      type: 'value',\n      name: '销售金额'\n      // ...\n    }\n  ]\n  // ...\n};\n```\n\n## 轴线\n\nECharts 提供了轴线 [axisLine](${optionPath}xAxis.axisLine) 相关的配置，我们可以根据实际情况调整，例如轴线两端的箭头，轴线的样式等。\n\n```js\noption = {\n  xAxis: {\n    axisLine: {\n      symbol: 'arrow',\n      lineStyle: {\n        type: 'dashed'\n        // ...\n      }\n    }\n    // ...\n  },\n  yAxis: {\n    axisLine: {\n      symbol: 'arrow',\n      lineStyle: {\n        type: 'dashed'\n        // ...\n      }\n    }\n  }\n  // ...\n};\n```\n\n## 刻度\n\nECharts 提供了轴线 [axisTick](${optionPath}xAxis.axisTick) 相关的配置，我们可以根据实际情况调整，例如刻度线的长度，样式等。\n\n```js\noption = {\n  xAxis: {\n    axisTick: {\n      length: 6,\n      lineStyle: {\n        type: 'dashed'\n        // ...\n      }\n    }\n    // ...\n  },\n  yAxis: {\n    axisTick: {\n      length: 6,\n      lineStyle: {\n        type: 'dashed'\n        // ...\n      }\n    }\n  }\n  // ...\n};\n```\n\n## 刻度标签\n\nECharts 提供了轴线 [axisLabel](${optionPath}xAxis.axisLabel) 相关的配置，我们可以根据实际情况调整，例如文字对齐方式，自定义刻度标签内容等。\n\n```js\noption = {\n  xAxis: {\n    axisLabel: {\n      formatter: '{value} kg',\n      align: 'center'\n      // ...\n    }\n    // ...\n  },\n  yAxis: {\n    axisLabel: {\n      formatter: '{value} 元',\n      align: 'center'\n      // ...\n    }\n  }\n  // ...\n};\n```\n\n## 示例\n\n图左侧的 y 轴代表东京月平均气温，右侧的 y 轴表示东京降水量，x 轴表示时间。两组 y 轴在一起，反映了平均气温和降水量间的趋势关系。\n\n```js live\noption = {\n  tooltip: {\n    trigger: 'axis',\n    axisPointer: { type: 'cross' }\n  },\n  legend: {},\n  xAxis: [\n    {\n      type: 'category',\n      axisTick: {\n        alignWithLabel: true\n      },\n      data: [\n        '1月',\n        '2月',\n        '3月',\n        '4月',\n        '5月',\n        '6月',\n        '7月',\n        '8月',\n        '9月',\n        '10月',\n        '11月',\n        '12月'\n      ]\n    }\n  ],\n  yAxis: [\n    {\n      type: 'value',\n      name: '降水量',\n      min: 0,\n      max: 250,\n      position: 'right',\n      axisLabel: {\n        formatter: '{value} ml'\n      }\n    },\n    {\n      type: 'value',\n      name: '温度',\n      min: 0,\n      max: 25,\n      position: 'left',\n      axisLabel: {\n        formatter: '{value} °C'\n      }\n    }\n  ],\n  series: [\n    {\n      name: '降水量',\n      type: 'bar',\n      yAxisIndex: 0,\n      data: [6, 32, 70, 86, 68.7, 100.7, 125.6, 112.2, 78.7, 48.8, 36.0, 19.3]\n    },\n    {\n      name: '温度',\n      type: 'line',\n      smooth: true,\n      yAxisIndex: 1,\n      data: [\n        6.0,\n        10.2,\n        10.3,\n        11.5,\n        10.3,\n        13.2,\n        14.3,\n        16.4,\n        18.0,\n        16.5,\n        12.0,\n        5.2\n      ]\n    }\n  ]\n};\n```\n\n这里简要介绍了坐标轴相关的常用配置项及用法，更多关于坐标轴配置项及用法请移步[官网](${optionPath}xAxis)。\n"}}]);