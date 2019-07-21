const assert = require('chai').assert;
const expect = require('chai').expect;


describe('user testing', () => {
//async
before((done) => {
    console.log('before');
    done();
});

beforeEach(() => {
    console.log('Before each');
})

afterEach(() => {
    console.log('After each');
})

after(() => {
    console.log('After');
})

    it('Fetch user', (done) => {
        expect(true).to.be.true;
        done();
    });

    it('Fetch profile', () => {
        expect(true).to.be.true;
    })
});