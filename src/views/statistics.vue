<template>
    <div class="statistics">
    <h2 class="title statistics_title">Statistics</h2>
    <ul class="statistics_list">
        <li class="statistics_list-item">
            <h6 class="statistics_list-item_title">Electricity</h6>
            <div class="statistics_graph">
                <div ref="chartdiv" class="graph"></div>
            </div>
        </li>
        <li class="statistics_list-item">
            <h6 class="statistics_list-item_title">Water</h6>
            <div class="statistics_graph">
                <div ref="chartdiv2" class="graph"></div>
            </div>
        </li>
        <li class="statistics_list-item">
            <h6 class="statistics_list-item_title">Waste Managament</h6>
            <div class="statistics_graph small">
                <div ref="chartdiv3" class="graph"></div>
            </div>
        </li>
        <li class="statistics_list-item">
            <div class="statistics_circle-graph">
                <h6 class="statistics_list-item_title">Sorting</h6>
                <div class="statistics_circle-container statistics_graph">
                    <div class="statistics_circle-graph-date">Apr, 2020</div>
                    <div ref="chartdiv4" class="graphCircle"></div>
                </div>
            </div>
            <div class="statistics_controls-center">
                <h6 class="statistics_list-item_title">Devices</h6>
                <div class="statistics_graph statistics_controls">
                    <ul class="statistics_devices">
                        <li class="statistics_devices-device-wrap" v-for="d in devices" :key="d">
                            <button type="button" class="statistics_devices-btn">
                                <v-svg :width="d.icon.width" :height="d.icon.height" :viewBox="'0 0' + d.icon.width + d.icon.height" :sprite="d.icon.name"></v-svg>
                            </button>
                            <div>{{d.name}}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<style lang="scss">
@import "../assets/css/statistics";

.graph{
    width: 100%;
    height: 100%;
    font-size: rem(11px);
    color: $font-color-grey;
}

.graphCircle{
    width: 100%;
    height: 200px;
}

.graph {
    svg {
        g {
            g:nth-child(2) {
                g:nth-child(2){
                    g {
                        g:nth-child(3){
                            g:nth-child(2) {
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
}
.graphCircle {
    svg {
        g {
            g:nth-child(2) {
                g:nth-child(2){
                    g {
                        g:nth-child(3){
                            g[opacity]{
                                display: none;
                            }
                            g[shape-rendering]{
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';
am4core.useTheme(am4themes_animated);

export default{
    data(){
        return{
            devices:[]
        }
    },
    created(){
      axios
        .get('data/devices.json')
        .then((resp)=>{
            this.devices = resp.data;
        })
    },
    mounted(){
        this.graph1();
        this.graph2();
        this.graph3();
        this.graph4();
    },
    methods:{
        graph1(){
            let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);
            
            chart.data = [
                    {
                        "category": "Dec",
                        "value": 57
                    },            
                    {
                        "category": "Mar",
                        "value": 58
                    },            
                    {
                        "category": "May",
                        "value": 43
                    },           
                    {
                        "category": "Jul",
                        "value": 40
                    },            
                    {
                        "category": "Sep",
                        "value": 40
                    },            
                    {
                        "category": "Nov",
                        "value": 78
                    },
                    
            ];
            
            let xAxes1 = chart.xAxes.push(new am4charts.CategoryAxis());
            xAxes1.dataFields.category = "category";

            
            xAxes1.renderer.grid.template.location = 0;
            
            xAxes1.renderer.minGridDistance = 20;
            
            let yAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
            yAxes1.renderer.maxLabelPosition = 1;
            
            let series1 = chart.series.push(new am4charts.LineSeries());
            
            let series1Bullets1 = series1.bullets.push(new am4charts.CircleBullet());
            series1Bullets1.tooltipText = "{categoryX} {valueY}";
            
            series1.dataFields.valueY = "value";
            series1.dataFields.categoryX = "category";
            series1.strokeWidth = 2;
            series1.tensionX = 0.7;
            series1.tensionY = 0.8;
            
            series1.stroke = am4core.color("#EE777F");
            series1.fill = am4core.color("#EE777F");
            series1.sequencedInterpolation = true;
            series1.sequencedInterpolationDelay = 90;
        },
        graph2(){
                let chart2 = am4core.create(this.$refs.chartdiv2, am4charts.XYChart);
            
            chart2.data = [
                {
                    "category": "Dec",
                    "value": 30
                },            
                {
                    "category": "Mar",
                    "value": 58
                },            
                {
                    "category": "May",
                    "value": 75
                },           
                {
                    "category": "Jul",
                    "value": 30
                },            
                {
                    "category": "Sep",
                    "value": 55
                },            
                {
                    "category": "Nov",
                    "value": 51
                },                
            ];
            
            let xAxes2 = chart2.xAxes.push(new am4charts.CategoryAxis());
            xAxes2.dataFields.category = "category";

            
            xAxes2.renderer.grid.template.location = 0;
            
            xAxes2.renderer.minGridDistance = 20;
            
            let yAxes2 = chart2.yAxes.push(new am4charts.ValueAxis());
            yAxes2.renderer.maxLabelPosition = 1;
            
            let series2 = chart2.series.push(new am4charts.LineSeries());
            
            let series2Bullets2 = series2.bullets.push(new am4charts.CircleBullet());
            series2Bullets2.tooltipText = "{categoryX} {valueY}";
            
            series2.dataFields.valueY = "value";
            series2.dataFields.categoryX = "category";
            series2.strokeWidth = 2;
            series2.tensionX = 0.7;
            series2.tensionY = 0.8;
            
            series2.stroke = am4core.color("#65BDC0");
            series2.fill = am4core.color("#65BDC0");
            series2.sequencedInterpolation = true;
            series2.sequencedInterpolationDelay = 90;
        },
        graph3(){
            let chart2 = am4core.create(this.$refs.chartdiv3, am4charts.XYChart);
                
            chart2.data = [
                {
                    "category": "Dec",
                    "value": 72
                },            
                {
                    "category": "Mar",
                    "value": 30
                },            
                {
                    "category": "May",
                    "value": 78
                },           
                {
                    "category": "Jul",
                    "value": 60
                },            
                {
                    "category": "Sep",
                    "value": 40
                },            
                {
                    "category": "Nov",
                    "value": 51
                },
                    
            ];
                
            let xAxes2 = chart2.xAxes.push(new am4charts.CategoryAxis());
            xAxes2.dataFields.category = "category";

            
            xAxes2.renderer.grid.template.location = 0;
            
            xAxes2.renderer.minGridDistance = 20;
            
            let yAxes2 = chart2.yAxes.push(new am4charts.ValueAxis());
            yAxes2.renderer.maxLabelPosition = 1;
            
            let series2 = chart2.series.push(new am4charts.LineSeries());
            
            let series2Bullets2 = series2.bullets.push(new am4charts.CircleBullet());
            series2Bullets2.tooltipText = "{categoryX} {valueY}";
            
            series2.dataFields.valueY = "value";
            series2.dataFields.categoryX = "category";
            series2.strokeWidth = 2;
            series2.tensionX = 0.7;
            series2.tensionY = 0.8;
            
            series2.stroke = am4core.color("#1D2343");
            series2.fill = am4core.color("#1D2343");
            series2.sequencedInterpolation = true;
            series2.sequencedInterpolationDelay = 90;
        },
        graph4(){
            let chart = am4core.create(this.$refs.chartdiv4, am4charts.PieChart);

            chart.data = [{
                "category": "Glass",
                "value": 25
            }, {
                "category": "Plastic",
                "value": 15
            }, {
                "category": "Paper",
                "value": 60
            }];

            let series1 = chart.series.push(new am4charts.PieSeries());
            series1.dataFields.value = "value";
            series1.dataFields.category = "category";
            series1.labels.template.disabled = true;
            series1.ticks.template.disabled = true;

            chart.radius = "100%";
            chart.innerRadius = "40%";

            series1.colors.list = [
                am4core.color("#1D2343"),
                am4core.color("#EE777F"),
                am4core.color("#65BDC0"),
            ];
            chart.legend = new am4charts.Legend();
            // chart.legend.maxHeight = 150;
            let marker = chart.legend.markers.template.children.getIndex(0);
            marker.cornerRadius(12, 12, 12, 12);
            marker.strokeWidth = 2;
            marker.strokeOpacity = 1;
        }
    }
}


</script>