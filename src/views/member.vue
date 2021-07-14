<template>
    <div class="member">
    <div class="member_welcome-title">
        Welcome, {{user.name}}
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
                    {{this.tempr}}&deg;C
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
            <div class="memb-home_wrap">
                <ul class="memb-home_value">
                    <li class="memb-home_icon-wrap" v-for="mH in membersHome()" :key="mH.id">
                        <v-svg width="46" height="46" sprite="profile"></v-svg>
                        <div>{{mH.name}}</div>
                    </li>
                </ul>
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
                <round-slider
                v-model="sliderValue"
                start-angle="315"
                end-angle="+270"
                line-cap="round"
                radius="71.5"
                pathColor="#FFF"
                rangeColor="#65BDC0"
                tooltipColor="#000"
                mouseScrollAction="true"
                />
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
                <round-slider
                v-model="sliderValue2"
                start-angle="315"
                end-angle="+270"
                line-cap="round"
                radius="71.5"
                pathColor="#FFF"
                rangeColor="#1D2343"
                tooltipColor="#000"
                mouseScrollAction="true"
                />
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
            <!-- <div class="member_controls-vertical_controler">
                <svg width="22" height="40">
                    <use xlink:href="../assets/svg/sprite.svg#temperature"></use>
                </svg>
                <div class="member_controls-fill">
                    <div class="member_controls-temperature">
                        +23<span>&deg;C</span>
                    </div>
                </div>
            </div> -->
            <label for="range">
                <input type="range" name="range" id="range" min="15" max="50" step="1" v-model="value" >
            </label>
            <svg width="22" height="40">
                    <use xlink:href="../assets/svg/sprite.svg#temperature"></use>
            </svg>
            <div class="member_controls-temperature">
                {{this.value+'&deg;C'}}
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
import RoundSlider from 'vue-round-slider'
export default{
    components:{
        RoundSlider,
    },
    name: "member",
    data(){
        return{
            user: JSON.parse(localStorage.getItem('user')),
            members:[],
            timeStamp: '',
            curWeather:[],
            sliderValue: 83,
            sliderValue2:60,
            tempr: 0,
            value: 23
        }
    },
    created(){
        setInterval(this.getNow, 1000);
        this.weather();
        axios
            .get('data/members.json')
            .then((resp)=>{
                this.members = resp.data;
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
        },
        weather(){
            axios
                .get('http://api.openweathermap.org/data/2.5/weather?lat=50.45244145440475&lon=30.525787409741707&units=metric&appid=49c39dbc9b3b6308b6d9424f48b250a5')
                .then((resp)=>{
                    this.curWeather = resp.data;
                    this.tempr = Math.round(this.curWeather.main.temp);
                })
        },
        membersHome() {
            let memHome = [];
            for(let i=0;i<this.members.length;i++) {
                if(this.members[i].status==='At home'){
                    memHome.push({id:this.members[i].id, name:this.members[i].name.split(' ')[0]});
                }
            }
            return memHome;
        }
    }
}
</script>