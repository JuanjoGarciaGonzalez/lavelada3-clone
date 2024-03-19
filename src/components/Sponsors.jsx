import React from 'react'
import { SPONSORS } from '../data/SPONSORS'

export const Sponsors = () => {
  return (
    <section className='relative my-[100px] md:my-[200px]'>
        <h2 className='text-center text-2xl font-atomic jost-semi-bold text-white mb-4'>PATROCINADORES</h2>
        <p className='text-center text-white jost-regular sm:text-sm md:text-xl opacity-[0.8]'>La Velada puede llevarse a cabo gracias a la colaboración de...</p>

        <article className='sponsors grid grid-cols-3 grid-rows-3 gap-2 md:gap-7 mx-auto mt-10 w-[90dvw] md:w-[75dvw] transition-all'>
        {SPONSORS.map(sponsor => (
            <a key={sponsor.id} href={sponsor.url} target='_blank' className='w-100 h-100 flex justify-center items-center sponsor'>
                <img
                    src={`/img/sponsors/${sponsor.id}.svg`}
                    alt={`Logo de ${sponsor.name}`}
                    width={sponsor.image.width}
                    height={sponsor.image.height}
                    className='md:px-4 py-3 md:py-8 transition-transform max-w-[70%] max-h-[90%]'
                />
            </a>
        ))}
        </article>

        <div className='flex justify-center items-center gap-5 mt-10'><span className='text-white jost-regular sm:text-sm md:text-xl opacity-[0.8]'>Web patrocinada por </span>
            <a href='https://infojobs.net' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="77" fill="none" viewBox="0 0 257 65" alt='Logo de Infojobs' className='hover:scale-110 transition-transform infojobs-logo'>
                    <g fill="#fff" clip-path="url(#a)">
                        <path
                            d="M0 49.771c0 .557.558.93 1.116.93h9.311c.558 0 1.116-.37 1.303-1.114l5.776-48.474V.927c0-.557-.374-.927-.745-.927H6.705c-.558 0-.745.37-.745.93L0 49.77ZM55.124 21.729c0 1.486-.187 2.972-.371 4.457l-2.98 23.401c0 .557-.558 1.113-1.117 1.113H42.09c-.558 0-1.116-.37-1.116-.929v-.186l2.793-22.658c.187-.93.187-2.043.187-2.786 0-1.113-.187-2.042-.745-2.599-.745-.743-1.86-1.113-3.538-1.113-3.35 0-7.263.93-7.263.93L28.87 49.774c0 .556-.558 1.113-1.303 1.113h-8.566c-.558 0-1.116-.37-1.116-.93v-.186l3.725-30.457c.932-2.786 2.606-3.529 6.892-4.458 3.725-.743 9.31-1.672 13.594-1.672 5.028 0 8.753.743 10.988 2.785 1.116 1.3 2.048 3.158 2.048 5.757l-.008.003ZM143.585.93c0-.557-.187-.744-.745-.744h-10.056c-.558 0-.932.37-.932.93l-6.146 50.887c-.932 5.2-3.167 5.2-6.705 5.387-1.49 0-2.793 0-3.725.186-1.116 0-1.49.37-1.677 1.486l-.558 4.085v.37c0 .93.558 1.113 1.303 1.113 1.303.186 1.861.37 6.705.37 8.195 0 14.9-2.415 16.203-13.373L143.585.93Z" />
                        <path
                            d="M119.375 40.672c-2.235 6.314-7.076 10.585-18.251 10.585-6.331 0-10.243-1.3-12.665-3.715-2.422-2.415-3.167-5.943-3.167-9.841 0-4.458.932-11.144 2.606-15.043 2.422-5.943 7.263-9.842 17.877-9.842 6.331 0 10.43 1.486 12.665 3.715 2.422 2.415 3.167 5.57 3.167 9.658 0 4.458-.745 10.585-2.235 14.486m-9.869-19.13c-.932-.93-2.235-1.486-4.657-1.486-5.028 0-6.705 2.229-7.637 7.243-.558 3.342-1.116 7.243-1.116 10.771 0 2.23.371 3.715 1.303 4.644.932.93 2.235 1.3 4.47 1.3 5.215 0 6.705-2.415 7.637-7.616.558-3.342 1.116-6.873 1.116-10.215 0-2.228-.187-3.714-1.116-4.644M179.526 40.672c-2.235 6.314-7.076 10.585-18.25 10.585-6.332 0-10.243-1.3-12.665-3.715-2.422-2.415-3.167-5.943-3.167-9.841 0-4.458.932-11.144 2.606-15.043 2.422-5.943 7.263-9.842 18.064-9.842 6.331 0 10.43 1.486 12.665 3.715 2.422 2.415 3.167 5.57 3.167 9.658-.187 4.458-.932 10.585-2.422 14.486m-9.869-19.13c-.932-.93-2.235-1.486-4.657-1.486-5.028 0-6.705 2.229-7.637 7.243-.558 3.342-1.116 7.243-1.116 10.771 0 2.23.187 3.715 1.303 4.644.932.93 2.235 1.3 4.47 1.3 5.215 0 6.705-2.415 7.637-7.616.558-3.342 1.116-6.873 1.116-10.215.187-2.228-.187-3.714-1.116-4.644M220.498 39.56c-2.422 7.799-7.263 11.7-18.438 11.7-5.402 0-10.243-.743-12.849-1.672-2.793-.93-3.351-2.043-3.351-3.902 0-.929.187-2.042.371-3.342l4.841-40.672c0-.93.558-1.486 1.49-1.672h8.566c.558 0 1.117.37 1.117.93v.186l-1.117 8.915-.558 4.085s4.283-1.3 8.753-1.3 8.008.93 10.056 2.972 3.167 5.2 3.167 10.028c0 4.458-.745 9.472-2.048 13.743Zm-9.869-17.829c-.932-1.113-2.422-1.485-4.657-1.485-2.793 0-6.518.929-6.518.929l-2.793 22.285s2.422.557 5.402.557c5.028 0 7.076-1.486 8.379-8.729.558-2.972.932-6.13.932-9.285.187-2.043-.187-3.529-.745-4.271ZM255.51 20.43c-.187.556-.558.742-1.116.742h-.371c-.745 0-4.657-.93-8.379-.93-1.677 0-3.912.187-5.215 1.3-.932.743-1.303 1.856-1.303 2.972 0 2.972 3.166 2.972 6.518 3.715 2.793.37 5.586 1.113 7.449 2.972 1.49 1.299 2.235 3.341 2.235 6.5 0 3.341-1.116 6.872-3.538 9.471-3.166 3.158-8.008 4.458-13.409 4.458-5.96 0-11.546-1.486-12.665-2.043-.187-.186-.558-.186-.558-.743v-.556l1.49-4.458c.187-.556.558-.929.932-.929h.371c.932.186 5.773 1.672 10.056 1.672 2.048 0 3.725-.37 5.028-1.486 1.116-.929 1.49-2.042 1.49-3.158 0-1.486-.558-2.229-1.49-2.785-.932-.557-2.235-.743-3.912-.93-2.606-.556-6.147-.929-8.379-3.157-1.303-1.486-2.235-3.342-2.235-6.13 0-3.159.745-6.314 2.793-8.73 3.538-4.27 9.498-4.827 13.968-4.827 5.586 0 9.869 1.113 11.175 1.672.558.187.558.557.558.93v.37l-1.49 4.085-.003.002ZM86.41 1.3C85.296.93 82.129.185 77.1.185c-8.195 0-12.478 3.715-13.41 11.144l-.371 4.458-.932 7.616-3.351 24.514v.556l-.187 1.3c0 .556.558.743 1.116.743h8.195c.558 0 1.303-.187 1.49-.93v-.556l3.725-25.63h8.566c.558 0 1.116-.37 1.116-1.113l.745-5.57c0-.557-.371-.93-.932-.93h-8.94l.558-4.458c.371-2.971 1.677-3.714 5.028-3.714 1.861 0 4.096.37 4.841.556h.371c.559 0 .745-.37.932-.93l1.303-4.827v-.37c0-.37-.186-.743-.558-.743l.006-.003Z" />
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h257v65H0z" />
                        </clipPath>
                    </defs>
                </svg>
            </a>
        </div>
    </section>
  )
}