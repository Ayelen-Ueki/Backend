// Del lado del cliente para escuchar al servidor
const socket = io()
//El primer parametro de on que es lo que me permite escuchar eventos es el evento que sale del lado del server y que yo quiero que se escuche del lado del cliente en este
socket.on('message', (data)=>{
    console.log(data)
})

const render = (data) =>{
    data.map(elem => {
        return (`
        <div>
            <strong>
                {elem.author} dice {elem.text}
            </strong>
        </div>
        `)
    })
    //Para meter ese codigo dentro de mi html en home.handlebars
    document.getElementById('caja').innerHTML = hotml
}


//Para mandar mensajes usando el formulario de home.handlebars al servidor
const addMessage = () =>{
    const msg ={
        author: document.getElementbyId('name').value, 
        text: document.getElementById('message').value
    }
    //envio el mensaje por socket al servidor
    socket.emit('new-messages', msg)
    //para eliminar el comportamiento por defecto que tiene el formulario del que estoy tomando la informacion de recargarse luego de enviar la informacion
    return false
}