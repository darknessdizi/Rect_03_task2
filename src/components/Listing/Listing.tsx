import { ListingItem } from '../ListingItem/ListingItem';
import { IPropsListing, IItem } from '../../modals/modals';

export const Listing = (props: IPropsListing) => {
  const { items } = props;

  return (
    <div className="item-list">
      { items.map((obj) => {
          if (obj.state === 'removed') {
            return null;
          }
      
          let title: string = obj.title;
          if (title.length > 50) {
            title = `${title.slice(0, 51)}...`;
          }
      
          let price: string = obj.currency_code;
          if (price === 'USD') {
            price = `$${obj.price}`;
          } else if (price === 'EUR') {
            price = `€${obj.price}`;
          } else {
            price = `${obj.price} ${obj.currency_code}`;
          }
      
          let status: string;
          if (obj.quantity <= 10) {
            status = 'low';
          } else if (obj.quantity <= 20) {
            status = 'medium';
          } else {
            status = 'high';
          }
      
          const itemObj: IItem = {
            link: obj.url,
            url: obj.MainImage.url_570xN,
            title: title,
            price: price,
            status: status,
            quantity: obj.quantity,
          }
      
          return <ListingItem info={itemObj} key={obj.listing_id} />
        })
      }
    </div>
  )
}
