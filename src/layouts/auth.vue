<template>
  <div class="auth-wrapper">
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
                                <router-link to="/login">
                                    <svg>
                                        <use xlink:href="@/assets/svg/sprite.svg#login"></use>
                                    </svg>
                                    <div>Login</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="main_screen-info_wrap">
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

<script>
export default {
  name: 'auth'
}
</script>

<style lang="scss">
@import "../assets/fonts/lack.css";
@import "../assets/css/mainScreen";


.main_screen{
  height: rem(905px);
}
.auth-wrapper {
  width: 100%;
  height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // background-image: linear-gradient(to bottom right, #004d40, #00bfa5);
}
</style>