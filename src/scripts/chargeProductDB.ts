import { Product } from "../Models";
import { faker } from "@faker-js/faker";
import { Category } from "../Models";

export const generate = async () => {
  const productCount = await Product.count();

  if (productCount) return;

  const categoryCount = await Category.count();

  if (categoryCount) return;

  const nombres: string[] = [
    "harinas y otros",
    "frutos secos",
    "cereales",
    "semillas",
    "repostería",
    "cereales y legumbres",
    "condimentos",
    "herborestería y yerbas",
    "jugos",
    "galletas y pan",
    "miel",
    "dulces y mermeladas",
    "aceite de coco",
    "pastas",
    "leches vegetales",
    "alfajores",
    "chocolate",
    "edulcorante",
    "celiacos",
    "frutas desecadas",
    "mixes",
    "productos veganos",
    "gelatinas y flanes emeth",
  ];

  const booleans: boolean[] = [false, true];

  const getRandomBoolean = () => {
    return booleans[Math.round(Math.random())];
  };

  for (let i = 0; i < nombres.length; i++) {
    const category = {
      name: nombres[i],
      image: faker.image.url(),
    };
    await Category.create(category);
  }

  for (let i = 0; i < 100; i++) {
    const product = {
      name: faker.person.firstName(),
      price: getRandomBoolean(),
      image: faker.image.url(),
      description: faker.commerce.productDescription(),
      discount: getRandomBoolean(),
      active: getRandomBoolean(),
      stock: getRandomBoolean(),
      idCategory: Math.floor(Math.random() * 22) + 1,
    };
    await Product.create(product);
  }
};
