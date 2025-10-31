import Variant from "./data/Variant.ts";
import Player from "./Player.ts";
import MusicPitch from "./data/MusicPitch.ts";

export function main() {
    window["Variant"] = Variant;

    let player = new Player();

    window["play"] = (chord) => {
        player.playChords(MusicPitch.LINE1_C, chord)
    }
}