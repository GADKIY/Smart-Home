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
                <!-- TODO: тут будет красивый график-->
            </div>
        </li>
        <li class="statistics_list-item">
            <div class="statistics_circle-graph">
                <h6 class="statistics_list-item_title">Sorting</h6>
                <div class="statistics_circle-container statistics_graph">
                    <div class="statistics_circle-graph-date">Apr, 2020</div>
                    <div class="statistics_sorting-diagramma">
                        <!-- TODO: тут должна быть круговая диаграмма -->
                    </div>
                    <ul class="statistics_sorting-materials">
                        <li class="statistics_sorting-materials-item">
                            <span class="material-color">
                                <!-- TODO: каждый кругляк своим цветом -->
                            </span>
                            <span class="mateial-name">Paper</span>
                        </li>
                        <li class="statistics_sorting-materials-item">
                            <span class="material-color">
                                <!-- TODO: каждый кругляк своим цветом -->
                            </span>
                            <span class="mateial-name">Glass</span>
                        </li>
                        <li class="statistics_sorting-materials-item">
                            <span class="material-color">
                                <!-- TODO: каждый кругляк своим цветом -->
                            </span>
                            <span class="mateial-name">Plastic</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="statistics_controls-center">
                <h6 class="statistics_list-item_title">Devices</h6>
                <div class="statistics_controls statistics_graph">
                    <!-- TODO: Сверстать контейнеры для графиков и кнопок девайсов -->
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn tv">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonTV"></use>
                            </svg>
                        </button>
                        <div class="device_name">
                            TV
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn kettle">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonKettle">
                                </use>
                            </svg>
                        </button>
                        <div class="device_name">
                            Kettle
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn washer">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonWasher">
                                </use>
                            </svg>
                        </button>
                        <div class="device_name">
                            Washer
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn fridge">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonFridge">
                                </use>
                            </svg>
                        </button>
                        <div class="device_name">
                            Fridge
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn stove">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonStove">
                                </use>
                            </svg>
                        </button>
                        <div class="device_name">
                            Stove
                        </div>
                    </div>
                    <div class="statistics_controls-device-wrap">
                        <button type="button" class="statistics_controls-btn pc">
                            <svg>
                                <use xlink:href="../assets/svg/sprite.svg#buttonPC"></use>
                            </svg>
                        </button>
                        <div class="device_name">
                            PC
                        </div>
                    </div>
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
</style>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// import '@amcharts/amcharts4/maps';

    am4core.useTheme(am4themes_animated);
export default{

    mounted(){

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

        /* let chart2 = am4core.create(this.$refs.chartdiv2, am4charts.XYChart);
            
        chart2.data = [
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
            
        let xAxes2 = chart.xAxes.push(new am4charts.CategoryAxis());
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
        
        series2.stroke = am4core.color("#EE777F");
        series2.fill = am4core.color("#EE777F");
        series2.sequencedInterpolation = true;
        series2.sequencedInterpolationDelay = 90; */


    }
    

}


</script>