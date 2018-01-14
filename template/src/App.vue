<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'app',
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "./assets/globals.scss";

body {
    margin: 0px;
    padding: 0px;
    background-color: $ui-color-bg;
}

#app {
    /*font-family: 'Raleway', sans-serif;*/
}
</style>
