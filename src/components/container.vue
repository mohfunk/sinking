<template>
    <div class="cont">
        <a v-for="item in rts" :key="item.id" :href="item.p">
            <div class="elem" :id="item.id">
                <h1>{{item.t}}</h1>
                <img :src="item.img">
                <h4>{{item.d}}</h4>
                <h6>{{item.date}}</h6>
            </div>
        </a>
    </div>
</template>


<script>
export default {
    name: 'Con',
    props: {
        rts: Array,
        icn: Array
    },
    data() {
        return {
            msg: null
        }
    }
}
</script>
<style lang="sass">
</style>
