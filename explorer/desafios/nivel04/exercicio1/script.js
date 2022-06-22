let numberOne, numberTwo, result

numberOne = Number(prompt('Digite o Primeiro Número'))
numberTwo = Number(prompt('Digite o Segundo Número '))

result = numberOne + numberTwo
alert(`A soma dos Numeros é ${result}`)
result = numberOne - numberTwo
alert(`A subtração dos Numeros é ${result}`)
result = numberOne * numberTwo
alert(`A Multiplicação dos Numeros é ${result}`)
result = numberOne / numberTwo
alert(`A divisão dos Numeros é ${result}`)
result = numberOne % numberTwo
alert(`O resto da divisão dos Numeros é ${result}`)

if (((numberOne + numberTwo) % 2) == 0) {
  alert('A soma dos Numeros é par')
} else {
  alert('A soma dos numeros é impar')
}

if (numberOne == num){ 
  alert('Os numeros são iguais')
} else {
  alert('Os numeros são deferentes')
}