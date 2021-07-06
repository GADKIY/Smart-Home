<template>
  <div id="app">
    
        <vue-extend-layouts/>   
                            <!-- <router-view/>                             -->
                        
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<style lang="scss">
@import "assets/fonts/lack.css";
@import "assets/css/mainScreen";

</style>

<script>
import VueExtendLayouts from 'vue-extend-layout';

export default {
    components:{
        VueExtendLayouts
    }
}
</script>




