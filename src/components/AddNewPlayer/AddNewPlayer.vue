<template>
    <div> 
        <div class="row">
            <div class="col-9">
                <AddNewPlayerValue 
                    @sendEvent="sendValue"
                />
                
                <AddNewPlayerList 
                    :players="players"
                />
            </div>
            <div class="col-3">
                <GamePointsInfo />
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        'players': Array        
    },
    components: {
        GamePointsInfo: () => import('./GamePointsInfo.vue'),
        AddNewPlayerValue: () => import('./AddNewPlayerValue.vue'),
        AddNewPlayerList: () => import('./AddNewPlayerList.vue')
    }, 
    methods: {
        sendValue (value) {
            this.$emit('addNewPlayer', value);  
        }
    }
}
</script>