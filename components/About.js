import Markdown from 'react-remarkable';

export default (props) => {
    return (
      <div>
        <Markdown>{`

## Vendors

### Adding items

1. All items added are placed in their global catalog by default.
2. Any attributes uploaded with the item are either added as attributes pending / or optionally published immediately.
3. Extra: We found the following pending attributes on this item, we'd like to suggest the following additional attributes.
4. If they have exclusion catalogs then they are asked which exclusion catalogs they want to exclude the item(s) from.
5. If they have inclusion catalogs then they can select which to include the item(s) in.

### My Global Catalog

1. The global catalog is hidden by default.
2. but if they want to share it with someone then we'll create an exclusion catalog for them.
3. Offer a preview button that allows the vendor to see the result of the change.
4. They will be able to see who
5. They may simply never share their global catalog if they only want to add certain items.
6. Inclusion catalogs are empty by default and you add specific items to them.
7. Exclusion catalogs are full by default and you remove specific items from them.
8. When creating a catalog, add all to the catalog.
9. May archive items - can see but are deprecated (no longer available to put in a catalog)
10. May delete items - cannot be seen by anyone but administrative staff
11. A copy just fills in the new fields but does not commit them yet (since often a change is a variety)
12. Every change to an item's attributes or attribute values is a new version of that item
13. Version changes may either be (added information about an existing item)
14. Did we learn more information about the same item?
15. Was a new version of the item released?

Is this a new variety of the same item?
Is this adding new information about the same item?

## Retailers

1. Keep detailed notes on items

`}</Markdown>
      </div>
    );
};
