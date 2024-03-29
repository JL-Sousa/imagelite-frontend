"use client"

import { Template, ImageCard} from '@/components'
import { Image } from '@/resources/images/image.resource';
import { useImageService } from '@/resources/images/image.service'
import { useState } from 'react';

export default function GaleriaPage() {

  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);

  async function searchImages() {
    const result = await useService.buscar();
    setImages(result);
    console.table(result);
  }

  function renderImageCard(image: Image) {
    return (
      <ImageCard nome={image.name}
                 src={image.url}
                 tamanho={image.size}
                 dataUpload={image.uploadDate} />
    )
  }

  function renderImageCards() {
    return images.map(renderImageCard)
  }
  return (
    <Template>
      <section className='flex flex-col items-center justify-center my-5'>
        <div className='flex space-x-4'>
          <input type='text' className='border px-5 py-3 rounded-lg text-gray-900' />
          <select className='border px-4 py-2 rounded-lg text-gray-900'>
            <option>All formats</option>
          </select>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg' onClick={searchImages}>Search</button>
          <button className='bg-yellow-500 text-white px-4 py-2 rounded-lg'>Add New</button>
        </div>
      </section>
      <section className='grid grid-cols-3 gap-8'>
        {
          renderImageCards()
        }
      </section>
      
    </Template>
  )
}