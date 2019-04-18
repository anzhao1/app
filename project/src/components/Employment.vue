<template>
    <div>
        <emplcontent></emplcontent>
    </div>
</template>

<script>
import emplcontent from "./Employment/EmplContent"
    export default {
        components : {
            emplcontent
        },
        mounted() {
            this.$store.commit('backShow');
            this.$store.commit('backTab');
            this.$store.commit("changeName",'就业')
        }
    }
</script>

<style scoped>

</style>