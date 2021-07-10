<template>
    <div class="members">
        <h2 class="members_title">Members</h2>
        <div class="members_cards-list_wrap">
            <ul class="members_cards-list">
                <li class="members_card" v-for="m in members" :key="m">
                    <div class="members_card-inner--upper">
                        <div class="members_card-avatar">
                            <v-svg :sprite="m.avatar"></v-svg>
                        </div>
                        <div class="members_card-name">
                            {{m.name}}
                        </div>
                        <div class="members_card-owner">
                            {{m.position}}
                        </div>
                    </div>
                    <div class="members_card-inner--lower">
                        <div class="members_owner-status">
                            Status: {{m.status}}
                        </div>
                        <div class="members_room">
                            {{m.location}}
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@import '../assets/css/members';
</style>

<script>
import axios from 'axios';
export default {
    name: "members",
    data(){
        return {
            members:[]
        }
    },
    created(){
        axios
            .get('data/members.json')
            .then((resp)=>{
                this.members = resp.data;
         })
    }
}
</script>