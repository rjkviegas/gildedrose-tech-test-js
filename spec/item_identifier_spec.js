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

    it('returns false for Aged Brie', function() {
      const itemIdentifier = new ItemIdentifier();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Aged Brie'});
      expect(itemIdentifier.isNormalItem(itemDouble)).toBeFalse();
    });

    it('returns false for Backstage pass', function() {
      const itemIdentifier = new ItemIdentifier();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Backstage passes to a TAFKAL80ETC concert'});
      expect(itemIdentifier.isNormalItem(itemDouble)).toBeFalse();
    });
  });

  describe('isAgedBrie', function() {

    it('returns true when item name is Aged Brie', function() {
      const itemIdentifier = new ItemIdentifier();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Aged Brie'});
      expect(itemIdentifier.isAgedBrie(itemDouble)).toBeTrue();
    })

    it('returns false when item name is not Aged Brie', function() {
      const itemIdentifier = new ItemIdentifier();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'itemDouble'});
      expect(itemIdentifier.isAgedBrie(itemDouble)).toBeFalse();
    })
  });
});