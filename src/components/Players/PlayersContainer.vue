<template>
    <div> 
        <div class="row">
            <div class="">
                <PlayersInput/>
                <div class="row">
                    <div class="col-6">
                        <PlayersList />
                        <!-- передавать players пропсом, поставить слушатель на клик  -->
                    </div>
                    <div class="col-6">
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
    
}
</script>