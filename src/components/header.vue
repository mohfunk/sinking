<template>
    <div class="header">
        <Playback/>
        <Links :rt="rts" />
        <Icons :ic="ics" />
    </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Links from '@/components/links.vue';
import Icons from '@/components/icons.vue';
import Playback from '@/components/playback.vue';
@Component({
    name: 'Header',
    props: {
        rts: Object,
        ics: Object,
    },
    components: {
        Links,
        Icons,
        Playback,
    },
})
export default class Header extends Vue {
}
</script>


