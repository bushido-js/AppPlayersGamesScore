<template>
    <div>
        <nav>
            <div class="nav nav-tabs mb-2" >
                <button class="nav-link" @click="currentTab = 'createGame'" :class="[currentTab == 'createGame' ? activeClass : '']" type="button">Создать Игру</button>
                <button class="nav-link" @click="currentTab = 'createTournament'" :class="[currentTab == 'createTournament' ? activeClass : '']" type="button">Создать Турнир</button>
            </div>
        </nav>
        <div class="tab-content">
            <div class="tab-pane" :class="[currentTab == 'createGame' ? showAndActiveClass : '']" v-if="currentTab == 'createGame'">
                <CreateGame 
                    :players="players"
                    :games="games"
                    @createGameButtonClicked="createGameButtonClicked"
                    @sendInfoGame="sendInfoGame"
                />
            </div>
            <div class="tab-pane" :class="[currentTab == 'createTournament' ? showAndActiveClass : '']"  v-if="currentTab == 'createTournament'">
                <CreateTournament
                    :players="players"
                />
            </div>
        </div>
    </div>

</template>

<script>
export default{
    props:{
        'players': Array,
        'games': Array
    },
    data() {
        return {
            currentTab: 'createGame',
            activeClass: 'active',
            showAndActiveClass: 'fade show active'
        }
    },
    components: {
        CreateTournament: () => import('./CreateTournament/CreateTournament.vue'),
        CreateGame: () => import('./CreateGame/CreateGame.vue')
    },
    methods: { 
        sendInfoGame(game, userId) {
            this.$emit('sendInfoGame', game, userId)
        },
        createGameButtonClicked(value1, value2) {
            this.$emit('createGameButtonClicked', value1, value2)
        }
    }
}

</script>
<style scoped>
    .nav button{
        margin-right: 5px;
    }
</style>