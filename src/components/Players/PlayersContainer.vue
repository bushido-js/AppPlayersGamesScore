<template>
    <div> 
        <div class="row">
            <div class="">
                <PlayersInput
                    @sendEvent="sendValue"
                />
                <div class="row">
                    <div class="col-6">
                        <PlayersList/>
                    </div>
                    <div class="">
                        <!-- <GamePointsInfo /> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
        GamePointsInfo: () => import('./GamePointsInfo.vue'),
        PlayersInput: () => import('./PlayersInput.vue'),
        PlayersList: () => import('./PlayersList.vue')
    }, 
    methods: {
        sendValue (value) {
            this.$emit('addNewPlayer', value);  
        }
    }
}
</script>