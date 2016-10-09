/**
Goal: change track 0 of `midi`
for each note, add 2 notes shifted by 50 ticks and of 2 tones

Tips & tricks:
-  +1 on a noteNumber increases the note of a semitone.
- 1 beat = 1 time unit. It is a relative unite parameterized by an attribute
  in the headers of the track, ticksPerBeat
- by adding notes we shift all following notes
because MIDI works with relative times

=> change your code to use
    F.toAbsoluteTime() and F.toDeltaTime()
    to work in absolute and relative times


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

function transpose (note, dtime, interval) {
  return F.extend(note, {
    // attributes to replace
  })
}

var midi = F.simpleMidi()


F.playMidi(midi)





