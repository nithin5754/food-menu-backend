export interface IMenuItemsProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface IMenuCategoryDetailsProps {
  id: string;
  name: string;
  description: string;
  items:IMenuItemsProps[]
}
