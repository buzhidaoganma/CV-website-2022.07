// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById("skills"));
// 指定图表的配置项和数据
var option = {
    tooltip: {},
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: "#fff",
                backgroundColor: "#999",
                borderRadius: 3,
                padding: [
                    3,
                    5
                ]
            }
        },
        indicator: [
            {
                name: "\u9759\u6001\u9875\u9762",
                max: 100
            },
            {
                name: "\u7F16\u7A0B\u57FA\u7840",
                max: 100
            },
            {
                name: "Vue\u5168\u5BB6\u6876",
                max: 100
            },
            {
                name: "React\u5168\u5BB6\u6876",
                max: 100
            },
            {
                name: "\u9879\u76EE\u5F00\u53D1",
                max: 100
            },
            {
                name: "\u6C9F\u901A\u80FD\u529B",
                max: 100
            }, 
        ]
    },
    series: [
        {
            name: "\u80FD\u529B\u96F7\u8FBE\u56FE",
            type: "radar",
            data: [
                {
                    value: [
                        100,
                        70,
                        90,
                        80,
                        85,
                        70
                    ],
                    name: "\u80FD\u529B\u96F7\u8FBE"
                }, 
            ]
        }, 
    ]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

//# sourceMappingURL=index.de158e3a.js.map
