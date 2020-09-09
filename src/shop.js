const { ItemIdentifier } = require("./item_identifier");
const { ItemUpdater } = require("./item_updater")

class Shop {
  constructor(items=[], itemIdentifier = ItemIdentifier, itemUpdater = ItemUpdater){
    this.items = items;
    this.itemIdentifier = new itemIdentifier();
    this.itemUpdater = new itemUpdater();
  }
  updateQuality() {
    const that = this;
    this.items.forEach( function(item) {
      if (that.itemIdentifier.isItem('Sulfuras, Hand of Ragnaros', item)) return item

      if (that.itemIdentifier.isConjuredItem(item)) {
        that.itemUpdater.conjuredItemUpdate(item);
      } else if (that.itemIdentifier.isNormalItem(item)) {
        that.itemUpdater.normalItemUpdate(item);
      } else if (that.itemIdentifier.isItem('Aged Brie', item)) {
        that.itemUpdater.agedBrieUpdate(item);
      } else if (that.itemIdentifier.isItem('Backstage passes to a TAFKAL80ETC concert', item)) {
        that.itemUpdater.backstagePassUpdate(item);
      }
    })
    return that.items;
  }
}

module.exports = {
  Shop,
}
