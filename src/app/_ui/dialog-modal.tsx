import { GlobeAmericasIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@tremor/react";
import { UbicationIcon } from "../_icons";

export default function DialogModal ({ showDialog, setShowDialog, size, title, children } : { showDialog: any, setShowDialog: any, size?: any, title: any, children: any }) {
  return (
    <Dialog
      open={showDialog}
      onClose={() => setShowDialog(false)}
      static={true}
      className="z-[100]"
    >
      <DialogPanel className={`flex flex-col justify-start py-4 px-4 bg-gradient-to-b from-slate-300 to-slate-400 dark:from-[#353d49] dark:to-[#2f2c2c] ${size ? size : 'max-w-[600px]'}`}>
        <div className='py-5 flex items-center justify-between'>
          <div>
            <UbicationIcon className="w-6 h-6 fill-black dark:fill-white" />
          </div>
          <h3 className='text-2xl text-black dark:text-white'>{title}</h3>
          <button onClick={() => setShowDialog(false)} className='transition text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1'>
            <XMarkIcon className='w-8 h-8' />
          </button>
        </div>
        <div>
          {children}
        </div>
      </DialogPanel>
    </Dialog>
  )
}