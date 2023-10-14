import { useEffect, useState, useCallback } from "react";

export default function TypewriterKey({majorKey, minorKey}) {
    const audioEffect = new Audio("/audio/TypewriterClickA.wav");
    const [selectedKey, setSelectedKey] = useState(false);
    
    const keypressed = useCallback((e)=>{
        if(e.key == majorKey) {
            console.log(majorKey);
        }
    })

    useEffect(()=>{
        document.addEventListener("keydown", keypressed);
        return ()=> document.removeEventListener("keydown", keypressed);
    }, [keypressed]);

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

/*
const [clicked, setClicked] = useState(false);
const btn = <button className="typewriterkey" onMouseDown={handleClick} onMouseUp={handleRelease}>{majorKey}</button>

onMouseDown={handleClick} onMouseUp={handleRelease}
function handleClick(thing){
    //btn.classList.add('active');
    setClicked(true);
    thing.isActive = clicked;
}

function handleRelease(thing) {
    setClicked(false);
    thing.isActive = clicked;
}
*/