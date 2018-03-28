var line1 = echarts.init(document.getElementById('line1'));
var bar1 = echarts.init(document.getElementById('bar1'));
var bar2 = echarts.init(document.getElementById('bar2'));

  option1 = {
        tooltip: { //提示框
            trigger: 'axis',
            axisPointer: {
                type: 'line',
                lineStyle: {
                    color: '#fff',
                }
            },
            backgroundColor:'#1d59b3',
            textStyle:{
                color:"#beeaff"
            }
        },
        color: ["#fff"],
        grid: {
            top:'35%',
            left: '3%',
            right: '11%',
            bottom: '6%',
            containLabel: true
        },
        axis: {
            axisLine: {
                lineStyle: {
                    color: '#fff',
                }
            }
        },
        xAxis: { //x轴
            show: true,
            axisTick: false,
            name:'(日)',
            type: 'category', //类目型
            boundaryGap: 0, //x轴两段间隔
            nameTextStyle:{
                color:'#beeaff',
                fontSize:6
            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#00c1ff',
                }
            },
            splitLine: { //网格线　
                show: true,
                textStyle: {
                    color: "#ff8f4b",
                },
                lineStyle:{
                    color:['#00c1ff'],
                }
            },
            axisLabel: {
                fontSize:8,
                color:"#beeaff",
                textStyle: { //x轴文本样式
                    color: "#beeaff",
                    fontSize: 8,
                },
                //X轴刻度配置
                interval: 1//0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数
            },
            data: ['1','2', '3','4', '5','6','7','8', '9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31']
        },
        yAxis: [{
            type: 'value',
            show: true,
            axisTick: false,
            name:"(万元)",
            nameGap:10,
            nameTextStyle:{
                color:"#beeaff",
                fontSize:6
            },
            splitLine: { //网格线　
                show: false,
                textStyle: {
                    color: "#ff8f4b",
                },

            },
            axisLine: {
                show:false,
                lineStyle: {
                    color: '#00c1ff',
                }
            },
            axisLabel: {
                formatter: '{value} ',
                fontSize:8,
                color:"beeaff",
                interval:1
            },
            min: 1,
            max: 100
        }],
        series: [{
            name: '当期值',
            type: 'line',
            smooth: true,
            label:{
                show:false
            },
            lineStyle: {
                color: '#beeaff',
                shadowColor:'#0061AC',
                shadowOffsetX:30,
                shadowOffsetY:70,
                opacity:'100%',
                normal: {
                    width: 2,
                }
            },
            data: [1, 6, 6, 8, 9, 40, 60, 88, 60, 40,54, 70, 17,40,34,45,10, 6, 60, 80, 90, 40, 60, 88, 6, 4,54, 7, 17,40,34,45]
        }]
    }; 
//获取柱状图数据
function getoptions(xdata,valuedata,ymin,ymax){
	option = {
		color: ['#3398DB'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
				
				shadowStyle:{
					color:"#fff",
				    opacity:0.3
				}
				
				
			},
			backgroundColor:'rgba(241,248,255,1)',
            textStyle:{
                color:"#267ef3",
                fontSize:9
            },
			formatter: "{b}: {c}"
		},
		grid: {
			top:'5%',
			left: '1%',
			right: '1%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			axisTick: false,
			splitLine: {
				show: false
			}, //去除网格线
			splitArea: {
				show: false
			}, //保留网格区域
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#eee', //左边线的颜色
					width: '1', //坐标线的宽度
				}
			},
			data: xdata,
			axisLabel: {
				interval: 0,
				color: '#666', 
				textStyle: {
					color: '#666', //坐标值得具体的颜色
					fontSize: 8,
				},
				formatter: function(value) {
					return value;
	// 			return value.split("").join("\n");
				}
			},
		}],
		yAxis: [{
			type: 'value',
			axisTick: false,
			splitLine: {           // 分隔线
	            show: false,        // 默认显示，属性show控制显示与否
	//          lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
	//              color: ['#eee'],
	//              width: 1,
	//              type: 'solid'
	//          }
	        },
			axisLine: {
				lineStyle: {
					type: 'solid',
					color: '#eee', //左边线的颜色
					width: '1', //坐标线的宽度
				}
			},
			axisLabel: {
				interval: 0,
				color: '#666',
				textStyle: {
					
					fontSize: 8,
				},
			},
		}],
		series: [{
			type: 'bar',
			barWidth: '10',
			
			itemStyle: {
//				normal: {
//					color: new echarts.graphic.LinearGradient(
//						0, 0, 0, 1, [{
//								offset: 0,
//								color: '#0e8bd4'
//							},
//							{
//								offset: 1,
//								color: '#0e8bd4'
//							}
//	
//						]
//					),
//					barBorderRadius:6
//				},
				normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                        
                           '#2278f2','#207bf3','#1f7ef3','#1d82f3','#1c86f4',
                           '#1a8af4','#188ff5','#1694f5','#1498f5','#129df6',
                           '#10a2f6','#0ea7f7'
                        ];
                        return colorList[params.dataIndex]
                    },
                    barBorderRadius:6
                }
				
			},
			data: valuedata
		}]
	};
	return option;
}
line1.setOption(option1);
var xdata=['东区', '城区', '湖区', '田县', '塔区', '新区', '安区', '桥区','田县', '塔区', '新区'];
var valuedata=[30, 52, 10, 34, 90, 33, 20, 32,56,34,77];
var ymin=0;
var ymax=100;
bar1.setOption(getoptions(xdata,valuedata,ymin,ymax));
bar2.setOption(getoptions(xdata,valuedata,ymin,ymax));