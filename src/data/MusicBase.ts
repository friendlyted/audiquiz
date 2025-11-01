import {MidiPitch} from "./MidiPitch.ts";

enum Accidental {
    DOUBLE_FLAT = -2,
    FLAT = -1,
    NATURAL = 0,
    SHARP = 1,
    DOUBLE_SHARP = 2
}

enum Octave {
    SUB_CONTRA,
    CONTRA,
    GREAT,
    SMALL,
    LINE1,
    LINE2,
    LINE3,
    LINE4,
    LINE5,
    LINE6,
}

enum Pitch {
    C,
    D,
    E,
    F,
    G,
    A,
    B,
}

const PITCH_COUNT = 7;

export interface MidiAble {
    toMidi(base: MusicPitch): MidiChord;
}

export class MidiChord {
    public readonly midi: MidiPitch[] = [];

    constructor(...pitches: MusicPitch[]) {
        this.midi.push(...pitches.map(p => p.midiPitch));
    }
}

export class MusicPitch {
    public static readonly SUB_CONTRA_A_NATURAL = new MusicPitch(Octave.SUB_CONTRA, Pitch.A, Accidental.NATURAL, MidiPitch.PITCH_21);
    public static readonly SUB_CONTRA_A_SHARP = new MusicPitch(Octave.SUB_CONTRA, Pitch.A, Accidental.SHARP, MidiPitch.PITCH_22);
    public static readonly SUB_CONTRA_A_DOUBLE_SHARP = new MusicPitch(Octave.SUB_CONTRA, Pitch.A, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_23);
    public static readonly SUB_CONTRA_B_DOUBLE_FLAT = new MusicPitch(Octave.SUB_CONTRA, Pitch.B, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_21);
    public static readonly SUB_CONTRA_B_FLAT = new MusicPitch(Octave.SUB_CONTRA, Pitch.B, Accidental.FLAT, MidiPitch.PITCH_22);
    public static readonly SUB_CONTRA_B_NATURAL = new MusicPitch(Octave.SUB_CONTRA, Pitch.B, Accidental.NATURAL, MidiPitch.PITCH_23);
    public static readonly SUB_CONTRA_B_SHARP = new MusicPitch(Octave.SUB_CONTRA, Pitch.B, Accidental.SHARP, MidiPitch.PITCH_24);
    public static readonly SUB_CONTRA_B_DOUBLE_SHARP = new MusicPitch(Octave.SUB_CONTRA, Pitch.B, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_25);

    public static readonly CONTRA_C_DOUBLE_FLAT = new MusicPitch(Octave.CONTRA, Pitch.C, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_22);
    public static readonly CONTRA_C_FLAT = new MusicPitch(Octave.CONTRA, Pitch.C, Accidental.FLAT, MidiPitch.PITCH_23);
    public static readonly CONTRA_C_NATURAL = new MusicPitch(Octave.CONTRA, Pitch.C, Accidental.NATURAL, MidiPitch.PITCH_24);
    public static readonly CONTRA_C_SHARP = new MusicPitch(Octave.CONTRA, Pitch.C, Accidental.SHARP, MidiPitch.PITCH_25);
    public static readonly CONTRA_C_DOUBLE_SHARP = new MusicPitch(Octave.CONTRA, Pitch.C, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_26);
    public static readonly CONTRA_D_DOUBLE_FLAT = new MusicPitch(Octave.CONTRA, Pitch.D, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_24);
    public static readonly CONTRA_D_FLAT = new MusicPitch(Octave.CONTRA, Pitch.D, Accidental.FLAT, MidiPitch.PITCH_25);
    public static readonly CONTRA_D_NATURAL = new MusicPitch(Octave.CONTRA, Pitch.D, Accidental.NATURAL, MidiPitch.PITCH_26);
    public static readonly CONTRA_D_SHARP = new MusicPitch(Octave.CONTRA, Pitch.D, Accidental.SHARP, MidiPitch.PITCH_27);
    public static readonly CONTRA_D_DOUBLE_SHARP = new MusicPitch(Octave.CONTRA, Pitch.D, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_28);
    public static readonly CONTRA_E_DOUBLE_FLAT = new MusicPitch(Octave.CONTRA, Pitch.E, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_26);
    public static readonly CONTRA_E_FLAT = new MusicPitch(Octave.CONTRA, Pitch.E, Accidental.FLAT, MidiPitch.PITCH_27);
    public static readonly CONTRA_E_NATURAL = new MusicPitch(Octave.CONTRA, Pitch.E, Accidental.NATURAL, MidiPitch.PITCH_28);
    public static readonly CONTRA_E_SHARP = new MusicPitch(Octave.CONTRA, Pitch.E, Accidental.SHARP, MidiPitch.PITCH_29);
    public static readonly CONTRA_E_DOUBLE_SHARP = new MusicPitch(Octave.CONTRA, Pitch.E, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_30);
    public static readonly CONTRA_F_DOUBLE_FLAT = new MusicPitch(Octave.CONTRA, Pitch.F, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_27);
    public static readonly CONTRA_F_FLAT = new MusicPitch(Octave.CONTRA, Pitch.F, Accidental.FLAT, MidiPitch.PITCH_28);
    public static readonly CONTRA_F_NATURAL = new MusicPitch(Octave.CONTRA, Pitch.F, Accidental.NATURAL, MidiPitch.PITCH_29);
    public static readonly CONTRA_F_SHARP = new MusicPitch(Octave.CONTRA, Pitch.F, Accidental.SHARP, MidiPitch.PITCH_30);
    public static readonly CONTRA_F_DOUBLE_SHARP = new MusicPitch(Octave.CONTRA, Pitch.F, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_31);
    public static readonly CONTRA_G_DOUBLE_FLAT = new MusicPitch(Octave.CONTRA, Pitch.G, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_29);
    public static readonly CONTRA_G_FLAT = new MusicPitch(Octave.CONTRA, Pitch.G, Accidental.FLAT, MidiPitch.PITCH_30);
    public static readonly CONTRA_G_NATURAL = new MusicPitch(Octave.CONTRA, Pitch.G, Accidental.NATURAL, MidiPitch.PITCH_31);
    public static readonly CONTRA_G_SHARP = new MusicPitch(Octave.CONTRA, Pitch.G, Accidental.SHARP, MidiPitch.PITCH_32);
    public static readonly CONTRA_G_DOUBLE_SHARP = new MusicPitch(Octave.CONTRA, Pitch.G, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_33);
    public static readonly CONTRA_A_DOUBLE_FLAT = new MusicPitch(Octave.CONTRA, Pitch.A, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_31);
    public static readonly CONTRA_A_FLAT = new MusicPitch(Octave.CONTRA, Pitch.A, Accidental.FLAT, MidiPitch.PITCH_32);
    public static readonly CONTRA_A_NATURAL = new MusicPitch(Octave.CONTRA, Pitch.A, Accidental.NATURAL, MidiPitch.PITCH_33);
    public static readonly CONTRA_A_SHARP = new MusicPitch(Octave.CONTRA, Pitch.A, Accidental.SHARP, MidiPitch.PITCH_34);
    public static readonly CONTRA_A_DOUBLE_SHARP = new MusicPitch(Octave.CONTRA, Pitch.A, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_35);
    public static readonly CONTRA_B_DOUBLE_FLAT = new MusicPitch(Octave.CONTRA, Pitch.B, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_33);
    public static readonly CONTRA_B_FLAT = new MusicPitch(Octave.CONTRA, Pitch.B, Accidental.FLAT, MidiPitch.PITCH_34);
    public static readonly CONTRA_B_NATURAL = new MusicPitch(Octave.CONTRA, Pitch.B, Accidental.NATURAL, MidiPitch.PITCH_35);
    public static readonly CONTRA_B_SHARP = new MusicPitch(Octave.CONTRA, Pitch.B, Accidental.SHARP, MidiPitch.PITCH_36);
    public static readonly CONTRA_B_DOUBLE_SHARP = new MusicPitch(Octave.CONTRA, Pitch.B, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_37);

    public static readonly GREAT_C_DOUBLE_FLAT = new MusicPitch(Octave.GREAT, Pitch.C, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_34);
    public static readonly GREAT_C_FLAT = new MusicPitch(Octave.GREAT, Pitch.C, Accidental.FLAT, MidiPitch.PITCH_35);
    public static readonly GREAT_C_NATURAL = new MusicPitch(Octave.GREAT, Pitch.C, Accidental.NATURAL, MidiPitch.PITCH_36);
    public static readonly GREAT_C_SHARP = new MusicPitch(Octave.GREAT, Pitch.C, Accidental.SHARP, MidiPitch.PITCH_37);
    public static readonly GREAT_C_DOUBLE_SHARP = new MusicPitch(Octave.GREAT, Pitch.C, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_38);
    public static readonly GREAT_D_DOUBLE_FLAT = new MusicPitch(Octave.GREAT, Pitch.D, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_36);
    public static readonly GREAT_D_FLAT = new MusicPitch(Octave.GREAT, Pitch.D, Accidental.FLAT, MidiPitch.PITCH_37);
    public static readonly GREAT_D_NATURAL = new MusicPitch(Octave.GREAT, Pitch.D, Accidental.NATURAL, MidiPitch.PITCH_38);
    public static readonly GREAT_D_SHARP = new MusicPitch(Octave.GREAT, Pitch.D, Accidental.SHARP, MidiPitch.PITCH_39);
    public static readonly GREAT_D_DOUBLE_SHARP = new MusicPitch(Octave.GREAT, Pitch.D, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_40);
    public static readonly GREAT_E_DOUBLE_FLAT = new MusicPitch(Octave.GREAT, Pitch.E, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_38);
    public static readonly GREAT_E_FLAT = new MusicPitch(Octave.GREAT, Pitch.E, Accidental.FLAT, MidiPitch.PITCH_39);
    public static readonly GREAT_E_NATURAL = new MusicPitch(Octave.GREAT, Pitch.E, Accidental.NATURAL, MidiPitch.PITCH_40);
    public static readonly GREAT_E_SHARP = new MusicPitch(Octave.GREAT, Pitch.E, Accidental.SHARP, MidiPitch.PITCH_41);
    public static readonly GREAT_E_DOUBLE_SHARP = new MusicPitch(Octave.GREAT, Pitch.E, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_42);
    public static readonly GREAT_F_DOUBLE_FLAT = new MusicPitch(Octave.GREAT, Pitch.F, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_39);
    public static readonly GREAT_F_FLAT = new MusicPitch(Octave.GREAT, Pitch.F, Accidental.FLAT, MidiPitch.PITCH_40);
    public static readonly GREAT_F_NATURAL = new MusicPitch(Octave.GREAT, Pitch.F, Accidental.NATURAL, MidiPitch.PITCH_41);
    public static readonly GREAT_F_SHARP = new MusicPitch(Octave.GREAT, Pitch.F, Accidental.SHARP, MidiPitch.PITCH_42);
    public static readonly GREAT_F_DOUBLE_SHARP = new MusicPitch(Octave.GREAT, Pitch.F, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_43);
    public static readonly GREAT_G_DOUBLE_FLAT = new MusicPitch(Octave.GREAT, Pitch.G, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_41);
    public static readonly GREAT_G_FLAT = new MusicPitch(Octave.GREAT, Pitch.G, Accidental.FLAT, MidiPitch.PITCH_42);
    public static readonly GREAT_G_NATURAL = new MusicPitch(Octave.GREAT, Pitch.G, Accidental.NATURAL, MidiPitch.PITCH_43);
    public static readonly GREAT_G_SHARP = new MusicPitch(Octave.GREAT, Pitch.G, Accidental.SHARP, MidiPitch.PITCH_44);
    public static readonly GREAT_G_DOUBLE_SHARP = new MusicPitch(Octave.GREAT, Pitch.G, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_45);
    public static readonly GREAT_A_DOUBLE_FLAT = new MusicPitch(Octave.GREAT, Pitch.A, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_43);
    public static readonly GREAT_A_FLAT = new MusicPitch(Octave.GREAT, Pitch.A, Accidental.FLAT, MidiPitch.PITCH_44);
    public static readonly GREAT_A_NATURAL = new MusicPitch(Octave.GREAT, Pitch.A, Accidental.NATURAL, MidiPitch.PITCH_45);
    public static readonly GREAT_A_SHARP = new MusicPitch(Octave.GREAT, Pitch.A, Accidental.SHARP, MidiPitch.PITCH_46);
    public static readonly GREAT_A_DOUBLE_SHARP = new MusicPitch(Octave.GREAT, Pitch.A, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_47);
    public static readonly GREAT_B_DOUBLE_FLAT = new MusicPitch(Octave.GREAT, Pitch.B, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_45);
    public static readonly GREAT_B_FLAT = new MusicPitch(Octave.GREAT, Pitch.B, Accidental.FLAT, MidiPitch.PITCH_46);
    public static readonly GREAT_B_NATURAL = new MusicPitch(Octave.GREAT, Pitch.B, Accidental.NATURAL, MidiPitch.PITCH_47);
    public static readonly GREAT_B_SHARP = new MusicPitch(Octave.GREAT, Pitch.B, Accidental.SHARP, MidiPitch.PITCH_48);
    public static readonly GREAT_B_DOUBLE_SHARP = new MusicPitch(Octave.GREAT, Pitch.B, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_49);

    public static readonly SMALL_C_DOUBLE_FLAT = new MusicPitch(Octave.SMALL, Pitch.C, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_46);
    public static readonly SMALL_C_FLAT = new MusicPitch(Octave.SMALL, Pitch.C, Accidental.FLAT, MidiPitch.PITCH_47);
    public static readonly SMALL_C_NATURAL = new MusicPitch(Octave.SMALL, Pitch.C, Accidental.NATURAL, MidiPitch.PITCH_48);
    public static readonly SMALL_C_SHARP = new MusicPitch(Octave.SMALL, Pitch.C, Accidental.SHARP, MidiPitch.PITCH_49);
    public static readonly SMALL_C_DOUBLE_SHARP = new MusicPitch(Octave.SMALL, Pitch.C, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_50);
    public static readonly SMALL_D_DOUBLE_FLAT = new MusicPitch(Octave.SMALL, Pitch.D, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_48);
    public static readonly SMALL_D_FLAT = new MusicPitch(Octave.SMALL, Pitch.D, Accidental.FLAT, MidiPitch.PITCH_49);
    public static readonly SMALL_D_NATURAL = new MusicPitch(Octave.SMALL, Pitch.D, Accidental.NATURAL, MidiPitch.PITCH_50);
    public static readonly SMALL_D_SHARP = new MusicPitch(Octave.SMALL, Pitch.D, Accidental.SHARP, MidiPitch.PITCH_51);
    public static readonly SMALL_D_DOUBLE_SHARP = new MusicPitch(Octave.SMALL, Pitch.D, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_52);
    public static readonly SMALL_E_DOUBLE_FLAT = new MusicPitch(Octave.SMALL, Pitch.E, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_50);
    public static readonly SMALL_E_FLAT = new MusicPitch(Octave.SMALL, Pitch.E, Accidental.FLAT, MidiPitch.PITCH_51);
    public static readonly SMALL_E_NATURAL = new MusicPitch(Octave.SMALL, Pitch.E, Accidental.NATURAL, MidiPitch.PITCH_52);
    public static readonly SMALL_E_SHARP = new MusicPitch(Octave.SMALL, Pitch.E, Accidental.SHARP, MidiPitch.PITCH_53);
    public static readonly SMALL_E_DOUBLE_SHARP = new MusicPitch(Octave.SMALL, Pitch.E, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_54);
    public static readonly SMALL_F_DOUBLE_FLAT = new MusicPitch(Octave.SMALL, Pitch.F, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_51);
    public static readonly SMALL_F_FLAT = new MusicPitch(Octave.SMALL, Pitch.F, Accidental.FLAT, MidiPitch.PITCH_52);
    public static readonly SMALL_F_NATURAL = new MusicPitch(Octave.SMALL, Pitch.F, Accidental.NATURAL, MidiPitch.PITCH_53);
    public static readonly SMALL_F_SHARP = new MusicPitch(Octave.SMALL, Pitch.F, Accidental.SHARP, MidiPitch.PITCH_54);
    public static readonly SMALL_F_DOUBLE_SHARP = new MusicPitch(Octave.SMALL, Pitch.F, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_55);
    public static readonly SMALL_G_DOUBLE_FLAT = new MusicPitch(Octave.SMALL, Pitch.G, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_53);
    public static readonly SMALL_G_FLAT = new MusicPitch(Octave.SMALL, Pitch.G, Accidental.FLAT, MidiPitch.PITCH_54);
    public static readonly SMALL_G_NATURAL = new MusicPitch(Octave.SMALL, Pitch.G, Accidental.NATURAL, MidiPitch.PITCH_55);
    public static readonly SMALL_G_SHARP = new MusicPitch(Octave.SMALL, Pitch.G, Accidental.SHARP, MidiPitch.PITCH_56);
    public static readonly SMALL_G_DOUBLE_SHARP = new MusicPitch(Octave.SMALL, Pitch.G, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_57);
    public static readonly SMALL_A_DOUBLE_FLAT = new MusicPitch(Octave.SMALL, Pitch.A, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_55);
    public static readonly SMALL_A_FLAT = new MusicPitch(Octave.SMALL, Pitch.A, Accidental.FLAT, MidiPitch.PITCH_56);
    public static readonly SMALL_A_NATURAL = new MusicPitch(Octave.SMALL, Pitch.A, Accidental.NATURAL, MidiPitch.PITCH_57);
    public static readonly SMALL_A_SHARP = new MusicPitch(Octave.SMALL, Pitch.A, Accidental.SHARP, MidiPitch.PITCH_58);
    public static readonly SMALL_A_DOUBLE_SHARP = new MusicPitch(Octave.SMALL, Pitch.A, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_59);
    public static readonly SMALL_B_DOUBLE_FLAT = new MusicPitch(Octave.SMALL, Pitch.B, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_57);
    public static readonly SMALL_B_FLAT = new MusicPitch(Octave.SMALL, Pitch.B, Accidental.FLAT, MidiPitch.PITCH_58);
    public static readonly SMALL_B_NATURAL = new MusicPitch(Octave.SMALL, Pitch.B, Accidental.NATURAL, MidiPitch.PITCH_59);
    public static readonly SMALL_B_SHARP = new MusicPitch(Octave.SMALL, Pitch.B, Accidental.SHARP, MidiPitch.PITCH_60);
    public static readonly SMALL_B_DOUBLE_SHARP = new MusicPitch(Octave.SMALL, Pitch.B, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_61);

    public static readonly LINE1_C_DOUBLE_FLAT = new MusicPitch(Octave.LINE1, Pitch.C, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_58);
    public static readonly LINE1_C_FLAT = new MusicPitch(Octave.LINE1, Pitch.C, Accidental.FLAT, MidiPitch.PITCH_59);
    public static readonly LINE1_C_NATURAL = new MusicPitch(Octave.LINE1, Pitch.C, Accidental.NATURAL, MidiPitch.PITCH_60);
    public static readonly LINE1_C_SHARP = new MusicPitch(Octave.LINE1, Pitch.C, Accidental.SHARP, MidiPitch.PITCH_61);
    public static readonly LINE1_C_DOUBLE_SHARP = new MusicPitch(Octave.LINE1, Pitch.C, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_62);
    public static readonly LINE1_D_DOUBLE_FLAT = new MusicPitch(Octave.LINE1, Pitch.D, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_60);
    public static readonly LINE1_D_FLAT = new MusicPitch(Octave.LINE1, Pitch.D, Accidental.FLAT, MidiPitch.PITCH_61);
    public static readonly LINE1_D_NATURAL = new MusicPitch(Octave.LINE1, Pitch.D, Accidental.NATURAL, MidiPitch.PITCH_62);
    public static readonly LINE1_D_SHARP = new MusicPitch(Octave.LINE1, Pitch.D, Accidental.SHARP, MidiPitch.PITCH_63);
    public static readonly LINE1_D_DOUBLE_SHARP = new MusicPitch(Octave.LINE1, Pitch.D, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_64);
    public static readonly LINE1_E_DOUBLE_FLAT = new MusicPitch(Octave.LINE1, Pitch.E, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_62);
    public static readonly LINE1_E_FLAT = new MusicPitch(Octave.LINE1, Pitch.E, Accidental.FLAT, MidiPitch.PITCH_63);
    public static readonly LINE1_E_NATURAL = new MusicPitch(Octave.LINE1, Pitch.E, Accidental.NATURAL, MidiPitch.PITCH_64);
    public static readonly LINE1_E_SHARP = new MusicPitch(Octave.LINE1, Pitch.E, Accidental.SHARP, MidiPitch.PITCH_65);
    public static readonly LINE1_E_DOUBLE_SHARP = new MusicPitch(Octave.LINE1, Pitch.E, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_66);
    public static readonly LINE1_F_DOUBLE_FLAT = new MusicPitch(Octave.LINE1, Pitch.F, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_63);
    public static readonly LINE1_F_FLAT = new MusicPitch(Octave.LINE1, Pitch.F, Accidental.FLAT, MidiPitch.PITCH_64);
    public static readonly LINE1_F_NATURAL = new MusicPitch(Octave.LINE1, Pitch.F, Accidental.NATURAL, MidiPitch.PITCH_65);
    public static readonly LINE1_F_SHARP = new MusicPitch(Octave.LINE1, Pitch.F, Accidental.SHARP, MidiPitch.PITCH_66);
    public static readonly LINE1_F_DOUBLE_SHARP = new MusicPitch(Octave.LINE1, Pitch.F, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_67);
    public static readonly LINE1_G_DOUBLE_FLAT = new MusicPitch(Octave.LINE1, Pitch.G, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_65);
    public static readonly LINE1_G_FLAT = new MusicPitch(Octave.LINE1, Pitch.G, Accidental.FLAT, MidiPitch.PITCH_66);
    public static readonly LINE1_G_NATURAL = new MusicPitch(Octave.LINE1, Pitch.G, Accidental.NATURAL, MidiPitch.PITCH_67);
    public static readonly LINE1_G_SHARP = new MusicPitch(Octave.LINE1, Pitch.G, Accidental.SHARP, MidiPitch.PITCH_68);
    public static readonly LINE1_G_DOUBLE_SHARP = new MusicPitch(Octave.LINE1, Pitch.G, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_69);
    public static readonly LINE1_A_DOUBLE_FLAT = new MusicPitch(Octave.LINE1, Pitch.A, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_67);
    public static readonly LINE1_A_FLAT = new MusicPitch(Octave.LINE1, Pitch.A, Accidental.FLAT, MidiPitch.PITCH_68);
    public static readonly LINE1_A_NATURAL = new MusicPitch(Octave.LINE1, Pitch.A, Accidental.NATURAL, MidiPitch.PITCH_69);
    public static readonly LINE1_A_SHARP = new MusicPitch(Octave.LINE1, Pitch.A, Accidental.SHARP, MidiPitch.PITCH_70);
    public static readonly LINE1_A_DOUBLE_SHARP = new MusicPitch(Octave.LINE1, Pitch.A, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_71);
    public static readonly LINE1_B_DOUBLE_FLAT = new MusicPitch(Octave.LINE1, Pitch.B, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_69);
    public static readonly LINE1_B_FLAT = new MusicPitch(Octave.LINE1, Pitch.B, Accidental.FLAT, MidiPitch.PITCH_70);
    public static readonly LINE1_B_NATURAL = new MusicPitch(Octave.LINE1, Pitch.B, Accidental.NATURAL, MidiPitch.PITCH_71);
    public static readonly LINE1_B_SHARP = new MusicPitch(Octave.LINE1, Pitch.B, Accidental.SHARP, MidiPitch.PITCH_72);
    public static readonly LINE1_B_DOUBLE_SHARP = new MusicPitch(Octave.LINE1, Pitch.B, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_73);

    public static readonly LINE2_C_DOUBLE_FLAT = new MusicPitch(Octave.LINE2, Pitch.C, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_70);
    public static readonly LINE2_C_FLAT = new MusicPitch(Octave.LINE2, Pitch.C, Accidental.FLAT, MidiPitch.PITCH_71);
    public static readonly LINE2_C_NATURAL = new MusicPitch(Octave.LINE2, Pitch.C, Accidental.NATURAL, MidiPitch.PITCH_72);
    public static readonly LINE2_C_SHARP = new MusicPitch(Octave.LINE2, Pitch.C, Accidental.SHARP, MidiPitch.PITCH_73);
    public static readonly LINE2_C_DOUBLE_SHARP = new MusicPitch(Octave.LINE2, Pitch.C, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_74);
    public static readonly LINE2_D_DOUBLE_FLAT = new MusicPitch(Octave.LINE2, Pitch.D, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_72);
    public static readonly LINE2_D_FLAT = new MusicPitch(Octave.LINE2, Pitch.D, Accidental.FLAT, MidiPitch.PITCH_73);
    public static readonly LINE2_D_NATURAL = new MusicPitch(Octave.LINE2, Pitch.D, Accidental.NATURAL, MidiPitch.PITCH_74);
    public static readonly LINE2_D_SHARP = new MusicPitch(Octave.LINE2, Pitch.D, Accidental.SHARP, MidiPitch.PITCH_75);
    public static readonly LINE2_D_DOUBLE_SHARP = new MusicPitch(Octave.LINE2, Pitch.D, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_76);
    public static readonly LINE2_E_DOUBLE_FLAT = new MusicPitch(Octave.LINE2, Pitch.E, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_74);
    public static readonly LINE2_E_FLAT = new MusicPitch(Octave.LINE2, Pitch.E, Accidental.FLAT, MidiPitch.PITCH_75);
    public static readonly LINE2_E_NATURAL = new MusicPitch(Octave.LINE2, Pitch.E, Accidental.NATURAL, MidiPitch.PITCH_76);
    public static readonly LINE2_E_SHARP = new MusicPitch(Octave.LINE2, Pitch.E, Accidental.SHARP, MidiPitch.PITCH_77);
    public static readonly LINE2_E_DOUBLE_SHARP = new MusicPitch(Octave.LINE2, Pitch.E, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_78);
    public static readonly LINE2_F_DOUBLE_FLAT = new MusicPitch(Octave.LINE2, Pitch.F, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_75);
    public static readonly LINE2_F_FLAT = new MusicPitch(Octave.LINE2, Pitch.F, Accidental.FLAT, MidiPitch.PITCH_76);
    public static readonly LINE2_F_NATURAL = new MusicPitch(Octave.LINE2, Pitch.F, Accidental.NATURAL, MidiPitch.PITCH_77);
    public static readonly LINE2_F_SHARP = new MusicPitch(Octave.LINE2, Pitch.F, Accidental.SHARP, MidiPitch.PITCH_78);
    public static readonly LINE2_F_DOUBLE_SHARP = new MusicPitch(Octave.LINE2, Pitch.F, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_79);
    public static readonly LINE2_G_DOUBLE_FLAT = new MusicPitch(Octave.LINE2, Pitch.G, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_77);
    public static readonly LINE2_G_FLAT = new MusicPitch(Octave.LINE2, Pitch.G, Accidental.FLAT, MidiPitch.PITCH_78);
    public static readonly LINE2_G_NATURAL = new MusicPitch(Octave.LINE2, Pitch.G, Accidental.NATURAL, MidiPitch.PITCH_79);
    public static readonly LINE2_G_SHARP = new MusicPitch(Octave.LINE2, Pitch.G, Accidental.SHARP, MidiPitch.PITCH_80);
    public static readonly LINE2_G_DOUBLE_SHARP = new MusicPitch(Octave.LINE2, Pitch.G, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_81);
    public static readonly LINE2_A_DOUBLE_FLAT = new MusicPitch(Octave.LINE2, Pitch.A, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_79);
    public static readonly LINE2_A_FLAT = new MusicPitch(Octave.LINE2, Pitch.A, Accidental.FLAT, MidiPitch.PITCH_80);
    public static readonly LINE2_A_NATURAL = new MusicPitch(Octave.LINE2, Pitch.A, Accidental.NATURAL, MidiPitch.PITCH_81);
    public static readonly LINE2_A_SHARP = new MusicPitch(Octave.LINE2, Pitch.A, Accidental.SHARP, MidiPitch.PITCH_82);
    public static readonly LINE2_A_DOUBLE_SHARP = new MusicPitch(Octave.LINE2, Pitch.A, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_83);
    public static readonly LINE2_B_DOUBLE_FLAT = new MusicPitch(Octave.LINE2, Pitch.B, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_81);
    public static readonly LINE2_B_FLAT = new MusicPitch(Octave.LINE2, Pitch.B, Accidental.FLAT, MidiPitch.PITCH_82);
    public static readonly LINE2_B_NATURAL = new MusicPitch(Octave.LINE2, Pitch.B, Accidental.NATURAL, MidiPitch.PITCH_83);
    public static readonly LINE2_B_SHARP = new MusicPitch(Octave.LINE2, Pitch.B, Accidental.SHARP, MidiPitch.PITCH_84);
    public static readonly LINE2_B_DOUBLE_SHARP = new MusicPitch(Octave.LINE2, Pitch.B, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_85);

    public static readonly LINE3_C_DOUBLE_FLAT = new MusicPitch(Octave.LINE3, Pitch.C, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_82);
    public static readonly LINE3_C_FLAT = new MusicPitch(Octave.LINE3, Pitch.C, Accidental.FLAT, MidiPitch.PITCH_83);
    public static readonly LINE3_C_NATURAL = new MusicPitch(Octave.LINE3, Pitch.C, Accidental.NATURAL, MidiPitch.PITCH_84);
    public static readonly LINE3_C_SHARP = new MusicPitch(Octave.LINE3, Pitch.C, Accidental.SHARP, MidiPitch.PITCH_85);
    public static readonly LINE3_C_DOUBLE_SHARP = new MusicPitch(Octave.LINE3, Pitch.C, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_86);
    public static readonly LINE3_D_DOUBLE_FLAT = new MusicPitch(Octave.LINE3, Pitch.D, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_84);
    public static readonly LINE3_D_FLAT = new MusicPitch(Octave.LINE3, Pitch.D, Accidental.FLAT, MidiPitch.PITCH_85);
    public static readonly LINE3_D_NATURAL = new MusicPitch(Octave.LINE3, Pitch.D, Accidental.NATURAL, MidiPitch.PITCH_86);
    public static readonly LINE3_D_SHARP = new MusicPitch(Octave.LINE3, Pitch.D, Accidental.SHARP, MidiPitch.PITCH_87);
    public static readonly LINE3_D_DOUBLE_SHARP = new MusicPitch(Octave.LINE3, Pitch.D, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_88);
    public static readonly LINE3_E_DOUBLE_FLAT = new MusicPitch(Octave.LINE3, Pitch.E, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_86);
    public static readonly LINE3_E_FLAT = new MusicPitch(Octave.LINE3, Pitch.E, Accidental.FLAT, MidiPitch.PITCH_87);
    public static readonly LINE3_E_NATURAL = new MusicPitch(Octave.LINE3, Pitch.E, Accidental.NATURAL, MidiPitch.PITCH_88);
    public static readonly LINE3_E_SHARP = new MusicPitch(Octave.LINE3, Pitch.E, Accidental.SHARP, MidiPitch.PITCH_89);
    public static readonly LINE3_E_DOUBLE_SHARP = new MusicPitch(Octave.LINE3, Pitch.E, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_90);
    public static readonly LINE3_F_DOUBLE_FLAT = new MusicPitch(Octave.LINE3, Pitch.F, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_87);
    public static readonly LINE3_F_FLAT = new MusicPitch(Octave.LINE3, Pitch.F, Accidental.FLAT, MidiPitch.PITCH_88);
    public static readonly LINE3_F_NATURAL = new MusicPitch(Octave.LINE3, Pitch.F, Accidental.NATURAL, MidiPitch.PITCH_89);
    public static readonly LINE3_F_SHARP = new MusicPitch(Octave.LINE3, Pitch.F, Accidental.SHARP, MidiPitch.PITCH_90);
    public static readonly LINE3_F_DOUBLE_SHARP = new MusicPitch(Octave.LINE3, Pitch.F, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_91);
    public static readonly LINE3_G_DOUBLE_FLAT = new MusicPitch(Octave.LINE3, Pitch.G, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_89);
    public static readonly LINE3_G_FLAT = new MusicPitch(Octave.LINE3, Pitch.G, Accidental.FLAT, MidiPitch.PITCH_90);
    public static readonly LINE3_G_NATURAL = new MusicPitch(Octave.LINE3, Pitch.G, Accidental.NATURAL, MidiPitch.PITCH_91);
    public static readonly LINE3_G_SHARP = new MusicPitch(Octave.LINE3, Pitch.G, Accidental.SHARP, MidiPitch.PITCH_92);
    public static readonly LINE3_G_DOUBLE_SHARP = new MusicPitch(Octave.LINE3, Pitch.G, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_93);
    public static readonly LINE3_A_DOUBLE_FLAT = new MusicPitch(Octave.LINE3, Pitch.A, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_91);
    public static readonly LINE3_A_FLAT = new MusicPitch(Octave.LINE3, Pitch.A, Accidental.FLAT, MidiPitch.PITCH_92);
    public static readonly LINE3_A_NATURAL = new MusicPitch(Octave.LINE3, Pitch.A, Accidental.NATURAL, MidiPitch.PITCH_93);
    public static readonly LINE3_A_SHARP = new MusicPitch(Octave.LINE3, Pitch.A, Accidental.SHARP, MidiPitch.PITCH_94);
    public static readonly LINE3_A_DOUBLE_SHARP = new MusicPitch(Octave.LINE3, Pitch.A, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_95);
    public static readonly LINE3_B_DOUBLE_FLAT = new MusicPitch(Octave.LINE3, Pitch.B, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_93);
    public static readonly LINE3_B_FLAT = new MusicPitch(Octave.LINE3, Pitch.B, Accidental.FLAT, MidiPitch.PITCH_94);
    public static readonly LINE3_B_NATURAL = new MusicPitch(Octave.LINE3, Pitch.B, Accidental.NATURAL, MidiPitch.PITCH_95);
    public static readonly LINE3_B_SHARP = new MusicPitch(Octave.LINE3, Pitch.B, Accidental.SHARP, MidiPitch.PITCH_96);
    public static readonly LINE3_B_DOUBLE_SHARP = new MusicPitch(Octave.LINE3, Pitch.B, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_97);

    public static readonly LINE4_C_DOUBLE_FLAT = new MusicPitch(Octave.LINE4, Pitch.C, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_94);
    public static readonly LINE4_C_FLAT = new MusicPitch(Octave.LINE4, Pitch.C, Accidental.FLAT, MidiPitch.PITCH_95);
    public static readonly LINE4_C_NATURAL = new MusicPitch(Octave.LINE4, Pitch.C, Accidental.NATURAL, MidiPitch.PITCH_96);
    public static readonly LINE4_C_SHARP = new MusicPitch(Octave.LINE4, Pitch.C, Accidental.SHARP, MidiPitch.PITCH_97);
    public static readonly LINE4_C_DOUBLE_SHARP = new MusicPitch(Octave.LINE4, Pitch.C, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_98);
    public static readonly LINE4_D_DOUBLE_FLAT = new MusicPitch(Octave.LINE4, Pitch.D, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_96);
    public static readonly LINE4_D_FLAT = new MusicPitch(Octave.LINE4, Pitch.D, Accidental.FLAT, MidiPitch.PITCH_97);
    public static readonly LINE4_D_NATURAL = new MusicPitch(Octave.LINE4, Pitch.D, Accidental.NATURAL, MidiPitch.PITCH_98);
    public static readonly LINE4_D_SHARP = new MusicPitch(Octave.LINE4, Pitch.D, Accidental.SHARP, MidiPitch.PITCH_99);
    public static readonly LINE4_D_DOUBLE_SHARP = new MusicPitch(Octave.LINE4, Pitch.D, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_100);
    public static readonly LINE4_E_DOUBLE_FLAT = new MusicPitch(Octave.LINE4, Pitch.E, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_98);
    public static readonly LINE4_E_FLAT = new MusicPitch(Octave.LINE4, Pitch.E, Accidental.FLAT, MidiPitch.PITCH_99);
    public static readonly LINE4_E_NATURAL = new MusicPitch(Octave.LINE4, Pitch.E, Accidental.NATURAL, MidiPitch.PITCH_100);
    public static readonly LINE4_E_SHARP = new MusicPitch(Octave.LINE4, Pitch.E, Accidental.SHARP, MidiPitch.PITCH_101);
    public static readonly LINE4_E_DOUBLE_SHARP = new MusicPitch(Octave.LINE4, Pitch.E, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_102);
    public static readonly LINE4_F_DOUBLE_FLAT = new MusicPitch(Octave.LINE4, Pitch.F, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_99);
    public static readonly LINE4_F_FLAT = new MusicPitch(Octave.LINE4, Pitch.F, Accidental.FLAT, MidiPitch.PITCH_100);
    public static readonly LINE4_F_NATURAL = new MusicPitch(Octave.LINE4, Pitch.F, Accidental.NATURAL, MidiPitch.PITCH_101);
    public static readonly LINE4_F_SHARP = new MusicPitch(Octave.LINE4, Pitch.F, Accidental.SHARP, MidiPitch.PITCH_102);
    public static readonly LINE4_F_DOUBLE_SHARP = new MusicPitch(Octave.LINE4, Pitch.F, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_103);
    public static readonly LINE4_G_DOUBLE_FLAT = new MusicPitch(Octave.LINE4, Pitch.G, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_101);
    public static readonly LINE4_G_FLAT = new MusicPitch(Octave.LINE4, Pitch.G, Accidental.FLAT, MidiPitch.PITCH_102);
    public static readonly LINE4_G_NATURAL = new MusicPitch(Octave.LINE4, Pitch.G, Accidental.NATURAL, MidiPitch.PITCH_103);
    public static readonly LINE4_G_SHARP = new MusicPitch(Octave.LINE4, Pitch.G, Accidental.SHARP, MidiPitch.PITCH_104);
    public static readonly LINE4_G_DOUBLE_SHARP = new MusicPitch(Octave.LINE4, Pitch.G, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_105);
    public static readonly LINE4_A_DOUBLE_FLAT = new MusicPitch(Octave.LINE4, Pitch.A, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_103);
    public static readonly LINE4_A_FLAT = new MusicPitch(Octave.LINE4, Pitch.A, Accidental.FLAT, MidiPitch.PITCH_104);
    public static readonly LINE4_A_NATURAL = new MusicPitch(Octave.LINE4, Pitch.A, Accidental.NATURAL, MidiPitch.PITCH_105);
    public static readonly LINE4_A_SHARP = new MusicPitch(Octave.LINE4, Pitch.A, Accidental.SHARP, MidiPitch.PITCH_106);
    public static readonly LINE4_A_DOUBLE_SHARP = new MusicPitch(Octave.LINE4, Pitch.A, Accidental.DOUBLE_SHARP, MidiPitch.PITCH_107);
    public static readonly LINE4_B_DOUBLE_FLAT = new MusicPitch(Octave.LINE4, Pitch.B, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_105);
    public static readonly LINE4_B_FLAT = new MusicPitch(Octave.LINE4, Pitch.B, Accidental.FLAT, MidiPitch.PITCH_106);
    public static readonly LINE4_B_NATURAL = new MusicPitch(Octave.LINE4, Pitch.B, Accidental.NATURAL, MidiPitch.PITCH_107);
    public static readonly LINE4_B_SHARP = new MusicPitch(Octave.LINE4, Pitch.B, Accidental.SHARP, MidiPitch.PITCH_108);

    public static readonly LINE5_C_DOUBLE_FLAT = new MusicPitch(Octave.LINE5, Pitch.C, Accidental.DOUBLE_FLAT, MidiPitch.PITCH_106);
    public static readonly LINE5_C_FLAT = new MusicPitch(Octave.LINE5, Pitch.C, Accidental.FLAT, MidiPitch.PITCH_107);
    public static readonly LINE5_C_NATURAL = new MusicPitch(Octave.LINE5, Pitch.C, Accidental.NATURAL, MidiPitch.PITCH_108);

    private static readonly OCTAVE_INDEX = new Map<Octave, MusicPitch[]>();
    static {
        for (let octave in Octave) {
            if (isNaN(Number(octave))) {
                MusicPitch.OCTAVE_INDEX.set(Octave[octave as keyof typeof Octave], [])
            }
        }

        for (const pitchName of Object.getOwnPropertyNames(MusicPitch)) {
            const value: object = MusicPitch[pitchName];
            if (value instanceof MusicPitch) {
                MusicPitch.OCTAVE_INDEX.get(value.octave).push(value);
            }
        }
    }

    public readonly octave: Octave;
    public readonly pitch: Pitch;
    public readonly accidental: Accidental;
    public readonly midiPitch: MidiPitch;

    constructor(
        octave: Octave,
        pitch: Pitch,
        accidental: Accidental,
        midiPitch: MidiPitch
    ) {
        this.octave = octave;
        this.pitch = pitch;
        this.accidental = accidental;
        this.midiPitch = midiPitch;
    }

    /**
     * Возвращает все варианты ноты, отличающуюся от текущей на указанной количество ступеней.
     * Например, "до" + 2 = ["ми","ми-бемоль", "ми-диез,"ми-дубльбемоль","ми-дубльдиез"]
     * @param stepCount
     */
    lookupStepPitches(stepCount: number): MusicPitch[] {
        const currentOctave = this.octave + Math.floor((this.pitch + stepCount) / PITCH_COUNT);
        const currentPitch = MusicPitch.mod(this.pitch as number + stepCount, PITCH_COUNT) as Pitch;

        return MusicPitch.OCTAVE_INDEX.get(currentOctave).filter(p => p.pitch === currentPitch);
    }

    private static mod(value, base) {
        return ((value % base) + base) % base;
    }
}

export const FirstOctave = Object.freeze([
    MusicPitch.LINE1_C_FLAT,
    MusicPitch.LINE1_C_NATURAL,
    MusicPitch.LINE1_C_SHARP,
    MusicPitch.LINE1_D_FLAT,
    MusicPitch.LINE1_D_NATURAL,
    MusicPitch.LINE1_D_SHARP,
    MusicPitch.LINE1_E_FLAT,
    MusicPitch.LINE1_E_NATURAL,
    MusicPitch.LINE1_E_SHARP,
    MusicPitch.LINE1_F_FLAT,
    MusicPitch.LINE1_F_NATURAL,
    MusicPitch.LINE1_F_SHARP,
    MusicPitch.LINE1_G_FLAT,
    MusicPitch.LINE1_G_NATURAL,
    MusicPitch.LINE1_G_SHARP,
    MusicPitch.LINE1_A_FLAT,
    MusicPitch.LINE1_A_NATURAL,
    MusicPitch.LINE1_A_SHARP,
    MusicPitch.LINE1_B_FLAT,
    MusicPitch.LINE1_B_NATURAL,
    MusicPitch.LINE1_B_SHARP
]);

export const Neutrals = Object.freeze([
    MusicPitch.SUB_CONTRA_A_NATURAL,
    MusicPitch.SUB_CONTRA_B_NATURAL,
    MusicPitch.CONTRA_C_NATURAL,
    MusicPitch.CONTRA_D_NATURAL,
    MusicPitch.CONTRA_E_NATURAL,
    MusicPitch.CONTRA_F_NATURAL,
    MusicPitch.CONTRA_G_NATURAL,
    MusicPitch.CONTRA_A_NATURAL,
    MusicPitch.CONTRA_B_NATURAL,
    MusicPitch.GREAT_C_NATURAL,
    MusicPitch.GREAT_D_NATURAL,
    MusicPitch.GREAT_E_NATURAL,
    MusicPitch.GREAT_F_NATURAL,
    MusicPitch.GREAT_G_NATURAL,
    MusicPitch.GREAT_A_NATURAL,
    MusicPitch.GREAT_B_NATURAL,
    MusicPitch.SMALL_C_NATURAL,
    MusicPitch.SMALL_D_NATURAL,
    MusicPitch.SMALL_E_NATURAL,
    MusicPitch.SMALL_F_NATURAL,
    MusicPitch.SMALL_G_NATURAL,
    MusicPitch.SMALL_A_NATURAL,
    MusicPitch.SMALL_B_NATURAL,
    MusicPitch.LINE1_C_NATURAL,
    MusicPitch.LINE1_D_NATURAL,
    MusicPitch.LINE1_E_NATURAL,
    MusicPitch.LINE1_F_NATURAL,
    MusicPitch.LINE1_G_NATURAL,
    MusicPitch.LINE1_A_NATURAL,
    MusicPitch.LINE1_B_NATURAL,
    MusicPitch.LINE2_C_NATURAL,
    MusicPitch.LINE2_D_NATURAL,
    MusicPitch.LINE2_E_NATURAL,
    MusicPitch.LINE2_F_NATURAL,
    MusicPitch.LINE2_G_NATURAL,
    MusicPitch.LINE2_A_NATURAL,
    MusicPitch.LINE2_B_NATURAL,
    MusicPitch.LINE3_C_NATURAL,
    MusicPitch.LINE3_D_NATURAL,
    MusicPitch.LINE3_E_NATURAL,
    MusicPitch.LINE3_F_NATURAL,
    MusicPitch.LINE3_G_NATURAL,
    MusicPitch.LINE3_A_NATURAL,
    MusicPitch.LINE3_B_NATURAL,
    MusicPitch.LINE4_C_NATURAL,
    MusicPitch.LINE4_D_NATURAL,
    MusicPitch.LINE4_E_NATURAL,
    MusicPitch.LINE4_F_NATURAL,
    MusicPitch.LINE4_G_NATURAL,
    MusicPitch.LINE4_A_NATURAL,
    MusicPitch.LINE4_B_NATURAL,
    MusicPitch.LINE5_C_NATURAL
]);