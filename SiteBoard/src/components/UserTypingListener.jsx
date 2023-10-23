
export default function UserTypingListener() {
    function keyDown(keyPressed){
        console.log(keyPressed);
    }

    return (
        <div style={{height:100 + 'vh', width:100+'%'}} onKeyDown={keyDown} tabIndex={-1}></div>
    )
}