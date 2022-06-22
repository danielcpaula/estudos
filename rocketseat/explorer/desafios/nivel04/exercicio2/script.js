const students = [
  {
    name: "Pedro",
    assessmentOne: 3,
    assessmentTwo: 5,
  },
  {
    name: "Felipe",
    assessmentOne: 9,
    assessmentTwo: 10,
  },
  {
    name: "Solange",
    assessmentOne: 7,
    assessmentTwo: 8,
  },
  {
    name: "Sinara",
    assessmentOne: 5,
    assessmentTwo: 9,
  },
]

function gradeCalculate(student) {
  result = ((student.assessmentOne + student.assessmentTwo) /  2).toFixed(2)
  return result
}

function checkStatus(result, student) {
  if(result >= 7) {
    alert(`A média do(a) aluno(o) ${student.name} é:  ${result}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso`)
  } else {
    alert(` A média do(a) aluno(o) ${student.name} é: ${result}
    Não foi dessa vez ${student.name}! Tente novamente!`)
  }
}

for (student of students) {
  let result = gradeCalculate(student)
  checkStatus(result, student)
}





