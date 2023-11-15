const containerRelated = document.getElementById('related')
const carouselContainer = document.getElementById('carousel-container');
const contentRelated = document.getElementById('content-related');

const containerActor = document.getElementById('cast')
const contentCast = document.getElementById('content-cast')
const ulActor = document.getElementById('cast-ul')

const btnOpen = document.querySelector('.btn')
const bttnOpen = document.querySelector('.btn-open')
const btnClose = document.getElementById('btn-close')
const modal = document.getElementById('modal')

const modalRelated = document.getElementById('modal-related')
const modalRelatedContent = document.getElementById('modal-related-content')

const castAbout = document.getElementById('cast-about')
const actorInfo = document.getElementById('actor-info') 
const closeCastAbout = document.getElementById('cast-about-p')

const relatedMedias = [
    {id:1, title:'See', image: 'https://is1-ssl.mzstatic.com/image/thumb/v_Oue2lmChyhjAfjMi_0eg/738x416.webp', image_sec:'https://is1-ssl.mzstatic.com/image/thumb/rV4S9xWc5p3ow4CuIZ5sTg/3358x1889sr.jpg', desc:'Em um futuro distante no qual a humanidade perdeu o sentido da visão, Baba Voss (Jason Momoa) é pai de gêmeos que conseguem enxergar e precisa proteger sua tribo contra uma poderosa rainha. Com Dave Bautista e Alfre Woodard.'},
    {id:2, title:'Fundação', image: 'https://is1-ssl.mzstatic.com/image/thumb/dG02IJQ4XhD05Z5dkoMrRw/738x416.webp', image_sec:'https://is1-ssl.mzstatic.com/image/thumb/tQAjZ49TxWviswDqumNqBw/3358x1889sr.webp', desc:'Baseado nos romances premiados de Isaac Asimov, Fundação conta a crônica de um grupo de exilados em sua jornada monumental para salvar a humanidade e reconstruir a civilização em meio à queda do Império Galáctico.'},
    {id:3, title:'A Casa do Dragão', image: 'https://is1-ssl.mzstatic.com/image/thumb/3MPnSp7vXO314TlOtAt7SQ/738x416.webp', image_sec:'https://is1-ssl.mzstatic.com/image/thumb/3MPnSp7vXO314TlOtAt7SQ/738x416.webp', desc:'Os apoiadores de Aegon Targaryen entram em conflito com os adeptos de sua meia-irmã, Rhaenyra, pelo trono de Viserys I, seu falecido pai, iniciando uma guerra civil cerca de 200 anos antes dos eventos retratados em "Game of Thrones".'},
    {id:4, title:'A Roda do Tempo', image: 'https://is1-ssl.mzstatic.com/image/thumb/WchcOxJP40XKB9Vqc7D4xA/738x416.webp', image_sec:'https://is1-ssl.mzstatic.com/image/thumb/WchcOxJP40XKB9Vqc7D4xA/738x416.webp', desc:'Moiraine, membro de uma organização mágica, leva cinco jovens em uma jornada cheia de desafios, acreditando que um deles pode ser o Dragão Renascido, um indivíduo poderoso que, segundo a profecia, irá salvar ou destruir o mundo.'},
    {id:5, title:'O Conto de Aia', image: 'https://is1-ssl.mzstatic.com/image/thumb/aDmCLokb7nEshabhH85ANQ/738x416.webp', image_sec:'https://is1-ssl.mzstatic.com/image/thumb/SJ5JyTDBMj5N3UEDIBXaFA/3358x1889sr.webp', desc:'Gilead tem um regime que trata mulheres como propriedade. Offred é uma das poucas mulheres férteis e serva do Comandante, buscando sobreviver e encontrar a filha que foi tirada dela.', href:''}
]

let idx = 0;
const length = relatedMedias.length

const actors = [
    {id:1, name:'Peter Dinklage', character:'Tyrion Lannister', image:'https://is1-ssl.mzstatic.com/image/thumb/2bPrLNcnuFbZyt3ghzALJw/492x492ve.webp', desc:'Peter Hayden Dinklage é um premiado e aclamado ator americano. Já atuou em filmes como The Station Agent, Elf, Underdog, Find Me Guilty e The Chronicles of Narnia: Prince Caspian. De 2011 a 2019, interpretou Tyrion Lannister na série de televisão Game of Thrones da HBO, baseada na série de livros A Song of Ice and Fire, de George R. R. Martin, vencendo quatro Emmys de Melhor Ator Coadjuvante em Série Dramática e um Globo de Ouro de Melhor Ator Coadjuvante em Televisão.'},
    {id:2, name:'Emilia Clarke', character:'Daenerys Targaryen', image:'https://is1-ssl.mzstatic.com/image/thumb/8wI_--cs7AxWTruGYQsu2A/492x492bb.webp', desc:'Emilia Isobel Euphemia Rose Clarke é uma atriz britânica. Ela é mais conhecida por sua interpretação de Daenerys Targaryen em Game of Thrones. Ela recebeu vários prêmios, incluindo um Empire Award, um Saturn Award, três indicações ao Critics Choice Award e quatro indicações ao Primetime Emmy Award. Em 2019, a Time a nomeou uma das 100 pessoas mais influentes do mundo.'},
    {id:3, name:'Kit Harington', character:'Jon Snow', image:'https://is1-ssl.mzstatic.com/image/thumb/HjWAUBlyN9suycFagYzN5g/492x492ve.webp', desc:'Christopher Catesby Harington é um ator britânico. É mais conhecido por interpretar Jon Snow na série televisiva Game of Thrones da HBO.'},
    {id:4, name:'Lena Headey', character:'Cersei Lannister', image:'https://is1-ssl.mzstatic.com/image/thumb/zkngU_kScKVt45NvOfPiIg/492x492bb.webp', desc:'Lena Kathren Headey é uma atriz britânica, conhecida principalmente por interpretar a personagem Cersei Lannister na série de televisão "Game of Thrones" do HBO.'},
    {id:5, name:'Nicolaj Coster-Waldau', character:'Ser Jaime Lannister', image:'https://is1-ssl.mzstatic.com/image/thumb/DpQYfL2VnP9qZARJNoSBhg/492x492ve.webp', desc:'Nikolaj Coster-Waldau é um ator dinamarquês. É mais conhecido por interpretar Jaime Lannister na série de televisão Game of Thrones da HBO.'},
    {id:6, name:'Maisie Williams', character:'Arya Stark', image:'https://is1-ssl.mzstatic.com/image/thumb/XSzOVRCYZaZbQoLI4CXGsg/492x492ve.webp', desc:'Margaret Constance "Maisie" Williams é uma atriz britânica, conhecida por interpretar Arya Stark na série de televisão Game of Thrones da HBO, pela qual foi indicada para o Emmy de Melhor Atriz Coadjuvante em Série Dramática, em 2016 e 2019.'},
    {id:7, name:'Sophia Turner', character:'Sansa Stark', image:'https://is1-ssl.mzstatic.com/image/thumb/T3CFJM579J5nDYlH2JDdNg/492x492bb.webp', desc:'Sophie Belinda Turner, é uma atriz britânica, mais conhecida por seus papéis como Sansa Stark na série de televisão Game of Thrones da HBO e como a jovem Jean Grey na franquia X-Men.'},
    {id:8, name:'Isaac Hempstead', character:'Bran Stark', image:'https://is1-ssl.mzstatic.com/image/thumb/XNSUYD3ceawNmCe5niWVhQ/492x492bb.webp', desc:'Isaac Hempstead-Wright é um ator e dublador britânico, mais conhecido por interpretar Bran Stark na série de televisão Game of Thrones da HBO.'} 
]

function carousel(){
    idx ++;

    if (idx > length - 1){
        idx = 0;
    }

    contentRelated.style.transform = `translateX(${-idx * 290}px)`;
}

setInterval(carousel, 1800)


function getCardsRelated(media){
    modalRelatedContent.innerHTML = ''
    const imageRelated = document.createElement('img')
    imageRelated.setAttribute('src', media.image_sec)
    imageRelated.className = 'related-image-modal'

    const title = document.createElement('p')
    title.style.fontSize = '20px'
    title.innerText = media.title

    const descRelated = document.createElement('p')
    descRelated.innerText = media.desc
    descRelated.className = 'related-p-modal'

    modalRelatedContent.appendChild(imageRelated)
    modalRelatedContent.appendChild(title)
    modalRelatedContent.appendChild(descRelated)
    modalRelated.appendChild(modalRelatedContent)
    containerRelated.appendChild(modalRelated)
    console.log(modalRelatedContent)

    imageRelated.addEventListener('click', () => {
        modalRelated.style.display = 'flex'
        window.addEventListener('click', (e) => {
            const element = e.target.id
            if(element === 'modal-related'){
                modalRelated.style.display = 'none'
            }
        })
    })
}

function getRelated(){
    relatedMedias.map((media) => {
        const imageRelated = document.createElement('img')
        imageRelated.setAttribute('src', media.image)
        imageRelated.className = 'related-image'

        const a = document.createElement('a')
        a.setAttribute('href', '#modal-related')
        a.appendChild(imageRelated)
        
        contentRelated.className = 'content-related'
        contentRelated.appendChild(a)

        carouselContainer.className = 'carousel-container'
        carouselContainer.appendChild(contentRelated)

        containerRelated.className = 'related layout'
        containerRelated.appendChild(carouselContainer)

        imageRelated.addEventListener('click', () => {
            getCardsRelated(media)
            modalRelated.style.display = 'flex'
            document.body.style.overflowY = 'hidden'
            window.addEventListener('click', (e) => {
                const element = e.target.id
                if(element === 'modal-related'){
                    modalRelated.style.display = 'none'
                    document.body.style.overflowY = 'scroll'
                }
            })
        })
    })
}

function getCardsCast(actor){
   castAbout.style.display = 'flex'
   actorInfo.innerHTML = ''

   const name = document.createElement('h3')
   name.innerText = actor.name
   actorInfo.appendChild(name)
   castAbout.appendChild(actorInfo)

   const image = document.createElement('img')
   image.setAttribute('src', actor.image)
   image.className = 'actor-image'

   const desc = document.createElement('p')
   desc.innerText = actor.desc
   desc.className = 'actor-desc'

   actorInfo.appendChild(image)
   actorInfo.appendChild(name)
   actorInfo.appendChild(desc)
   castAbout.appendChild(actorInfo)
}

function getCast(){
    actors.map((actor) => {
        const imageActor = document.createElement('img')
        imageActor.setAttribute('src', actor.image)
        imageActor.className = 'actor-image'

        const a = document.createElement('a')
        a.setAttribute('href', '#cast-about')
        a.appendChild(imageActor)

        const liActor = document.createElement('li')
        liActor.className='cast-li'

        const spanName = document.createElement('span')
        spanName.className='name'
        spanName.innerText = actor.name

        const spanCharacter = document.createElement('span')
        spanCharacter.className='character'
        spanCharacter.innerText = actor.character

        liActor.appendChild(a)
        liActor.appendChild(spanName)
        liActor.appendChild(spanCharacter)
        ulActor.appendChild(liActor)

        contentCast.className = 'content-cast'
        contentCast.appendChild(ulActor)

        containerActor.className = 'cast'
        containerActor.appendChild(contentCast)
 
        imageActor.addEventListener('click', () => {
            getCardsCast(actor)
        })
    })
}

btnOpen.addEventListener('click', () => {
    modal.style.display = 'flex'
    document.body.style.overflowY = 'hidden'

    window.addEventListener('click', (e) => {
        const element = e.target.id
        if(element === 'modal'){
            modal.style.display = 'none'
            document.body.style.overflowY = 'scroll'
        }
    })
})

bttnOpen.addEventListener('click', () => {
    modal.style.display = 'flex'
    document.body.style.overflow = 'hidden'

    window.addEventListener('click', (e) => {
        const element = e.target.id
        if(element === 'modal'){
            modal.style.display = 'none'
            document.body.style.overflowY = 'scroll'
        }
    })
})

btnClose.addEventListener('click', () => {
    modal.style.display = 'none'
    document.body.style.overflowY = 'scroll'
})

closeCastAbout.addEventListener('click', () => {
    castAbout.style.display = 'none'
})

window.onload = () => {
    try {
        getRelated()
        getCast()
        
    } catch (error) {
      console.log(error);
      alert('Erro ao carregar cards');
    }
};