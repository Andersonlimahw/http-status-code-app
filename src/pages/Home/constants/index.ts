import { ItemModel } from "../../../model/Item";

const httpItem : ItemModel = {
  id: 1,
  title: "Success",
  description:
    "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
  family: "2xx",
  code: "200",
  imageUrl: "assets/images/code/0.png",
  alt: "Imagem"
};


export const httpList = [ httpItem, { ...httpItem, id: 2, family: '1xxx' }, {...httpItem, id: 3, family: '2xx' }, {...httpItem, id: 4, family: '4xx'}, {...httpItem, id: 5, family: '5xx'}, {...httpItem, id: 6, family: '2xx'} ];
export  * from './tabs';