import Image from 'next/image'

const HeroSection = () => {
  return (
    <>
      <section className='min-h-svh hero mt-7'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
          <div className='img-banner'>
            <div className='bg-[#E1E1E1] p-5'>
              <Image
                src={'/hero_section.svg'}
                width={400}
                height={500}
                alt='hero_section_banner'
                className='shadow_generic'
              />
            </div>
            <div className='bg-[#FFFFFF] p-5 text-center'>
              <p className='text-tangerine text-4xl'>
                "Designs that live with you"
              </p>
            </div>
          </div>

          <div className='about md:max-w-[60%]'>
            {/* Title */}
            <p className='text-cormorant_unicase leading-none'>
              <span className='md:text-7xl text-5xl block'>CUBISM</span>
              <span className='md:text-4xl text-2xl  block'>
                the interior design studio
              </span>
            </p>

            {/* About */}
            <p className='text-cormorant text-lg mt-7'>
              We have been creating refined, meaningful interior design for our
              discerning clientele for nearly 3 years. As a premier Seattle
              interior design firm, we embrace a process that incorporates
              multitude of elements essential to experiencing a building or
              space as a complete environment.
            </p>

            <p className='text-lg mt-7'>
              <span className='font-black block'>Our workplaces?</span>
              <span className='block'>
                NASHK, MUMBAI, PUNE, KHOPOLI, HYDERABAD
              </span>
            </p>
          </div>
        </div>

        <div className='name-plate mt-7 md:mt-0 md:flex flex-col items-end text-center'>
          <p>Principal designer</p>
          <p className='text-raeenie_beanie text-3xl'>Sayyami Shah</p>
        </div>

        <div className='md:flex justify-center items-end gap-2 hidden'>
          <p className='mt-7'>Scroll Down</p>
          <Image
            src={'/doubleArrowDown.svg'}
            width={12}
            height={12}
            alt='down_arrow'
            className='animate-bounce-up-down'
          />
        </div>
      </section>
    </>
  )
}

export default HeroSection
