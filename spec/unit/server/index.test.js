const app = require('../../../server/index.js').app;
const supertest = require('supertest');

describe('Should test the response from the post request', () => {
  xtest('Test the post request',
    async done => {
    	await supertest(app)
    	  .post("/photos")
    	  .send({
    	  	body: {
    	  		result: 4
    	  	}
    	  })
    	  .then(response => {
    	  	expect(response.statusCode).toBe(200);
    	  	done();
    	  });
    },
    10000
  );
});