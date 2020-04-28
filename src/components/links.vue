<template>
    <div id="navbar" class="header">
        <div class="rt">
            <router-link v-for="item in rt.rts" :key="item.id"
                         :to="item.p"
                         >{{item.t}}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
    name: 'Links',
    props: {
        rt: Object,
    },
})
export default class Links extends Vue {
}
</script>
