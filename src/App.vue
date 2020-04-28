<template>
    <div id="app">
        <Header :ics="ic" :rts="rt"/>
            <div id="content" class="content">
                <transition name="fade" mode="out-in">
                <router-view/>
                </transition>
            </div>
            <Footer/>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/header.vue';
import Footer from '@/components/Footer.vue';
@Component({
    components: {
        Header,
        Footer,
    },
})
export default class App extends Vue {
    public data() {
        return {
            rt: require('./assets/json/rt.json'),
            ic: require('./assets/json/ic2.json'),
        };
    }
}
</script>

<style lang="sass">
@import 'assets/sass/main.sass'
@import 'assets/sass/header.sass'
@import 'assets/sass/cont.sass'
@import 'assets/sass/footer.sass'
</style>
