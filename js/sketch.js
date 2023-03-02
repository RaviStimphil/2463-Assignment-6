const synth = new Tone.DuoSynth();
const synthMetal = new Tone.MetalSynth();
let metalOn = false;

let notes = {

  'a': 'C5',
  's': 'D5',
  'd': 'E5',
  'f': 'F5',
  'g': 'G5',
  'h': 'A5',
  'j': 'B5',
  'k': 'C6'

}


function setup() {
  createCanvas(400, 400);
  synth.toDestination();
  synthMetal.toDestination();
}

function draw() {
  background(220);

}

function keyPressed() {
  if(keyCode === UP_ARROW){
    console.log('UP_ARROW');
    metalOn = !metalOn;
  }
  else if(metalOn == false){
    let whatNote = notes[key]
    console.log(key);
    synth.harmonicity.value = 1;
    synth.triggerAttackRelease(whatNote, "8n");
  }else{
    let whatNote = notes[key]
    console.log(key);
    synthMetal.harmonicity.value = 1;
    synthMetal.triggerAttackRelease(whatNote, "8n");
  }
  
}