import { GlobeAmericasIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@tremor/react";

export default function DialogModal ({ showDialog, setShowDialog, size, title, children } : { showDialog: any, setShowDialog: any, size?: any, title: any, children: any }) {
  return (
    <Dialog
      open={showDialog}
      onClose={() => setShowDialog(false)}
      static={true}
      className="z-[100]"
    >
      <DialogPanel className={`flex flex-col justify-start py-4 px-4 dark:bg-[#111827] ${size ? size : 'max-w-[600px]'}`}>
        <div className='py-5 flex items-center justify-between'>
          <div>
            <GlobeAmericasIcon className="w-8 h-8 text-black dark:text-white" />
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