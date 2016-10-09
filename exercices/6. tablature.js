/**
Goal: display the music sheet of the track
Do not manage the duration of notes.

MIDI Structure
{ header: { ... },
  tracks: [
    [
      {deltaTime:0,   channel:0, type:"channel", noteNumber:73, velocity:110, subtype:"noteOn" },
      {deltaTime:46,  channel:0, type:"channel", noteNumber:73, velocity:64,  subtype:"noteOff"},
      ...
      {deltaTime:0, type:"meta", subtype:"endOfTrack"}
    ]
  ]
};

*/

var track = F.simpleTrack();

// create the music sheet
var sheet = F.musicSheet();

// put notes 4 by 4 on the sheet
// with sheet.addNotes( array )

// for example
sheet.addNotes([
  F.eventToNoteName({ noteNumber:65 }),
  F.eventToNoteName({ noteNumber:61 }),
  F.eventToNoteName({ noteNumber:67 }),
  F.eventToNoteName({ noteNumber:68 })
]);

sheet.draw();
