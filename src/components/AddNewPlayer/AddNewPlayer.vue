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
import AddNewPlayerList from './AddNewPlayer-List.vue';
export default {
    props: {
        'players': Array        
    },
    components: {
        AddNewPlayerInput,
        AddNewPlayerList
        // AddNewPlayerInput: () => import('./AddNewPlayer-Input.vue'),
        // AddNewPlayerList: () => import('./AddNewPlayer-List.vue')
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
            
    }
}
</script>