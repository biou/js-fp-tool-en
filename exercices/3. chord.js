/**
Goal: change track 0 of `midi`
to replace each note by a chord {note, note + 1 tone, note + 2 tones}

Tips & tricks: +1 on a noteNumber increases the note of a semitone.

MIDI Structure
{ header: { ... },
  tracks: [
    [
      {deltaTime:0,   channel:0, type:"channel", noteNumber:73, velocity:110, subtype:"noteOn" },
      ...
      {deltaTime:46,  channel:0, type:"channel", noteNumber:73, velocity:64,  subtype:"noteOff"},
      ...
      {deltaTime:0, type:"meta", subtype:"endOfTrack"}
    ]
  ]
};

*/

function transpose (note, interval) {
  return F.extend(note, {
    // attributes to replace
  })
}

var midi = F.simpleMidi()



F.playMidi(midi)



