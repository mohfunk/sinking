<template>
  <div id="foot" class="footer">
    <p>
      Developed by
      <a href="https://github.com/mohfunk">mohfunk</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "Footer",
})
export default class Footer extends Vue {}
</script>
