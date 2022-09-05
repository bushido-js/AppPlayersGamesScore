<template>
    <div class="container mt-2">
        <PlayersContainer/>
        <hr size="5" class="col-6">
        <TabsContainer/>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    components: {
        TabsContainer:() => import('./Tabs/TabsContainer.vue'),
        PlayersContainer:() => import('./Players/PlayersContainer.vue'),
    },
    mounted() {
        this.createMockData();
    },
    methods: {
        ...mapActions(['createPlayerObject']),
        createMockData() {
            this.createPlayerObject("Олег");
            this.createPlayerObject("Влег");
            this.createPlayerObject("Влад");
            this.createPlayerObject("Миша");
            this.createPlayerObject("Шиша");
        },
    }
}
</script>

<style>
body {
    background-color: gray;
}
</style> 
