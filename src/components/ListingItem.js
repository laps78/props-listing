import { PropTypes } from 'prop-types';

function ListingItem({ item }) {
  const { url, MainImage, title, currency_code, price, quantity, state } = item;
  
  if (state === 'removed') {
    return null;
  }

  const name = title.length > 50 ? `${title.slice(0, 50)}...` : title;
  
  const showPrice = (code) => {
    if (code === 'USD') return '$' + price;
    if (code === 'EUR') return '€' + price;
    return item.price + ' ' + code;
  }

  const selectQuantityClass = (quantity) => {
    if (quantity <= 10) return 'level-low';
    if (quantity > 10 && quantity <= 20) return 'level-medium';
    return 'level-high';
  }

  return (
    <ul className="item">
      <div className="item-image">
        <a href={url}>
          <img 
            src={MainImage.url_570xN}
            alt={title}
            />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{name}</p>
        <p className="item-price">{showPrice(currency_code)}</p>
        <p className={"item-quantity " + selectQuantityClass(quantity)}>{quantity} left</p>
      </div>
    </ul>
  );
}

ListingItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string,
    }),
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    quantity: PropTypes.number,
  })
}

export default ListingItem;