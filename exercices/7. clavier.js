/**
Goal: play notes on a virtual keyboard.
Display a virtual keyboard. When each note should be played, change the style of the corresponding key.
The provided keyboard has its keys with an id of the form "kXX" where XX is the note corresponding to the key.
Each key can have the class "pressed" to emulate pressing the key.

Tips and tricks: create a function nextNote(track, index) which
- manage the "pressed" class
- use setTimeout(function, note.deltaTime *3)

MIDI Structure
{
  header:{
    ...
  },
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

// adds a virtual keyboard
document.getElementById('sandbox').innerHTML = F.keyboard();

// adds / removes the "pressed" class on a key
document.getElementById('k69').classList.toggle('pressed', true);

// get notes
var track = F.simpleTrack().filter(F.isNote);


