var db = require('../../../database/index.js');

describe('Test if the database can correctly pull data', () => {
	test('Picture query should not throw an error', () => {
    db.getAllPicturesById(4, (err, result) => {
      expect(err).toEqual(null);
    });
	});

	test('Should be able to successfully query the DB by id', () => {
    db.getAllPicturesById(4, (err, result) => {
      expect(result).toHaveLength(6);
    });
	});

  test('Should be able to successfully query the DB by name', () => {
    db.getAllPicturesByName('Sushi 8', (err, result) => {
      expect(result).toHaveLength(6);
    });
  });

});

describe('Tests that the seeded data is always the same', () => {
	test('Business Names are always the same', () => {
    db.db.query('SELECT * FROM restaurants', (err, result) => {
    	result = result.map(ele => (ele.name));
      expect(result).toEqual(expect.arrayContaining(["bnc cake house", "thai one on", "filiberto's mexican food", "sushi 8", "southern accent restaurant"]));
    });
	});

})