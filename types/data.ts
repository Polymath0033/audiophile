type ProductImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};

type IncludesItem = {
  quantity: number;
  item: string;
};

type Gallery = {
  first: ProductImage;
  second: ProductImage;
  third: ProductImage;
};

type OtherProduct = {
  slug: string;
  name: string;
  image: ProductImage;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: ProductImage;
  category: string;
  categoryImage: ProductImage;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: IncludesItem[];
  gallery: Gallery;
  others: OtherProduct[];
};
