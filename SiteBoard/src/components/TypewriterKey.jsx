import { useEffect, useRef, useState } from "react";



export default function TypewriterKey({majorKey, minorKey}) {
    const audioEffect = new Audio("/audio/TypewriterClickA.wav")

    function playAudio(){
        if(audioEffect.readyState === 4){
            audioEffect.currentTime = 0;
            audioEffect.play();
        }
    }

    return (
        <button className="typewriterkey" onClick={playAudio}>{majorKey}</button>
    );


}