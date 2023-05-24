export interface MapProduct {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  discount: boolean;
  active: boolean;
  stock: boolean;
  type: {
    id: number;
  };
}
