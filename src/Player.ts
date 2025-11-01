import {MidiPitch} from "./data/MidiPitch.ts";
import {MidiChord} from "./data/MusicBase.ts";

export default class Player {
    private readonly players: HTMLAudioElement[] = [];
    private playingAbort: AbortController = null;

    constructor() {
        const count = 4;
        for (let i = 0; i < count; i++) {
            this.players.push(new Audio());
        }
    }

    private stop() {
        if (this.playingAbort) {
            this.playingAbort.abort();
        }
        this.players.forEach(player => {
            try {
                player.pause();
                player.currentTime = 0;
                player.removeAttribute('src');
                player.load();
            } catch (ex) {
            }
        });
    }

    private async playChord(midi: MidiPitch[]) {
        await Promise.all(this.players.map((player, i) =>
            Player.loadSound(player, midi[i])
        ));

        await Promise.all(this.players.map((player) =>
            player.play().catch((err) => {
            })
        ));
    }

    async playChords(chords: MidiChord[]) {
        this.stop();
        this.playingAbort = new AbortController();
        const signal = this.playingAbort.signal;

        for (let chord of chords) {
            if (signal.aborted) return;
            await this.playChord(chord.midi);
            await new Promise(resolve => setTimeout(() => resolve(null), 1500))
        }
    }

    //
    // playMelodic(startPitch: MusicPitch, chords) {
    //     this.stop();
    //
    //     let startMidiPitch = startPitch.midiPitch;
    //
    //     let midi: MidiPitch[] = []
    //     let chord1 = this.chordToMidi(startMidiPitch, chords[0])
    //     midi = midi.concat(chord1);
    //     if (chords[2] !== undefined) {
    //         startMidiPitch += chords[2];
    //         let chord2 = this.chordToMidi(startMidiPitch, chords[3])
    //         midi = midi.concat(chord2);
    //     }
    //     if (chords[5] !== undefined) {
    //         startMidiPitch += chords[5];
    //         let chord3 = this.chordToMidi(startMidiPitch, chords[6])
    //         midi = midi.concat(chord3);
    //     }
    //
    //     this.playMidi(midi, 0);
    // }


    private static async loadSound(player: HTMLAudioElement, midiPitch: MidiPitch) {
        if (midiPitch) {
            await new Promise(resolve => {
                const listener = () => {
                    player.removeEventListener("canplaythrough", listener);
                    resolve(null);
                };
                player.addEventListener("canplaythrough", listener);
                player.src = this.createSoundUrl(midiPitch);
            });
        }
    }

    private static createSoundUrl(midi: number) {
        return `https://raw.githubusercontent.com/friendlyted/audiquiz-sounds/refs/heads/main/pitch_${midi}.mp3`;
    }
}
