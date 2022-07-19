<template>
<div> 
    <AddNewPlayerInput 
        @sendEvent="record"
    />
    
    <div class="row">
        <div class="col-6">
            <ul class="list-group">
                <li class="list-group-item" v-for="(player, index) of players">
                    <strong > {{ player.id = index + 1 }} </strong>
                    <span>{{ player.name }}</span>
                    <span class="badge bg-primary rounded-pill">{{ player.win }}</span>
                    /
                    <span class="badge bg-danger rounded-pill">{{ player.loss }}</span>
                </li>
            </ul>
        </div>
    </div>

</div>


</template>

<script>
import AddNewPlayerInput from './AddNewPlayer-Input.vue';
export default {
    props: {
        'players': Array        
    },
    methods: {
        record(value) {
            
            if (value.trim()) {
                const newPlayer = {
                    id: this.index + 1,
                    name: value,
                    win: 0,
                    loss: 0
                }
                this.$emit('add-player', newPlayer )
                this.clearInput()
            
            }
        },
        twoNumbers() {
            return this.num + 1
        },
        clearInput() {
            this.value = ""
        }      
    },
    components:{
    AddNewPlayerInput
} 
}
</script>