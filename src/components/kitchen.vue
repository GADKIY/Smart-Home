<template>
    <div class="room">
        <h2 class="rooms_title title">Kitchen</h2>
        <ul class="rooms_status-list">
            <li class="rooms_status-list-item biger">
                <div class="rooms_status-value">
                    <div class="rooms_status-parameter">
                        Room's<br> Temperature
                    </div>
                    <span id="celsius" class="celsius">
                        +23.5<span>&deg;C</span>
                    </span><br>
                    <span id="fahrenheit" class="fahrenheit">
                        74.3<span>&deg;F</span>
                    </span>
                </div>
                <div class="rooms_parameter-scale temperature">
                    <div class="rooms_parameter-scale_inner temperature"></div>
                    <svg width="22" height="40">
                        <use xlink:href="../assets/svg/sprite.svg#temperature"></use>
                    </svg>
                </div>
            </li>
            <li class="rooms_status-list-item">
                <div class="rooms_status-value">
                    <div class="rooms_status-parameter">
                        Room's<br> Humidity
                    </div>
                    40%
                </div>
                <div class="rooms_parameter-scale humidity">
                    <div class="rooms_parameter-scale_inner humidity"></div>
                    <svg width="27" height="36">
                        <use xlink:href="../assets/svg/sprite.svg#humidity"></use>
                    </svg>
                </div>
            </li>
            <li class="rooms_status-list-item">
                <div class="rooms_status-value">
                    <div class="rooms_status-parameter">
                        Room's<br> Lightning
                    </div>
                    86%
                </div>
                <div class="rooms_parameter-scale lightning">
                    <div class="rooms_parameter-scale_inner lightning"></div>
                    <svg width="33" height="33">
                        <use xlink:href="../assets/svg/sprite.svg#lightning"></use>
                    </svg>
                </div>
            </li>
        </ul>
        <div class="rooms_devices">
            <div class="rooms_devices-title">Devices</div>
            <ul class="rooms_devices-list">
                <li class="rooms_devices-list-item" v-for="rd in rooms[0].devices" :key="rd">
                    <svg :width="rd.icon.width" :height="rd.icon.height">
                        <use :xlink:href="'/img/sprite.svg#' + rd.icon.name"></use>
                    </svg>
                    <div>{{rd.name}}</div>
                </li>
                <!-- <li class="rooms_devices-list-item green">
                    <svg width="27" height="28">
                        <use xlink:href="../assets/svg/sprite.svg#buttonKettle"></use>
                    </svg>
                    <div>Kettle</div>
                </li>
                <li class="rooms_devices-list-item blue">
                    <svg width="29" height="30">
                        <use xlink:href="../assets/svg/sprite.svg#buttonStove"></use>
                    </svg>
                    <div>Stove</div>
                </li> -->
                <!-- <li class="rooms_devices-list-item red">
                    <svg width="32" height="40">
                        <use xlink:href="../assets/svg/sprite.svg#buttonDishwasher"></use>
                    </svg>
                    <div>Dishwasher</div>
                </li>
                <li class="rooms_devices-list-item green">
                    <svg width="45" height="45">
                        <use xlink:href="../assets/svg/sprite.svg#buttonMulticooker"></use>
                    </svg>
                    <div>Multicooker</div>
                </li>
                <li class="rooms_devices-list-item blue">
                    <svg width="31" height="28">
                        <use xlink:href="../assets/svg/sprite.svg#buttonTV"></use>
                    </svg>
                    <div>TV</div>
                </li>
                <li class="rooms_devices-list-item red">
                    <svg width="43" height="30">
                        <use xlink:href="../assets/svg/sprite.svg#buttonMicrowave"></use>
                    </svg>
                    <div>Microwave</div>
                </li>
                <li class="rooms_devices-list-item green">
                    <svg width="36" height="48">
                        <use xlink:href="../assets/svg/sprite.svg#buttonGrill"></use>
                    </svg>
                    <div>Indoor Grill</div>
                </li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
   name: 'kitchen',
}
</script>