<template>
    <div id="main-page">
        Welcome to the default page.
    </div>
</template>

<script>
export default {
    name: 'mainpage',
    components: {},
    data: function() {
        return {};
    }
}
</script>

<style lang="scss">
@import "../assets/globals.scss";

#main-page {
    color: $ui-color-main;
}

a:link {
    color: black;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
</style>
