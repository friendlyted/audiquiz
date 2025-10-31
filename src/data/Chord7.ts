import Interval from "./Interval.ts";

export default class Chord7 {
    public static readonly MMm7 = new Chord7(Interval.M3, Interval.M3, Interval.m3);
    public static readonly MMm65 = new Chord7(Interval.M3, Interval.m3, Interval.m2);
    public static readonly MMm43 = new Chord7(Interval.m3, Interval.m2, Interval.M3);
    public static readonly MMm2 = new Chord7(Interval.m2, Interval.M3, Interval.M3);

    public static readonly MmM7 = new Chord7(Interval.M3, Interval.m3, Interval.M3);
    public static readonly MmM65 = new Chord7(Interval.m3, Interval.M3, Interval.m2);
    public static readonly MmM43 = new Chord7(Interval.M3, Interval.m2, Interval.M3);
    public static readonly MmM2 = new Chord7(Interval.m2, Interval.M3, Interval.m3);

    public static readonly Mmm7 = new Chord7(Interval.M3, Interval.m3, Interval.m3);
    public static readonly Mmm65 = new Chord7(Interval.m3, Interval.m3, Interval.M2);
    public static readonly Mmm43 = new Chord7(Interval.m3, Interval.M2, Interval.M3);
    public static readonly Mmm2 = new Chord7(Interval.M2, Interval.M3, Interval.m3);

    public static readonly mMM7 = new Chord7(Interval.m3, Interval.M3, Interval.M3);
    public static readonly mMM65 = new Chord7(Interval.M3, Interval.M3, Interval.m2);
    public static readonly mMM43 = new Chord7(Interval.M3, Interval.m2, Interval.m3);
    public static readonly mMM2 = new Chord7(Interval.m2, Interval.m3, Interval.M3);

    public static readonly mMm7 = new Chord7(Interval.m3, Interval.M3, Interval.m3);
    public static readonly mMm65 = new Chord7(Interval.M3, Interval.m3, Interval.M2);
    public static readonly mMm43 = new Chord7(Interval.m3, Interval.M2, Interval.m3);
    public static readonly mMm2 = new Chord7(Interval.M2, Interval.m3, Interval.M3);

    public static readonly mmM7 = new Chord7(Interval.m3, Interval.m3, Interval.M3);
    public static readonly mmM65 = new Chord7(Interval.m3, Interval.M3, Interval.M2);
    public static readonly mmM43 = new Chord7(Interval.M3, Interval.M2, Interval.m3);
    public static readonly mmM2 = new Chord7(Interval.M2, Interval.m3, Interval.m3);

    public static readonly mmm7 = new Chord7(Interval.m3, Interval.m3, Interval.m3);

    public static readonly M53f = new Chord7(Interval.M3, Interval.m3, Interval.p4);
    public static readonly m53f = new Chord7(Interval.m3, Interval.M3, Interval.p4);
    public static readonly M6f = new Chord7(Interval.m3, Interval.p4, Interval.M3);
    public static readonly m6f = new Chord7(Interval.M3, Interval.p4, Interval.m3)

    public readonly lowerInterval: Interval;
    public readonly middleInterval: Interval;
    public readonly upperInterval: Interval;

    constructor(
        lowerInterval: Interval,
        middleInterval: Interval,
        upperInterval: Interval
    ) {
        this.lowerInterval = lowerInterval
        this.middleInterval = middleInterval
        this.upperInterval = upperInterval
    }

}