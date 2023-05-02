import { useState } from "react";

import { Card } from "../../components/Card";
import { ItemModel } from "../../model/Item";
import { ModalDialog } from "../../components/ModalDialog";
import { useHttpList } from "./hooks/use-http-list";
import { Badge } from "../../components/Card/Badge";
import { tabs } from "./constants";

export default function Home() {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>('');
  const [dialogDescription, setDialogDescription] = useState<string>('');

  const httpListZustand = useHttpList((state : any) => state)
  // const filterdList = useHttpList((state: any) => state.filterList(filter));

  function handleClick({ code, title, description } : ItemModel) {
    setDialogIsOpen(true);
    setDialogTitle(`HttpStatusCode ${title} : ${code}`);
    setDialogDescription(description);
  }

  function search(family: string) {
    if(family === 'all') {
      return httpListZustand.resetFilter();
    }    
    return httpListZustand.filterList(family);
  }


  return (
    <div className="py-8 sm:py-16">

      {
        dialogIsOpen && (<ModalDialog title={dialogTitle} description={dialogDescription} isOpen={dialogIsOpen} toggleIsOpen={() => setDialogIsOpen((prevState) => !prevState)} />)
      }

      <div className="flex items-baseline space-x-2">
        {
          tabs.map((tab: any) => (
            <h2 key={tab.id} onClick={() => search(tab.family)}><Badge variant={tab.variant}> {tab.name} </Badge></h2>
          ))
        }
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {httpListZustand.httpList.map((item: ItemModel, index: number) => (
            <Card key={item.id} item={{
              ...item,
              imageUrl: item.imageUrl.replace('?1', `?${index}`)
            }} handleClick={() => handleClick(item)} />
          ))}
        </div>
      </div>
    </div>
  )
}
