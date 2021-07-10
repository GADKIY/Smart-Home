<template>
    <div class="utility_billing">
    <h2 class="title utility_billing_title">Utility Billing</h2>
    <ul class="utility_billing-invoice_list">
        <li class="utility_billing-invoice_list-item history">
            <div class="utility_billing-title">
                Invoice History
            </div>
            <div class="utility_billing-invoice_screen">
                <!-- TODO: здесь должна быть табличка с историей счетов -->
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Category</th>
                            <th scope="col">Month</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Amount Due</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>000245</td>
                            <td>Water</td>
                            <td>March</td>
                            <td>04/15/2020</td>
                            <td>$56.78</td>
                            <td class="status">
                                <span class="unpaid">
                                    Unpaid
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>000244</td>
                            <td>Waste</td>
                            <td>March</td>
                            <td>04/12/2020</td>
                            <td>$14.92</td>
                            <td class="status">
                                <span class="unpaid">
                                    Unpaid
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>000243</td>
                            <td>Electricity</td>
                            <td>March</td>
                            <td>04/06/2020</td>
                            <td>$86.98</td>
                            <td class="status">
                                <span class="paid">
                                    Paid
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>000242</td>
                            <td>Water</td>
                            <td>February</td>
                            <td>03/15/2020</td>
                            <td>$53.78</td>
                            <td class="status">
                                <span class="paid">
                                    Paid
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>000241</td>
                            <td>Waste</td>
                            <td>February</td>
                            <td>03/12/2020</td>
                            <td>$13.98</td>
                            <td class="status">
                                <span class="paid">
                                    Paid
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
        <li class="utility_billing-invoice_list-item current">
            <div class="utility_billing-title">
                Current Invoice
            </div>
            <div class="utility_billing-invoice_screen">
                <!-- TODO: здесть должно быть окошко с кнопкой для оплаты по счёту -->
                <div class="utility_billing-payment_card top">
                    <div class="utility_billing-payment_card-inner number">
                        <span>Number</span>
                        <span class="current_number">000244</span>
                    </div>
                    <div class="utility_billing-payment_card-inner date">
                        <span>Due Date</span>
                        <span class="current_date">04/12/2020</span>
                    </div>
                    <div class="utility_billing-payment_card-inner amount">
                        <span>Amount Due</span>
                        <span class="current_amount">$14.92</span>
                    </div>
                </div>
                <div class="utility_billing-payment_card bottom">
                    <div class="utility_billing-payment_card-tax">
                        <span>Tax</span>
                        <span class="current_tax">$1.849</span>
                    </div>
                    <div class="utility_billing-payment_card-total">
                        <span>Total</span>
                        <span class="current_total">$16.07</span>
                    </div>
                    <button type="button">Pay</button>
                </div>
            </div>
        </li>
        <li class="utility_billing-invoice_list-item chart">
            <div class="title_wrap">
                <div class="utility_billing-title">
                    Invoicing Chart
                </div>
                <ul class="markers_list">
                    <li class="markers_list-item">
                        <span class="marker_circle red"></span>
                        <span class="marker_description">Waste</span>
                    </li>
                    <li class="markers_list-item">
                        <span class="marker_circle blue"></span>
                        <span class="marker_description">Water</span>
                    </li>
                    <li class="markers_list-item">
                        <span class="marker_circle green"></span>
                        <span class="marker_description">Electricity</span>
                    </li>
                </ul>
            </div>
            <div class="utility_billing-invoice_screen chart_screen">
                <div ref="chartdiv" class="graph"></div>
                <!-- TODO:  здесь должен быть красивый чарт с расходами-->
            </div>
        </li>
    </ul>
</div>
</template>

<style lang="scss">
@import '../assets/css/utilityBilling';

.graph{
    width: 100%;
    height: 100%;
}
</style>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);


export default {
    mounted(){
       this.utilityChart(); 
    },
    methods:{
        utilityChart(){
            let chart = am4core.create(this.$refs.chartdiv, am4charts.XYChart);

        chart.data = [{
            "category": "Dec",
            "value1": 50,
            "value2": 80,
            "value3": 40
        }, 
        {
            "category": "Jan",
            "value1": 70,
            "value2": 50,
            "value3": 40
        }, 
        {
            "category": "Feb",
            "value1": 61,
            "value2": 52,
            "value3": 22
        }, {
            "category": "Mar",
            "value1": 73,
            "value2": 68,
            "value3": 48
        }, 
        {
            "category": "Apr",
            "value1": 69,
            "value2": 40,
            "value3": 30
        }, 
        {
            "category": "May",
            "value1": 70,
            "value2": 58,
            "value3": 38
        }, 
        {
            "category": "Jun",
            "value1": 2934,
            "value2": 4903,
            "value3": 5000
        }, 
        {
            "category": "Jul",
            "value1": 2934,
            "value2": 4903,
            "value3": 2000
        }, 
        {
            "category": "Aug",
            "value1": 2934,
            "value2": 4903,
            "value3": 2000
        }, 
        {
            "category": "Sep",
            "value1": 2934,
            "value2": 4903,
            "value3": 2000
        }, 
        {
            "category": "Oct",
            "value1": 2934,
            "value2": 4903,
            "value3": 2000
        }, 
        {
            "category": "Nov",
            "value1": 3806,
            "value2": 1920,
            "value3": 2000
        }];

        let xAxes1 = chart.xAxes.push(new am4charts.CategoryAxis());
        xAxes1.dataFields.category = "category";

        xAxes1.startLocation = 0.5;
        xAxes1.endLocation = 0.5;

        xAxes1.renderer.grid.template.location = 0.5;
        xAxes1.renderer.minGridDistance = 20;

        let yAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
        yAxes1.renderer.maxLabelPosition = 0.98;

        let series1 = chart.series.push(new am4charts.LineSeries());
        series1.name = "Series 1";
        series1.stacked = true;

        series1.dataFields.valueY = "value1";
        series1.dataFields.categoryX = "category";

        series1.fillOpacity = 0.5;
        series1.strokeWidth = 2;
        series1.tensionX = 0.7;
        series1.tensionY = 0.8;

        series1.sequencedInterpolation = true;
        series1.sequencedInterpolationDelay = 100;
        series1.tooltipText = "{name} {categoryX}: {valueY}";
        series1.stroke = am4core.color("#EE777F");
        series1.fill = am4core.color("#EE777F");

        let series2 = chart.series.push(new am4charts.LineSeries());
        series2.name = "Series 2";
        series2.stacked = true;

        series2.dataFields.valueY = "value2";
        series2.dataFields.categoryX = "category";

        series2.fillOpacity = 0.5;
        series2.strokeWidth = 2;

        series2.sequencedInterpolation = true;
        series2.sequencedInterpolationDelay = 100;
        series2.tensionX = 0.7;
        series2.tensionY = 0.8;

        series2.tooltipText = "{name} {categoryX}: {valueY}";
        chart.cursor = new am4charts.XYCursor();
        series2.stroke = am4core.color("#1D2343");
        series2.fill = am4core.color("#1D2343");

        let series3 = chart.series.push(new am4charts.LineSeries());
        series3.name = "Series 3";
        series3.stacked = true;

        series3.dataFields.valueY = "value3";
        series3.dataFields.categoryX = "category";

        series3.fillOpacity = 0.5;
        series3.strokeWidth = 2;
        series3.tensionX = 0.7;
        series3.tensionY = 0.8;

        series3.sequencedInterpolation = true;
        series3.sequencedInterpolationDelay = 100;

        series3.tooltipText = "{name} {categoryX}: {valueY}";
        series3.stroke = am4core.color("#65BDC0");
        series3.fill = am4core.color("#65BDC0");
        }
    }
}
</script>