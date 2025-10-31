import Interval from "./Interval.ts";
import Triad from "./Triad.ts";
import Chord7 from "./Chord7.ts";

const Variant = Object.freeze({
    interval: {
        i1: [Interval.p1, "ч1"],
        i2: {
            m2: [Interval.m2, "м2"],
            b2: [Interval.M2, "б2"]
        },
        i3: {
            m3: [Interval.m3, "м3"],
            b3: [Interval.M3, "б3"]
        },
        i4: [Interval.p4, "ч4"],
        i4a: {
            i4a_dur: [Interval.A4, "ув4", -1, Interval.m6, "м6"],
            i4a_durH: [Interval.A4, "ув4", -1, Interval.M6, "б6"],
            i4a_moll: [Interval.A4, "ув4", -2, Interval.M6, "б6"]
        },
        iT: [Interval.A4, "тритон"],
        i5d: {
            d5_dur: [Interval.d5, "ум5", 1, Interval.M3, "б3"],
            d5_durH: [Interval.d5, "ум5", 2, Interval.m3, "м3"],
            d5_moll: [Interval.d5, "ум5", 1, Interval.m3, "м3"]
        },
        i5: [Interval.p5, "ч5"],
        i6: {
            m6: [Interval.m6, "м6"],
            b6: [Interval.M6, "б6"]
        },
        i7: {
            m7: [Interval.m7, "м7"],
            b7: [Interval.M7, "б7"]
        },
        i8: [Interval.p8, "ч8"]
    },

    triad: {
        tm: {
            m53: [Triad.m53, "М53"],
            m6t: [Triad.m6t, "М6"],
            m64: [Triad.m64, "М64"],
        },
        tM: {
            M53: [Triad.M53, "Б53"],
            M6t: [Triad.M6t, "Б6"],
            M64: [Triad.M64, "Б64"]
        },
        tA: [Triad.A53, "Ув53"],
        td: [Triad.d53, "Ум53"]
    },

    chord7_scale: {
        D7: {
            D7_dur: [Chord7.Mmm7, "D7", 5, Interval.M3, "Т3"],
            D7_moll: [Chord7.Mmm7, "D7", 5, Interval.m3, "т3"],
            D7_inversions: {
                D65_dur: [Chord7.Mmm65, "D65", 1, Triad.M53, "Т53"],
                D43_dur: [Chord7.Mmm43, "D43", -2, Chord7.M53f, "Т53"],
                D2_dur: [Chord7.Mmm2, "D2", -1, Triad.M6t, "Т6"],
                D65_moll: [Chord7.Mmm65, "D65", 1, Triad.m53, "т53"],
                D43_moll: [Chord7.Mmm43, "D43", -2, Chord7.m53f, "т53"],
                D2_moll: [Chord7.Mmm2, "D2", -2, Triad.m6t, "т6"]
            }
        },
        II7: {
            II7D: {
                II7D_dur_7: [Chord7.mMm7, "II7", 0, Chord7.Mmm43, "D43", -2, Chord7.M53f, "Б53"],
                II7D_durH_7: [Chord7.mmM7, "II7", 0, Chord7.Mmm43, "D43", -2, Chord7.M53f, "Б53"],
                II7D_moll_7: [Chord7.mmM7, "II7", 0, Chord7.Mmm43, "D43", -2, Chord7.m53f, "М53"],
                II7D_inversions: {
                    II7D_dur_65: [Chord7.mMm65, "II65", 0, Chord7.Mmm2, "D2", -1, Triad.M6t, "Б6"],
                    II7D_dur_43: [Chord7.mMm43, "II43", -2, Chord7.Mmm7, "D7", 5, Interval.M3, "б3"],
                    II7D_dur_2: [Chord7.mMm2, "II2", -1, Chord7.Mmm65, "D65", 1, Triad.M53, "Б53"],
                    II7D_durH_65: [Chord7.mmM65, "II65", 0, Chord7.Mmm2, "D2", -1, Triad.M6t, "Б6"],
                    II7D_durH_43: [Chord7.mmM43, "II43", -1, Chord7.Mmm7, "D7", 5, Interval.M3, "б3"],
                    II7D_durH_2: [Chord7.mmM2, "II2", -1, Chord7.Mmm65, "D65", 1, Triad.M53, "Б53"],
                    II7D_moll_65: [Chord7.mmM65, "II65", 0, Chord7.Mmm2, "D2", -2, Triad.m6t, "М6"],
                    II7D_moll_43: [Chord7.mmM43, "II43", -1, Chord7.Mmm7, "D7", 5, Interval.m3, "м3"],
                    II7D_moll_2: [Chord7.mmM2, "II2", -1, Chord7.Mmm65, "D65", 1, Triad.m53, "М53"]
                }
            },
            II7T: {
                II7T_dur_7: [Chord7.mMm7, "II7", 2, Triad.M6t, "T6"],
                II7T_durH_7: [Chord7.mmM7, "II7", 2, Triad.M6t, "T6"],
                II7T_moll_7: [Chord7.mmM7, "II7", 1, Triad.m6t, "t6"],
                II7T_inversions: {
                    II7T_dur_65: [Chord7.mMm65, "II65", -1, Triad.M6t, "T6"],
                    II7T_dur_43: [Chord7.mMm43, "II43", -2, Triad.M64, "T64"],
                    II7T_dur_2: [Chord7.mMm2, "II2", 0, Triad.M53, "T53"],
                    II7T_durH_65: [Chord7.mmM65, "II65", -1, Triad.M6t, "T6"],
                    II7T_durH_43: [Chord7.mmM43, "II43", -1, Triad.M64, "T64"],
                    II7T_durH_2: [Chord7.mmM2, "II2", 0, Triad.M53, "T53"],
                    II7T_moll_65: [Chord7.mmM65, "II65", -2, Triad.m6t, "t6"],
                    II7T_moll_43: [Chord7.mmM43, "II43", -1, Triad.m64, "t64"],
                    II7T_moll_2: [Chord7.mmM2, "II2", 0, Triad.m53, "t53"],
                }
            }
        },
        VII7: {
            VII7D: {
                VII7D_dur_7: [Chord7.mmM7, "МVII7", 0, Chord7.Mmm65, "D65", 1, Triad.M53, "T53"],
                VII7D_durH_7: [Chord7.mmm7, "УмVII7", 0, Chord7.Mmm65, "D65", 1, Triad.M53, "T53"],
                VII7D_moll_7: [Chord7.mmm7, "УмVII7", 0, Chord7.Mmm65, "D65", 1, Triad.m53, "t53"],
                VII7D_inversions: {
                    VII7D_dur_65: [Chord7.mmM65, "МVII65", 0, Chord7.Mmm43, "D43", -2, Chord7.M53f, "Б53"],
                    VII7D_dur_43: [Chord7.mmM43, "МVII43", 0, Chord7.Mmm2, "D2", -1, Triad.M6t, "Б6"],
                    VII7D_dur_2: [Chord7.mmM2, "МVII2", -2, Chord7.Mmm7, "D7", 5, Interval.M3, "Б3"],
                    VII7D_durH_65: [Chord7.mmm7, "УмVII65", 0, Chord7.Mmm43, "D43", -2, Chord7.M53f, "Б53"],
                    VII7D_durH_43: [Chord7.mmm7, "УмVII43", 0, Chord7.Mmm2, "D2", -1, Triad.M6t, "Б6"],
                    VII7D_durH_2: [Chord7.mmm7, "УмVII2", -1, Chord7.Mmm7, "D7", 5, Interval.M3, "Б3"],
                    VII7D_moll_65: [Chord7.mmm7, "УмVII65", 0, Chord7.Mmm43, "D43", -2, Chord7.m53f, "М53"],
                    VII7D_moll_43: [Chord7.mmm7, "УмVII43", 0, Chord7.Mmm2, "D2", -2, Triad.m6t, "М6"],
                    VII7D_moll_2: [Chord7.mmm7, "УмVII2", -1, Chord7.Mmm7, "D7", 5, Interval.m3, "м3"]
                }
            },
            VII7T: {
                VII7T_dur_7: [Chord7.mmM7, "МVII7", 1, Triad.M53, "Б53"],
                VII7T_durH_7: [Chord7.mmm7, "УмVII7", 1, Triad.M53, "Б53"],
                VII7T_moll_7: [Chord7.mmm7, "УмVII7", 1, Triad.m53, "М53"],
                VII7T_inversions: {
                    VII7T_dur_65: [Chord7.mmM65, "МVII65", 2, Triad.M6t, "Б6"],
                    VII7T_dur_43: [Chord7.mmM43, "МVII43", -1, Chord7.M6f, "Б6"],
                    VII7T_dur_2: [Chord7.mmM2, "МVII2", -2, Triad.M64, "Б64"],
                    VII7T_durH_65: [Chord7.mmm7, "УмVII65", 2, Triad.m6t, "Б6"],
                    VII7T_durH_43: [Chord7.mmm7, "УмVII43", -1, Chord7.M6f, "Б6"],
                    VII7T_durH_2: [Chord7.mmm7, "УмVII2", -1, Triad.M64, "Б64"],
                    VII7T_moll_65: [Chord7.mmm7, "УмVII65", 1, Triad.m6t, "М6"],
                    VII7T_moll_43: [Chord7.mmm7, "УмVII43", -2, Chord7.m6f, "М6"],
                    VII7T_moll_2: [Chord7.mmm7, "УмVII2", -1, Triad.m64, "M64"]
                }
            }
        }
    },

    chord7: {
        MMm: {
            MMm7: [Chord7.MMm7, "Увел. 7"],
            MMm_inversions: {
                MMm65: [Chord7.MMm65, "Увел. 65"],
                MMm43: [Chord7.MMm43, "Увел. 43"],
                MMm2: [Chord7.MMm2, "Увел. 2"]
            }
        },
        MmM: {
            MmM7: [Chord7.MmM7, "Бол. маж. 7"],
            MmM_inversions: {
                MmM65: [Chord7.MmM65, "Бол. маж. 65"],
                MmM43: [Chord7.MmM43, "Бол. маж. 43"],
                MmM2: [Chord7.MmM2, "Бол. маж. 2"]
            }
        },
        Mmm: {
            Mmm7: [Chord7.Mmm7, "Мал. маж. 7"],
            Mmm65: [Chord7.Mmm65, "Мал. маж. 65"],
            Mmm43: [Chord7.Mmm43, "Мал. маж. 43"],
            Mmm2: [Chord7.Mmm2, "Мал. маж. 2"]
        },
        mMM: {
            mMM7: [Chord7.mMM7, "Бол. мин. 7"],
            mMM65: [Chord7.mMM65, "Бол. мин. 65"],
            mMM43: [Chord7.mMM43, "Бол. мин. 43"],
            mMM2: [Chord7.mMM2, "Бол. мин. 2"]
        },
        mMm: {
            mMm7: [Chord7.mMm7, "Мал. мин. 7"],
            mMm65: [Chord7.mMm65, "Мал. мин. 65"],
            mMm43: [Chord7.mMm43, "Мал. мин. 43"],
            mMm2: [Chord7.mMm2, "Мал. мин. 2"]
        },
        mmM: {
            mmM7: [Chord7.mmM7, "Малый 7"],
            mmM65: [Chord7.mmM65, "Малый 65"],
            mmM43: [Chord7.mmM43, "Малый 43"],
            mmM2: [Chord7.mmM2, "Малый 2"]
        },
        mmm: [Chord7.mmm7, "Ум. 7"]
    }
});

export default Variant;
