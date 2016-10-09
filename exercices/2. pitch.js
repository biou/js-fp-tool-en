/**
Goal: change track 0 of `midi`
to play each note 1 octave higher

Tips & Tricks:
- use F.extend(object, { ... }) to have a clone of the object
  and giving him attributes to change.
- +1 on a noteNumber increases the note of one semitone.

Midi Structure
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

function transpose (note) {
  return F.extend(note, {
    // attributes to be replaced
  })
}

var midi = F.simpleMidi()

midi.tracks[0] = midi.tracks[0]. // TODO

F.playMidi(midi)



