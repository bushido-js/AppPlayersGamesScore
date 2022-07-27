<template>

    <div class="col-5">
        <select id="selectOne" @change="sendSelect" v-model="selected" class="form-select">
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
    data () {
        return {
            selected: ''
        }
    },
    props: {
        'players': Array,
    },
    methods: {
        sendSelect () {
            this.$emit('sendSelect', this.selected)
        }
    }
}

</script>