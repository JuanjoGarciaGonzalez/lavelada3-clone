import React from 'react'
import { LogoVelada } from './LogoVelada'
import { IconMaps } from './IconMaps'
import { ActionButton } from './ActionButton'
import { BgVelada } from './BgVelada'

export const Hero = () => {
  return (
      <section className='my-[50px] md:my-[150px] flex flex-col justify-center items-center'>
        <div className='relative flex flex-col justify-center items-center gap-8'>
          <a href='https://www.twitch.tv/ibai' target='_blank' className='atomic text-white text-center relative -rotate-6 font-atomic text-2xl underline-offset-8 transition hover:scale-110 md:text-4xl'><span>twitch.tv/ibai</span></a>
          <LogoVelada />
          <BgVelada className='bgVelada'/>
          <span className='text-center text-[#ddd] text-2xl md:text-5xl jost-semi-bold mt-20'>13 DE JULIO</span>
          <a href="https://www.google.com/maps/place/Estadio+Santiago+Bernab%C3%A9u/@40.4530428,-3.6909086,17z/data=!3m1!4b1!4m6!3m5!1s0xd4228e23705d39f:0xa8fff6d26e2b1988!8m2!3d40.4530387!4d-3.6883337!16zL20vMDFneGx0?entry=tts" target='_blank' className='text-[#ddd] text-lg md:text-2xl jost-semi-bold flex items-start gap-0'>
          <IconMaps />
          ESTADIO SANTIAGO BERNABÉU
          </a>
          <div className='flex justify-center gap-10'>
            <ActionButton text='COMPRAR ENTRADAS' link='' disabled={true} />
            <ActionButton text='AGREGAR AL CALENDARIO' link='' disabled={false} />
          </div>
        </div>
      </section>
  )
}