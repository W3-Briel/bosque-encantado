const { IRol } = require("./IRol")
// const { Mascota } = require("./mascotas/Mascota")

class Domador extends IRol {
    extra;
    mascotas;
    constructor({mascotas = []}){
        super()
        this.mascotas = mascotas
        
        let mascotasCornudas = this.mascotas.filter((m)=> m.hasCuernos()).length
        this.extra = 150 * mascotasCornudas
    }

    getExtra(){return this.extra}
}

module.exports = { Domador }