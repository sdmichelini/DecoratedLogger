let logger =  (function() {
    this.info = function (message) {
        console.log('INFO: ' + this.getMessage(message, logger))
    } 
    this.error = function (message) {
        console.error('ERROR: ' + this.getMessage(message, logger))
    }
    this.getMessage = function (message) {
            return this.getDecorated() + message
    }
    this.addDate = function () {
        const currentDecor = this.getDecorated()
        this.getDecorated = () => {
            return new Date().toISOString() + ' ' + currentDecor
        }
        return this
    }

    this.getDecorated = function () {
        return ''
    }
    
    this.addString = function (decor) {
        const currentDecor = this.getDecorated()
        this.getDecorated = () => {
            return decor + ' ' + currentDecor
        }
        return this
    }
})

module.exports = function () {
    return new logger
}