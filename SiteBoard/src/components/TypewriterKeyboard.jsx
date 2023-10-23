import { useCallback, useEffect, useState } from "react";
import TypewriterKey from "./TypewriterKey";
import UserTypingListener from "./UserTypingListener";
import keyData from "../data/keyData";

export default function TypewriterKeyboard() {
    const audioEffect = new Audio("/audio/TypewriterClickA.wav");
    const [keySrc, setKeySrc] = useState(keyData);

    const keyHandler = (operationKey) => {
        console.log(operationKey);
    }

    const keyBoard = keySrc.map((newKey)=>{
        return <TypewriterKey key={newKey.id} majorKey={newKey.major} minorKey={newKey.minor} passKeyUp={keyHandler} pressed={newKey.pressed}/>
      })

    return (
        <div className="inputContainer">
            <UserTypingListener />
            {keyBoard}
        </div>
    )
}