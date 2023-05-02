import { useState } from "react";
import { Card } from "../../components/Card";
import { ItemModel } from "../../model/Item";
import { httpList } from "./constants";
import { ModalDialog } from "../../components/ModalDialog";

export default function Home() {
  const [dialogIsOpen, setDialogIsOpen] = useState<boolean>(false);
  const [dialogTitle, setDialogTitle] = useState<string>('');
  const [dialogDescription, setDialogDescription] = useState<string>('');

  function handleClick({ title, description } : ItemModel) {
    setDialogIsOpen(true);
    setDialogTitle(title);
    setDialogDescription(description);
  }

  return (
    <div className="py-24 sm:py-32">

      {
        dialogIsOpen && (<ModalDialog title={dialogTitle} description={dialogDescription} isOpen={dialogIsOpen} toggleIsOpen={() => setDialogIsOpen((prevState) => !prevState)} />)
      }
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {httpList.map((item: ItemModel) => (
            <Card key={item.id} item={item} handleClick={() => handleClick(item)} />
          ))}
        </div>
      </div>
    </div>
  )
}
