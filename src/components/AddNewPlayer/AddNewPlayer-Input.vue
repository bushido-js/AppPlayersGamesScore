<template>

    <div>
        <div class="row">
            <div class="col-6 mb-2">
                <div class="row">
                    <div class="col-6">
                        <input @keyup.enter="sendEvent"  class="form-control" placeholder="Добавьте участника" v-model="value">
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-primary" @click="sendEvent" >Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: [
        'record'
    ],
     data() {
        return {
            value: "",
        }
     },
     methods: {
        sendEvent() {
            console.log('this.value', this.value);
            this.$emit('sendEvent', this.value)
        }
     }
}


</script>