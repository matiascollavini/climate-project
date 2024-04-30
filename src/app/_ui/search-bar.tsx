'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function SearchBar() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
      if (term) {
      params.set('query', term)
    }else{
      params.delete('query')
    }
    replace(`${pathname}?${params.toString()}`)
    }, 300)
  
  return (
      <div className='relative w-full md:w-1/3'>
        <input type="search" placeholder='Buscar clima por localidad' className='w-full p-4 rounded-full bg-slate-800 text-white' 
          defaultValue={searchParams.get('query')?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value)
          }} 
        />
      </div>
  );
}
