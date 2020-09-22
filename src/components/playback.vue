<template>
  <div class="pb">
    <button @click="vis">
      <i class="fas fa-music" />
    </button>
    <button @click="prev">
      <i class="fas fa-backward" />
    </button>
    <button @click="pause">
      <i class="fas" v-bind:class="pbbutton" />
    </button>
    <button @click="next">
      <i class="fas fa-forward" />
    </button>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { Component, Vue } from "vue-property-decorator";
//@ts-ignore
import Playback from "../vis/playback";
@Component({
  name: "Playback",
  props: {},
  components: {},
})
export default class PlayCont extends Vue {
  public data() {
    return {
      mp5: null,
      pback: null,
      playing: true,
      pbbutton: "fa-play",
    };
  }
  public mounted() {
    let pb: Playback;
    //@ts-ignore
    let fft: p5.FFT;
    //@ts-ignore
    let amp: p5.Amplitude;
    let spc: any;
    let oct: any;
    let avg: any;

    const sketch = (p: p5) => {
      p.setup = () => {
        const cnv = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        //@ts-ignore
        cnv.class("canvas");
        //@ts-ignore
        cnv.style("z-index", "-50");
        //@ts-ignore
        cnv.style("position", "absolute");
        //@ts-ignore
        cnv.style("top", "0");
        //@ts-ignore
        cnv.style("left", "0");
        //@ts-ignore
        pb = new Playback(p);
        //@ts-ignore
        fft = new p5.FFT();
        //@ts-ignore
        this.pback = pb;
        p.frameRate(24);
      };
      p.draw = () => {
        const frame = 180;
        const time: number = p.frameCount / frame;
        p.background(10, 10, 17);
        spc = fft.analyze();
        oct = fft.getOctaveBands(128, 120);
        avg = fft.logAverages(oct);
        for (let i = 0; i < avg.length; ++i) {
          // eslint-disable-next-line no-var
          var alpha: number;
          const scal: number = (i * i) / 10000;
          p.noStroke();
          const r = Math.random();

          p.fill(
            avg[i] * avg[i] * 0.002,
            avg[i] * 0.001,
            avg[i] * avg[i] * 0.004,
            avg[i] + scal * 0.05
          );

          p.rect(
            i * 3 - p.width / 2,
            p.height,
            1 * (i * 0.05 * (avg[i] * 0.05)),
            -p.height * 2
          );
        }
      };
      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };
    //@ts-ignore
    this.mp5 = new p5(sketch);
  }
  pause() {
    //@ts-ignore
    this.pback.pause();
    //@ts-ignore
    if (this.playing) {
      //@ts-ignore
      this.playing = false;
      //@ts-ignore
      this.pbbutton = "fa-pause";
    } else {
      //@ts-ignore
      this.playing = true;
      //@ts-ignore
      this.pbbutton = "fa-play";
    }
  }
  next() {
    //@ts-ignore
    this.pback.next();
  }
  prev() {
    //@ts-ignore
    this.pback.prev();
  }
  vis() {
    ["navbad", "icons", "content", "foot"]
      .map((id: string) => document.getElementById(id))
      .forEach((elem: HTMLElement | null) =>
        elem
          ? (elem.style.visibility =
              elem.style.visibility === "hidden" ? "visible" : "hidden")
          : {}
      );
  }
}
</script>

<style scoped lang="sass">
button
    background: transparent
    border: none
    i
        color: #fff
canvas
    width: 100%
    height: 100%
    z-index: -50
    position: absolute
    top: 0
    left: 0
</style>
