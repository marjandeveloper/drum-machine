import { useState } from 'react'
import './App.scss'

function App() {
  const dataBankA = [
    {
      heyCode: 81,
      keyText: 'Q',
      id: 'Tom1',
      display: 'Tom 1',
      url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/79[kb]606-tom1.wav.mp3',
    },
    {
      heyCode: 87,
      keyText: 'W',
      id: 'Tom2',
      display: 'Tom 2',
      url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/606%20Basic/77[kb]606-tom2.wav.mp3',
    },
    {
      heyCode: 69,
      keyText: 'E',
      id: 'Midtom',
      display: 'Midtom',
      url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/42[kb]midtom.wav.mp3',
    },
    {
      keyCode: 65,
      keyText: 'A',
      id: 'Ambient_tom_1',
      display: 'Ambient tom 1',
      url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/264[kb]ambient_tom_1.wav.mp3',
    },
    {
      keyCode: 83,
      keyText: 'S',
      id: 'Ambient_tom_2',
      display: 'Ambient tom 2',
      url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/311[kb]ambient_tom_2.wav.mp3',
    },
    {
      keyCode: 68,
      keyText: 'D',
      id: 'Acoustic_snare',
      display: 'Acoustic snare',
      url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/61[kb]acoustic_snare.wav.mp3',
    },
    {
      keyCode: 90,
      keyText: 'Z',
      id: 'Basic-ekick',
      display: 'Basic ekick',
      url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/120[kb]basic-ekick.wav.mp3',
    },
    {
      keyCode: 88,
      keyText: 'X',
      id: 'Kick',
      display: 'Kick',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
      keyCode: 67,
      keyText: 'C',
      id: 'Kick-hat-inxs',
      display: 'Kick hat inxs',
      url: 'https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/81[kb]kick-hat-inxs.wav.mp3',
    },
  ]

  const [displeyText, setDispleyText] = useState('')
  const playSound = (el) => {
    setDispleyText(el.target.firstChild.getAttribute('data-display'))
    return el.target.firstChild.play()
  }

  const showDrumPad = dataBankA.map((el) => {
    return (
      <button
        className='drum-pad'
        id={el.keyText}
        key={el.keyText}
        onClick={playSound}
      >
        <audio
          className='clip'
          data-display={el.keyText}
          src={el.url}
          id={el.keyText}
        ></audio>
        {el.keyText}
      </button>
    )
  })
  return (
    <div className='App'>
      <div id='drum-machine'>
        <div id='title'>Drum Machine</div>
        <div id='content'>
          <div id='drum-pads'>{showDrumPad}</div>
          <div id='display'>
            <div className='contentText'>
              Text:
              <span> {displeyText}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
