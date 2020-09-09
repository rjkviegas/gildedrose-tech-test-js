class ItemIdentifier {
  constructor() {}

  isNormalItem(item) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') return false;
    if (item.name === 'Aged Brie') return false;
    return true;
  }
}

module.exports = {
  ItemIdentifier,
}
