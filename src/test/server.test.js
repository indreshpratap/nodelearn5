const supertest = require('supertest');
const expect = require('chai').expect;
const app = require('../server');
let agent;
describe("Express App Test", () => {
    before((done) => {

        agent = supertest.agent(app);
        
        agent.post('/do-login').send({username:'admin',password:'admin'})
        .end((err,res)=>{
            done();
        })
    });

    after(() => {
        agent = null;
    })




    it('index should return 200 status', (done) => {
        agent
            .get('/')
            .expect(200, done);
    });

    it('search should return json', (done) => {
        agent
            .get('/search?test=indresh')
            .expect(200)
            //  .expect('Content-Type','/json/')
            .end((err, res) => {
                // console.log(res);
                expect(res.body).is.not.empty;
                expect(res.body).have.deep.property('parameters', { test: 'indresh' });
                done();
            });
    })


    it('admin returns users', (done) => {
        agent.get('/api/admin/users')
            .expect(200, done);
    })
})