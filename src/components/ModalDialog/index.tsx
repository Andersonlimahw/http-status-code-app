import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface DialogProps {
  title: string;
  description: string;
  isOpen: boolean;
  toggleIsOpen: any;
}
export const ModalDialog = ({ title, description, isOpen, toggleIsOpen }: DialogProps) => {

  return (
    <Transition
      show={isOpen}
      enter="transition duration-300 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-110 opacity-100"
      leave="transition duration-400 ease-out"
      leaveFrom="transform scale-110 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <Dialog className="bg-zinc-900 text-white-800 fixed w-full h-full inline-block relative z-50" open={isOpen} onClose={() => toggleIsOpen(false)}>
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4  overflow-y-auto">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto max-w-sm rounded bg-zinc-900 p-4">
            <Dialog.Title className="py-2 text-green-400">{title}</Dialog.Title>
            <Dialog.Description className="py-2 text-zinc-400">
              {description}
            </Dialog.Description>
            <button className='rounded-full bg-green-800 text-white mt-2 mb-2' onClick={() => toggleIsOpen(false)}>OK</button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  )
}