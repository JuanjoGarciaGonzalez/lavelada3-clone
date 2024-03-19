import React from 'react'

export const TwitchBanner = () => {
  return (
    <section className='relative my-[50px] md:my-[100px] flex'>
        <a href='https://www.twitch.tv/ibai' target='_blank' className='inline-flex mx-auto flex-col justify-center items-center group'>
            <hr className='h-[2px] min-w-[20rem] max-w-lg border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent sm:w-full mb-[50px]' />
            <svg
                fill="none"
                viewBox="0 0 78 91"
                role="img"
                aria-label="Logotipo de Twitch"
                data-astro-cid-ox7oa4ar=""
                className='absolute -top-[15%] left-0 right-0 mx-auto w-12 md:w-16 z-10 group-hover:scale-110 transition-transform'
                >
                {" "}
                <path
                    className="stroke"
                    fill="var(--color-twitch)"
                    d="M16.6001.600098.600098 16.6001v57.6H19.8001v16l16-16h12.8l28.8-28.8V.600098h-60.8Z"
                    data-astro-cid-ox7oa4ar=""
                />{" "}
                <path
                    className="fill"
                    fill="var(--color-twitch-ice)"
                    d="m58.2003 55 12.8-12.8V7h-51.2v48h12.8v12.8l12.8-12.8h12.8Z"
                    data-astro-cid-ox7oa4ar=""
                />{" "}
                <path
                    className="stroke"
                    fill="var(--color-twitch)"
                    d="M39 19.8h6.4V39H39V19.8Zm22.4 0V39H55V19.8h6.4Z"
                    data-astro-cid-ox7oa4ar=""
                />{" "}
            </svg>

        <span className='atomic text-white text-center -rotate-6 font-atomic text-2xl sm:text-5xl md:text-5xl underline-offset-8 -mb-3 group-hover:scale-110 transition-transform'><span>en directo</span></span>
        <p className='text-white text-center text-2xl sm:text-5xl md:text-7xl uppercase color-accent jost-semi-bold group-hover:scale-110 transition-transform'>twitch.tv/ibai</p>
        <hr className='h-[2px] min-w-[20rem] max-w-lg border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent sm:w-full mt-[50px]'/>
        </a>
    </section>
  )
}
