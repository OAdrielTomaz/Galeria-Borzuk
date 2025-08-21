// Array com os dados dos alunos ordenados por número de chamada
const students = [
  {
    number: 1,
    name: "Ana Silva",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
  },
  {
    number: 2,
    name: "Bruno Santos",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
  },
  {
    number: 3,
    name: "Carla Oliveira",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
  },
  {
    number: 4,
    name: "Diego Costa",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
  },
  {
    number: 5,
    name: "Elena Rodriguez",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
  },
  {
    number: 6,
    name: "Felipe Lima",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
  },
  {
    number: 7,
    name: "Gabriela Ferreira",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
  },
  {
    number: 8,
    name: "Hugo Almeida",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
  },
  {
    number: 9,
    name: "Isabela Martins",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
  },
  {
    number: 10,
    name: "João Pedro",
    course: "Desenvolvimento Web",
    photo: "/placeholder.svg?height=300&width=250",
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
