import Interval from "./Interval.ts";
import {MidiChord, MidiAble, MusicPitch} from "./MusicBase.ts";

export default class Triad implements MidiAble {
    public static readonly M53 = new Triad(Interval.M3, Interval.m3);
    public static readonly M6t = new Triad(Interval.m3, Interval.p4);
    public static readonly M64 = new Triad(Interval.p4, Interval.M3);
    public static readonly m53 = new Triad(Interval.m3, Interval.M3);
    public static readonly m6t = new Triad(Interval.M3, Interval.p4);
    public static readonly m64 = new Triad(Interval.p4, Interval.m3);
    public static readonly d53 = new Triad(Interval.m3, Interval.m3);
    public static readonly A53 = new Triad(Interval.M3, Interval.M3);

    public readonly lowerInterval: Interval;
    public readonly upperInterval: Interval;

    constructor(
        lowerInterval: Interval,
        upperInterval: Interval
    ) {
        this.lowerInterval = lowerInterval
        this.upperInterval = upperInterval
    }

    toMidi(base: MusicPitch): MidiChord {
        const pitch3 = this.lowerInterval.addTo(base);
        const pitch5 = this.upperInterval.addTo(pitch3);
        return new MidiChord(base, pitch3, pitch5);
    }
}