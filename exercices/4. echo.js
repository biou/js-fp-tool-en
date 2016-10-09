/**
Goal: change track 0 of `midi` to repeat
each note one time with a shift of 20 beats
and with a velocity divided by 2

Tips & tricks: 1 beat = 1 time unit. It is a relative unite parameterized by an attribute
in the headers of the track, ticksPerBeat

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

function transpose (note, dtime, velocity) {
  return F.extend(note, {
    // attributes to be replaced
  })
}

var midi = F.simpleMidi()

F.playMidi(midi)

