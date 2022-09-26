(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{337:function(n,e,t){"use strict";t.r(e),e.default="# Overview of Style Customization\n\nThis article provides an overview of the different approaches about Apache ECharts<sup>TM</sup> style customization. For example, how to config the color, size, shadow of the graphic elements and labels.\n\n> The term \"style\" may not follow the convention of data visualization, but we use it in this article because it is popular and easy to understand.\n\nThese approaches below will be introduced. The functionalities of them might be overlapped, but they are suitable for different scenarios.\n\n- Theme\n- Color Palette\n- Customize style explicitly (itemStyle, lineStyle, areaStyle, label, ...)\n- Visual encoding (visualMap component)\n\n## Theme\n\nSetting a theme is the simplest way to change the color style. For example, in [Examples page](${mainSitePath}examples), we can switch to dark mode and see the result of a different theme.\n\nIn our project, we can switch to dark theme like:\n\n```js\nvar chart = echarts.init(dom, 'dark');\n```\n\nOther themes are not included by default, and need to load them ourselves if we want to use them. Themes can be visited and downloaded in the [theme builder](${mainSitePath}theme-builder.html). Theme can also be created or edited in it. The downloaded theme can be used as follows:\n\nIf a theme is downloaded as a JSON file, we should register it by ourselves, for example:\n\n```js\nvar xhr = new XMLHttpRequest();\n// Assume the theme name is \"vintage\".\n$.getJSON('xxx/xxx/vintage.json', function(themeJSON) {\n  echarts.registerTheme('vintage', JSON.parse(themeJSON));\n  var chart = echarts.init(dom, 'vintage');\n});\n```\n\nIf a theme is downloaded as a JS file, it will auto register itself:\n\n```js\n// Import the `vintage.js` file in HTML, then:\nvar chart = echarts.init(dom, 'vintage');\n// ...\n```\n\n## Color Palette\n\nColor palette can be given in option. They provide a group of colors, which will be auto picked by series and data. We can give a global palette, or exclusive pallette for certain series.\n\n```js\noption = {\n  // Global palette:\n  color: [\n    '#c23531',\n    '#2f4554',\n    '#61a0a8',\n    '#d48265',\n    '#91c7ae',\n    '#749f83',\n    '#ca8622',\n    '#bda29a',\n    '#6e7074',\n    '#546570',\n    '#c4ccd3'\n  ],\n\n  series: [\n    {\n      type: 'bar',\n      // A palette only work for the series:\n      color: [\n        '#dd6b66',\n        '#759aa0',\n        '#e69d87',\n        '#8dc1a9',\n        '#ea7e53',\n        '#eedd78',\n        '#73a373',\n        '#73b9bc',\n        '#7289ab',\n        '#91ca8c',\n        '#f49f42'\n      ]\n      // ...\n    },\n    {\n      type: 'pie',\n      // A palette only work for the series:\n      color: [\n        '#37A2DA',\n        '#32C5E9',\n        '#67E0E3',\n        '#9FE6B8',\n        '#FFDB5C',\n        '#ff9f7f',\n        '#fb7293',\n        '#E062AE',\n        '#E690D1',\n        '#e7bcf3',\n        '#9d96f5',\n        '#8378EA',\n        '#96BFFF'\n      ]\n      // ...\n    }\n  ]\n};\n```\n\n## Customize Style Explicitly\n\nIt is a common way to set style explicitly. Throughout ECharts [option](${optionPath}), style related options can be set in various place, including [itemStyle](${optionPath}series.itemStyle), [lineStyle](${optionPath}series-line.lineStyle), [areaStyle](${optionPath}series-line.areaStyle), [label](${optionPath}series.label), etc.\n\nGenerally speaking, all of the built-in components and series follow the naming convention like `itemStyle`, `lineStyle`, `areaStyle`, `label` etc, although they may occur in different place according to different series or components.\n\nIn the following code we add shadow, gradient to bubble chart.\n\n```js live\nvar data = [\n  [\n    [28604, 77, 17096869, 'Australia', 1990],\n    [31163, 77.4, 27662440, 'Canada', 1990],\n    [1516, 68, 1154605773, 'China', 1990],\n    [13670, 74.7, 10582082, 'Cuba', 1990],\n    [28599, 75, 4986705, 'Finland', 1990],\n    [29476, 77.1, 56943299, 'France', 1990],\n    [31476, 75.4, 78958237, 'Germany', 1990],\n    [28666, 78.1, 254830, 'Iceland', 1990],\n    [1777, 57.7, 870601776, 'India', 1990],\n    [29550, 79.1, 122249285, 'Japan', 1990],\n    [2076, 67.9, 20194354, 'North Korea', 1990],\n    [12087, 72, 42972254, 'South Korea', 1990],\n    [24021, 75.4, 3397534, 'New Zealand', 1990],\n    [43296, 76.8, 4240375, 'Norway', 1990],\n    [10088, 70.8, 38195258, 'Poland', 1990],\n    [19349, 69.6, 147568552, 'Russia', 1990],\n    [10670, 67.3, 53994605, 'Turkey', 1990],\n    [26424, 75.7, 57110117, 'United Kingdom', 1990],\n    [37062, 75.4, 252847810, 'United States', 1990]\n  ],\n  [\n    [44056, 81.8, 23968973, 'Australia', 2015],\n    [43294, 81.7, 35939927, 'Canada', 2015],\n    [13334, 76.9, 1376048943, 'China', 2015],\n    [21291, 78.5, 11389562, 'Cuba', 2015],\n    [38923, 80.8, 5503457, 'Finland', 2015],\n    [37599, 81.9, 64395345, 'France', 2015],\n    [44053, 81.1, 80688545, 'Germany', 2015],\n    [42182, 82.8, 329425, 'Iceland', 2015],\n    [5903, 66.8, 1311050527, 'India', 2015],\n    [36162, 83.5, 126573481, 'Japan', 2015],\n    [1390, 71.4, 25155317, 'North Korea', 2015],\n    [34644, 80.7, 50293439, 'South Korea', 2015],\n    [34186, 80.6, 4528526, 'New Zealand', 2015],\n    [64304, 81.6, 5210967, 'Norway', 2015],\n    [24787, 77.3, 38611794, 'Poland', 2015],\n    [23038, 73.13, 143456918, 'Russia', 2015],\n    [19360, 76.5, 78665830, 'Turkey', 2015],\n    [38225, 81.4, 64715810, 'United Kingdom', 2015],\n    [53354, 79.1, 321773631, 'United States', 2015]\n  ]\n];\n\noption = {\n  backgroundColor: {\n    type: 'radial',\n    x: 0.3,\n    y: 0.3,\n    r: 0.8,\n    colorStops: [\n      {\n        offset: 0,\n        color: '#f7f8fa'\n      },\n      {\n        offset: 1,\n        color: '#cdd0d5'\n      }\n    ]\n  },\n  grid: {\n    left: 10,\n    containLabel: true,\n    bottom: 10,\n    top: 10,\n    right: 30\n  },\n  xAxis: {\n    splitLine: {\n      show: false\n    }\n  },\n  yAxis: {\n    splitLine: {\n      show: false\n    },\n    scale: true\n  },\n  series: [\n    {\n      name: '1990',\n      data: data[0],\n      type: 'scatter',\n      symbolSize: function(data) {\n        return Math.sqrt(data[2]) / 5e2;\n      },\n      emphasis: {\n        focus: 'series',\n        label: {\n          show: true,\n          formatter: function(param) {\n            return param.data[3];\n          },\n          position: 'top'\n        }\n      },\n      itemStyle: {\n        shadowBlur: 10,\n        shadowColor: 'rgba(120, 36, 50, 0.5)',\n        shadowOffsetY: 5,\n        color: {\n          type: 'radial',\n          x: 0.4,\n          y: 0.3,\n          r: 1,\n          colorStops: [\n            {\n              offset: 0,\n              color: 'rgb(251, 118, 123)'\n            },\n            {\n              offset: 1,\n              color: 'rgb(204, 46, 72)'\n            }\n          ]\n        }\n      }\n    },\n    {\n      name: '2015',\n      data: data[1],\n      type: 'scatter',\n      symbolSize: function(data) {\n        return Math.sqrt(data[2]) / 5e2;\n      },\n      emphasis: {\n        focus: 'series',\n        label: {\n          show: true,\n          formatter: function(param) {\n            return param.data[3];\n          },\n          position: 'top'\n        }\n      },\n      itemStyle: {\n        shadowBlur: 10,\n        shadowColor: 'rgba(25, 100, 150, 0.5)',\n        shadowOffsetY: 5,\n        color: {\n          type: 'radial',\n          x: 0.4,\n          y: 0.3,\n          r: 1,\n          colorStops: [\n            {\n              offset: 0,\n              color: 'rgb(129, 227, 238)'\n            },\n            {\n              offset: 1,\n              color: 'rgb(25, 183, 207)'\n            }\n          ]\n        }\n      }\n    }\n  ]\n};\n```\n\n## Style of Emphasis State\n\nWhen mouse hovering a graphic elements, usually the emphasis style will be displayed. By default, the emphasis style is auto generated by the normal style. However they can be specified by [emphasis](${optionPath}series-bar.emphasis) property. The options in [emphasis](${optionPath}series-bar.emphasis) is the same as the ones for normal state, for example:\n\n```js\noption = {\n  series: {\n    type: 'scatter',\n\n    // Styles for normal state.\n    itemStyle: {\n      // Color of the point.\n      color: 'red'\n    },\n    label: {\n      show: true,\n      // Text of labels.\n      formatter: 'This is a normal label.'\n    },\n\n    // Styles for emphasis state.\n    emphasis: {\n      itemStyle: {\n        // Color in emphasis state.\n        color: 'blue'\n      },\n      label: {\n        show: true,\n        // Text in emphasis.\n        formatter: 'This is a emphasis label.'\n      }\n    }\n  }\n};\n```\n\nNotice: Before ECharts4, the emphasis style should be written like this:\n\n```js\noption = {\n  series: {\n    type: 'scatter',\n\n    itemStyle: {\n      // Styles for normal state.\n      normal: {\n        color: 'red'\n      },\n      // Styles for emphasis state.\n      emphasis: {\n        color: 'blue'\n      }\n    },\n\n    label: {\n      // Styles for normal state.\n      normal: {\n        show: true,\n        formatter: 'This is a normal label.'\n      },\n      // Styles for emphasis state.\n      emphasis: {\n        show: true,\n        formatter: 'This is a emphasis label.'\n      }\n    }\n  }\n};\n```\n\nThe option format is still **compatible**, but not recommended. In fact, in most cases, users only set normal style, and use the default emphasis style. So since ECharts4, we support to write style without the \"normal\" term, which makes the option more simple and neat.\n\n## Visual Encoding by visualMap Component\n\n[visualMap component](${optionPath}visualMap) supports config the rule that mapping value to visual channel (color, size, ...). More details can be check in [Visual Map of Data](${lang}/concepts/visual-map/).\n"}}]);