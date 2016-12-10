/**
 * Created by liu on 2016/12/10.
 */
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ssdb性能测试(1000k)'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top: '5%',
        data:['set', 'get', 'del', 'hset', 'hget', 'hdel', 'zset', 'zget', 'zdel', 'qpush', 'qpop']
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '8%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['1','10','32','100','1000','10000','20000','30000','40000','50000','60000'],
        name: 'parallel clients',
        nameLocation: 'middle',
        nameGap: 30
    },
    yAxis: {
        name: 'QPS',
        type: 'value',
        min: 20000
    },
    series: [
        {
            name:'set',
            type:'line',
            data:[28149, 68442, 63228, 69636, 68995, 66733, 52802, 54569, 62426, 56620, 60205]
        },
        {
            name:'get',
            type:'line',
            data:[29968, 76669, 82046, 79870, 77188, 73318, 74791, 72931, 72947, 72571, 71677]
        },
        {
            name:'del',
            type:'line',
            data:[31206, 72848, 60278, 69482, 70292, 64097, 64488, 62606, 62259, 59061, 61171]
        },
        {
            name:'hset',
            type:'line',
            data:[25433, 45687, 42835, 47045, 46217, 43478, 41010, 43934, 39888, 41237, 40518]
        },
        {
            name:'hget',
            type:'line',
            data:[32683, 79993, 78836, 77888, 75658, 71693, 67553, 71213, 70740, 73191, 73711]
        },
        {
            name:'hdel',
            type:'line',
            data:[25033, 42024, 43866, 48482, 50030, 39359, 42339, 41207, 40489, 40227, 41980]
        },
        {
            name:'zset',
            type:'line',
            data:[24122, 43322, 43774, 43737, 45880, 41078, 39347, 40141, 38727, 38787, 38130]
        },
        {
            name:'zget',
            type:'line',
            data:[30672, 77102, 75654, 76001, 78406, 69656, 68107, 69324, 72058, 70315, 71995]
        },
        {
            name:'zdel',
            type:'line',
            data:[21206, 42091, 36773, 41741, 44341, 37312, 37017, 37907, 35852, 38118, 34980]
        },
        {
            name:'qpush',
            type:'line',
            data:[24470, 49855, 44241, 50025, 49314, 43251, 44820, 43294, 41211, 42817, 41626]
        },
        {
            name:'qpop',
            type:'line',
            data:[24448, 41379, 39095, 41468, 41227, 37795, 36281, 35115, 36328, 38482, 36849]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);