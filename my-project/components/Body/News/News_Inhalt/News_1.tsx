import React from 'react'
import Image from 'next/image'
import Picture from '../../../../public/Panorama.jpg';

export default function News_1() {
  return (
    <div className="bg-[#f5f4df] flex flex-row my-8 ">
        <Image className="w-2/3" src={Picture} alt="Picture"/>
        <div className="p-16">
            <p className="font-bold text-3xl">Title</p>
            <br/>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
            </p>   
        </div>
    </div>
  )
}
