<template>

</template>

<script>

    export default {
        setup() {
            function queryURLParams() {
                const a = new URLSearchParams("http://124.220.209.244:8004/card/7")
                const params = Object.fromEntries(URLSearchParams.entries);
                return params
            }
            console.log(queryURLParams())
        }
    }
</script>

<style>

</style>