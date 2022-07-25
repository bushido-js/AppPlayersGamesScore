<template>
    <div> 
        <AddNewPlayerInput 
            @sendEvent="record"
        />
        
        <AddNewPlayerList 
            :players="players"
        />
    </div>
</template>

<script>

export default {
    data() {
        return {
            index: 0
        }
    },
    props: {
        'players': Array        
    },
    components: {
        AddNewPlayerInput: () => import('./AddNewPlayer-Input.vue'),
        AddNewPlayerList: () => import('./AddNewPlayer-List.vue')
    }, 
    methods: {
        record(value) {
            if (value.trim()) {
                const newPlayer = {

                    id: this.index += 1,
                    name: value,
                    win: 0,
                    loss: 0,
                }
                // в отдельный метод, поменять названия
                this.$emit('add-player', newPlayer )
            }
        },     
    }
}
</script>