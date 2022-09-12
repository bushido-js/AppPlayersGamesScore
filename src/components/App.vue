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
        ...mapActions(['createPlayer']),
        createMockData() {
            this.createPlayer("Олег");
            this.createPlayer("Влег");
            this.createPlayer("Влад");
            this.createPlayer("Миша");
            this.createPlayer("Шиша");
        },
    }
}
</script>
