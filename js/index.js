var ad = document.querySelectorAll('.ad')
var gz = document.querySelectorAll('.g_z')
console.log(ad);
console.log(gz);
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
                    fontSize: 12
                },
                labelLine: {
                    length: 4,
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    {
                        value: 30, name: '四川', label: {
                            fontSize: 10
                        }
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