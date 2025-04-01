const { IRol } = require("./IRol")

class Guardian extends IRol {
    constructor(){
        super()
    }

    getExtra(){return 100}
}

module.exports = { Guardian }