/*==============================================================================
  Encontre a solução ao problema:

  Pergunte o nome do usuário e escreva a mensagem:
  "Olá, [nome do usuário]"

let nome = prompt("Qual o seu nome?")
alert("Olá, " + nome)
==============================================================================*/



/*==============================================================================
  Solicite 2 números, faça a soma deles
  e apresente o resultado final ao usuário


alert("Iremos somar 2 números")
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let result = Number(numberOne) + Number(numberTwo)
alert("Resultado final: " + result)
==============================================================================*/



/*==============================================================================
  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.


let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)
==============================================================================*/



/*==============================================================================
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota


let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if (average < 3) {
  alert("Reprovado")
} else {
  alert(student + " estude para sua prova de recuperação! 
  Sua média foi de: " +  average)
}
==============================================================================*/



/*==============================================================================
  Capture 10 items para compor a lista de um supermercado.
  
  Após capturar os 10 items, imprima-os, separando por vírgula.


let items = [];

for(let item = 0; item < 2; item++) {
  let itemName = prompt("Digite o item " + (item + 1))

  items[item] = itemName
}

alert(items)
==============================================================================*/




/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo 
  sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas


let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o 
número em ${xAttempts} tentativas`)
==============================================================================*/



/*==============================================================================

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o 
  seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.



let option
let items = []

while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))
  
  
  if(option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item) 
  }
  
  else if (option == 2) {
  
    if(items.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(items)
    }
  
  } else {
    alert("Tchau")
  }
  
  console.log(option, items)

}
==============================================================================*/


/*==============================================================================

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o 
  seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.



let option
let items = []

while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))

  switch(option) {
    case 1:
      let item = prompt("Digite o nome do item")
      items.push(item) 
      break
    case 2:
      if(items.length == 0) {
        alert("Não existem itens cadastrados")
      } else {
        alert(items)
      }
      break
    case 3: 
      alert("Tchau")
      break
    default:
      alert("Opção inválida. Tente novamente")
  }

}
==============================================================================*/




/* =============================================================================
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes


const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
]

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(patient.name)
}

alert(patientsNames)
==============================================================================*/



/*============================================================================== 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}