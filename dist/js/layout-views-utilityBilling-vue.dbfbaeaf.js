(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["layout-views-utilityBilling-vue"],{"02c5":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"utility_billing"},[i("h2",{staticClass:"title utility_billing_title"},[t._v("Utility Billing")]),i("ul",{staticClass:"utility_billing-invoice_list"},[i("li",{staticClass:"utility_billing-invoice_list-item history"},[i("div",{staticClass:"utility_billing-title"},[t._v(" Invoice History ")]),i("div",{staticClass:"utility_billing-invoice_screen"},[i("table",[t._m(0),i("span",{staticClass:"table_wrap"},[i("tbody",t._l(t.invoiceList,(function(e){return i("tr",{key:e.number},[i("td",[t._v(t._s(e.number))]),i("td",[t._v(t._s(e.category))]),i("td",[t._v(t._s(e.month))]),i("td",[t._v(t._s(e.dueDate))]),i("td",[t._v("$"+t._s(e.amountDue))]),i("td",{staticClass:"status"},[i("span",{class:e.status,on:{click:function(i){return t.prePay(e.number,e.status)}}},[t._v(" "+t._s(e.status)+" ")])])])})),0)])])])]),i("li",{staticClass:"utility_billing-invoice_list-item current"},[i("div",{staticClass:"utility_billing-title"},[t._v(" Current Invoice ")]),i("div",{staticClass:"utility_billing-invoice_screen"},[i("div",{staticClass:"utility_billing-payment_card top"},[i("div",{staticClass:"utility_billing-payment_card-inner number"},[i("span",[t._v("Number")]),i("span",{staticClass:"current_number"},[t._v(t._s(t.invoice.number))])]),i("div",{staticClass:"utility_billing-payment_card-inner date"},[i("span",[t._v("Due Date")]),i("span",{staticClass:"current_date"},[t._v(t._s(t.invoice.dueDate))])]),i("div",{staticClass:"utility_billing-payment_card-inner amount"},[i("span",[t._v("Amount Due")]),i("span",{staticClass:"current_amount"},[t._v("$"+t._s(t.invoice.amountDue))])])]),i("div",{staticClass:"utility_billing-payment_card bottom"},[i("div",{staticClass:"utility_billing-payment_card-tax"},[i("span",[t._v("Tax")]),i("span",{staticClass:"current_tax"},[t._v("$"+t._s(t.tax))])]),i("div",{staticClass:"utility_billing-payment_card-total"},[i("span",[t._v("Total")]),i("span",{staticClass:"current_total"},[t._v("$"+t._s(t.total))])]),i("button",{style:"background-color:"+this.bgc+";",attrs:{type:"button"},on:{click:function(e){return t.pay()}}},[t._v("Pay")])])])]),i("li",{staticClass:"utility_billing-invoice_list-item chart"},[t._m(1),i("div",{staticClass:"utility_billing-invoice_screen chart_screen"},[i("div",{ref:"chartdiv",staticClass:"graph"})])])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[t._v("Number")]),i("th",{attrs:{scope:"col"}},[t._v("Category")]),i("th",{attrs:{scope:"col"}},[t._v("Month")]),i("th",{attrs:{scope:"col"}},[t._v("Due Date")]),i("th",{attrs:{scope:"col"}},[t._v("Amount Due")]),i("th",{attrs:{scope:"col"}},[t._v("Status")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title_wrap"},[i("div",{staticClass:"utility_billing-title"},[t._v(" Invoicing Chart ")]),i("ul",{staticClass:"markers_list"},[i("li",{staticClass:"markers_list-item"},[i("span",{staticClass:"marker_circle red"}),i("span",{staticClass:"marker_description"},[t._v("Waste")])]),i("li",{staticClass:"markers_list-item"},[i("span",{staticClass:"marker_circle blue"}),i("span",{staticClass:"marker_description"},[t._v("Water")])]),i("li",{staticClass:"markers_list-item"},[i("span",{staticClass:"marker_circle green"}),i("span",{staticClass:"marker_description"},[t._v("Electricity")])])])])}],s=(i("7db0"),i("b680"),i("c740"),i("b0c0"),i("cb29"),i("71c9")),r=i("c497"),l=i("5a54"),c=i("bc3a"),o=i.n(c);s["c"](l["a"]);var u={data:function(){return{invoiceList:[],invoice:{number:"000000",dueDate:"mm/dd/yyyy",amountDue:"0.00"},tax:"0.00",total:"0.00",bgc:"#a9a9a9"}},created:function(){var t=this;o.a.get("data/invoice-history.json").then((function(e){t.invoiceList=e.data}))},mounted:function(){this.utilityChart()},methods:{prePay:function(t,e){"Unpaid"===e&&(this.invoice=this.invoiceList.find((function(e){return e.number===t})),this.tax=(.13*this.invoice.amountDue).toFixed(3),this.total=(this.invoice.amountDue+parseFloat(this.tax)).toFixed(2),this.bgc="#EE777F")},pay:function(){var t=this,e=this.invoiceList.findIndex((function(e){return e.number===t.invoice.number}));this.invoiceList[e].status="Paid",this.invoice={number:"000000",dueDate:"mm/dd/yyyy",amountDue:"0.00"},this.tax="0.00",this.total="0.00",this.bgc="#a9a9a9"},utilityChart:function(){var t=s["b"](this.$refs.chartdiv,r["h"]);t.data=[{category:"Dec",value1:50,value2:80,value3:40},{category:"Jan",value1:70,value2:50,value3:40},{category:"Feb",value1:61,value2:52,value3:22},{category:"Mar",value1:73,value2:68,value3:48},{category:"Apr",value1:69,value2:40,value3:30},{category:"May",value1:70,value2:58,value3:38},{category:"Jun",value1:73,value2:64,value3:58},{category:"Jul",value1:72,value2:48,value3:35},{category:"Aug",value1:60,value2:48,value3:18},{category:"Sep",value1:50,value2:80,value3:32},{category:"Oct",value1:72,value2:45,value3:35},{category:"Nov",value1:72,value2:80,value3:42}];var e=t.xAxes.push(new r["a"]);e.dataFields.category="category",e.startLocation=.5,e.endLocation=.5,e.renderer.grid.template.location=.5,e.renderer.minGridDistance=20;var i=t.yAxes.push(new r["g"]);i.renderer.maxLabelPosition=.98;var a=t.series.push(new r["d"]);a.name="Series 1",a.stacked=!0,a.dataFields.valueY="value1",a.dataFields.categoryX="category",a.fillOpacity=.5,a.strokeWidth=2,a.tensionX=.7,a.tensionY=.8,a.sequencedInterpolation=!0,a.sequencedInterpolationDelay=100,a.stroke=s["a"]("#EE777F"),a.fill=s["a"]("#EE777F");var n=t.series.push(new r["d"]);n.name="Series 2",n.stacked=!0,n.dataFields.valueY="value2",n.dataFields.categoryX="category",n.fillOpacity=.5,n.strokeWidth=2,n.sequencedInterpolation=!0,n.sequencedInterpolationDelay=100,n.tensionX=.7,n.tensionY=.8,t.cursor=new r["i"],n.stroke=s["a"]("#1D2343"),n.fill=s["a"]("#1D2343");var l=t.series.push(new r["d"]);l.name="Series 3",l.stacked=!0,l.dataFields.valueY="value3",l.dataFields.categoryX="category",l.fillOpacity=.5,l.strokeWidth=2,l.tensionX=.7,l.tensionY=.8,l.sequencedInterpolation=!0,l.sequencedInterpolationDelay=100,l.stroke=s["a"]("#65BDC0"),l.fill=s["a"]("#65BDC0")}}},v=u,d=(i("e609"),i("2877")),_=Object(d["a"])(v,a,n,!1,null,null,null);e["default"]=_.exports},1148:function(t,e,i){"use strict";var a=i("a691"),n=i("1d80");t.exports=function(t){var e=String(n(this)),i="",s=a(t);if(s<0||s==1/0)throw RangeError("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},"408a":function(t,e,i){var a=i("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"4fe8":function(t,e,i){},"7db0":function(t,e,i){"use strict";var a=i("23e7"),n=i("b727").find,s=i("44d2"),r="find",l=!0;r in[]&&Array(1)[r]((function(){l=!1})),a({target:"Array",proto:!0,forced:l},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(r)},b680:function(t,e,i){"use strict";var a=i("23e7"),n=i("a691"),s=i("408a"),r=i("1148"),l=i("d039"),c=1..toFixed,o=Math.floor,u=function(t,e,i){return 0===e?i:e%2===1?u(t,e-1,i*t):u(t*t,e/2,i)},v=function(t){var e=0,i=t;while(i>=4096)e+=12,i/=4096;while(i>=2)e+=1,i/=2;return e},d=function(t,e,i){var a=-1,n=i;while(++a<6)n+=e*t[a],t[a]=n%1e7,n=o(n/1e7)},_=function(t,e){var i=6,a=0;while(--i>=0)a+=t[i],t[i]=o(a/e),a=a%e*1e7},y=function(t){var e=6,i="";while(--e>=0)if(""!==i||0===e||0!==t[e]){var a=String(t[e]);i=""===i?a:i+r.call("0",7-a.length)+a}return i},f=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!l((function(){c.call({})}));a({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,i,a,l,c=s(this),o=n(t),f=[0,0,0,0,0,0],p="",h="0";if(o<0||o>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(p="-",c=-c),c>1e-21)if(e=v(c*u(2,69,1))-69,i=e<0?c*u(2,-e,1):c/u(2,e,1),i*=4503599627370496,e=52-e,e>0){d(f,0,i),a=o;while(a>=7)d(f,1e7,0),a-=7;d(f,u(10,a,1),0),a=e-1;while(a>=23)_(f,1<<23),a-=23;_(f,1<<a),d(f,1,1),_(f,2),h=y(f)}else d(f,0,i),d(f,1<<-e,0),h=y(f)+r.call("0",o);return o>0?(l=h.length,h=p+(l<=o?"0."+r.call("0",o-l)+h:h.slice(0,l-o)+"."+h.slice(l-o))):h=p+h,h}})},b727:function(t,e,i){var a=i("0366"),n=i("44ad"),s=i("7b0b"),r=i("50c4"),l=i("65f0"),c=[].push,o=function(t){var e=1==t,i=2==t,o=3==t,u=4==t,v=6==t,d=7==t,_=5==t||v;return function(y,f,p,h){for(var m,g,b=s(y),C=n(b),x=a(f,p,3),w=r(C.length),k=0,D=h||l,F=e?D(y,w):i||d?D(y,0):void 0;w>k;k++)if((_||k in C)&&(m=C[k],g=x(m,k,b),t))if(e)F[k]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return k;case 2:c.call(F,m)}else switch(t){case 4:return!1;case 7:c.call(F,m)}return v?-1:o||u?u:F}};t.exports={forEach:o(0),map:o(1),filter:o(2),some:o(3),every:o(4),find:o(5),findIndex:o(6),filterOut:o(7)}},c740:function(t,e,i){"use strict";var a=i("23e7"),n=i("b727").findIndex,s=i("44d2"),r="findIndex",l=!0;r in[]&&Array(1)[r]((function(){l=!1})),a({target:"Array",proto:!0,forced:l},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s(r)},e609:function(t,e,i){"use strict";i("4fe8")}}]);
//# sourceMappingURL=layout-views-utilityBilling-vue.dbfbaeaf.js.map