
export default function UserTypingListener() {
    function keyDown(keyPressed){
        console.log(keyPressed);
    }

    return (
        <div className="usertypinglistner" style={{position:'absolute', height:100 + '%', width:100+'%'}} onKeyDown={keyDown} tabIndex={-1}></div>
    )
}