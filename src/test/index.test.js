const assert = require('chai').assert;
const expect = require('chai').expect;
const helper = require('../helper');
describe('Initial', () => {

    describe("Helper testing", () => {
        it('is a string', () => {
            assert.typeOf('test', 'string', 'Yes its string');
        });

        it('sum is 200', () => {
            assert.equal(helper.sum(100, 100), 200);
        })

        it('subtract is 200', () => {
            expect(helper.subtract(200, 100)).is.equal(100);
        })
    });

    describe("another testing",()=>{
        it('pending for test');
    });
})