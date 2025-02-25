import React from 'react'
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;

} // função para formatar o tempo em minutos e segundos retronado pelo audio

const timeInSeconds = (timeString)=> {
    const splitTime = timeString.split(':');
    const minutes = Number(splitTime[0]);
    const seconds = Number(splitTime[1]);
    return (minutes * 60) + seconds;
} //converte o tempo total do audio em segundos


export default function Player({ duration, randomIdFromArtist, randomId2FromArtist, audio }) {
    const audioPlayer = useRef(); // referencia para o audio e seus metodos
    const progressBar = useRef(); // referencia para o progressBar e seus metodos
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(formatTime(0));
    // console.log(audioPlayer.current.play())
    const durationInSeconds = timeInSeconds(duration);
    // console.log(durationInSeconds)

    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play(); // se isPlaying for true, o audioPlayer.current.play() é executado, se não, o audioPlayer.current.pause() é executado
        setIsPlaying(!isPlaying); // troca o estado do isPlaying para true ou false
        setCurrentTime(formatTime(audioPlayer.current.currentTime)); // atualiza o tempo at
        // console.log(formatTime(audioPlayer.current.currentTime))
    } // função para pausar ou tocar o audio

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (isPlaying) setCurrentTime(formatTime(audioPlayer.current.currentTime));
            progressBar.current.style.setProperty('--_progress', `${(audioPlayer.current.currentTime / durationInSeconds) * 100}%`); // atualiza o tempo do progressBar
        }, 1000); // atualiza o tempo a cada 1 segundo
        return () => clearInterval(intervalId); // limpa o intervalo quando o componente é desmontado
    }, [isPlaying]); // atualiza o tempo a cada 1 segundo




  return (
    <div className='player'>
        <div className='player__controllers'>
            
            <Link to={`/song/${randomIdFromArtist}`}>
                <FontAwesomeIcon className='player__icon player__icon--play' icon={faBackwardStep} />
            </Link>

            <FontAwesomeIcon className='player__icon player__icon--play' icon={isPlaying ? faCirclePause  : 
                faCirclePlay
            } 
            onClick={()=>{ playPause()}}/>
            
            <Link to={`/song/${randomId2FromArtist}`}>
                <FontAwesomeIcon className='player__icon player__icon--play' icon={faForwardStep} />
            </Link>
        </div>

        <div className='player__progress'>

            <p>{currentTime}</p>

            <div className='player__bar'>
                <div className='player__bar-progress' ref={progressBar}></div>
            </div>

            <p>{duration}</p>

        </div>

        <audio src={audio} ref={audioPlayer}></audio>
    </div>
  )
}
//duration - é a duração da musica passada como prop
//randomIdFromArtist - é o id da musica aleatoria do artista passada como prop
//randomId2FromArtist - é o id da 2° musica aleatoria do artista passada como prop
