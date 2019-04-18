<template>
    <div>
        <app-triple></app-triple>
    </div>
</template>

<script>
    import Triple from './Search/TripleCorrelation/Triple.vue'
    export default {
        components : {
            appTriple : Triple
        },
        mounted() {
            this.$store.commit('backShow');
            this.$store.commit('backTab');
            this.$store.commit("changeName",'搜索')
        }
    }
</script>

<style scoped>

</style>