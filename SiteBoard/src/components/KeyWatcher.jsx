import { useCallback, useEffect, useState } from "react";
import TypewriterKey from "./TypewriterKey";

export default function KeyWatcher() {
    //const [keyFired, setKeyFired] = useState(null);

    const keypressed = useCallback((e)=>{
        console.log(e.key);
    })

    useEffect(()=>{
        document.addEventListener("keydown", keypressed);
        return ()=> document.removeEventListener("keydown", keypressed);
    }, [keypressed]);

    return (
        <div>
            <TypewriterKey majorKey={"a"} minorKey={"A"}  />
        </div>
    );
}