
export default function UserTypingListener() {
    function keyDown(keyPressed){
        console.log(keyPressed);
    }

    return (
        <div className="usertypinglistner" onKeyDown={keyDown} tabIndex={-1}></div>
    )
}