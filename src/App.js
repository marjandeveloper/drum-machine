import './App.scss'

const dataBankA = [
  {
    heyCode: 81,
    keyText: 'Q',
    id: 'Tom1',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/79[kb]606-tom1.wav.mp3',
  },
  {
    heyCode: 87,
    keyText: 'W',
    id: 'Tom2',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/77[kb]606-tom2.wav.mp3',
  },
  {
    heyCode: 69,
    keyText: 'E',
    id: 'Midtom',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3',
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Ambient_tom_1',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/264[kb]ambient_tom_1.wav.mp3',
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Ambient_tom_2',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/311[kb]ambient_tom_2.wav.mp3',
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Acoustic_snare',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3',
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Basic-ekick',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/120[kb]basic-ekick.wav.mp3',
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Kick-hat-inxs',
    url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/81[kb]kick-hat-inxs.wav.mp3',
  },
]

function App() {
  return (
    <div className='App'>
      <div className='drum-machine'>
        <div id='drum-pads'>
          <button className='drum-pad' id='Q'>
            Q
          </button>
          <button className='drum-pad' id='W'>
            W
          </button>
          <button className='drum-pad' id='E'>
            E
          </button>
          <button className='drum-pad' id='A'>
            A
          </button>
          <button className='drum-pad' id='S'>
            S
          </button>
          <button className='drum-pad' id='D'>
            D
          </button>
          <button className='drum-pad' id='Z'>
            Z
          </button>
          <button className='drum-pad' id='X'>
            X
          </button>
          <button className='drum-pad' id='C'>
            C
          </button>
        </div>
        <div id='display'></div>
      </div>
    </div>
  )
}

export default App
