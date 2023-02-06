import ListingItem from "./ListingItem";
import { PropTypes } from 'prop-types';

function Listing(data) {
  const { items } = data;
  return (
    <li className="item-list">
      {
        Array.from(items).map((item) => {
          return (
            <ListingItem
              key={item.listing_id}
              item={item}
            />
          )
        })
      }
    </li>
  );
}

Listing.propTypes = {
  data: PropTypes.array.isRequired,
}

Listing.defaultProps = {
  data: [],
}

export default Listing;