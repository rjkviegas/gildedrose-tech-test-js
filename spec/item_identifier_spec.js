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

  describe('isItem', function() {

    it('returns true when item name matches first argument', function() {
      const itemIdentifier = new ItemIdentifier();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Sulfuras, Hand of Ragnaros'});
      expect(itemIdentifier.isItem('Sulfuras, Hand of Ragnaros', itemDouble)).toBeTrue();
    })

    it('returns false when item name does not match first argument', function() {
      const itemIdentifier = new ItemIdentifier();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'itemDouble'});
      expect(itemIdentifier.isItem('Sulfuras, Hand of Ragnaros', itemDouble)).toBeFalse();
    })
  });
  
  describe('isConjuredItem', function() {

    it("returns true when item name includes 'conjured'", function() {
      const itemIdentifier = new ItemIdentifier();
      const conjuredItemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Conjured Mana Cake'});
      expect(itemIdentifier.isConjuredItem(conjuredItemDouble)).toBeTrue();
    });

    it("returns false when item does not include 'conjured'", function() {
      const itemIdentifier = new ItemIdentifier();
      const itemDouble = jasmine.createSpyObj('itemDouble', {}, {name: 'Mana Cake'});
      expect(itemIdentifier.isConjuredItem(itemDouble)).toBeFalse();
    });
  });
});
