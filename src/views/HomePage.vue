<template>
    <div>
        <h2>Home page</h2>
        <div>
            <div class="line" v-for="(line, lineIndex) in board" :key=lineIndex>
                <div class="cell"
                     v-for="(cell, columnIndex) in line" :key="columnIndex"
                     @click="line[columnIndex]= !line[columnIndex]"
                     :class="{active : line[columnIndex]}">
                </div>
            </div>
            <div id="sh"
                 @click="show">
            </div>
        </div>
        <a href="/list">List</a>
        <div class="block"
             v-for="(element, index) in elements" :key="index"
             @click="element.status = !element.status"
             :class="{ 'active': element.status }">
            Click me!
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
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
                elements: [
                    {id: 1, status: false},
                    {id: 2, status: false},
                    {id: 3, status: false}
                ],
                click: false
            }
        },
        computed: {
            cellClicked: function () {
                console.log(this.clicked)
                if (this.clicked === true) return 'grey'
                else return 'white'
            }
        },
        methods: {
            callCell: function (lineIndex, columnIndex) {
                document.getElementsByClassName('line').item(lineIndex)
                    .getElementsByClassName('cell').item(columnIndex)
                    .style.backgroundColor = 'grey'
            },
            show: function (cell) {
                console.log(cell)
            }
        }
    }
</script>

<style scoped>
    .line {
        display: flex;
        justify-content: center;
    }

    .cell {
        background-color: ghostwhite;
        border: 1px solid black;
        width: 50px;
        height: 50px;
    }

    .cell:hover {
        background-color: grey;
    }

    .block {
        width: 200px;
        height: 200px;
        margin: 5px;
        float: left;
        background-color: lightpink;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Ubuntu', sans-serif;
        color: #272727;
        cursor: pointer;
    }

    .active {
        background-color: lightblue;
        background-image: url('https://es-static.z-dn.net/files/dac/9b9ae481fa3a7cfeebfa6ff4b69e7c88.jpg');
        background-size: contain;
        background-repeat: no-repeat;
        color: #fff;
    }

    #sh {
        background-color: grey;
        width: 30px;
        height: 30px;
    }
</style>