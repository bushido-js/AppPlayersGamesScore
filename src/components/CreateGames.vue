<template>

    <div>
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-5">
                        <select v-model="firstSelected" class="form-select">
                            <option v-for="firstOption in firstOptions" >
                                {{ firstOption.text }}
                            </option>
                        </select>
                     </div>
                    
                    <div class="col-2 position-relative">
                        <h2 class="position-absolute top-50 start-50 translate-middle">vs</h2>
                    </div>

                     <div class="col-5">
                        <select v-model="secondSelected" class="form-select">
                            <option v-for="secondOption in secondOptions" >
                                {{ secondOption.text }}
                            </option>
                        </select>
                     </div>
                </div>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-primary">Создать</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            firstSelected: '',
            secondSelected: '', 
            firstOptions: [
                {text: 'Антон', value: '1'},
                {text: 'Влад', value: '2'},
                {text: 'Миша', value: '3'}
            ],
            secondOptions: [
                {text: 'Илья', value: '3'},
                {text: 'Дима', value: '3'}
                
            ],
        }
    }

}
    function getSecondOptions (array) {
        
}
</script>

<style>

</style>