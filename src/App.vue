<template>
    <div id="app">
        <SideBar/>
        <router-view />
    </div>
</template>

<style>
    body {
        margin: 0;
    }

    #app {
        display: flex;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>

<script>
    import SideBar from "./components/SideBar";

    export default {
        components: {
            SideBar
        }
    }
</script>
