<template>
    <div class="room">
        <h2 class="rooms_title title">{{info.name}}</h2>
        <ul class="rooms_status-list">
            <li class="rooms_status-list-item biger">
                <div class="rooms_status-value">
                    <div class="rooms_status-parameter">
                        {{info.temperature.name}}
                    </div>
                    <div class="rooms_status-celsius">
                        {{info.temperature.c}}<span>&deg;C</span>
                    </div>
                    <div class="rooms_status-fahrenheit">
                        {{info.temperature.f}}<span>&deg;F</span>
                    </div>
                </div>
                <div class="rooms_parameter-scale temperature">
                    <div class="rooms_parameter-scale_inner temperature" :style="{height: info.temperature.c + '%'}"></div>
                    <v-svg :width="info.temperature.width" :height="info.temperature.height" :viewBox="'0 0 ' + info.temperature.width + ' ' + info.temperature.height" :sprite="info.temperature.icon"></v-svg>
                </div>
            </li>
            <li class="rooms_status-list-item">
                <div class="rooms_status-value">
                    <div class="rooms_status-parameter">
                        {{info.humidity.name}}
                    </div>
                    <div>
                        {{info.humidity.indicator}}%
                    </div>
                </div>
                <div class="rooms_parameter-scale humidity">
                    <div class="rooms_parameter-scale_inner humidity" :style="{height: info.humidity.indicator + '%'}"></div>
                    <v-svg :width="info.humidity.width" :height="info.humidity.height" :viewBox="'0 0 ' + info.humidity.width + ' ' + info.humidity.height" :sprite="info.humidity.icon"></v-svg>
                </div>
            </li>
            <li class="rooms_status-list-item">
                <div class="rooms_status-value">
                    <div class="rooms_status-parameter">
                        {{info.lightning.name}}
                    </div>
                    <div>
                        {{info.lightning.indicator}}%
                    </div>
                </div>
                <div class="rooms_parameter-scale lightning">
                    <div class="rooms_parameter-scale_inner lightning" :style="{height: info.lightning.indicator + '%'}"></div>
                    <v-svg :width="info.lightning.width" :height="info.lightning.height" :viewBox="'0 0 ' + info.lightning.width + ' ' + info.lightning.height" :sprite="info.lightning.icon"></v-svg>
                </div>
            </li>
        </ul>
        <div class="rooms_devices">
            <div class="rooms_devices-title">Devices</div>
            <div class="rooms_devices-wrap">
                <ul class="rooms_devices-list">
                    <transition name="fade" v-for="rd in info.devices" :key="rd.name">
                        <li class="rooms_devices-list-item" @click="showModal = true, viewDevice(rd.name)">
                            <v-svg :width="rd.icon.width" :height="rd.icon.height" :viewBox="'0 0 ' + rd.icon.width + ' ' + rd.icon.height" :sprite="rd.icon.name"></v-svg>
                            <div>{{rd.name}}</div>
                        </li>
                    </transition>
                </ul>
            </div>
        </div>
        <modal v-if="showModal" @close="showModal = false" :class="showModal?'opened':''">
            <div slot="header">
                {{deviceInfo.name}}
            </div>
            <div slot="body">
                <div class="modal-btn_block">
                    <div class="modal-btn_wrapper">
                        <input type="radio" name="on-off-btn" id="btn-on" :checked="stateOnCheck(deviceInfo.controls.state)">
                        <label for="btn-on">On</label>
                    </div>
                    <div class="modal-btn_wrapper">
                        <input type="radio" name="on-off-btn" id="btn-off" :checked="stateOffCheck(deviceInfo.controls.state)">
                        <label for="btn-off">Off</label>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/modal';
</style>

<script>
import modal from '@/components/modal';

export default {
   name: 'room',
   props: ['info'],
   components:{
      modal
   },
   data(){
       return{
        showModal: false,
        deviceInfo:{}
       }
   },
   methods: {
      viewDevice(curDevice) {
          this.deviceInfo = this.info.devices.find(el=>el.name===curDevice);
      },
      stateOnCheck(state) {
          return state = state==="on"?true:false;
      },
      stateOffCheck(state) {
          return state = state==="on"?false:true;
      }
   }
}
</script>