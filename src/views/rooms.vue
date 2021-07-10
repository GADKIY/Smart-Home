<template>
    <div class="rooms">
    <room :info="roomInfo"></room>
    <div class="rooms_selectors slider">
        <ul class="rooms_selectors_list">
            <li class="rooms_selectors_list-item" v-for="r in rooms" :key="r">
                <button type="button" @click="viewRoom(r.name)">
                    <v-svg :width="r.width" :height="r.height" :viewBox="'0 0' + r.width + r.height" :sprite="r.icon"></v-svg>
                    <div>{{r.name}}</div>
                </button>
            </li>
            <!-- <li class="rooms_selectors_list-item">
                <button type="button" @click="viewRoom('Kitchen')">
                    <svg width="48" height="41">
                        <use xlink:href="../assets/svg/sprite.svg#kitchen"></use>
                    </svg>
                    <div>Kitchen</div>
                </button>
            </li>
            <li class="rooms_selectors_list-item">
                <button type="button" @click="viewRoom('Living Room')">
                    <svg width="48" height="26">
                        <use xlink:href="../assets/svg/sprite.svg#livingRoom"></use>
                    </svg>
                    <div>Living Room</div>
                </button>
            </li>
            <li class="rooms_selectors_list-item">
                <button type="button" @click="viewRoom('Bathroom')">
                    <svg width="33" height="37">
                        <use xlink:href="../assets/svg/sprite.svg#bathroom"></use>
                    </svg>
                    <div>Bathroom</div>
                </button>
            </li> -->
        </ul>
    </div>
</div>
</template>

<style lang="scss">
@import "../assets/css/rooms";
</style>

<script>
import axios from 'axios';
import room from '@/components/room.vue';
export default {
  name: 'rooms',
  data(){
      return{
        rooms:[],
        roomInfo:{}
      }
  },
  created(){
      axios
        .get('data/rooms.json')
        .then((resp)=>{
            this.rooms = resp.data;
            this.viewRoom('Kitchen');
        })
  },
  methods: {
      viewRoom(curRoom) {
          this.roomInfo = this.rooms.find(el=>el.name===curRoom);
      }
  },
  components: {
      room
  }
}
</script>