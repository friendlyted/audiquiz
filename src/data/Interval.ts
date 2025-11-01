import {MidiChord, MusicPitch, MidiAble} from "./MusicBase.ts";

export default class Interval implements MidiAble {
    public static readonly p1 = new Interval(0, 0);
    public static readonly m2 = new Interval(1, 1);
    public static readonly M2 = new Interval(1, 2);
    public static readonly m3 = new Interval(2, 3);
    public static readonly M3 = new Interval(2, 4);
    public static readonly p4 = new Interval(3, 5);
    public static readonly A4 = new Interval(3, 6);
    public static readonly d5 = new Interval(4, 6);
    public static readonly p5 = new Interval(4, 7);
    public static readonly m6 = new Interval(5, 8);
    public static readonly M6 = new Interval(5, 9);
    public static readonly m7 = new Interval(6, 10);
    public static readonly M7 = new Interval(6, 11);
    public static readonly p8 = new Interval(7, 12);

    public readonly stepCount: number;
    public readonly semitonesCount: number;

    constructor(stepCount: number, semitonesCount: number) {
        this.stepCount = stepCount;
        this.semitonesCount = semitonesCount;
    }

    addTo(base: MusicPitch, toUp = true): MusicPitch {
        const baseMidi = base.midiPitch;
        const targetMidi = baseMidi + this.semitonesCount * (toUp ? 1 : -1);

        const pitches = base.lookupStepPitches(this.stepCount * (toUp ? 1 : -1));
        for (let pitch of pitches) {
            if (pitch.midiPitch === targetMidi) {
                return pitch;
            }
        }
        throw new Error("Out of music scope");
    }

    toMidi(base: MusicPitch): MidiChord {
        const otherPitch = this.addTo(base);
        return new MidiChord(base, otherPitch);
    }
}