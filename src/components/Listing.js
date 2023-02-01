import ListingItem from "./ListingItem";

function Listing(data) {
  return (
    <div className="item-list">
      {
        Array.from(data.items).map((item) => {
          const validateTitle = (item) => {if( item.title === undefined) return 'untitled product'};
          const validateMainImage = (item) => {if( item.MainImage.url_570xN === undefined) return '\"#\"'};
          return (
            <ListingItem
              key={item.listing_id}
              title={validateTitle}
              url={item.url}
              imageURL={validateMainImage}
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

Listing.defaultProps = {
  items: [],
};

export default Listing;