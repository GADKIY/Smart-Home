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
                <!-- TODO:  здесь должен быть красивый чарт с расходами-->
            </div>
        </li>
    </ul>
</div>
</template>

<style lang="scss">
@import '../assets/css/utilityBilling';
</style>