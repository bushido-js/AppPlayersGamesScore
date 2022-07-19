<template>

    <div class="container">
        <div class="row wrapper mt-1">
            <div class="col-5 border  ">
                <div class="row" >
                    <div class="col-6">
                        <strong>Антон</strong>
                        <span class="badge bg-primary rounded-pill">9</span>
                    </div>
                    <div class="col-6 points fitst-player">
                        <div id="p1g1" class="win"></div>
                        <div id="p1g2" class="win loss"></div>
                        <div id="p1g3" class="win"></div>
                    </div>
                </div>
            </div>
            <div class="col-2 position-relative">
            <h3 class="position-absolute top-50 start-50 translate-middle" style="margin: 0;">vs</h3>
            </div>
            <div class="col-5 border">
                <div class="row" >
                    <div class="col-6 points second-player">
                        <div id="p2g1" class="loss"></div>
                        <div id="p2g2" class="win"></div>
                        <div id="p2g3" class="loss"></div>
                    </div>
                    <div class="col-6 name-second-player" >
                        <div>
                            <span class="badge bg-primary rounded-pill">6</span>
                            <strong >Миша</strong>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row wrapper mt-1">
            <div class="col-5 border  ">
                <div class="row" >
                    <div class="col-6">
                        <strong>Антон</strong>
                        <span class="badge bg-primary rounded-pill">10</span>
                    </div>
                    <div class="col-6 points fitst-player">
                        <div id="p1g1" class="loss"></div>
                        <div id="p1g2" class="win"></div>
                        <div id="p1g3" class="loss"></div>
                    </div>
                </div>
            </div>
            <div class="col-2 position-relative">
            <h3 class="position-absolute top-50 start-50 translate-middle" style="margin: 0;">vs</h3>
            </div>
            <div class="col-5 border">
                <div class="row" >
                    <div class="col-6 points second-player">
                        <div id="p2g1" class="win"></div>
                        <div id="p2g2" class="loss"></div>
                        <div id="p2g3" class="win"></div>
                    </div>
                    <div class="col-6 name-second-player" >
                        <div>
                            <span class="badge bg-primary rounded-pill">6</span>
                            <strong >Миша</strong>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="row wrapper mt-1">
            <div class="col-5 border  ">
                <div class="row" >
                    <div class="col-6">
                        <strong>Антон</strong>
                        <span class="badge bg-primary rounded-pill">10</span>
                    </div>
                    <div class="col-6 points fitst-player">
                        <div id="p1g1" class="loss"></div>
                        <div id="p1g2" class="loss"></div>
                        <div id="p1g3" class="loss"></div>
                    </div>
                </div>
            </div>
            <div class="col-2 position-relative">
            <h3 class="position-absolute top-50 start-50 translate-middle" style="margin: 0;">vs</h3>
            </div>
            <div class="col-5 border">
                <div class="row" >
                    <div class="col-6 points second-player">
                        <div id="p2g1" class="win"></div>
                        <div id="p2g2" class="win"></div>
                        <div id="p2g3" class="win"></div>
                    </div>
                    <div class="col-6 name-second-player" >
                        <div>
                            <span class="badge bg-primary rounded-pill">7</span>
                            <strong >Миша</strong>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    

</template>

<script>
export default{

}

</script>

<style scoped>
.points div {
    border: 1px solid rgb(126, 125, 125);
    min-height: 1em;
    min-width: 1em;
    border-radius: 20%;
    /* padding: 0; */
    margin:auto 5px;
}
.points {
    display: flex;
    justify-content: flex-end;
}
.second-player {
    justify-content: flex-start;
}
.name-second-player{
    display: flex;
    justify-content: flex-end;
}
.wrapper {
    border: 1px solid #ced4da;
    padding: 0.5em 1em;
}
.win {
    background-color: #10ed10;
}
.loss {
    background-color: rgb(223, 7, 7);
}
</style>