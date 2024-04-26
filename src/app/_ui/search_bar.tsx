'use client'

import { RiSearchLine } from '@remixicon/react';
import { TextInput } from '@tremor/react';
import { FaSearchLocation } from 'react-icons/fa';
import { locations } from '../_data/lDate';

export default function SearchBar() {

  return (
    <form className='w-[500px] relative'>
      <div className='relative'>
        <input type="search" placeholder='Buscar clima por localidad' className='w-full p-4 rounded-full bg-slate-800 text-white' />
        <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-full text-white'>
          <FaSearchLocation />
        </button>
      </div>
    </form>
  );
}
