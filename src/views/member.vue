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
                {{timeStamp}}
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
            <ul class="memb-home-value" id="memb-home-scroll">
                <li class="member_icon-wrap" v-for="mH in membersHome[0].name" :key="mH">
                    <v-svg width="46" height="46" sprite="profile"></v-svg>
                    <div>{{mH}}</div>
                </li>
            </ul>
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
                Shortcuts
            </div>
            <div class="member_controls-btn_group">
                <div class="member_controls-btn_wrap">
                    <input type="checkbox" id="wifi">
                    <label for="wifi" class="member_controls-btn"><v-svg width="32" height="32" viewBox="0 0 32 32" sprite="wifi"></v-svg><div>WI-FI</div></label>
                </div>
                <div class="member_controls-btn_wrap">
                    <input type="checkbox" id="music">
                    <label for="music" class="member_controls-btn"><v-svg width="25" height="26" viewBox="0 0 25 26" sprite="music"></v-svg><div>Music</div></label>
                </div>
                <div class="member_controls-btn_wrap">
                    <input type="checkbox" id="intercom">
                    <label for="intercom" class="member_controls-btn"><v-svg width="22" height="22" viewBox="0 0 22 22" sprite="intercom"></v-svg><div>Intercom</div></label>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<style lang="scss">
@import '../assets/css/member';
</style>

<script>
import axios from 'axios';
export default{
    name: "member",
    data(){
        return{
            membersHome:[],
            timeStamp: ''
        }
    },
    created(){
        setInterval(this.getNow, 1000);
        axios
            .get('data/membersHome.json')
            .then((resp)=>{
                this.membersHome = resp.data;
        });
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
        // scrollX() {
        //     let scrollContainer = document.querySelector('#memb-home-scroll')
        //     scrollContainer.addEventListener('wheel', (e)=> {
        //         e.preventDefault();
        //         scrollContainer.scrollLeft += e.deltaY;
        //     })
        // }
    }
}
</script>