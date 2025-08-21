// Array com os dados dos alunos ordenados por número de chamada
const students = [
  {
    number: 1,
    name: "Adriel Vinicius da Luz Tomaz",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Adriel.jpg",
  },
  {
    number: 2,
    name: "Breno Ferreira de Brito",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Breno.jpg",
  },
  {
    number: 3,
    name: "Carlos Emanuel da Silva",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Carlos.jpg",
  },
  {
    number: 4,
    name: "Cleiton Douglas Araujo de Souza",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Cleiton.jpg",
  },
  {
    number: 5,
    name: "Derek Eduardo Delgado de Souza",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Derek.jpg",
  },
  {
    number: 6,
    name: "Felipe Nader De Macedo Neves",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/SemFoto.png",
  },
  {
    number: 7,
    name: "Gabriel Merico Hort",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Gabriel.jpg",
  },
  {
    number: 8,
    name: "Guilherme Dos Reis Soares dos Santos",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/SemFoto.png",
  },
  {
    number: 9,
    name: "Gustavo Martins Lyra",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Gustavo.jpg",
  },
  {
    number: 10,
    name: "Jackson José Adão Felix",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Jackson.jpg",
  },
   {
    number: 11,
    name: "Janaine Nunes da Silva",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/SemFoto.png",
  },
   {
    number: 12,
    name: "João Gabriel Carmo de Bonfim",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/SemFoto.png",
  },
   {
    number: 13,
    name: "João Gabriel José Martins de Oliveira",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/João josé.jpg",
  },
   {
    number: 14,
    name: "Leonardo Antonio Prado Trindade",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Leo.jpg",
  },
   {
    number: 15,
    name: "Lucas Calciolari Consolaro dos Santos",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Lucas.jpg",
  },
   {
    number: 16,
    name: "Maria Eduarda Borzuk da Fonseca Urbanski",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Borzuk.jpg",
  },
   {
    number: 17,
    name: "Maria Gabriela Aquino Pinheiro",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/SemFoto.png",
  },
   {
    number: 18,
    name: "Mateus Henrique de Carvalho",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Mateus.jpg",
  },
   {
    number: 19,
    name: "Matheus dos Santos Lopes",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Matheus Lopes.jpg",
  },
   {
    number: 20,
    name: "Pedro Eduardo Doarte",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/SemFoto.png",
  },
   {
    number: 21,
    name: "Renan Stefani Lira",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Renan.jpg",
  },
   {
    number: 22,
    name: "Sabrina de Oliveira Alves",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Sabrina.jpg",
  },
   {
    number: 23,
    name: "Samantha Christakis Garcia Colucci",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Samantha.jpg",
  },
   {
    number: 24,
    name: "Victor Gabriel de Sousa",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/VItor Gabriel.jpg",
  },
   {
    number: 25,
    name: "Vitor Queiroz de Brito Nascimento",
    course: "Desenvolvimento de Sistemas",
    photo: "Img/Queiroz.jpg",
  },
]

// Função para criar o HTML de um card de aluno
function createStudentCard(student) {
  return `
        <div class="student-card" onclick="togglePhotoSize(${student.number})">
            <div class="image-container">
                <img 
                    src="${student.photo}" 
                    alt="Foto de ${student.name}" 
                    class="student-photo" 
                    id="photo-${student.number}"
                >
                <div class="click-indicator">Clique para redimensionar</div>
            </div>
            <div class="student-info">
                <div class="student-number">${student.number}</div>
                <div class="student-name">${student.name}</div>
                <div class="student-course">${student.course}</div>
            </div>
        </div>
    `
}

// Função para alternar o tamanho da foto (maior/menor)
function togglePhotoSize(studentNumber) {
  // Busca a foto específica pelo ID
  const photo = document.getElementById(`photo-${studentNumber}`)

  // Alterna a classe 'clicked' que aplica o efeito de redução
  photo.classList.toggle("clicked")

  // Feedback visual opcional (pode ser removido)
  console.log(`Foto do aluno ${studentNumber} foi ${photo.classList.contains("clicked") ? "reduzida" : "restaurada"}`)
}

// Função para renderizar todos os alunos na galeria
function renderGallery() {
  // Pega o container da galeria
  const galleryGrid = document.getElementById("galleryGrid")

  // Limpa o conteúdo atual (se houver)
  galleryGrid.innerHTML = ""

  // Cria e insere cada card de aluno
  students.forEach((student) => {
    galleryGrid.innerHTML += createStudentCard(student)
  })

  console.log(`Galeria renderizada com ${students.length} alunos`)
}

// Função para adicionar um novo aluno (funcionalidade extra)
function addStudent(name, course, photoUrl) {
  // Calcula o próximo número de chamada
  const nextNumber = students.length + 1

  // Cria o objeto do novo aluno
  const newStudent = {
    number: nextNumber,
    name: name,
    course: course,
    photo: photoUrl || `/placeholder.svg?height=300&width=250&query=student+portrait+${name}`,
  }

  // Adiciona ao array de alunos
  students.push(newStudent)

  // Re-renderiza a galeria
  renderGallery()

  console.log(`Novo aluno adicionado: ${name}`)
}

// Função para buscar aluno por nome
function searchStudent(searchTerm) {
  // Filtra alunos que contenham o termo de busca no nome
  const results = students.filter((student) => student.name.toLowerCase().includes(searchTerm.toLowerCase()))

  console.log(`Encontrados ${results.length} alunos para "${searchTerm}":`, results)
  return results
}

// Event listener para quando a página carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  // Renderiza a galeria inicial
  renderGallery()

  // Log de inicialização
  console.log("Galeria de fotos inicializada com sucesso!")
  console.log(`Total de alunos: ${students.length}`)
})

// Função para resetar todas as fotos ao tamanho original
function resetAllPhotos() {
  students.forEach((student) => {
    const photo = document.getElementById(`photo-${student.number}`)
    if (photo && photo.classList.contains("clicked")) {
      photo.classList.remove("clicked")
    }
  })
  console.log("Todas as fotos foram resetadas ao tamanho original")
}

// Adiciona atalho de teclado para resetar fotos (tecla R)
document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "r") {
    resetAllPhotos()
  }
})
