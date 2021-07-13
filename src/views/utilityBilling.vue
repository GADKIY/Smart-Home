<template>
    <div class="utility_billing">
    <h2 class="title utility_billing_title">Utility Billing</h2>
    <ul class="utility_billing-invoice_list">
        <li class="utility_billing-invoice_list-item history">
            <div class="utility_billing-title">
                Invoice History
            </div>
            <div class="utility_billing-invoice_screen">
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
                        <tr v-for="info in invoiceList" :key="info.number">
                            <td>{{info.number}}</td>
                            <td>{{info.category}}</td>
                            <td>{{info.month}}</td>
                            <td>{{info.dueDate}}</td>
                            <td>${{info.amountDue}}</td>
                            <td class="status">
                                <span :class="info.status" @click="prePay(info.number, info.status)">
                                    {{info.status}}
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
                <div class="utility_billing-payment_card top">
                    <div class="utility_billing-payment_card-inner number">
                        <span>Number</span>
                        <span class="current_number">{{invoice.number}}</span>
                    </div>
                    <div class="utility_billing-payment_card-inner date">
                        <span>Due Date</span>
                        <span class="current_date">{{invoice.dueDate}}</span>
                    </div>
                    <div class="utility_billing-payment_card-inner amount">
                        <span>Amount Due</span>
                        <span class="current_amount">${{invoice.amountDue}}</span>
                    </div>
                </div>
                <div class="utility_billing-payment_card bottom">
                    <div class="utility_billing-payment_card-tax">
                        <span>Tax</span>
                        <span class="current_tax">${{tax}}</span>
                    </div>
                    <div class="utility_billing-payment_card-total">
                        <span>Total</span>
                        <span class="current_total">${{total}}</span>
                    </div>
                    <button type="button" @click="pay()" :style="'background-color:'+this.bgc+';'">Pay</button>
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
</style>

<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
import axios from 'axios';

export default {
    data(){
        return {
            invoiceList:[],
            invoice:{"number":"000000","dueDate":"mm/dd/yyyy","amountDue":"0.00"},
            tax:"0.00",
            total:"0.00",
            bgc:"#a9a9a9"
        }
    },
    created() {
        axios
            .get('data/invoice-history.json')
            .then((resp)=>{
                this.invoiceList = resp.data;
        });
    },
    mounted(){
       this.utilityChart();
    },
    methods:{
        prePay(number, status){
            if(status==="Unpaid") {
                this.invoice = this.invoiceList.find(el=>el.number===number);
                this.tax = (this.invoice.amountDue*0.13).toFixed(3);
                this.total = (this.invoice.amountDue + (parseFloat(this.tax))).toFixed(2);
                this.bgc = "#EE777F";
            }
        },
        pay(){
            let ind = this.invoiceList.findIndex(el=>el.number===this.invoice.number);
            this.invoiceList[ind].status = 'Paid';
            this.invoice = {"number":"000000","dueDate":"mm/dd/yyyy","amountDue":"0.00"};
            this.tax = "0.00";
            this.total = "0.00";
            this.bgc = "#a9a9a9";
        },
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
        },
        {
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
            "value1": 73,
            "value2": 64,
            "value3": 58
        },
        {
            "category": "Jul",
            "value1": 72,
            "value2": 48,
            "value3": 35
        },
        {
            "category": "Aug",
            "value1": 60,
            "value2": 48,
            "value3": 18
        },
        {
            "category": "Sep",
            "value1": 50,
            "value2": 80,
            "value3": 32
        },
        {
            "category": "Oct",
            "value1": 72,
            "value2": 45,
            "value3": 35
        },
        {
            "category": "Nov",
            "value1": 72,
            "value2": 80,
            "value3": 42
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

        series3.stroke = am4core.color("#65BDC0");
        series3.fill = am4core.color("#65BDC0");
        }
    }
}
</script>