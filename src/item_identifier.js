class ItemIdentifier {
  constructor() {}

  isNormalItem(item) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') return false;
    if (item.name === 'Aged Brie') return false;
    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') return false;
    return true;
  }
  isAgedBrie(item) {
    if (item.name === 'Aged Brie') return true;
    return false;
  }
}

module.exports = {
  ItemIdentifier,
}
