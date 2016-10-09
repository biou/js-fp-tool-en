/**
 * Functional library
 * @namespace Functional
 */
var Functional = { };

/**
 * Returns a clone of the object
 * @param {Object} event Object
 * @return {Object} clone
 */
Functional.clone = function (object) {
  return Functional.extend({}, object);
};

/**
 * Returns a clone of the object, with the properties of the object in parameter
 * @param {Object} object1 Object
 * @param {Object} object2 Object
 * @return {Object} clone
 */
Functional.extend = function (object1, object2 /*...*/) {
  return extendDeep.apply(null, [{}].concat(Array.prototype.slice.call(arguments)));
};

/**
 * Returns a chain of curried functions
 * @return {Function} chain of functions
 */
Functional.pipe = function () {
  var defs = Array.prototype.slice.call(arguments);
  return function (value) {
    var funs = [].concat([value], defs);
    return funs.reduce(function(v, f) {
      return v.constructor === Function ? v() : f(v);
    })
  }
};

/**
 * Enables to apply a function to a specific point to a chain of functions
 * without breaking the chain
 * @param {Function} fcn function to apply to the object
 * @return {Function} function to be inserted in the chain
 */
Functional.tap = function(fcn) {
  return function(elem) {
    fcn(elem);
    return elem;
  }
}

/**
 * Enables to inspect an object at a specific point in a chain of functions
 * @param {Object} object Objet
 * @return {Object} same objet
 */
Functional.trace = function(x) {
  console.log('trace:', x);
  return x;
}

/**
 * Transforms an uncurried function into a curried function
 * @param {Function} uncurried uncurried function
 * @return {Function} curried function
 */
Functional.curry = function(uncurried) {
  var args = [];
  var curried = function(x) {
      args.push(x);
      if (args.length == uncurried.length) {
        return uncurried.apply(this, args);
      } else {
        return curried;
      }
  };
  return curried;
}

/**
 * returns a simple midi file
 * @return {Object} MIDI
 */
Functional.simpleMidi = function() {
  return {
    header:{
      formatType:1,
      trackCount:1,
      ticksPerBeat:192
    },
    tracks: [
      [
        {deltaTime:0,   channel:0, type:"channel", noteNumber:73, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:73, velocity:64,  subtype:"noteOff"},
        {deltaTime:50,  channel:0, type:"channel", noteNumber:72, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:72, velocity:64,  subtype:"noteOff"},
        {deltaTime:2,   channel:0, type:"channel", noteNumber:73, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:73, velocity:64,  subtype:"noteOff"},
        {deltaTime:50,  channel:0, type:"channel", noteNumber:76, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:76, velocity:64,  subtype:"noteOff"},
        {deltaTime:2,   channel:0, type:"channel", noteNumber:75, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:75, velocity:64,  subtype:"noteOff"},
        {deltaTime:50,  channel:0, type:"channel", noteNumber:76, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:76, velocity:64,  subtype:"noteOff"},
        {deltaTime:2,   channel:0, type:"channel", noteNumber:81, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:81, velocity:64,  subtype:"noteOff"},
        {deltaTime:50,  channel:0, type:"channel", noteNumber:73, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:73, velocity:64,  subtype:"noteOff"},
        {deltaTime:2,   channel:0, type:"channel", noteNumber:74, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:74, velocity:64,  subtype:"noteOff"},
        {deltaTime:242, channel:0, type:"channel", noteNumber:86, velocity:110, subtype:"noteOn" },
        {deltaTime:46,  channel:0, type:"channel", noteNumber:86, velocity:64,  subtype:"noteOff"},
        {deltaTime:0, type:"meta", subtype:"endOfTrack"}
      ]
    ]
  };
};

/**
 * Returns a simple midi track
 * @return {Array} track MIDI
 */
Functional.simpleTrack = function () {
  return F.simpleMidi().tracks[0];
};

/**
 * Returns true if this item is of type noteOn or noteOff
 * @param {Object} event MIDI item
 * @return {boolean} noteOn or noteOff
 */
Functional.isNote = function (event) {
  return event.subtype.match(/^note/);
};

/**
 * returns true if this item is of type noteOn
 * @param {Object} event MIDI item
 * @return {boolean} noteOn
 */
Functional.isNoteOn = function (event) {
  return event.subtype == 'noteOn';
};

/**
 * returns true if this item is of type noteOff
 * @param {Object} event MIDI item
 * @return {boolean} noteOff
 */
Functional.isNoteOff = function (event) {
  return event.subtype == 'noteOff';
};

/**
 * returns all available midi files
 * @return {Array} names of the MIDI files
 */
Functional.allMidiFiles = function () {
  return [
    '50_cent',
    'acdc_wmw',
    'addams',
    'all_apologies',
    'amazing_grace',
    'another_bite',
    'around_the_world',
    'bach',
    'back_to_the_future',
    'basshunter_camilla',
    'batman',
    'beatles_hey_jude',
    'beethoven_ode_to_joy',
    'beetlejuice',
    'bitthedust',
    'bob_marley_jammin',
    'cantina09',
    'cantina42',
    'castlevania_lost_paintings',
    'castlevania_walking',
    'castlevania_waltz',
    'castlevania_wicked',
    'chimchimery',
    'clasgitar',
    'comes_sun',
    'coolio_gangstas',
    'dakota_katowice',
    'deep_space',
    'dp_around_the_world',
    'god_save_the_queen',
    'london_bridge_is_falling_down',
    'manson_coma white',
    'mozart',
    'old_macdonald_had_a_farm',
    'prelude',
    'sml',
    'starwars'
  ].map(function (f) {
    return 'midi/' + f + '.mid';
  });
};

/**
 * get a MIDI file
 * @param {String}   path     URL
 * @param {Function} callback Callback of the form function(error, midi)
 * @return {XMLHttpRequest} AJAX request
 */
Functional.loadRemote = function(path, callback) {
  if (path && !callback) return Functional.loadRemotePromised(path);

  var fetch = new XMLHttpRequest();
  fetch.open('GET', path);
  fetch.overrideMimeType("text/plain; charset=x-user-defined");
  fetch.onreadystatechange = function() {
    if (this.readyState == 4) {
      if (this.status == 200) {
        /* munge response into a binary string */
        var t = this.responseText || "" ;
        var ff = [];
        var mx = t.length;
        var scc= String.fromCharCode;
        for (var z = 0; z < mx; z++) {
          ff[z] = scc(t.charCodeAt(z) & 255);
        }
        callback(null, MidiFile(ff.join("")));
      } else {
        callback(new Error('cannot load file'));
      }
    }
  }
  fetch.send();
};

/**
 * Promised version of loadRemote
 * @param {String} path URL
 * @return {Promise} Promise
 */
Functional.loadRemotePromised = function (path) {
  var deferred = Q.defer();
  Functional.loadRemote(path, function (error, midi) {
    return error ? 
      deferred.reject(new Error(error)) :
      deferred.resolve(midi);
  });
  return deferred.promise;
};

/**
 * Plays a MIDI object
 * @param {Object} midi MIDI object
 */
Functional.playMidi = function(midi) {
  var synth = Synth(44100);
  var replayer = Replayer(midi, synth);
  AudioPlayer(replayer);
};

/**
 * transforms a track to absolute time
 * @param {Array} track
 * @return {Array} track
 */
Functional.toAbsoluteTime = function(track) {
  function toAbsoluteTimeRec(srcTrack, tmpTrack, acc, index) {
    if (index == srcTrack.length) {
      return; 
    }
    const elt = F.clone(srcTrack[index]);
    acc += elt.deltaTime;
    delete elt.deltaTime;
    elt.absTime = acc;
    tmpTrack.push(elt);
    index++;
  
    toAbsoluteTimeRec(srcTrack, tmpTrack, acc, index);
  }

  const result = []
  toAbsoluteTimeRec(track, result, 0, 0); 
  return result;
}

/**
 * transforms a track to relative time
 * @param {Array} track
 * @return {Array} track
 */
Functional.toDeltaTime = function(track) {
  function toDeltaTimeRec(srcTrack, tmpTrack, index) {
    if (index == srcTrack.length) {
      return; 
    }
    const elt = F.clone(srcTrack[index]);
    elt.deltaTime = (index == 0) ? 0 : srcTrack[index].absTime - srcTrack[index-1].absTime;
    delete elt.absTime;
    tmpTrack.push(elt);
    index++;
  
    toDeltaTimeRec(srcTrack, tmpTrack, index);
  }

  const result = [];
  toDeltaTimeRec(track, result, 0);
  return result;
}


/**
 * Renders a keyboard to html<br>
 *  - all keys have an id="kXX" where XX is a note number<br>
 *  - keys can have a class 'pressed'
 * @return {String} HTML
 */
Functional.keyboard = function () {
  return [
    '<style>',
      '#keybox {width:910px; margin-left: -7px; text-align: center;}',
      '#blackkeys { position: absolute; z-index: 2; padding-left: 10px; margin-left: 41px; width:806px; height: 0px;}',
      '.key { display:inline-block; }',
      '.black { background: black; width: 40px; height: 150px; margin: 0px 11px; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; }',
      '.spacer { display:inline-block; width: 62px; height: 0; }',
      '.white { background: white; width: 60px; height: 250px; border: 1px solid black; border-bottom-right-radius: 5px; border-bottom-left-radius: 5px; }',
      '.pressed { background: gray }',
    '</style>',

    '<div id="keybox">',
      '<div id="blackkeys">',
        '<span id="k61" class="black key"></span>',
        '<span id="k63" class="black key"></span>',
        '<span class="spacer"></span>',
        '<span id="k66" class="black key"></span>',
        '<span id="k68" class="black key"></span>',
        '<span id="k70" class="black key"></span>',
        '<span class="spacer"></span>',
        '<span id="k73" class="black key"></span>',
        '<span id="k75" class="black key"></span>',
        '<span class="spacer"></span>',
        '<span id="k78" class="black key"></span>',
        '<span id="k80" class="black key"></span>',
        '<span id="k82" class="black key"></span>',
      '</div>',
      '<span id="k60" class="white key"></span>',
      '<span id="k62" class="white key"></span>',
      '<span id="k64" class="white key"></span>',
      '<span id="k65" class="white key"></span>',
      '<span id="k67" class="white key"></span>',
      '<span id="k69" class="white key"></span>',
      '<span id="k71" class="white key"></span>',
      '<span id="k72" class="white key"></span>',
      '<span id="k74" class="white key"></span>',
      '<span id="k76" class="white key"></span>',
      '<span id="k77" class="white key"></span>',
      '<span id="k79" class="white key"></span>',
      '<span id="k81" class="white key"></span>',
      '<span id="k83" class="white key"></span>',
    '</div>'
  ].join('');
};

/**
 * Creates a score
 * @return {Object} Object with the methods addNotes() et draw()
 */
Functional.musicSheet = function () {
  var vf = new Vex.Flow.Factory({
    renderer: {selector: 'sandbox', width: 600, height: 600}
  });

  var score = vf.EasyScore();
  var system = vf.System();

  return {
    draw: function () {
      vf.draw();
    },
    addNotes: function (notes) {
      system.addStave({
        voices: [
          score.voice(score.notes(notes.join(', '), {stem: 'up'})).setStrict(false)
        ]
      }).addClef('treble');
    }
  };
}

var noteNames = ['C','C#','D','D#','E','F', 'F#','G','G#', 'A', 'A#', 'B'];

/**
 * Returns the name of a note from a MIDI event
 * @param {Object} event MIDI item
 * @return {String} name of the note
 */
Functional.eventToNoteName = function (event) {
  return noteNames[event.noteNumber % 12]+(Math.floor(event.noteNumber / 12)); 
}

/**
 * Creates a websocket and returns a promise
 * @param {String} host address or IP of the target host
 * @return {Promise} Promise
 */
Functional.createWebSocket = function (host) {
  var deferred = Q.defer();

  var ws = new WebSocket('ws://' + host + ':4321');

  ws.onerror = function (error) {
    deferred.reject(new Error(error));
  };

  ws.onopen = function () {
    deferred.resolve(ws);
  }

  return deferred.promise;
};

/**
 * Does a request to Wikipedia and returns a Promise
 * @param {String} query Wikipedia search
 * @return {Promise} Promise
 */
Functional.wikipedia = function(query) {
  const u = new URLSearchParams();
  u.append('action', 'query');
  u.append('format', 'json');
  u.append('prop', 'extracts');
  u.append('exsentences', '10');
  u.append('explaintext', '1');
  u.append('redirects', '1');
  u.append('titles', query);
 
  const apiCall = fetch('http://fr.wikipedia.org/w/api.php?' + u);
 
  return apiCall.then(function(response) {
    return response.json().then(function(json) {
      return json.query.pages[Object.keys(json.query.pages)[0]].extract;
    });
  });
}

window.F = Functional;

// monkey patch Array.flatMap
Array.prototype.flatMap = function(lambda) { 
  return Array.prototype.concat.apply([], this.map(lambda)) 
};

