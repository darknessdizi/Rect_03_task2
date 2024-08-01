export type TListData = ({
  listing_id: number,
  state: string,
  url: string,
  MainImage: {
    url_570xN: string
  },
  title: string,
  currency_code: string,
  price: string,
  quantity: number
})[]

export interface IPropsListing {
  items: TListData,
}

export interface IItem {
  link: string,
  url: string,
  title: string,
  price: string,
  status: string,
  quantity: number,
}

export interface IPropsListingItem {
  info: IItem,
}
