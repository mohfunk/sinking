<template>
    <div class="Disco">

        <Container class="square" :rts="[
                            {
                                id: '0',
                                t: 'Statues Of Sinking Men',
                                d: 'Debut Album',
                                p: 'https://statuesofsinkingmen.bandcamp.com/album/statues-of-sinking-men',
                                date: 'Dec 21st',
                                img: './assets/img/0.png',
                            },
                            {
                             
                                id: '1', 
                                t: 'Sinking', 
                                d: 'Single',
                                p: 'https://statuesofsinkingmen.bandcamp.com/track/sinking',
                                date: 'Aug 24th',
                                img: './assets/img/1.png',
                            },
                            {
                                id: '2',
                                t: 'Burial Day',
                                d: 'Single',
                                p: 'https://statuesofsinkingmen.bandcamp.com/track/burial-day',
                                date: 'Sep 28th',
                                img: './assets/img/2.png',
                            },
                            {
                                id: '3',
                                t: 'Criminal',
                                d: 'Single',
                                p: 'https://statuesofsinkingmen.bandcamp.com/track/criminal',
                                date: 'Nov 4th',
                                img: './assets/img/3.png',
                            }
                            ]"/>
        
        <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Container from '@/components/container.vue';
@Component({
    name: 'Releases',
    components: {
        Container
    },
})
export default class Releases extends Vue {}
</script>
