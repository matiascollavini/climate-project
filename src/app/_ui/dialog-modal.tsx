import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@tremor/react";

export default function DialogModal ({ showDialog, setShowDialog, size, title, children } : { showDialog: any, setShowDialog: any, size?: any, title: any, children: any }) {
  return (
    <Dialog
      open={showDialog}
      onClose={() => setShowDialog(false)}
      static={true}
      className="z-[100]"
    >
      <DialogPanel className={`flex flex-col justify-start py-4 px-4 ${size ? size : 'max-w-[800px]'}`}>
        <div className='py-5 flex items-center justify-between'>
          <h3 className='text-2xl text-white'>{title}</h3>
          <button onClick={() => setShowDialog(false)} className='transition text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1'>
            <XMarkIcon className='w-6 h-6' />
          </button>
        </div>
        <div className='border-b mb-5'></div>
        <div>
          {children}
        </div>
      </DialogPanel>
    </Dialog>
  )
}