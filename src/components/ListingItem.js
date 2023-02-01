function ListingItem(props) {
  const showTitle = (title) => {
    if (title.length < 50) {
      return title.splice(49, '...');
    };
    return title;
  }
  const showCurrencyIcon = (code) => {
    if (code === 'USD') return '$';
    if (code === 'EUR') return '€';
    return '';
  }
  return (
    <div className="item">
      <div className="item-image">
        <a href={props.url || '#'}>
          <img 
            src={props.imageURL || '#'}
            alt={showTitle(props.title || 'no title')}
            />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{showTitle(props.title)}</p>
        <p className="item-price">{showCurrencyIcon(props.currency_code)}{props.price}</p>
        <p className="item-quantity level-medium">{props.quantity} left</p>
      </div>
    </div>
  );
}

export default ListingItem;