import MidiPitch from "./data/MidiPitch.ts";
import Interval from "./data/Interval.ts";
import MusicPitch from "./data/MusicPitch.ts";

interface Playable {
    semitonesCount: number;
    lowerInterval: Interval;
    middleInterval: Interval;
    upperInterval: Interval;
}

export default class Player {
    private readonly count: number;
    private readonly players: HTMLAudioElement[];
    private playingTimeout: number;

    constructor() {
        this.count = 4;
        this.players = [];
        this.playingTimeout = null;

        for (let i = 0; i < this.count; i++) {
            this.players.push(new Audio());
        }
    }

    playMidi(midi, index) {
        if (midi[index] === undefined) return;
        this.playingTimeout = setTimeout(() => {
            this.playChord([midi[index]]);
            this.playMidi(midi, index + 1);
        }, index === 0 ? 10 : 800);
    }

    resetPlayers() {
        for (let i = 0; i < this.count; i++) {
            const player = this.players[i];
            player.pause();
            player.currentTime = 0;
            player.removeAttribute('src');
            player.load();
        }
    }

    playChord(midi) {
        this.resetPlayers();

        const waiters: Promise<void>[] = [];

        for (let i = 0; i < this.count; i++) {
            const player = this.players[i];

            waiters[i] = new Promise((resolve) => {
                if (midi[i]) {
                    const listener = () => {
                        player.removeEventListener("canplaythrough",listener);
                        resolve(null);
                    };
                    player.addEventListener("canplaythrough", listener);
                    player.src = "https://raw.githubusercontent.com/friendlyted/audiquiz-sounds/refs/heads/main/pitch_" + midi[i] + ".mp3";
                } else {
                    resolve(null);
                }
            });
        }

        Promise.all(waiters).then(()=>{
            for (let i = 0; i < this.count; i++) {
                if (this.players[i].src) {
                    this.players[i].play();
                }
            }
        });
    }

    chordToMidi(startMidiPitch: MidiPitch, chord: Playable) {
        let next = startMidiPitch;
        let midi = [next];

        if (chord.semitonesCount) {
            midi.push(next + chord.semitonesCount);
            return midi;
        }
        if (chord.lowerInterval) {
            next += chord.lowerInterval.semitonesCount;
            midi.push(next);
        }
        if (chord.middleInterval) {
            next += chord.middleInterval.semitonesCount;
            midi.push(next);
        }
        if (chord.upperInterval) {
            next += chord.upperInterval.semitonesCount;
            midi.push(next);
        }
        return midi;
    }

    playChords(startPitch, chords) {
        if (this.playingTimeout) {
            clearTimeout(this.playingTimeout);
        }
        let startMidiPitch = startPitch.midiPitch;

        this.playingTimeout = setTimeout(() => {
            let chord1Midi = this.chordToMidi(startMidiPitch, chords[0])
            this.playChord(chord1Midi);


            if (chords[2] === undefined) return;

            this.playingTimeout = setTimeout(() => {
                startMidiPitch += chords[2];
                let chord2Midi = this.chordToMidi(startMidiPitch, chords[3])
                this.playChord(chord2Midi);

                if (chords[5] === undefined) return;

                this.playingTimeout = setTimeout(() => {
                    startMidiPitch += chords[5];
                    let chord3Midi = this.chordToMidi(startMidiPitch, chords[6])
                    this.playChord(chord3Midi);
                }, 1400);
            }, 1400)
        }, 10);
    }

    playMelodic(startPitch: MusicPitch, chords) {
        if (this.playingTimeout) {
            clearTimeout(this.playingTimeout);
        }

        let startMidiPitch = startPitch.midiPitch;

        let midi: MidiPitch[] = []
        let chord1 = this.chordToMidi(startMidiPitch, chords[0])
        midi = midi.concat(chord1);
        if (chords[2] !== undefined) {
            startMidiPitch += chords[2];
            let chord2 = this.chordToMidi(startMidiPitch, chords[3])
            midi = midi.concat(chord2);
        }
        if (chords[5] !== undefined) {
            startMidiPitch += chords[5];
            let chord3 = this.chordToMidi(startMidiPitch, chords[6])
            midi = midi.concat(chord3);
        }

        this.playMidi(midi, 0);
    }
}
