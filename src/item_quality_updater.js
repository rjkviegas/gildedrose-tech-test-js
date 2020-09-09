class ItemQualityUpdater {
  constructor() {}

  normalItemUpdate(item) {
    if ((item.quality >= 2) && (item.sellIn <= 0)) {
      item.quality -= 2;
    } else if (item.quality > 0) {
      item.quality -= 1;
    }
  }
  agedBrieUpdate(item) {
    if (item.quality < 50) { item.quality += 1; }
  }
  backstagePassUpdate(item) {
    if (item.sellIn <= 0) return item.quality = 0;

    if (item.quality <= 49) { item.quality += 1; }
    if (item.sellIn <= 10 && item.quality <= 49) { item.quality += 1; } 
    if (item.sellIn <= 5 && item.quality <= 49) { item.quality += 1; }
  }
  conjuredItemUpdate(item) {
    if ((item.quality >= 4) && (item.sellIn <= 0)) {
      item.quality -= 4;
    } else if (item.quality >= 2) {
      item.quality -= 2;
    } else if (item.quality === 1) {
      item.quality = 0;
    }
  }
}

module.exports = {
  ItemQualityUpdater,
}