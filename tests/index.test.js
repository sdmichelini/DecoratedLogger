const expect = require('chai').expect

describe('Decorated Logger Tests', () => {
    it('should be able to be imported', () => {
        const logger = require('../')()
    })

    describe('Function Tests', () => {
        let logger
        beforeEach(() => {
            logger = require('../')()
        })
        it('should be able to log to the console', () => {
            logger.info('Log this')
        })
        it('should be able to log an error', () => {
            logger.error('Log this')
        })
        it('should be able to get a message', () => {
            const message = logger.getMessage('message')
            expect(message).to.equal('message')
        })
        it('should be able to add a date decorator', () => {
            const dateLogger = logger.addDate()
            const message = dateLogger.getMessage('message')
            expect(message).to.contain('message')
            // ISO string
            expect(message).to.contain('Z')
        })
        it('should be able to add a string decorator', () => {
            const stringLogger = logger.addString('DB: ')
            const message = stringLogger.getMessage('message')
            expect(message).to.contain('message')
            expect(message).to.contain('DB: ')
        })
        it('should be able to add multiple decorators', () => {
            const multiLogger = logger.addString('DB: ').addDate()

            const message = multiLogger.getMessage('message')
            expect(message).to.contain('message')
            expect(message).to.contain('DB: ')
            expect(message).to.contain('Z')
        })
    })
})