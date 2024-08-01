import { IPropsListingItem } from '../../modals/modals';

export const ListingItem = (props: IPropsListingItem) => {
  const { info } = props;

  return (
    <div className="item">
      <div className="item-image">
        <a href={info.link}>
          <img src={info.url}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{info.title}</p>
        <p className="item-price">{info.price}</p>
        <p className={`item-quantity level-${info.status}`}>{info.quantity} left</p>
      </div>
    </div>
  )
}
