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
                <div class="row">
                    <div class="col-2"><span class="badge bg-primary rounded-pill">4</span></div>
                    <div class="col-10"><strong>Win Rounds</strong></div>
                </div>
                <div class="row">
                    <div class="col-2"><span class="badge bg-danger rounded-pill">2</span></div>
                    <div class="col-10"><strong>Loss Rounds</strong></div>
                </div>
                <div class="row">
                    <div class="col-2"><span class="badge bg-warning rounded-pill">0</span></div>
                    <div class="col-10">   <strong>Win Game</strong></div>
                </div>
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