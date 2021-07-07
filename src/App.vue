<template>
  <div id="app">
    <vue-extend-layouts/>
    <!-- <router-view/> -->    
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