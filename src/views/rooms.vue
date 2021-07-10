<template>
    <div class="rooms">
    <router-view :key="$route.path"></router-view>
    <div class="rooms_selectors slider">
        <ul class="rooms_selectors_list">
            <li class="rooms_selectors_list-item">
                <router-link to="/rooms/bedroom">
                    <svg width="47" height="37">
                        <use xlink:href="../assets/svg/sprite.svg#bedroom"></use>
                    </svg>
                    <div>Bedroom</div>
                </router-link>
            </li>
            <li class="rooms_selectors_list-item">
                <router-link to="/rooms/kitchen">
                    <svg width="48" height="41">
                        <use xlink:href="../assets/svg/sprite.svg#kitchen"></use>
                    </svg>
                    <div>Kitchen</div>
                </router-link>
            </li>
            <li class="rooms_selectors_list-item">
                <router-link to="/rooms/livingRoom">
                    <svg width="48" height="26">
                        <use xlink:href="../assets/svg/sprite.svg#livingRoom"></use>
                    </svg>
                    <div>Living Room</div>
                </router-link>
            </li>
            <li class="rooms_selectors_list-item">
                <router-link to="/rooms/bathroom">
                    <svg width="33" height="37">
                        <use xlink:href="../assets/svg/sprite.svg#bathroom"></use>
                    </svg>
                    <div>Bathroom</div>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<style lang="scss">
@import "../assets/css/rooms";
</style>

<script>
import axios from 'axios';
export default {
  name: 'rooms',
  data(){
      return{
        rooms:[]
      }
  },
  created(){
      axios
        .get('data/rooms.json')
        .then((resp)=>{
            this.rooms = resp.data;
        })
  }
}
</script>