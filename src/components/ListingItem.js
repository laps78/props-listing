function ListingItem(props) {
  const showTitle = (title) => {
    const titleStringArray = title.toString().split('', 50);
    if (titleStringArray.length > 50) {
      return titleStringArray.splice(49, '...').join();
    };
    return title;
  }

  const showPrice = (code) => {
    if (code === 'USD') return '$' + props.price;
    if (code === 'EUR') return '€' + props.price;
    return props.price + ' ' + code;
  }

  const selectQuantityClass = (quantity) => {
    if (quantity <= 10) return 'level-low';
    if (quantity > 10 && quantity <= 20) return 'level-medium';
    return 'level-high';
  }
  return (
    <div className="item">
      <div className="item-image">
        <a href={props.url || '#'}>
          <img 
            src={props.imageURL}
            alt={showTitle}
            />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{showTitle}</p>
        <p className="item-price">{showPrice}</p>
        <p className={"item-quantity level-medium" + selectQuantityClass(props.quantity)}>{props.quantity} left</p>
      </div>
    </div>
  );
}

export default ListingItem;