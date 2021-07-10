<template>
    <div class="room">
        <h2 class="rooms_title title">{{info.name}}</h2>
        <ul class="rooms_status-list">
            <li class="rooms_status-list-item biger">
                <div class="rooms_status-value">
                    <div class="rooms_status-parameter">
                        {{info.temperature.name}}
                    </div>
                    <span id="celsius" class="celsius">
                        {{info.temperature.c}}<span>&deg;C</span>
                    </span><br>
                    <span id="fahrenheit" class="fahrenheit">
                        {{info.temperature.f}}<span>&deg;F</span>
                    </span>
                </div>
                <div class="rooms_parameter-scale temperature">
                    <div class="rooms_parameter-scale_inner temperature"></div>
                    <v-svg :width="info.temperature.width" :height="info.temperature.height" :viewBox="'0 0' + info.temperature.width + info.temperature.height" :sprite="info.temperature.icon"></v-svg>
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
                <li class="rooms_devices-list-item" v-for="rd in info.devices" :key="rd">
                    <v-svg :width="rd.icon.width" :height="rd.icon.height" :viewBox="'0 0' + rd.icon.width + rd.icon.height" :sprite="rd.icon.name"></v-svg>
                    <div>{{rd.name}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
   name: 'room',
   props: ['info']
}
</script>