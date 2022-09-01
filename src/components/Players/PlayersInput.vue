<template>
    <div class="row mb-2">
        <div class="col-6">
            <form @submit.prevent="submit">
                <div class="row">
                    <div class="col-6">
                        <input class="form-control" placeholder="Добавьте участника" v-model="value">
                    </div>
                    <div class="col-6">
                        <button type="button"  class="btn btn-primary" @click="submit">Добавить</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            value: "",
        }
    },
    methods: {
        ...mapActions(['createPlayerObject']),
        submit() {
            this.createPlayerObject(this.value)
            this.clearInput();
        },
        clearInput() {
            this.value = "";
        }  
    },
}
</script>