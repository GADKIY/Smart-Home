<template>
  <div id="app">
    <main>
        <section>
            <div class="container">
                <div class="main_screen">
                    <div class="main_screen-control_bar">
                        <div class="main_screen-logo">
                            <router-link to="/">
                                <img src="@/assets/svg/Group 1.png" alt="logo">
                            </router-link>
                        </div>
                        <ul class="main_screen-control-list">
                            <li class="main_screen-control-item" v-for="ci in cBar" :key="ci">
                                <router-link :to="'/'+ci.name">
                                    <v-svg :sprite="ci.name"></v-svg>
                                    <div>{{ci.title}}</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="main_screen-info_wrap">
                        <div class="main_screen-control_panel">
                            <button class="logout" @click="logout">
                                <router-link to="/">
                                    <v-svg width="46" height="46" class="main_screen-control_panel-icon-bigger" sprite="logout"></v-svg>
                                </router-link>
                            </button>
                        </div>
                        <div class="main_screen-info_inner">
                            <router-view/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  </div>
</template>

<style lang="scss">
@import "../assets/fonts/lack.css";
@import "../assets/css/mainScreen";

.logout{
    border: none;
    background-color: transparent;
    border-radius: 50%;
    cursor: pointer;
}

</style>

<script>
import axios from 'axios';
export default {
    name: "default",
    data(){
        return {
            cBar:[]
        }
    },
    created(){
        axios
            .get('data/control-bar.json')
            .then((resp)=>{
                this.cBar = resp.data;
         })
    },
    methods:{
        logout(){
            localStorage.removeItem("user");
            this.$router.push('/security');
        }
    }
}
</script>






