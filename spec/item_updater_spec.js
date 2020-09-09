const { ItemUpdater } = require("../src/item_updater");

describe('ItemUpdater', function() {

  describe('#conjuredItemUpdate', function() {

    it("reduces sellIn by 1 and quality by 2", function() {
      const itemUpdater = new ItemUpdater();
      const conjuredItemDouble = {
        name: "Conjured Mana Cake",
        sellIn: 15,
        quality: 20
      };
      itemUpdater.conjuredItemUpdate(conjuredItemDouble);
      expect(conjuredItemDouble.sellIn).toEqual(14);
      expect(conjuredItemDouble.sellIn).not.toEqual(15);
      expect(conjuredItemDouble.quality).toEqual(18);
      expect(conjuredItemDouble.quality).not.toEqual(19);
    });
  });
});
