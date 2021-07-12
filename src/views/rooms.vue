<template>
    <div class="rooms">
        <room :info="roomInfo"></room>
        <div class="rooms_selectors slider">
            <ul class="rooms_selectors_list">
                <li class="rooms_selectors_list-item" v-for="r in rooms" :key="r">
                    <button type="button" @click="viewRoom(r.name)">
                        <v-svg :width="r.width" :height="r.height" :viewBox="'0 0 ' + r.width + ' ' + r.height" :sprite="r.icon"></v-svg>
                        <div>{{r.name}}</div>
                    </button>
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
import room from '@/components/room.vue';
export default {
  name: 'rooms',
  data(){
      return{
        rooms:[],
        roomInfo:{},
      }
  },
  created(){
      axios
        .get('data/rooms.json')
        .then((resp)=>{
            this.rooms = resp.data;
            this.viewRoom('Bedroom');
        })
  },
  methods: {
      viewRoom(curRoom) {
          this.roomInfo = this.rooms.find(el=>el.name===curRoom);
      }
  },
  components: {
      room,
  }
}
</script>