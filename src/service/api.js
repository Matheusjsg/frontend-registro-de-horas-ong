////////////////////////////////  ATIVIDADE  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const atividadeAPI = "https://atividades-voluntariado.onrender.com/atividades"

export const fetchAtividades = async () => {

 const response = await fetch(`${atividadeAPI}/listar`)


 if(response.status === 204) return []

 return await response.json()
}

export const registarAtividade = async (atividade) => {

 await fetch(`${atividadeAPI}/criar`, {
  method:"POST",
  headers:{
   "Content-Type":"application/json"},
  body: JSON.stringify(atividade)
 })
}

///////////////////////////////   SETORES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
   
const setoresAPI = "https://atividades-voluntariado.onrender.com/setores"

export const fetchSetores = async () => {

 const response = await fetch(`${setoresAPI}/listar`)


 if(response.status === 204) return []

 return await response.json()
}

export const criarSetor = async (setor) => {

 await fetch(`${setoresAPI}/criar`, {
  method:"POST",
  headers:{
   "Content-Type":"application/json"},
  body: JSON.stringify(setor)
 })
}


////////////////////////////////////// VOLUNTÁRIO \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


const voluntarioAPI = "https://atividades-voluntariado.onrender.com/voluntarios"

export const fetchVoluntarios = async() => {

    const response = await fetch(`${voluntarioAPI}/listar`)

        if(response.status === 204) return []

        return await response.json()
}

export const criarVoluntario = async (setor) => {

 await fetch(`${voluntarioAPI}/criar`, {
  method:"POST",
  headers:{
   "Content-Type":"application/json"},
  body: JSON.stringify(setor)
 })
}


