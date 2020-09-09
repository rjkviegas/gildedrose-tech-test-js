class ItemIdentifier {
  constructor() {}

  isNormalItem(item) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') return false
    return true;
  }
}

module.exports = {
  ItemIdentifier,
}
