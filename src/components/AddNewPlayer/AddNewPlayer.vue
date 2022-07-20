<template>
<div> 
    <AddNewPlayerInput 
        @sendEvent="record"
    />
    
    <AddNewPlayerList 
        v-bind:players="players"
    />

</div>


</template>

<script>
import AddNewPlayerInput from './AddNewPlayer-Input.vue';
import AddNewPlayerList from './AddNewPlayer-list.vue';
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
                    loss: 0,
                    wGames: 0
                }
                this.$emit('add-player', newPlayer )
                
            
            }
        },
            
    },
    components:{
    AddNewPlayerInput,
    AddNewPlayerList
} 
}
</script>