
export default function UserTypingListener({relayFunction}) {
    
    function keyPressed(keyPressed) {
        relayFunction(keyPressed.key, true);
    }

    function keyReleased(keyReleased){
        relayFunction(keyReleased.key, false);
    }

    return (
        <div className="usertypinglistner" onKeyDown={keyPressed} onKeyUp={keyReleased} tabIndex={-1}></div>
    )
}