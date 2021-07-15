<template>
    <div class="security">
        <div class="security_form-wrap">
            <form class="security_form" @submit="login">
                <input class="security_input" id="name" type="text" placeholder="Name" v-model="name">
                <input class="security_input" id="pass" type="password" placeholder="Password" v-model="pass">
                <button class="btn security_btn" type="submit">Enter</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/fonts/lack.css";
@import "../assets/css/mainScreen";
</style>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            name: '',
            pass: ''
        }
    },
    methods:{
        login(e){
            e.preventDefault();
            if(this.name!='' && this.pass!=''){
                let user = {};
                axios
                    .get('data/members.json')
                    .then((resp)=>{
                        user = resp.data.find((el)=>{
                            return el.username===this.name&&el.password===this.pass;
                        })
                        if(typeof (user) !== 'undefined') {
                            localStorage.setItem('user', JSON.stringify(user));
                            this.$router.push('/');
                        } else {
                            alert('username or pass invalid');
                        }
                    });
            }
        }
    },
    name: "login"
}
</script>