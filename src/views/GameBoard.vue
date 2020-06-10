<template>
    <div class="game-board-wrapper">
        <el-container>
            <el-main>
                <el-table :data="users">
                    <el-table-column prop="name" label="Имя">
                    </el-table-column>
                    <el-table-column prop="totalMatches" label="Всего игр">
                    </el-table-column>
                    <el-table-column prop="win" label="Побед">
                    </el-table-column>
                    <el-table-column prop="los" label="Проигрышей">
                    </el-table-column>
                    <el-table-column>
                        <el-button type="primary" plain>Сыграть</el-button>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    //import Board from "../components/Board";

    export default {
        name: "GameBoard",
        components: {

        },
        data() {
            return {
                users: [
                    {name: 'User1', totalMatches: 2, win: 1, los: 1},
                    {name: 'User2', totalMatches: 2, win: 1, los: 1},
                    {name: 'User3', totalMatches: 2, win: 1, los: 1},
                    {name: 'User4', totalMatches: 2, win: 1, los: 1},
                    {name: 'User5', totalMatches: 2, win: 1, los: 1},
                    {name: 'User6', totalMatches: 2, win: 1, los: 1},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .game-board-wrapper {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin-top: 100px;
    }
</style>