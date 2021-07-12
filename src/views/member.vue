<template>
    <div class="member">
    <div class="member_welcome-title">
        Welcome, Annie!
    </div>
    <ul class="member_main-parameters">
        <li class="member_parameter time">
            <div class="member_parameter-name">
                Time
            </div>
            <div class="member_parameter-time">
                {{timeStamp}} <span>pm</span>
            </div>
        </li>
        <li class="member_parameter out-temp">
            <div class="member_parameter-name">
                Outdoor Temperature
            </div>
            <div class="member_parameter-inner_wrap">
                <div class="member_parameter-value">
                    +21.3&deg;C
                </div>
                <svg width="68" height="65">
                    <use xlink:href="../assets/svg/sprite.svg#weather"></use>
                </svg>
            </div>
        </li>
        <li class="member_parameter memb-home">
            <div class="member_parameter-name">
                Members at home:
            </div>
            <div class="member_parameter-value-2">
                <div class="member_icon-wrap">
                    <svg width="46" height="46" class="green">
                        <use xlink:href="../assets/svg/sprite.svg#profilegreen"></use>
                    </svg>
                    <div>Annie</div>
                </div>
                <div class="member_icon-wrap">
                    <svg width="46" height="46" class="red">
                        <use xlink:href="../assets/svg/sprite.svg#profilered"></use>
                    </svg>
                    <div>John</div>
                </div>
            </div>
        </li>
    </ul>
    <div class="member_controls-title">
        Controls:
    </div>
    <ul class="member_controls-list">
        <li class="member_controls-item light">
            <div class="member_controls-name">
                Light Intensity
            </div>
            <div class="member_controls-controler">
                <div class="member_controls-controler_scale">
                    <div class="member_controls-value">
                        83%
                    </div>
                </div>
            </div>
            <div class="member_range-wrap">
                <div class="member_controls-from">
                    0
                </div>
                <div class="member_controls-to">
                    100
                </div>
            </div>
        </li>
        <li class="member_controls-item air">
            <div class="member_controls-name">
                Air Conditioning
            </div>
            <div class="member_controls-controler">
                <div class="member_controls-controler_scale">
                    <div class="member_controls-value">
                        36%
                    </div>
                </div>
            </div>
            <div class="member_range-wrap">
                <div class="member_controls-from">
                    0
                </div>
                <div class="member_controls-to">
                    100
                </div>
            </div>
        </li>
        <li class="member_controls-item temperature">
            <div class="member_controls-name">
                Temperature
            </div>
            <div class="member_controls-vertical_controler">
                <svg width="22" height="40">
                    <use xlink:href="../assets/svg/sprite.svg#temperature"></use>
                </svg>
                <div class="member_controls-fill">
                    <div class="member_controls-temperature">
                        +23<span>&deg;C</span>
                    </div>
                </div>
            </div>
        </li>
        <li class="member_controls-item shortcuts">
            <div class="member_controls-name">
                Shortcts
            </div>
            <div class="member_controls-btn_group">
                <div class="member_controls-btn_wrap">
                    <input type="checkbox" id="wifi">
                    <label for="wifi" class="member_controls-btn"><v-svg width="32" height="32" viewport="0 0 32 32" sprite="wifi"></v-svg><div>WI-FI</div></label>
                </div>
                <div class="member_controls-btn_wrap">
                    <input type="checkbox" id="music">
                    <label for="music" class="member_controls-btn"><v-svg width="25" height="26" viewport="0 0 25 26" sprite="music"></v-svg><div>Music</div></label>
                </div>
                <div class="member_controls-btn_wrap">
                    <input type="checkbox" id="intercom">
                    <label for="intercom" class="member_controls-btn"><v-svg width="22" height="22" viewport="0 0 22 22" sprite="intercom"></v-svg><div>Intercom</div></label>
                </div>
                <!-- <button type="button" class="member_controls-btn wifi" :class="isActive?'wifi':'active'" @click="changeAct(true)">
                    <svg width="32" height="23">
                        <use xlink:href="../assets/svg/sprite.svg#wifi"></use>
                    </svg>
                    <div>WI-FI</div>
                </button>
                <button type="button" class="member_controls-btn music" :class="isActive?'music':'active'" @click="changeAct(true)">
                    <svg width="25" height="26">
                        <use xlink:href="../assets/svg/sprite.svg#music"></use>
                    </svg>
                    <div>Music</div>
                </button>
                <button type="button" class="member_controls-btn intercom" :class="isActive?'intercom':'active'" @click="changeAct(true)">
                    <svg width="22" height="22">
                        <use xlink:href="../assets/svg/sprite.svg#intercom"></use>
                    </svg>
                    <div>Intercom</div>
                </button> -->
            </div>
        </li>
    </ul>
</div>
</template>

<style lang="scss">
@import '../assets/css/member';
</style>

<script>
export default{
    data(){
        return{
            timeStamp: ''
        }
    },
    created(){
        setInterval(this.getNow, 1000);
    },
    methods:{
        getNow(){
            const today = new Date();
            const time = this.addZero(today.getHours()) + ":" + this.addZero(today.getMinutes()) + ":" + this.addZero(today.getSeconds());
            this.timeStamp = time;
        },
        addZero(i){
            if(i<10){
                i = "0"+i;
            }
            return i;
        }
    }
}
// export default {
//     data(){
//         return{
//             isActive: false
//         }
//     },
//     created(){
//         },
//     methods:{
//          changeAct(active){
//              if(this.isActive === false){
//                 this.isActive = active;

//             }else{
//                 this.isActive = !active;
//             }
//          }
//     }
// }
</script>