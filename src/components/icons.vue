<template>
    <div id="icons" class="icn">
        <a v-for="item in ic.icns" :key="item.id" :href="item.p">
            <i :class="item.c"/></a>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'Icons',
    props: {
        ic: Object,
    },
    components: {

    },
})
export default class Icn extends Vue {

}
</script>

<style scoped lang="scss">

</style>
