import Interval from "./Interval.ts";
import Triad from "./Triad.ts";
import Chord7 from "./Chord7.ts";
import {MidiAble, MidiChord, MusicPitch} from "./MusicBase.ts";

export class ChordSequence {
    private chord1: MidiAble;
    private offset1: Interval = null;
    private offset1DirectionUp = true;
    private _chord2: MidiAble = null;
    private offset2: Interval = null;
    private offset2DirectionUp = true;
    private _chord3: MidiAble = null;

    constructor(chord1: MidiAble) {
        this.chord1 = chord1;
    }

    private chord2(chord: MidiAble, offset: Interval, up) {
        this.offset1 = offset;
        this.offset1DirectionUp = up;
        this._chord2 = chord;
        return this;
    }

    chord2Down(chord: MidiAble, offset: Interval) {
        return this.chord2(chord, offset, false);
    }

    chord2Up(chord: MidiAble, offset: Interval) {
        return this.chord2(chord, offset, true);
    }

    chord3(offset: Interval, direction: boolean, chord: MidiAble) {
        this.offset2 = offset;
        this.offset2DirectionUp = direction;
        this._chord3 = chord;
        return this;
    }

    fromBase(base: MusicPitch): MidiChord[] {
        const chord1 = this.chord1.toMidi(base);
        if (this.offset1 === null) {
            return [chord1];
        }
        const base2 = this.offset1.addTo(base, this.offset1DirectionUp);
        const chord2 = this._chord2.toMidi(base2);
        if (this.offset2 === null) {
            return [chord1, chord2];
        }
        const base3 = this.offset2.addTo(base2, this.offset2DirectionUp);
        const chord3 = this._chord3.toMidi(base3);
        return [chord1, chord2, chord3]
    }
}


export class VariantClass {
    public readonly chords: ChordSequence;
    public readonly shortName: string;
    public readonly description: string;

    constructor(chords: ChordSequence, shortName: string, description: string = "") {
        this.chords = chords;
        this.shortName = shortName;
        this.description = description;
    }
}

function vr(chords: ChordSequence, shortName: string, description: string = "") {
    return new VariantClass(chords, shortName, description)
}

const Variant = Object.freeze({
        interval: {
            $containerName: "Интервалы",
            i1: vr(new ChordSequence(Interval.p1), "ч1", "Чистая прима"),
            i2: {
                $containerName: "Секунда",
                m2: vr(new ChordSequence(Interval.m2), "м2", ""),
                b2: vr(new ChordSequence(Interval.M2), "б2", "")
            },
            i3: {
                $containerName: "Терция",
                m3: vr(new ChordSequence(Interval.m3), "м3", ""),
                b3: vr(new ChordSequence(Interval.M3), "б3", "")
            },
            i4: vr(new ChordSequence(Interval.p4), "ч4", ""),
            i4a:
                {
                    $containerName: "Увеличенная кварта",
                    i4a_dur: vr(
                        new ChordSequence(Interval.A4).chord2Down(Interval.m6, Interval.m2),
                        "ув4 > м6",
                        ""),
                    i4a_durH: vr(
                        new ChordSequence(Interval.A4).chord2Down(Interval.M6, Interval.m2),
                        "ув4 > б6 (мажор)",
                        ""),
                    i4a_moll: vr(
                        new ChordSequence(Interval.A4).chord2Down(Interval.M6, Interval.M2),
                        "ув4 > б6 (минор)",
                        ""),
                }
            ,
            iT: vr(new ChordSequence(Interval.A4), "тритон", ""),
            i5d: {
                $containerName: "Уменьшенная квинта",
                d5_dur: vr(
                    new ChordSequence(Interval.d5).chord2Up(Interval.M3, Interval.m2),
                    "ум5 > б3",
                    ""),
                d5_durH: vr(
                    new ChordSequence(Interval.d5).chord2Up(Interval.m3, Interval.M2),
                    "ум5 > м3",
                    ""),
                d5_moll: vr(
                    new ChordSequence(Interval.d5).chord2Up(Interval.m3, Interval.m2),
                    "ум5 > м3",
                    "")
            },
            i5: vr(new ChordSequence(Interval.p5), "ч5", ""),
            i6: {
                $containerName: "Секста",
                m6: vr(new ChordSequence(Interval.m6), "м6", ""),
                b6: vr(new ChordSequence(Interval.M6), "б6", "")
            },
            i7: {
                $containerName: "Септима",
                m7: vr(new ChordSequence(Interval.m7), "м7", ""),
                b7: vr(new ChordSequence(Interval.M7), "б7", "")
            },
            i8: vr(new ChordSequence(Interval.p8), "ч8", "")
        },
        triad: {
            $containerName: "Трезвучия",
            tm: {
                $containerName: "Минорное",
                m53: vr(new ChordSequence(Triad.m53), "М53", ""),
                m6t: vr(new ChordSequence(Triad.m6t), "М6", ""),
                m64: vr(new ChordSequence(Triad.m64), "М64", "")
            },
            tM: {
                $containerName: "Мажорное",
                M53: vr(new ChordSequence(Triad.M53), "Б53", ""),
                M6t: vr(new ChordSequence(Triad.M6t), "Б6", ""),
                M64: vr(new ChordSequence(Triad.M64), "Б64", "")
            },
            tA: vr(new ChordSequence(Triad.A53), "Ув53", ""),
            td: vr(new ChordSequence(Triad.d53), "Ум53", "")
        },

        chord7_scale: {
            $containerName: "Септаккорды в ладах",
            D7: {
                $containerName: "Доминантовый септаккорд",
                D7_dur: vr(
                    new ChordSequence(Chord7.Mmm7).chord2Up(Interval.M3, Interval.p4),
                    "D7 > T3",
                    ""),
                D7_moll: vr(
                    new ChordSequence(Chord7.Mmm7).chord2Up(Interval.m3, Interval.p4),
                    "D7 > т3",
                    ""),
                D7_inversions:
                    {
                        $containerName: "Обращения доминантового септаккорда",
                        D65_dur: vr(
                            new ChordSequence(Chord7.Mmm65).chord2Up(Triad.M53, Interval.m2),
                            "D65 > Т53",
                            ""),
                        D43_dur: vr(
                            new ChordSequence(Chord7.Mmm43).chord2Down(Chord7.M53f, Interval.M2),
                            "D43 > T53",
                            ""),
                        D2_dur: vr(
                            new ChordSequence(Chord7.Mmm2).chord2Down(Triad.M6t, Interval.m2),
                            "D2 > Т6",
                            ""),
                        D65_moll: vr(
                            new ChordSequence(Chord7.Mmm65).chord2Up(Triad.m53, Interval.m2),
                            "D65 > т53",
                            ""),
                        D43_moll: vr(
                            new ChordSequence(Chord7.Mmm43).chord2Down(Chord7.m53f, Interval.M2),
                            "D43 > т53",
                            ""),
                        D2_moll: vr(
                            new ChordSequence(Chord7.Mmm2).chord2Down(Triad.m6t, Interval.M2),
                            "D2 > т6",
                            ""),
                    }
            }
            ,
            II7: {
                II7D: {
                    II7D_dur_7: [Chord7.mMm7, "II7", 0, Chord7.Mmm43, "D43", -2, Chord7.M53f, "Б53"],
                    II7D_durH_7:
                        [Chord7.mmM7, "II7", 0, Chord7.Mmm43, "D43", -2, Chord7.M53f, "Б53"],
                    II7D_moll_7:
                        [Chord7.mmM7, "II7", 0, Chord7.Mmm43, "D43", -2, Chord7.m53f, "М53"],
                    II7D_inversions:
                        {
                            II7D_dur_65: [Chord7.mMm65, "II65", 0, Chord7.Mmm2, "D2", -1, Triad.M6t, "Б6"],
                            II7D_dur_43:
                                [Chord7.mMm43, "II43", -2, Chord7.Mmm7, "D7", 5, Interval.M3, "б3"],
                            II7D_dur_2:
                                [Chord7.mMm2, "II2", -1, Chord7.Mmm65, "D65", 1, Triad.M53, "Б53"],
                            II7D_durH_65:
                                [Chord7.mmM65, "II65", 0, Chord7.Mmm2, "D2", -1, Triad.M6t, "Б6"],
                            II7D_durH_43:
                                [Chord7.mmM43, "II43", -1, Chord7.Mmm7, "D7", 5, Interval.M3, "б3"],
                            II7D_durH_2:
                                [Chord7.mmM2, "II2", -1, Chord7.Mmm65, "D65", 1, Triad.M53, "Б53"],
                            II7D_moll_65:
                                [Chord7.mmM65, "II65", 0, Chord7.Mmm2, "D2", -2, Triad.m6t, "М6"],
                            II7D_moll_43:
                                [Chord7.mmM43, "II43", -1, Chord7.Mmm7, "D7", 5, Interval.m3, "м3"],
                            II7D_moll_2:
                                [Chord7.mmM2, "II2", -1, Chord7.Mmm65, "D65", 1, Triad.m53, "М53"]
                        }
                }
                ,
                II7T: {
                    II7T_dur_7: [Chord7.mMm7, "II7", 2, Triad.M6t, "T6"],
                    II7T_durH_7:
                        [Chord7.mmM7, "II7", 2, Triad.M6t, "T6"],
                    II7T_moll_7:
                        [Chord7.mmM7, "II7", 1, Triad.m6t, "t6"],
                    II7T_inversions:
                        {
                            II7T_dur_65: [Chord7.mMm65, "II65", -1, Triad.M6t, "T6"],
                            II7T_dur_43:
                                [Chord7.mMm43, "II43", -2, Triad.M64, "T64"],
                            II7T_dur_2:
                                [Chord7.mMm2, "II2", 0, Triad.M53, "T53"],
                            II7T_durH_65:
                                [Chord7.mmM65, "II65", -1, Triad.M6t, "T6"],
                            II7T_durH_43:
                                [Chord7.mmM43, "II43", -1, Triad.M64, "T64"],
                            II7T_durH_2:
                                [Chord7.mmM2, "II2", 0, Triad.M53, "T53"],
                            II7T_moll_65:
                                [Chord7.mmM65, "II65", -2, Triad.m6t, "t6"],
                            II7T_moll_43:
                                [Chord7.mmM43, "II43", -1, Triad.m64, "t64"],
                            II7T_moll_2:
                                [Chord7.mmM2, "II2", 0, Triad.m53, "t53"],
                        }
                }
            }
            ,
            VII7: {
                VII7D: {
                    VII7D_dur_7: [Chord7.mmM7, "МVII7", 0, Chord7.Mmm65, "D65", 1, Triad.M53, "T53"],
                    VII7D_durH_7:
                        [Chord7.mmm7, "УмVII7", 0, Chord7.Mmm65, "D65", 1, Triad.M53, "T53"],
                    VII7D_moll_7:
                        [Chord7.mmm7, "УмVII7", 0, Chord7.Mmm65, "D65", 1, Triad.m53, "t53"],
                    VII7D_inversions:
                        {
                            VII7D_dur_65: [Chord7.mmM65, "МVII65", 0, Chord7.Mmm43, "D43", -2, Chord7.M53f, "Б53"],
                            VII7D_dur_43:
                                [Chord7.mmM43, "МVII43", 0, Chord7.Mmm2, "D2", -1, Triad.M6t, "Б6"],
                            VII7D_dur_2:
                                [Chord7.mmM2, "МVII2", -2, Chord7.Mmm7, "D7", 5, Interval.M3, "Б3"],
                            VII7D_durH_65:
                                [Chord7.mmm7, "УмVII65", 0, Chord7.Mmm43, "D43", -2, Chord7.M53f, "Б53"],
                            VII7D_durH_43:
                                [Chord7.mmm7, "УмVII43", 0, Chord7.Mmm2, "D2", -1, Triad.M6t, "Б6"],
                            VII7D_durH_2:
                                [Chord7.mmm7, "УмVII2", -1, Chord7.Mmm7, "D7", 5, Interval.M3, "Б3"],
                            VII7D_moll_65:
                                [Chord7.mmm7, "УмVII65", 0, Chord7.Mmm43, "D43", -2, Chord7.m53f, "М53"],
                            VII7D_moll_43:
                                [Chord7.mmm7, "УмVII43", 0, Chord7.Mmm2, "D2", -2, Triad.m6t, "М6"],
                            VII7D_moll_2:
                                [Chord7.mmm7, "УмVII2", -1, Chord7.Mmm7, "D7", 5, Interval.m3, "м3"]
                        }
                }
                ,
                VII7T: {
                    VII7T_dur_7: [Chord7.mmM7, "МVII7", 1, Triad.M53, "Б53"],
                    VII7T_durH_7:
                        [Chord7.mmm7, "УмVII7", 1, Triad.M53, "Б53"],
                    VII7T_moll_7:
                        [Chord7.mmm7, "УмVII7", 1, Triad.m53, "М53"],
                    VII7T_inversions:
                        {
                            VII7T_dur_65: [Chord7.mmM65, "МVII65", 2, Triad.M6t, "Б6"],
                            VII7T_dur_43:
                                [Chord7.mmM43, "МVII43", -1, Chord7.M6f, "Б6"],
                            VII7T_dur_2:
                                [Chord7.mmM2, "МVII2", -2, Triad.M64, "Б64"],
                            VII7T_durH_65:
                                [Chord7.mmm7, "УмVII65", 2, Triad.m6t, "Б6"],
                            VII7T_durH_43:
                                [Chord7.mmm7, "УмVII43", -1, Chord7.M6f, "Б6"],
                            VII7T_durH_2:
                                [Chord7.mmm7, "УмVII2", -1, Triad.M64, "Б64"],
                            VII7T_moll_65:
                                [Chord7.mmm7, "УмVII65", 1, Triad.m6t, "М6"],
                            VII7T_moll_43:
                                [Chord7.mmm7, "УмVII43", -2, Chord7.m6f, "М6"],
                            VII7T_moll_2:
                                [Chord7.mmm7, "УмVII2", -1, Triad.m64, "M64"]
                        }
                }
            }
        }
        ,

        chord7: {
            MMm: {
                MMm7: [Chord7.MMm7, "Увел. 7"],
                MMm_inversions:
                    {
                        MMm65: [Chord7.MMm65, "Увел. 65"],
                        MMm43:
                            [Chord7.MMm43, "Увел. 43"],
                        MMm2:
                            [Chord7.MMm2, "Увел. 2"]
                    }
            }
            ,
            MmM: {
                MmM7: [Chord7.MmM7, "Бол. маж. 7"],
                MmM_inversions:
                    {
                        MmM65: [Chord7.MmM65, "Бол. маж. 65"],
                        MmM43:
                            [Chord7.MmM43, "Бол. маж. 43"],
                        MmM2:
                            [Chord7.MmM2, "Бол. маж. 2"]
                    }
            }
            ,
            Mmm: {
                Mmm7: [Chord7.Mmm7, "Мал. маж. 7"],
                Mmm65:
                    [Chord7.Mmm65, "Мал. маж. 65"],
                Mmm43:
                    [Chord7.Mmm43, "Мал. маж. 43"],
                Mmm2:
                    [Chord7.Mmm2, "Мал. маж. 2"]
            }
            ,
            mMM: {
                mMM7: [Chord7.mMM7, "Бол. мин. 7"],
                mMM65:
                    [Chord7.mMM65, "Бол. мин. 65"],
                mMM43:
                    [Chord7.mMM43, "Бол. мин. 43"],
                mMM2:
                    [Chord7.mMM2, "Бол. мин. 2"]
            }
            ,
            mMm: {
                mMm7: [Chord7.mMm7, "Мал. мин. 7"],
                mMm65:
                    [Chord7.mMm65, "Мал. мин. 65"],
                mMm43:
                    [Chord7.mMm43, "Мал. мин. 43"],
                mMm2:
                    [Chord7.mMm2, "Мал. мин. 2"]
            }
            ,
            mmM: {
                mmM7: [Chord7.mmM7, "Малый 7"],
                mmM65:
                    [Chord7.mmM65, "Малый 65"],
                mmM43:
                    [Chord7.mmM43, "Малый 43"],
                mmM2:
                    [Chord7.mmM2, "Малый 2"]
            }
            ,
            mmm: [Chord7.mmm7, "Ум. 7"]
        }
    })
;

export default Variant;
