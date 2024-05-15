import React, { useEffect } from 'react';
import soundQ from './assets/Heater-1.mp3';
import soundW from './assets/Heater-2.mp3';
import soundE from './assets/Heater-3.mp3';
import soundA from './assets/Heater-4.mp3';
import soundS from './assets/Clap.mp3';
import soundD from './assets/Open-HH.mp3';
import soundZ from './assets/Kick-n-Hat.mp3';
import soundX from './assets/Kick.mp3';
import soundC from './assets/Closed-HH.mp3';
import './App.css'

function App() {

  const playAudio = (event) => {
    const audioKey = event.key
		? event.key.toUpperCase()
		: event.currentTarget.id;
    const audio = document.querySelector(`audio#${audioKey}`)
    if (audio) {
      console.log(audioKey);
      audio.currentTime = 0;
      audio.play();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', playAudio);
    return () => {
      window.removeEventListener('keydown', playAudio);
    }
  }, [playAudio]);

  return (
		<>
			<div id='drum-machine'>
				<div id='display'>
					<button
						className='drum-pad'
						id='Q'
						onClick={playAudio}
					>
						<audio
							src={soundQ}
							className='clip'
							type='audio/mpeg'
							id='Q'
						></audio>
						Q<span>Heater 1</span>
					</button>
					<button
						className='drum-pad'
						id='W'
						onClick={playAudio}
					>
						<audio
							src={soundW}
							className='clip'
							type='audio/mpeg'
							id='W'
						></audio>
						W<span>Heater 2</span>
					</button>
					<button
						className='drum-pad'
						id='E'
						onClick={playAudio}
					>
						<audio
							src={soundE}
							className='clip'
							type='audio/mpeg'
							id='E'
						></audio>
						E<span>Heater 3</span>
					</button>
					<button
						className='drum-pad'
						id='A'
						onClick={playAudio}
					>
						<audio
							src={soundA}
							className='clip'
							type='audio/mpeg'
							id='A'
						></audio>
						A<span>Heater 4</span>
					</button>
					<button
						className='drum-pad'
						id='S'
						onClick={playAudio}
					>
						<audio
							src={soundS}
							className='clip'
							type='audio/mpeg'
							id='S'
						></audio>
						S<span>Clap</span>
					</button>
					<button
						className='drum-pad'
						id='D'
						onClick={playAudio}
					>
						<audio
							src={soundD}
							className='clip'
							type='audio/mpeg'
							id='D'
						></audio>
						D<span>Open-HH</span>
					</button>
					<button
						className='drum-pad'
						id='Z'
						onClick={playAudio}
					>
						<audio
							src={soundZ}
							className='clip'
							type='audio/mpeg'
							id='Z'
						></audio>
						Z<span>Kick n' Hat</span>
					</button>
					<button
						className='drum-pad'
						id='X'
						onClick={playAudio}
					>
						<audio
							src={soundX}
							className='clip'
							type='audio/mpeg'
							id='X'
						></audio>
						X<span>Kick</span>
					</button>
					<button
						className='drum-pad'
						id='C'
						onClick={playAudio}
					>
						<audio
							src={soundC}
							className='clip'
							type='audio/mpeg'
							id='C'
						></audio>
						C<span>Closed-HH</span>
					</button>
				</div>
			</div>
		</>
  );
}

export default App
