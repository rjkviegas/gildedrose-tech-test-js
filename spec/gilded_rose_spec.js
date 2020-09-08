var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  describe("#updateQuality", function() {

    it("reduces sellIn and quality of a normal item", function() {
      const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 10, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("+5 Dexterity Vest");
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].sellIn).not.toEqual(10);
      expect(items[0].quality).toEqual(19);
      expect(items[0].quality).not.toEqual(20);
    });

    it("does not reduce quality of normal item below 0", function() {
      const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 10, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("+5 Dexterity Vest");
      expect(items[0].sellIn).toEqual(9);
      expect(items[0].sellIn).not.toEqual(10);
      expect(items[0].quality).toEqual(0);
      expect(items[0].quality).not.toEqual(-1);
    });
  });

});
