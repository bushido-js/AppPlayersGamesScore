<template>

    <div class="col-5">
        <select id="selectOne" @change="sendSelect" v-model="selected" class="form-select">
            <option value="" disabled selected>Выберите игрока</option>
            <option v-for="player in players" :value="player.id">
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
            selected: ''
        }
    },
    methods: {
        sendSelect () {
            this.$emit('sendSelect', this.selected)
        }
    }
}

</script>