<template>

    <div class="test">
        <h1>I'm test</h1>
        <p>I see | {{ totalTvCount }} | Tvs!</p>
        <p v-show="happyStaff">The staff seems happy!</p>
        <p v-show="!totalTvCount">I can't buy any..</p>
        <button class="btn btn-primary"
            :disabled="!totalTvCount"
            @click="buyTv"
        >
        Buy TV
        </button>
        <button class="btn btn-primary"
            :disabled="totalTvCount < 2"
            @click="buyTwoTvs">
            Buy Two TVs
        </button>
        <button class="btn btn-warning"
            :disabled="!totalTvCount"
            @click="addOneTv">
            Add One TV
        </button>
        <button class="btn btn-warning"
            :disabled="totalTvCount < 2"
            @click="addTwoTv">
            Add Two TV
        </button>
    </div>

</template>
<script>
    import { mapState, mapGetters, mapActions } from "vuex";
    export default{
        name: 'TestField',
        computed:{
            ...mapState(['totalTvCount']),
            happyStaff() {
                return this.$store.getters.happyStuff
            }
        },
        methods:{
            ...mapActions(['firstDoWithTv']),
            ...mapActions(['secondDoWithTv']),
            buyTv(){
                this.firstDoWithTv(1)
            },
            buyTwoTvs(){
                this.firstDoWithTv(2)
            },
            addOneTv(){
                this.secondDoWithTv(1)
            },
            addTwoTv(){
                this.secondDoWithTv(2)
            }
        }
    }
</script>
<style>

</style>