const container = document.querySelector('.container') 
const div = document.createElement('div')


function repeticao(){

    const elementos = [{tag: 'p', texto: 'Pessêgo'},
        {tag: 'div', texto: 'Banana'},
        {tag: 'footer', texto: 'Laranja'},
        {tag: 'section', texto: 'Jabuticaba'}
        
    ];
    
for(let i=0; i<elementos.length;i++){

    const {tag , texto} = elementos[i]
    const createTag = document.createElement(tag)
    //createTag.innerHTML = texto 
    const textCreate = document.createTextNode(texto)
    createTag.appendChild(textCreate)
    div.appendChild(createTag)

}

container.appendChild(div)

}

repeticao()



for(let i=0;i< 100; i++){
    console.log("Iris Eu te Amo <3<3<3")
}

