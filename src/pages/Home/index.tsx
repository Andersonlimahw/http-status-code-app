import { useState } from "react";

import { Card } from "../../components/Card";
import { ItemModel } from "../../model/Item";
import { ModalDialog } from "../../components/ModalDialog";
import { useHttpList } from "../../components/Wrapper/hooks/use-http-list";

export default function Home() {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>('');
  const [dialogItem, setDialogItem] = useState<ItemModel>();

  const httpListZustand = useHttpList((state : any) => state)

  function handleClick(item: ItemModel) {
    setDialogIsOpen(true);
    setDialogTitle(`HttpStatusCode: ${item.code} | ${item.title}`);
    setDialogItem(item);
  }
 

  return (
    <div className="py-8 sm:py-16">

      {
        dialogIsOpen && (<ModalDialog 
            title={dialogTitle} 
            description={dialogItem?.description as string} 
            isOpen={dialogIsOpen} 
            externalLink={dialogItem?.details.reference as string}
            toggleIsOpen={() => 
              setDialogIsOpen((prevState) => !prevState)} 
            />)
      }
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {httpListZustand.httpList.map((item: ItemModel, index: number) => (
            <Card 
              key={item.id} 
              animationDurationEnter={(index * 100) * 2}
              animationDurationLeave={(index * 100) * 2.2}
              item={item} 
              handleClick={() => handleClick(item)} 
            />
          ))}
        </div>
      </div>
    </div>
  )
}
