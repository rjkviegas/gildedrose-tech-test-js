const { ItemIdentifier } = require('./item_identifier');
const { ItemQualityUpdater } = require('./item_quality_updater');

class Shop {
  constructor(items=[], itemIdentifier=ItemIdentifier, itemQualityUpdater=ItemQualityUpdater) {
    this.items = items;
    this.itemIdentifier = new itemIdentifier();
    this.itemQualityUpdater = new itemQualityUpdater();
  }

  updateQuality() {
    const that = this;
    this.items.forEach(function(item) {
      if (that.itemIdentifier.isItem('Sulfuras, Hand of Ragnaros', item)) return item;

      if (that.itemIdentifier.isConjuredItem(item)) {
        that.itemQualityUpdater.updateConjuredItem(item);
      } else if (that.itemIdentifier.isNormalItem(item)) {
        that.itemQualityUpdater.updateStandardItem(item);
      } else if (that.itemIdentifier.isItem('Aged Brie', item)) {
        that.itemQualityUpdater.updateAgedBrie(item);
      } else if (that.itemIdentifier.isItem('Backstage passes to a TAFKAL80ETC concert', item)) {
        that.itemQualityUpdater.updateBackstagePass(item);
      }
      item.sellIn -= 1;
    });
    return that.items;
  }
}

module.exports = {
  Shop,
};
