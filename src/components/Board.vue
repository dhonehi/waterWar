<template>
    <div class="board-wrapper">
        <h3>{{header}}</h3>
        <div class="board__item">
            <div class="line" v-for="(line, lineIndex) in board" :key=lineIndex>
                <div class="cell"
                     v-for="(cell, columnIndex) in line" :key="columnIndex"
                     @click="$set(line, columnIndex, !cell)"
                     :class="{active : line[columnIndex]}">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Board",
        mounted() {
            /* eslint-disable no-unused-vars */
            /*jshint node:true, unused:false */
        },
        data() {
            return {
                board: [
                    [false, false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false, false],
                    [false, false, false, false, false, false, false, false, false, false],
                ],
            }
        },
        props: {
            header: String
        }
    }
</script>

<style scoped lang="scss">

    .line {
        display: flex;
        justify-content: center;
    }

    .cell {
        background-color: white;
        border: 1px solid black;
        width: 50px;
        height: 50px;

        &:hover {
            background-color: grey;
        }

        @media screen and (max-width: 1340px) {
            width: 45px;
            height: 45px;
        }
        @media screen and (max-width: 1190px) {
            width: 40px;
            height: 40px;
        }
        @media screen and (max-width: 1080px) {
            width: 35px;
            height: 35px;
        }
    }

    .active {
        background-color: grey;
    }

</style>