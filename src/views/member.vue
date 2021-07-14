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
                <input type="range" name="range" id="range" min="0" max="100" step="1" value="25"/>
            </label>
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

label[for=range] {
position: relative;
display: block;
transform-origin: center;
padding-top: 40.47%;
/* top: 50%;
left: 50%; */
/* margin-left: -175px;
margin-top: -32px; */
margin: auto 0;
height: auto;
width: 239px;
padding-left: 13px;
transform: rotate(-90deg) /* skew(-62deg) */;
overflow: hidden;
box-shadow: 0 rem(-6px) rem(60px) rgba(29, 35, 67, 0.14);
border-radius: rem(25px);
// padding-bottom: 10px;

}
/* label[for=range]:after {
content: "";
position: absolute;
bottom: 11px;
left: 69px;
height: 9px;
width: 278px;
box-shadow: 0px 3px 10px -3px rgba(0, 0, 0, 0.51);
-webkit-transform: skew(62deg);
} */
input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
-webkit-appearance: none;
background-color: transparent;
width: 300px;
height: 100%;
//   padding-top:10px;
  overflow:hidden;
margin: 0;
margin-left: -20px;
/* transform-style: preserve-3d;
perspective: 300; */
/* transform-origin: 50% 50% 300px;
perspective-origin: 50% -121%; */
// transform: skew(62deg);
}
input[type=range]:focus{
  outline:none;
}
input[type="range"]::-webkit-slider-thumb {
  position:relative;
     -webkit-appearance: none;
    cursor:pointer;
    background-color: rgba(90, 184, 6, 0.5);
    width: 30px;
    height: 100%;
    // visibility: hidden;
    box-shadow: 
    -25px 0 0 10px rgba(90, 184, 6, 0.5),
    -75px 0 0 10px rgba(90, 184, 6, 0.5),
    -125px 0 0 10px rgba(90, 184, 6, 0.5),
    -175px 0 0 10px rgba(90, 184, 6, 0.5),
    -225px 0 0 10px rgba(90, 184, 6, 0.5),
    -275px 0 0 10px rgba(90, 184, 6, 0.5),
    -325px 0 0 10px rgba(90, 184, 6, 0.5);
  z-index:2;
}
/* input[type="range"]::-webkit-slider-thumb:after {
content: "";
position: absolute;
z-index: 1;
left: -285px;
top: -28px;
width: 300px;
height: 140px;
background: #9FE472;
transform: rotateX(90deg);
transform-origin: 0 0px 0;
transform: rotateX(90deg) translateY(-140px) translateZ(-18px);
} */
/* input[type="range"]::-webkit-slider-thumb:before {
content: "";
font-family: 'Concert One', cursive;
position: absolute;
background: #eaebe5;
background: -moz-linear-gradient(top, #eaebe5 0%, #dcdedd 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#eaebe5), color-stop(100%,#dcdedd));
background: -webkit-linear-gradient(top, #eaebe5 0%,#dcdedd 100%);
background: -o-linear-gradient(top, #eaebe5 0%,#dcdedd 100%);
background: -ms-linear-gradient(top, #eaebe5 0%,#dcdedd 100%);
background: linear-gradient(to bottom, #eaebe5 0%,#dcdedd 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#eaebe5', endColorstr='#dcdedd',GradientType=0 );
top: -2px;
left: 0px;
border-radius: 2px;
color: #5a5a5a;
text-shadow: 0 1px 0 white;
height: 22px;
width: 32px;
border-top: 1px solid white;
border-left: 1px solid white;
box-sizing: border-box;
text-align: center;
line-height: 19px;
font-size: 17px;
} */

input[type="range"]::-webkit-slider-runnable-track{
    height: 100%;
}
/* input[type="range"]::-webkit-slider-runnable-track:before {
content: "";
position: absolute;
height: 38px;
width: 283px;
background: #e8e8e8;
background: -moz-linear-gradient(top, #dfdfdf 0%, #d8d8d8 100%);
background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#dfdfdf), color-stop(100%,#d8d8d8));
background: -webkit-linear-gradient(top, #dfdfdf 0%,#d8d8d8 100%);
background: -o-linear-gradient(top, #dfdfdf 0%,#d8d8d8 100%);
background: -ms-linear-gradient(top, #dfdfdf 0%,#d8d8d8 100%);
background: linear-gradient(to bottom, #dfdfdf 0%,#d8d8d8 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#dfdfdf', endColorstr='#d8d8d8',GradientType=0 );
bottom: 0;
left: 0;
} */
/* input[type="range"]::-webkit-slider-runnable-track:after {
content: "";
position: absolute;
height: 10px;
width: 270px;
background: rgb(247, 247, 247);
top: 0;
right: 26px;
transform: skew(62deg);
} */
/* input[type=range]:before {
content: "";
position: absolute;
background: rgb(190, 190, 190);
box-shadow:0 1px 0 rgb(235, 235, 235);
width: 283px;
left: 0;
height: 1px;
top: 29px;
z-index: 1;
} */
/* input[type=range]:after {
content: "";
position: absolute;
background: rgb(190, 190, 190);
width: 7px;
left: 3px;
border-radius: 50%;
height: 6px;
top: 26px;
z-index: 1;
box-shadow:30px 0 0 rgb(190, 190, 190),
60px 0 0 rgb(190, 190, 190),
90px 0 0 rgb(190, 190, 190),
120px 0 0 rgb(190, 190, 190),
150px 0 0 rgb(190, 190, 190),
180px 0 0 rgb(190, 190, 190),
210px 0 0 rgb(190, 190, 190),
240px 0 0 rgb(190, 190, 190),
270px 0 0 rgb(190, 190, 190),
60px 1px 0 rgb(235, 235, 235),
90px 1px 0 rgb(235, 235, 235),
120px 1px 0 rgb(255, 255, 255),
150px 1px 0 rgb(235, 235, 235),
180px 1px 0 rgb(235, 235, 235),
210px 1px 0 rgb(235, 235, 235),
240px 1px 0 rgb(235, 235, 235),
270px 1px 0 rgb(235, 235, 235);
} */



.temperature{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
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
            tempr: 0
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