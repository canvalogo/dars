const body = document.querySelector('body')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

function lightmode() {
    body.classList.remove('bg-black')
    body.classList.remove('text-white')
    let badyBg = body.classList.add('bg-orange-200')
    let textColor = body.classList.add('text-black')
    console.log(body);
    
    return badyBg, textColor 
}

function darkmode() {
    body.classList.remove('bg-orange-200')
    body.classList.remove('text-black')
    let badyBg = body.classList.add('bg-black')
    let textColor = body.classList.add('text-white')

    return badyBg, textColor
}
