/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-inferrable-types */

const burl = './music/';
const smax = 2;
import p5 from 'p5';
import 'p5/lib/addons/p5.sound';

export default class Playback {
    public p: p5;
    public playing: p5.SoundFile;
    public duration: number = 0;
    public pi: number = 0;
    public songs: p5.SoundFile[] = [];
    public urls: string[] = [];
    public vol: number = 0;

    constructor(p: p5) {
        this.p = p;
        for (var i = 0; i < 4; ++i) {
            this.urls[i] = burl;
        }
        this.urls[0] += 'Sinking.mp3';
        this.urls[1] += 'Burial_Day.mp3';
        this.urls[2] += 'Criminal.mp3';
        this.playing = this.preload();


    }

    // Playback Control
    public play(index?: number) {
        if (this.playing.isPlaying()) this.playing.stop();
        if (index !== undefined) this.pi = index;

        this.playing.play();
    }
    public pause = () => this.playing.isPlaying() ? this.playing.pause() : this.playing.play();

    public replay() {
        this.playing.stop();
        this.playing.play();
    }
    public volume(amnt: number) {
        //@ts-ignore
        this.p.masterVolume(amnt);
        this.vol = amnt;
    }
    public forward() {
        this.jump(1);
    }
    public backward() {
        this.jump(-1);
    }
    public mute() {
        //@ts-ignore
        const v: number = this.p.getMasterVolume();
        if (v !== 0) {
            //@ts-ignore
            this.p.masterVolume(0);
            this.vol = v;
        } else {
            //@ts-ignore
            this.p.masterVolume(this.vol);
            this.vol = 0;
        }
    }
    public next = () => this.pi < smax ? this.changeSong(1) : this.changeSong(-2);
    public prev = () => this.pi > 0 ? this.changeSong(-1) : this.changeSong(2);

    private preload(): p5.SoundFile {
        this.songs[0] = (this.p as any).loadSound(this.urls[0]);
        this.songs[1] = (this.p as any).loadSound(this.urls[1]);
        this.songs[2] = (this.p as any).loadSound(this.urls[2]);

        return this.songs[2];
    }
    private jump = (dir: number) => this.playing.jump(this.playing.currentTime() + (10 * dir), this.duration - (10 * dir));

    private changeSong(d: number) {
        this.playing.stop();
        this.playing = this.songs[this.pi + d];
        this.duration = this.playing.duration();
        this.pi = this.pi + d;
        this.play();
    }
}
