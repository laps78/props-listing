import ListingItem from "./ListingItem";

function Listing(data) {
  return (
    <div className="item-list">
      {
        Array.from(data.items).map((item) => 
          <ListingItem
            key={item.listing_id}
            title={item.title}
            url={item.url}
            imageURL={item.MainImage.url_570xN}
            currency_code={item.currency_code}
            price={item.price}
            quantity={item.quantity}
          />
        )
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