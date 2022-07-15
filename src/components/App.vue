<template>
  <div class="container mt-2" >

    <div class="row">
        <div class="col-6 mb-2">
          <div class="row">
            <div class="col-6">
              <input  class="form-control" placeholder="Добавьте участника" v-model="value">
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-primary" v-on:click="players.push(value),numbers.push(id= id + 1)">Добавить</button>
            </div>
          </div>
        </div>
    </div>

    <div class="row">
      <div class="col-6">
        <ul class="list-group">
          <li class="list-group-item " v-for="(player, index) of players">
            <strong >{{ index + 1 }}</strong>
            <span>{{ player }}</span>
            <span class="badge bg-primary rounded-pill">999</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>   
  export default {
    data () {
      return {
        players: [],
        numbers: [],
        value: '',
      }
    },
    methods: {
      say: function (m) {
        console.log(m);
      }
    }
  }
</script>

<style>

</style> 
