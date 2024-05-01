/*const url = 'https://jsonplaceholder.typicode.com/users'

const response = fetch(url)
response.then( res => res.json()).then((dados) => {
    for (const data of dados) {
        const div = document.createElement('div')
        div.innerHTML = `<h1>${data.name}</h1> <p> Phone: ${data.phone}</p>`
        document.body.append(div)
    }
})*/
const imagem = document.querySelector('.pokemon-image')
const nome = document.querySelector('.pokemon-name')
const numero = document.querySelector('.pokemon-number')

const form = document.querySelector('.form')
const input = document.querySelector('.buscar')
const bPrev = document.querySelector('.btn-prev')
const bNext = document.querySelector('.btn-next')

let pokemonAtual = 1

async function loadPokemon(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}



async function renderPokemon(pokemon){
    nome.innerHTML = 'Carregando ...'
    numero.innerHTML = ''
    const data = await loadPokemon(pokemon)
    if (data) {
        imagem.style.display = 'block'
        nome.innerHTML = data.name
        numero.innerHTML = data.id
        imagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    }
}

renderPokemon(pokemonAtual)