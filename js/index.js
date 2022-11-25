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
    // 自动切换
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

    // 鼠标来到订单框的时候  计时器停
    // 鼠标移除的时候 计时器继续进行

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
    var myChart = echarts.init(document.querySelector('.tu'));


    // // 点击切换年月日
    // var timeTab = document.getElementsByClassName('timeTab');
    // var index_ = 0;
    // var timer = null;//计时器
    // for (var i = 0; i < timeTab.length; i++) {
    //     timeTab[i].setAttribute('index', i);

    //     timeTab[i].onclick = function () {
    //         index_ = this.getAttribute('index');

    //         for (var j = 0; j < timeTab.length; j++) {
    //             timeTab[j].classList.remove('active');
    //             timeTab[index_].classList.add('active');
    //         }

    //         // 获取自定义属性携带的时间

    //         var dataTime = this.getAttribute('data-time');
    //         // console.log(typeof dataTime);
    //         // console.log(data[dataTime][0]);
    //         // console.log(data[dataTime][1]);

    //         option.series[0].data = data[dataTime][0];
    //         option.series[1].data = data[dataTime][1];

    //         //修改option数据后 要重新配置option
    //         myChart.setOption(option);

    //     }
    // }

    // function auto() {
    //     timer = setInterval(function () {
    //         index_++;
    //         if (index_ >= timeTab.length) {
    //             index_ = 0;
    //         }

    //         timeTab[index_].click();
    //     }, 1000);
    // }
    // auto();

    // 鼠标移入暂停 移出继续

    var sales = document.querySelector('.sales');
    sales.onmouseenter = function () {
        clearInterval(timer);
    }

    sales.onmouseleave = function () {
        auto();
    }


    window.addEventListener('load', function () {
        myChart.resize();
    })

    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();

