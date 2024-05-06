'use client'

import { XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string | null) => {
    const params = new URLSearchParams(searchParams)
      if (term) {
      params.set('query', term)
    }else{
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
    }, 300)

    const onKeyDown = () => {
      document.addEventListener('keydown', () => {
      document.querySelector('input')?.focus()
    })
  }

  onKeyDown()
  return (
      <div className='relative w-full md:w-1/3'>
        <input 
          placeholder='Buscar clima por localidad'
          className='w-full p-4 rounded-full bg-transparent dark:text-white' 
          defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value)
          }} 
        />
        {searchParams.get('query') && 
          <button 
            className='absolute top-1/3 right-5'
            onClick={() => handleSearch(null)}
          >
            <XMarkIcon className='h-6 w-6 text-black dark:text-white' />
          </button>
        }
      </div>
  );
}
