class IRol{
    constructor(){
        if(new.target == IRol){
            throw Error("no puedes instanciar una interfaz")
        }
    }

    getExtra(){
        throw Error("debes implementar el metodo getExtra")
    }
}

module.exports = { IRol }