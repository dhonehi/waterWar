<template>
    <el-menu
            :class="{sidebar__collapse : isCollapse}"
            :collapse="isCollapse"
            :router="true"
            default-active="profile"
            class="el-menu-vertical"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="profile">
            <i class="el-icon-user"></i>
            <span>Профиль</span>
        </el-menu-item>
        <el-menu-item index="game">
            <i class="el-icon-video-play"></i>
            <span>Начать игру</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "SideBar",
        mounted() {
            window.addEventListener('resize', this.resize)
        },
        data() {
            return {
                isCollapse: false
            }
        },
        methods: {
            resize: function () {
                this.isCollapse = window.innerWidth < 980;
            }
        }
    }
</script>

<style scoped lang="scss">
    .el-menu-vertical {
        min-width: 200px;
        height: 100vh;
    }

    .sidebar__collapse {
        min-width: 60px;
    }

</style>