<template>
    <div> 
        <AddNewPlayerValue 
            @sendEvent="sendValue"
        />
        
        <AddNewPlayerList 
            :players="players"
        />
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