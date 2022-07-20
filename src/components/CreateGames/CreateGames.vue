<template>

    <div>
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-5">
                        <select id="selectOne" @change="filterArr" v-model="firstSelected" class="form-select">
                            <option v-for="player in players" >
                                {{player.id}}.
                                {{player.name}}
                                {{player.win}}
                                /
                                {{player.loss}}
                                |
                                {{player.wGames}}
                            </option>
                        </select>
                     </div>
                    
                    <div class="col-2 position-relative">
                        <h2 class="position-absolute top-50 start-50 translate-middle">vs</h2>
                    </div>

                     <div class="col-5">
                        <select id="selectTwo" v-model="secondSelected" class="form-select">
                            <option v-for="player in arrByID" >
                                {{player.id}}.
                                {{player.name}}
                                {{player.win}}
                                /
                                {{player.loss}}
                                |
                                {{player.wGames}}
                            </option>
                        </select>
                     </div>
                </div>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-primary" >Создать</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: [
        'players'
    ],
    data() {
        return {
            firstSelected: '',
            secondSelected: '', 
            arrByID: []
        }
    },
    methods: {
       filterByID(item) {
            if (item.id == this.firstSelected.split('')[0]){
               return false
            }
            return true
       },
       filterArr() {
        this.arrByID = this.players.filter(this.filterByID)
       }
    }

}
</script>

<style>

</style>