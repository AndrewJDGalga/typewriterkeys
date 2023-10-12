import { useState } from "react";

export default function KeyWatcher() {
    const [keyFired, setKeyFired] = useState("");
    const [inputPressed, setInputPressed] = useState(false);

    document.addEventListener("keydown", (event)=>{
        if(inputPressed) return;
        setInputPressed(true);
        setKeyFired(event.key);
    });
    document.addEventListener("keyup", ()=>{
        setInputPressed(false);
        setKeyFired("");
    });

    console.log(keyFired);
    
    return (
        <>
        </>
    );
}