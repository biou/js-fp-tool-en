/**
Goal: display in the page the list of notes as text.
You will need to convert the array of notes as integers to text then to add this text to the dom (in <div id="output" />)
You will need to define the curried functions map(), join(), and addToDomElt()

Tips & Tricks: you can develop your own curried functions by hand or use F.curry()
*/

var notes = [1,2,3];

function noteValueToText(note) {
  var notes = [ 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  return notes[note % 7];
}

var displayNotes = F.pipe(
  	map(noteValueToText),
    join(' '),
    addtoDomElt('output')
);

displayNotes(notes);
