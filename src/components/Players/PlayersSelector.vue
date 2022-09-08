<template>

    <div class="col-5">
        <select id="selectOne" @change="sendSelect(selected)" v-model="selected" class="form-select">
            <option value='' disabled selected>Выберите игрока</option>
            <option v-for="player of players" :value="player.id">
                {{player.id}}.
                {{player.name}}
                {{player.winRound}}
                /
                {{player.lossRound}}
                |
                {{player.winGame}}
            </option>
        </select>
    </div>

</template>

<script>
export default {
    computed:{
        players () {
            return this.$store.state.players
        }
    },
    data () {
        return {
            selected: '',
        }
    },
    methods: {
        sendSelect (userId) {
            const selectedPlayerObject = this.players.find(player => player.id === userId)
            this.$emit('sendSelect', selectedPlayerObject);
        }
    }
}

</script>