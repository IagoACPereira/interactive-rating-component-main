let opt = undefined
const rate = document.querySelector('span#rate')
const rating = document.querySelector('div#rating')
const tank_you = document.querySelector('div#tank_you')
const btn_options = document.querySelectorAll('button.btn_options')

tank_you.style.display = 'none'

function btnOption(param) {
    for (let i = 0; i < 5; i++) {
        btn_options[i].style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
        btn_options[i].style.color = 'hsl(217, 12%, 63%)'
    }

    opt = Number(param)
    btn_options[opt - 1].style.backgroundColor = 'hsl(25, 97%, 53%)'
    btn_options[opt - 1].style.color = 'hsl(0, 0%, 100%)'
}

function submit() {
    if (opt == undefined) {
        alert('No options have been selected.')
    } else {
        rating.style.display = 'none'
        tank_you.style.display = 'flex'
        rate.innerHTML = opt
    } 
}