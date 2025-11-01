import Variant, {VariantClass} from "./data/Variant.ts";
import Player from "./Player.ts";
import {MusicPitch} from "./data/MusicBase.ts";

const player = new Player();

export function injectVariants() {
    window["Variant"] = Variant;
}

export function injectPlayer() {
    window["play"] = (variant: VariantClass) => {
        const chords = variant.chords.fromBase(MusicPitch.LINE1_C_NATURAL);
        player.playChords(chords);
    }
}

//
// function newQuiz() {
//     ['next', 'repeat', 'repeat1', 'melodic', 'giveUp']
//         .forEach(it => {
//             const el = document.getElementById(it)
//             el.addEventListener('click', e => {
//                 el.classList.add("active")
//                 setTimeout(() => {
//                     el.classList.remove("active")
//                 }, 200)
//             });
//         })
//
//
//     let QUIZ;
//     document.getElementById('next').addEventListener('click', e => {
//         checkProperties();
//         QUIZ = makeQuiz();
//         if (QUIZ == null) {
//             alert('Выберите аккорды в настройках');
//             return;
//         }
//
//         document.getElementById('variant_1').textContent = QUIZ.options[0];
//         document.getElementById('variant_2').textContent = QUIZ.options[1];
//         document.getElementById('variant_3').textContent = QUIZ.options[2];
//         document.getElementById('variant_4').textContent = QUIZ.options[3];
//
//         for (let variant of document.getElementsByClassName('variant')) {
//             variant.classList.remove('correct', 'error', 'disabled')
//         }
//         for (let variant of document.getElementsByClassName('control')) {
//             variant.classList.remove('disabled')
//         }
//
//         PLAYER.playHarmonic(QUIZ.basePitch, QUIZ.answer.sequence);
//     });
//
//     let repeatControl = document.getElementById('repeat');
//     repeatControl.addEventListener('click', e => {
//         if (repeatControl.classList.contains('disabled')) return;
//         PLAYER.playHarmonic(QUIZ.basePitch, QUIZ.answer.sequence);
//     });
//
//     let repeat1Control = document.getElementById('repeat1');
//     repeat1Control.addEventListener('click', e => {
//         if (repeat1Control.classList.contains('disabled')) return;
//         PLAYER.playHarmonicNormalized(QUIZ.basePitch, QUIZ.answer.sequence);
//     });
//
//     let melodicControl = document.getElementById('melodic');
//     melodicControl.addEventListener('click', e => {
//         if (melodicControl.classList.contains('disabled')) return;
//         PLAYER.playMelodic(QUIZ.basePitch, QUIZ.answer.sequence);
//     });
//
//     let giveUpControl = document.getElementById('giveUp');
//     giveUpControl.addEventListener('click', e => {
//         if (giveUpControl.classList.contains('disabled')) return;
//         let variants = document.getElementsByClassName('variant');
//         for (let variant of variants) {
//             let correct = variant.textContent === QUIZ.answer.sequence.name;
//             variant.classList.add("disabled", correct ? 'correct' : 'error');
//         }
//     });
//
//     let variants = document.getElementsByClassName('variant');
//     for (let variant of variants) {
//         variant.classList.add('disabled');
//         variant.addEventListener('click', () => {
//             if (variant.classList.contains('disabled')) return;
//             let correct = QUIZ.answer.sequence.name === variant.textContent;
//             variant.classList.add(correct ? 'correct' : 'error');
//             if (correct) {
//                 for (let variant of variants) {
//                     variant.classList.add('disabled')
//                 }
//             } else {
//                 variant.classList.add('disabled');
//             }
//         });
//     }
// }