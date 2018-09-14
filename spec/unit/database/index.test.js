var db = require('../../../database/index.js');

describe('Test if the database can correctly pull data', () => {
	test('Picture query should not throw an error', () => {
    db.getAllPictures(4, (err, result) => {
      expect(err).toEqual(null);
    });
	});

	test('Picture query should be an array and have a length of 6', () => {
    db.getAllPictures(4, (err, result) => {
      expect(result).toHaveLength(6);
    });
	});

	// test('Do user queries work', () => {

	// });

});

describe('Tests that the seeded data is always the same', () => {
	test('Business Names are always the same', () => {
    db.db.query('SELECT * FROM restaurants', (err, result) => {
    	result = result.map(ele => (ele.name));
      expect(result).toEqual(expect.arrayContaining(["Bnc Cake House", "Thai One On", "Filiberto's Mexican Food", "Sushi 8", "Southern Accent Restaurant"]));
    });
	});

})