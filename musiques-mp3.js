/* ══════════════════════════════════════════════════════════════════════════
   EasyBloc micro:bit — musiques-mp3.js : les « fichiers » de la carte microSD du lecteur MP3 Grove
   dans le SIMULATEUR (nov. 2026).

   Le simulateur n'a pas de carte microSD : ces six mélodies courtes jouent le rôle des fichiers
   MP3, piste 1 à piste 6, et sont jouées par le navigateur (Web Audio, un.js : jouerPisteMp3).
   Toutes sont libres de droits : cinq airs traditionnels ou classiques du domaine public, et une
   fanfare écrite pour EasyBloc. Seule la mélodie est notée, sans paroles.

   Format : « note durée » séparés par des espaces ; note = nom anglais et octave (C4 = do du
   milieu, F#4, Bb3…), R = silence ; durée en temps (1 = une noire, 0.5 = une croche).
   Pour ajouter une piste : une ligne de plus dans la liste.
   ══════════════════════════════════════════════════════════════════════════ */
window.MUSIQUES_MP3 = [
  { titre: 'Au clair de la lune', tempo: 132,
    notes: 'C4 1 C4 1 C4 1 D4 1 E4 2 D4 2 C4 1 E4 1 D4 1 D4 1 C4 4 ' +
           'C4 1 C4 1 C4 1 D4 1 E4 2 D4 2 C4 1 E4 1 D4 1 D4 1 C4 4 ' +
           'D4 1 D4 1 D4 1 D4 1 A3 2 A3 2 D4 1 C4 1 B3 1 A3 1 G3 4 ' +
           'C4 1 C4 1 C4 1 D4 1 E4 2 D4 2 C4 1 E4 1 D4 1 D4 1 C4 4' },
  { titre: 'Frère Jacques', tempo: 120,
    notes: 'C4 1 D4 1 E4 1 C4 1 C4 1 D4 1 E4 1 C4 1 E4 1 F4 1 G4 2 E4 1 F4 1 G4 2 ' +
           'G4 0.5 A4 0.5 G4 0.5 F4 0.5 E4 1 C4 1 G4 0.5 A4 0.5 G4 0.5 F4 0.5 E4 1 C4 1 ' +
           'C4 1 G3 1 C4 2 C4 1 G3 1 C4 2' },
  { titre: 'Ode à la joie (Beethoven)', tempo: 132,
    notes: 'E4 1 E4 1 F4 1 G4 1 G4 1 F4 1 E4 1 D4 1 C4 1 C4 1 D4 1 E4 1 E4 1.5 D4 0.5 D4 2 ' +
           'E4 1 E4 1 F4 1 G4 1 G4 1 F4 1 E4 1 D4 1 C4 1 C4 1 D4 1 E4 1 D4 1.5 C4 0.5 C4 2' },
  { titre: 'Ah ! vous dirai-je, maman', tempo: 132,
    notes: 'C4 1 C4 1 G4 1 G4 1 A4 1 A4 1 G4 2 F4 1 F4 1 E4 1 E4 1 D4 1 D4 1 C4 2 ' +
           'G4 1 G4 1 F4 1 F4 1 E4 1 E4 1 D4 2 G4 1 G4 1 F4 1 F4 1 E4 1 E4 1 D4 2 ' +
           'C4 1 C4 1 G4 1 G4 1 A4 1 A4 1 G4 2 F4 1 F4 1 E4 1 E4 1 D4 1 D4 1 C4 2' },
  { titre: 'Vive le vent (Jingle Bells)', tempo: 160,
    notes: 'E4 1 E4 1 E4 2 E4 1 E4 1 E4 2 E4 1 G4 1 C4 1.5 D4 0.5 E4 4 ' +
           'F4 1 F4 1 F4 1.5 F4 0.5 F4 1 E4 1 E4 1 E4 0.5 E4 0.5 E4 1 D4 1 D4 1 E4 1 D4 2 G4 2' },
  { titre: 'Fanfare EasyBloc', tempo: 150,
    notes: 'C4 0.5 E4 0.5 G4 0.5 C5 1.5 G4 0.5 C5 2 R 0.5 ' +
           'D4 0.5 F4 0.5 A4 0.5 D5 1.5 A4 0.5 D5 2 R 0.5 ' +
           'G4 0.5 G4 0.5 G4 0.5 B4 1 D5 1 G5 1 E5 0.5 C5 0.5 C5 3' },
];
