let amount = document.querySelector('#amount')
let percentage = document.querySelector('#percentage')
let calculate = document.querySelector('#calculate')
let answer = document.querySelector('#answer')

function interestAmount(amount, percentage){
    percentage = percentage.slice(0, -1); 
    return "R" + eval(amount * percentage/100)
}
calculate.addEventListener('click', ()=>{
    answer.innerHTML = interestAmount(amount.value, percentage.value)
})

console.log(interestAmount(1000,'15%'))  