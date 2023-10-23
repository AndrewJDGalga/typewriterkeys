import { useEffect, useState, useCallback } from "react";

export default function TypewriterKey({majorKey, minorKey, passKeyUp, pressed}) {
    //const audioEffect = new Audio("/audio/TypewriterClickA.wav");
    const [selectedKey, setSelectedKey] = useState(pressed);
    let curKey = majorKey;

    const keypressed = useCallback((e)=>{
        if(e.key == majorKey && !selectedKey) {
            mouseDown();
        } else if (e.key == majorKey && selectedKey) {
            mouseUp();
        }
    })
    /*
    useEffect(()=>{
        document.addEventListener("keydown", keypressed);
        return ()=> document.removeEventListener("keydown", keypressed);
    }, [keypressed]);
    */

    //document.addEventListener("keyup", keypressed);

    function mouseDown(){
        //console.log('down');
        passKeyUp(curKey);
        setSelectedKey(true);

    }
    function mouseUp(){
        //console.log('up');
        setSelectedKey(false);
    }

    function keyPressed(key){
        console.log(key);
    }

    /*
    function playAudio(){
        if(audioEffect.readyState === 4){
            audioEffect.currentTime = 0;
            audioEffect.play();
        }
    }*/

    return (
        <button className={pressed ? "typewriterkey typewriterkey_active" : "typewriterkey"} onMouseDown={mouseDown} onMouseUp={mouseUp} >{majorKey}</button>
    );
}
