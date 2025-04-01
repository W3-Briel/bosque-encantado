const { IRol } = require("./IRol")

class Hechicero extends IRol {
    constructor(){
        super()
    }

    getExtra(){return 0}
}

module.exports = { Hechicero }