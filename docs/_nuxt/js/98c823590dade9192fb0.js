(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{418:function(n,e,t){"use strict";t.r(e),e.default="# 基础散点图\n\n散点图，也是一种常见的图表类型。散点图由许多“点”组成，有时，这些点用来表示数据在坐标系中的位置（比如在笛卡尔坐标系下，表示数据在 x 轴和 y 轴上的坐标；在地图坐标系下，表示数据在地图上的某个位置等）；有时，这些点的大小、颜色等属性也可以映射到数据值，用以表现高维数据。\n\n## 最简单的散点图\n\n下面是一个横坐标为类目轴、纵坐标为数值轴的最简单的散点图配置：\n\n```js live\noption = {\n  xAxis: {\n    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'scatter',\n      data: [220, 182, 191, 234, 290, 330, 310]\n    }\n  ]\n};\n```\n\n## 笛卡尔坐标系下的散点图\n\n在上文的例子中，散点图的横坐标都是离散的类目轴，而纵坐标都是连续的数值轴。而对于散点图而言，另一种常见的场景是，两个坐标轴均为连续的数值轴，也就是笛卡尔坐标系。这时的系列形式略有不同，数据的横坐标和纵坐标一同写在 `data` 中，而非坐标轴中。\n\n```js live\noption = {\n  xAxis: {},\n  yAxis: {},\n  series: [\n    {\n      type: 'scatter',\n      data: [\n        [10, 5],\n        [0, 8],\n        [6, 10],\n        [2, 12],\n        [8, 9]\n      ]\n    }\n  ]\n};\n```\n\n## 散点图样式设置\n\n### 图形的形状\n\n图形（symbol）指的是散点图中数据“点”的形状。有三类图形可选，一种是 ECharts 内置形状，第二种是图片，第三种是 SVG 的路径。\n\nECharts 内置形状包括：圆形、矩形、圆角矩形、三角形、菱形、大头针形、箭头形，分别对应`'circle'`、`'rect'`、`'roundRect'`、`'triangle'`、`'diamond'`、`'pin'`、`'arrow'`。使用内置形状时，只要将 `symbol` 属性指定为形状名称对应的字符串即可。\n\n如果想要将图形指定为任意的图片，以 `'image://'` 开头，后面跟图片的绝对或相对地址。形如：`'image://http://example.com/xxx.png'` 或 `'image://./xxx.png'`。\n\n除此之外，还支持 SVG 的路径作为矢量图形，将 `symbol` 设置为以 `'path://'` 开头的 SVG 路径即可。使用矢量图形的好处是，图片不会因为缩放而产生锯齿或模糊，并且通常而言比图片形式的文件大小更小。路径的查看方法为，打开一个 `SVG` 文件，找到形如 `<path d=\"M… L…\"></path>` 的路径，将 `d` 的值添加在 `'path://'` 后即可。\n\n下面，我们展示一个将图形设置为矢量爱心形状的方式。\n\n首先，我们需要一个爱心的 SVG 文件，可以使用矢量编辑软件绘制，或者从网上下载到相关资源。其内容如下：\n\n```xml\n<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 51.997 51.997\" style=\"enable-background:new 0 0 51.997 51.997;\" xml:space=\"preserve\">\n    <path d=\"M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z\"/>\n</svg>\n```\n\n在 ECharts 的 `symbol` 配置项中，我们使用 `d` 的值作为路径。\n\n```js live\noption = {\n  xAxis: {\n    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'scatter',\n      data: [220, 182, 191, 234, 290, 330, 310],\n      symbolSize: 20,\n      symbol:\n        'path://M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905 c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478 c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014 C52.216,18.553,51.97,16.611,51.911,16.242z'\n    }\n  ]\n};\n```\n\n这样，就能得到爱心形状的图形作为点的形状了。\n\n### 图形的大小\n\n图形大小可以使用 [`series.symbolSize`](${optionPath}series-scatter.symbolSize) 控制。它既可以是一个表示图形大小的像素值，也可以是一个包含两个 number 元素的数组，分别表示图形的宽和高。\n\n除此之外，它还可以是一个回调函数，其参数格式为：\n\n```ts\n(value: Array | number, params: Object) => number | Array;\n```\n\n第一个参数为数据值，第二个参数是数据项的其他参数。\n\n在下面的例子中，我们将散点图点的大小设置为与其数据值成正比。\n\n```js live\noption = {\n  xAxis: {\n    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']\n  },\n  yAxis: {},\n  series: [\n    {\n      type: 'scatter',\n      data: [220, 182, 191, 234, 290, 330, 310],\n      symbolSize: function(value) {\n        return value / 10;\n      }\n    }\n  ]\n};\n```\n"}}]);