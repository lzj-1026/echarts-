var ad = document.querySelectorAll('.ad')
var gz = document.querySelectorAll('.g_z')
// console.log(ad);
// console.log(gz);
for (var i = 0; i < ad.length; i++) {
    ad[i].setAttribute('index', i)
    console.log(ad[i]);
    ad[i].onclick = function () {
        var index_ = this.getAttribute('index')
        for (var j = 0; j < ad.length; j++) {
            ad[j].classList.remove('active')
            ad[index_].classList.add('active')
        }
        for (var k = 0; k < gz.length; k++) {
            gz[k].style.display = 'none'
            gz[index_].style.display = 'block'
        }
    }
}

// 分布图
(function () {
    var myChart = echarts.init(document.querySelector('.left'));
    console.log(myChart);
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '老陈学员分布',
                type: 'pie',
                radius: ['10%', '65%'],
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 3,
                    length2: 4
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    {
                        value: 30, name: '四川'
                    },
                    { value: 42, name: '河南' }
                ]
            }
        ]
    };

    myChart.setOption(option);
    // 页面改变 重新调用
    window.addEventListener('load', function () {
        myChart.resize();
    });
    window.addEventListener('resize', function () {
        myChart.resize();
    })

})();

// 统计图
(function () {
    var item = {
        name: '',
        value: 1200,
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }

    }
    var myChart = echarts.init(document.querySelector('.b_a'));
    var option = {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#00fffb'
            }, {
                offset: 1, color: '#0061ce'
            }],
            global: false
        },
        tooltip: {
            trigger: 'item',

        },
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '', '洛阳', '', '濮阳', '', '……', '', '安阳', '', '南阳', '', '开封'], axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgb(147,229,245)',
                    }
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],

        series: [{
            name: '用户量：',
            type: 'bar',
            barWidth: '60%',
            data: [2333, 2111, 1999, 1777, 1555,
                item, item, item,
                999, 888, 777, 666, 555],
        }]
    }
        ;

    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize()
    });
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

// 销售额
(function () {
    var djq = document.querySelectorAll('.djq')
    var nr = document.querySelectorAll('.nr')
    var index = 0
    var timer = null;
    console.log(djq);
    for (var i = 0; i < djq.length; i++) {
        djq[i].setAttribute('index', i)
        djq[i].onclick = function () {
            index = this.getAttribute('index')
            for (var j = 0; j < djq.length; j++) {
                djq[j].classList.remove('cu')
                djq[index].classList.add('cu')
            }
            for (var k = 0; k < nr.length; k++) {
                nr[k].style.display = 'none'
                nr[index].style.display = 'flex'
            }

        }
    }
    function show() {
        timer = setInterval(function () {
            index++;
            if (index >= djq.length) {
                index = 0;
            }
            djq[index].click();
        }, 1500);

    }
    show();
    var l_a = document.querySelector('.l_a');
    l_a.onmouseenter = function () {
        clearInterval(timer);
    }
    l_a.onmouseleave = function () {
        show(), 1500;
    }
})();

// 折线图
(function () {
    var data = {
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }
    var my = echarts.init(document.querySelector('.tu'))
    var option = {
        color: ['rgb(0,245,244)', 'rgb(221,63,56)'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['预计销售额', '实际销售额'], orient: 'horizontal'
            , textStyle: {
                color: '#4c9bfd'
            },
            top: '1%'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: 'rgb(9,63,103)'
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgb(9,63,103)'
                }
            }
        },
        series: [
            {
                name: '预计销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[0],
                smooth: true
            },
            {
                name: '实际销售额',
                type: 'line',
                stack: 'Total',
                data: data.year[1],
                smooth: true
            },

        ]
    };
    my.setOption(option)

    // 点击切换
    var time = document.querySelectorAll('.time')
    var index = 0
    var timer = null;
    console.log(time);
    for (var i = 0; i < time.length; i++) {
        time[i].setAttribute('index', i)
        time[i].onclick = function () {
            index = this.getAttribute('index')
            for (var j = 0; j < time.length; j++) {
                time[j].classList.remove('bg')
                time[index].classList.add('bg')
            }
            // 获取自定义的内容
            var datad = this.getAttribute('data-time')
            option.series[0].data = data[datad][0];
            option.series[1].data = data[datad][1];
            my.setOption(option);
        }
    }
    function show() {
        timer = setInterval(function () {
            index++;
            if (index >= time.length) {
                index = 0;
            }
            time[index].click();
        }, 1500);

    }
    show();

    window.addEventListener('load', function () {
        my.resize();
    })

    window.addEventListener('resize', function () {
        my.resize();
    })

    var xs = document.querySelector('.xs');
    xs.onmouseenter = function () {
        clearInterval(timer);
    }
    xs.onmouseleave = function () {
        show(), 1500;
    }
})();

// 雷达图
(function () {
    var myChart = echarts.init(document.querySelector('.ld'));
    var option = {
        radar: {
            indicator: [
                { name: '超市', max: 100 },
                { name: '便利店', max: 100 },
                { name: '酒店', max: 100 },
                { name: '饭店', max: 100 },
                { name: '杨国福', max: 100 }
            ],
            radius: '50%',
            splitNumber: 4,
            shape: 'circle',
            axisName: {
                color: 'rgb(0,24,110)'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        tooltip: {
            show: true,
            position: ['60%', '0%'],
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        series: [
            {
                name: '郑州',
                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#fff',
                    }
                },
                data: [[45, 88, 66, 33, 78]],
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                },


            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();