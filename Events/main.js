const clickHandler = () => {
    alert(`You catched me`)
}
const hoverHandler = () => {
    alert(`Don't click me`)
}

/////////////////////////////////
// Syntax: EventTarget.addEventListener(>namespace>, >callback>)

document.getElementById('test').addEventListener('click',clickHandler)

////onkeyup

document.querySelector('input').addEventListener('keyup',e => {
    console.log(e);
    if (e.key === 'Enter') {
        alert(e.target.value)
    }
})

addEventListener 