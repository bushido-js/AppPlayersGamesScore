<template>
    <div> 
        <AddNewPlayerValue 
            @sendEvent="createObject"
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
        AddNewPlayerValue: () => import('./AddNewPlayerValue.vue'),
        AddNewPlayerList: () => import('./AddNewPlayerList.vue')
    }, 
    methods: {
        createObject(value) {
            let newPlayer = {};
            if (value.trim()) {
                newPlayer = {
                    id: this.index += 1,
                    name: value,
                    winGame: 0,
                    lossGame: 0,
                    winGames: 0
                }
            }
            if (Object.keys(newPlayer).length) {
                this.sendObject (newPlayer);
            }
        },
        sendObject (obj) {
            this.$emit('addNewPlayer', obj);  
        }
    }
}
</script>