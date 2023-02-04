import ListingItem from "./ListingItem";
import { PropTypes } from 'prop-types';

function Listing(data) {
  return (
    <div className="item-list">
      {
        Array.from(data.items).map((item) => {
          // validators
          const validateTitle = (item) => { if (item.title === undefined) return 'untitled product' };
          // validate image link
          const validateMainImage = (item) => {
            const validatedImageURL = null;
            if (item.MainImage.url_570xN === undefined) {
              validatedImageURL = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';
            } else {
              validatedImageURL = item.MainImage.url_570xN;
            }
            return validatedImageURL;
          };

          return (
            <ListingItem
              key={item.listing_id}
              title={validateTitle}
              url={item.url}
              imageURL={validateMainImage(item)}
              currency_code={item.currency_code}
              price={item.price}
              quantity={item.quantity}
            />
          )
        })
      }
      <hr />
      <ListingItem />
    </div>
  );
}

export default Listing;