const appClase = require("./appClase.js")
const { EventEmitter } = require("tar/lib/read-entry");

const emitter = new EventEmitter()

//AddeventListener
emitter.on("EventoCustom", ()=>{
    console.log("Evento disparado")
})


//Emitir un evento (a los 2 segundos)
setTimeout(()=>{
    emitter.emit("EventoCustom")
}, 2000)