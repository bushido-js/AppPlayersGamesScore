<template>
    <div class="row">
        <div class="col-6 mb-2">
            <div class="row">
                <div class="col-6">
                    <input @keyup.enter="sendEvent"  class="form-control" placeholder="Добавьте участника" v-model="value">
                </div>
                <div class="col-6">
                    <button type="button"  class="btn btn-primary" @click="sendEvent" >Добавить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
        }
    },
    methods: {
        sendEvent() {
            this.$emit('sendEvent', this.value);
            this.clearInput();
        },
        clearInput() {
            this.value = "";
        }  
    },
}
</script>