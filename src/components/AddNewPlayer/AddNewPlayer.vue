<template>
    <div> 
        <div class="row">
            <div class="">
                <AddNewPlayerValue 
                    @sendEvent="sendValue"
                />
                <div class="col-6">
                    <AddNewPlayerList 
                        :players="players"
                    />
                </div>
            </div>
            <div class="">
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