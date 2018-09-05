$(function(){
    var echart1 = echarts.init( document.querySelector('#myChart1') );
    var option1 = {
        title : {
            text: '2017年-10月-23日～2017年-10月-29日',
            x:'center',
            textStyle:{
                color:'white'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y:'center',
            textStyle:{
                color:'white'
            },
            data:['生态水泵','生活水箱','补水泵','集水坑']
        },
        toolbox: {
            show : false
        },
        calculable : false,
        series : [
            {
                name:'',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:6 , name:'生态水泵'},
                    {value:5, name:'生活水箱'},
                    {value:27, name:'补水泵'},
                    {value:42, name:'集水坑'}
                ]
            }
        ]
    };
    echart1.setOption(option1);

    var echart2 = echarts.init( document.querySelector('#myChart2') );
    var option2 = {
        title : {
            text: '2017年-10月-23日～2017年-10月-29日',
            x:'center',
            textStyle:{
                color:'white'
            }
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            y:'bottom',
            textStyle:{color:'white'},
            data:['生态水泵','生活水箱','补水泵','集水坑']
        },
        toolbox: {
            show : false
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                axisLabel : {
                    textStyle:{color:'white'}
                },
                data : ['2017-10-23','2017-10-24','2017-10-25','2017-10-26','2017-10-27','2017-10-28','2017-10-29']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}',
                    textStyle:{color:'white'}
                },
                name:'台',
                nameTextStyle:{color:'white'}
            }
        ],
        series : [
            {
                name:'生态水泵',
                type:'line',
                data:[0, 1, 0, 0, 1, 0,0]
            },
            {
                name:'生活水箱',
                type:'line',
                data:[1, 0, 0, 0, 0, 0, 0]
            },
            {
                name:'补水泵',
                type:'line',
                data:[0, 0, 2,0, 0, 3, 0]
            },
            {
                name:'集水坑',
                type:'line',
                data:[5, 0, 0,0, 0, 0, 2]
            }

        ]
    };
    echart2.setOption(option2);
});