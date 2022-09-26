(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{341:function(n,t,e){"use strict";e.r(t),t.default="# Data Transition\n\nApache ECharts<sup>TM</sup> will apply transition on the position, scale, shape when adding, updating and removing data. It makes the chart smoother and shows relationships between data better. Often the developer does not need to worry about how to use the animations, but simply uses `setOption` to update the data, and ECharts will find the difference between the last data and automatically apply the most appropriate transition animation.\n\nFor example, the following example shows the transition on a timed update of the pie chart data.\n\n```js live {layout: 'lr'}\nfunction makeRandomData() {\n  return [\n    {\n      value: Math.random(),\n      name: 'A'\n    },\n    {\n      value: Math.random(),\n      name: 'B'\n    },\n    {\n      value: Math.random(),\n      name: 'C'\n    }\n  ];\n}\noption = {\n  series: [\n    {\n      type: 'pie',\n      radius: [0, '50%'],\n      data: makeRandomData()\n    }\n  ]\n};\n\nsetInterval(() => {\n  myChart.setOption({\n    series: {\n      data: makeRandomData()\n    }\n  });\n}, 2000);\n```\n\n## Configuration of Transitions\n\nBecause adding and updating data will often require different animations, for example we would expect the data update animation to be shorter, ECharts distinguishes between the two animation configurations.\n\n- For adding data, we apply an enter animation, using `animationDuration`, `animationEasing`, and `animationDelay` to configure the duration, easing and delay of the animation respectively.\n- For updating data, we will apply an update animation with `animationDurationUpdate`, `animationEasingUpdate`, and `animationDelayUpdate` configuring the duration, easing and delay of the animation respectively.\n\nAs you can see, the update animation configuration is the enter animation configuration with the `Update` suffix.\n\n> Each time using setOption in ECharts, the data will be diffed to the last updated data and three states are performed for the data based on the diff result: add, update and remove. This diff is based on the `name` of the data, for example, if the last update had three `names` of `'A'`, `'B'`, `'C'`, and the new update has become `'B'`, `'C'`, `'D'`, then the data `'B'`, `'C'` will be updated, the data `'A'` will be removed, and the data `' D'` will be added. If it is the first time `setOption`, because there is no old data, all data will be added. Depending on the three states ECharts will apply entry animation, update animation and leave animation respectively.\n\nAll these configurations can be set at the top level of `option` for all series and components, or separately for each series.\n\nIf we want to turn off animations, we can simply set `option.animation` to `false`.\n\n### Animation Duration\n\n`animationDuration` and `animationDurationUpdate` are used to set the duration of the animation in `ms`. Setting a longer animation duration allows the user to see the effect of the transition animation more clearly, but we also need to be careful that too much time can make the user lose patience while waiting animation to be finished.\n\nA setting of `0` will turn the animation off, and this can be achieved by setting the corresponding configuration to `0` individually when we only want to turn off the enter animation or update animation.\n\n### Animation Easing\n\nThe `animationEasing` and `animationEasingUpdate` configuration items are used to set the animation's easing function, which is a function that inputs the animation time and outputs the animation progress.\n\n```ts\n(t: number) => number;\n```\n\nThe common animation easing functions such as `'cubicIn'` and `'cubicOut'` are built into ECharts and can be used directly\n\nBuilt-in easing functions.\n\n<md-example src=\"line-easing\" width=\"100%\" height=\"400\" />\n\n### Animation Delay\n\nThe `animationDelay` and `animationDelayUpdate` are used to set the time at which the animation delay starts, usually we will use a callback function to set different delays for different data to achieve the effect of staggered animations:\n\n```ts live { layout: 'lr' }\nvar xAxisData = [];\nvar data1 = [];\nvar data2 = [];\nfor (var i = 0; i < 100; i++) {\n  xAxisData.push('A' + i);\n  data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);\n  data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);\n}\noption = {\n  legend: {\n    data: ['bar', 'bar2']\n  },\n  xAxis: {\n    data: xAxisData,\n    splitLine: {\n      show: false\n    }\n  },\n  yAxis: {},\n  series: [\n    {\n      name: 'bar',\n      type: 'bar',\n      data: data1,\n      emphasis: {\n        focus: 'series'\n      },\n      animationDelay: function(idx) {\n        return idx * 10;\n      }\n    },\n    {\n      name: 'bar2',\n      type: 'bar',\n      data: data2,\n      emphasis: {\n        focus: 'series'\n      },\n      animationDelay: function(idx) {\n        return idx * 10 + 100;\n      }\n    }\n  ],\n  animationEasing: 'elasticOut',\n  animationDelayUpdate: function(idx) {\n    return idx * 5;\n  }\n};\n```\n\n## Performance Optimization of Animations\n\nWhen the amount of data is particularly large, running animation can have performance issue, so we can set `animation: false` to turn off animation.\n\nFor charts where the amount of data changes dynamically, we recommend using the `animationThreshold` configuration, which allows ECharts to automatically turn off animation when the number of graphs in the canvas exceeds this threshold to improve drawing performance. This is often an empirical value, and ECharts is usually capable of rendering thousands of graphs in real time (our default value is also given as 2000), but if your charts are complex, or your user environment is harsh and there is a lot of other complex code running on the page at the same time, it may be appropriate to adjust this value downwards to ensure the smoothness of the whole application.\n\n## Listening to the End of Animation\n\nSometimes we want to get the result of the current rendering, if no animation is used, ECharts will perform the rendering directly after `setOption` and we can use `getDataURL` method to get the rendering result synchronisely.\n\n```ts\nconst chart = echarts.init(dom);\nchart.setOption({\n  animation: false\n  //...\n});\n// can be executed directly and synchronously\nconst dataUrl = chart.getDataURL();\n```\n\nBut if the chart is animated, executing `getDataURL` right away will give us the picture at the beginning of the animation, not the final result. So we need to know when the animation has finished and then execute `getDataURL` to get the result.\n\nIf you are sure of the duration of the animation, a simpler and more brutal way is to delay the execution with `setTimeout` depending on the duration of the animation:\n\n```ts\nchart.setOption({\n  animationDuration: 1000\n  //...\n});\nsetTimeout(() => {\n  const dataUrl = chart.getDataURL();\n}, 1000);\n```\n\nAlternatively, we can use the `rendered` event provided by ECharts to determine that the ECharts have finished animating and stopped rendering\n\n```ts\nchart.setOption({\n  animationDuration: 1000\n  //...\n});\n\nfunction onRendered() {\n  const dataUrl = chart.getDataURL();\n  // ...\n  // This event will also be triggered if there is a subsequent interaction and the interaction is redrawn, so it needs to be removed when you're done using it\n  chart.off('rendered', onRendered);\n}\nchart.on('rendered', onRendered);\n```\n"}}]);