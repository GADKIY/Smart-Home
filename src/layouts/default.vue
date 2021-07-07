<template>
  <div id="app">
    <main>
        <section>
            <div class="container">
                <div class="main_screen">
                    <div class="main_screen-control_bar">
                        <div class="main_screen-logo">
                            <img src="@/assets/svg/Group 1.png" alt="logo">
                        </div>
                        <ul class="main_screen-control-list">
                            <li class="main_screen-control-item">
                                <router-link to="/rooms">
                                    <svg>
                                        <use xlink:href="@/assets/svg/sprite.svg#rooms"></use>
                                    </svg>
                                    <div>Rooms</div>
                                </router-link>
                            </li>                            
                            <li class="main_screen-control-item">
                                <router-link to="/statistics">
                                   <svg>
                                       <use xlink:href="@/assets/svg/sprite.svg#statistics"></use>
                                   </svg>
                                   <div>Statistics</div>
                                </router-link>
                            </li>
                            <li class="main_screen-control-item">
                                <router-link to="/members">
                                    <svg>
                                        <use xlink:href="@/assets/svg/sprite.svg#members"></use>
                                    </svg>
                                    <div>Members</div>
                                </router-link>
                            </li>
                            <li class="main_screen-control-item">
                                <router-link to="/billing">
                                    <svg>
                                        <use xlink:href="@/assets/svg/sprite.svg#billing"></use>
                                    </svg>
                                    <div>Billing</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="main_screen-info_wrap">
                        <div class="main_screen-control_panel">
                            <span>
                                <svg class="main_screen-control_panel-icon">
                                    <use xlink:href="@/assets/svg/sprite.svg#settings"></use>
                                </svg>
                            </span>
                            <span>
                                <svg class="main_screen-control_panel-icon">
                                    <use xlink:href="@/assets/svg/sprite.svg#notification"></use>
                                </svg>
                            </span>
                            <span>
                                <button class="logout" @click="logout">
                                    <router-link to="/">
                                        <svg width="46" height="46" class="main_screen-control_panel-icon-bigger">
                                            <use xlink:href="@/assets/svg/sprite.svg#profile"></use>
                                        </svg>
                                    </router-link> 
                                </button>
                            </span>
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
export default {
    name: "default",
    methods:{
        logout(){
            localStorage.removeItem("user");
            this.$router.push('/security');
        }
    }
}
</script>






