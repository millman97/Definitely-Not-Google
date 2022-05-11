const request = require('supertest');
// import server
const server = require('../server');

describe('API server', () => {
    let api;
    let testPet = {
        name: 'Bob',
        age: 6,
    };

    beforeAll(() => {
        // start the server and store it in the api variable
        api = server.listen(3000, () =>
            console.log('Test server running on port 5000')
        );
    });

    afterAll((done) => {
        // close the server, then run done
        console.log('Gracefully stopping test server');
        api.close(done);
    });

    it('responds to get / with status 200', (done) => {
        request(api).get('/').expect(200, done);
    });

    it('responds to get /pets with status 200', (done) => {
        request(api).get('/pets').expect(200, done);
    });

    it('responds to post /pets with status 201', (done) => {
        request(api)
            .post('/pets')
            .send(testPet)
            .set('Accept', /application\/json/)
            .expect(201)
            .expect({ id: 4, ...testPet }, done);
    });

    it('retrieves a pet by id', (done) => {
        request(api)
            .get('/pets/3')
            .expect(200)
            .expect({ id: 3, name: 'Rumble', age: 12 }, done);
    });

    it('responds to a unknown pet id with a 404', (done) => {
        request(api).get('/pets/49283742938472').expect(404).expect({}, done);
    });

    it('responds to delete /pets/:id with status 204', async () => {
        await request(api).delete('/pets/4').expect(204);

        const updatedPets = await request(api).get('/pets');

        expect(updatedPets.body.length).toBe(3);
    });

    it('responds to non existing paths with 404', (done) => {
        request(api).get('/no').expect(404, done);
    });

    it('responds to invalid method request with 405', (done) => {
        request(api).post('/').expect(405, done);
    });
});
