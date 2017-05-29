'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRemarkable = require('react-remarkable');

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/jim.cummins/projects/item-graph/components/About.js';

exports.default = function (props) {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_reactRemarkable2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, '\n\n## Vendors\n\n### Adding items\n\n1. All items added are placed in their global catalog by default.\n2. Any attributes uploaded with the item are either added as attributes pending / or optionally published immediately.\n3. Extra: We found the following pending attributes on this item, we\'d like to suggest the following additional attributes.\n4. If they have exclusion catalogs then they are asked which exclusion catalogs they want to exclude the item(s) from.\n5. If they have inclusion catalogs then they can select which to include the item(s) in.\n\n### My Global Catalog\n\n1. The global catalog is hidden by default.\n2. but if they want to share it with someone then we\'ll create an exclusion catalog for them.\n3. Offer a preview button that allows the vendor to see the result of the change.\n4. They will be able to see who\n5. They may simply never share their global catalog if they only want to add certain items.\n6. Inclusion catalogs are empty by default and you add specific items to them.\n7. Exclusion catalogs are full by default and you remove specific items from them.\n8. When creating a catalog, add all to the catalog.\n9. May archive items - can see but are deprecated (no longer available to put in a catalog)\n10. May delete items - cannot be seen by anyone but administrative staff\n11. A copy just fills in the new fields but does not commit them yet (since often a change is a variety)\n12. Every change to an item\'s attributes or attribute values is a new version of that item\n13. Version changes may either be (added information about an existing item)\n14. Did we learn more information about the same item?\n15. Was a new version of the item released?\n\nIs this a new variety of the same item?\nIs this adding new information about the same item?\n\n## Retailers\n\n1. Keep detailed notes on items\n\n'));
};