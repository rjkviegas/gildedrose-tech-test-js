const {ItemIdentifier} = require('../src/item_identifier.js');

describe('ItemIdentifier', function() {

  describe('#isNormalItem', function() {

    it('returns true for normal item', function() {
      const itemIdentifier = new ItemIdentifier();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'normalItem'});
      expect(itemIdentifier.isNormalItem(itemDouble)).toBeTrue();
    });

    it('returns false for Sulfaras', function() {
      const itemIdentifier = new ItemIdentifier();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Sulfuras, Hand of Ragnaros'});
      expect(itemIdentifier.isNormalItem(itemDouble)).toBeFalse();
    });
  });
});