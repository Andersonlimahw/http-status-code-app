import { ItemModel } from "../../../model/Item";

const httpItem : ItemModel = {
  id: 1,
  title: "Success",
  description:
    "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  family: "2xx",
  code: "200",
  imageUrl: "http://lorempixel.com.br/400/270?1",
  alt: "Imagem"
};



export const httpList = [ httpItem, { ...httpItem, id: 2 }, {...httpItem, id: 3}, {...httpItem, id: 4}, {...httpItem, id: 5}, {...httpItem, id: 6} ];
