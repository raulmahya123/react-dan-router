import React from 'react'

export default function Hero() {
  return (
    <section class="flex items-center hero">
    <div
      class="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption">
      <h1 class="text-3xl md:text-5xl leading-tight font-semibold">
        SELAMAT DATANG <br class="" />Di Museum Geologi Bandung
      </h1>
      <h2 class="px-8 text-base md:px-0 md:text-lg my-6 tracking-wide">
        Lorem Ipsum is simply dummy text of the printing and t
        ypesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text 
        ever since
         the 1500s, 
        when an unknown printer took a galley of type and scrambled 
        it to make a type 
        specimen book. It has survived not only five centuries, but also
         the leap into 
        electronic typesetting, remaining essentially unchanged. It 
        was popularised in the
         1960s with the release of Letraset sheets containing Lorem 
         Ipsum passages, and more 
         recently with desktop publishing software like Aldus
         PageMaker including versions of Lorem Ipsum.
        <br class="hidden lg:block" />membuat ruangan terasa homey
      </h2>
      <div>
        <a
          href="#browse-the-room"
          class="bg-pink-400 text-black hover:bg-black hover:text-pink-400 rounded-full px-8 py-3 mt-4 inline-block flex-none transition duration-200"
          >Explore Now</a>
      </div>

    </div>
    <div class="w-full inset-0 md:relative md:w-1/2">
      <div class="relative hero-image">
        <div class="overlay inset-0 opacity-35 z-10"></div>
        <div class="overlay right-0  bottom-0 md:inset-0">
          <button
            class="video hero-cta bg-black   focus:outline-none z-30 modal-trigger"
            data-content='<div class="w-screen pb-56 md:w-88 md:pb-56 relative z-50">
            <div class="absolute w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/3h0_v1cdUIA"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>'
          ></button>
        </div>
        <img
        src="images/content/lokasi.jpg"
          alt="hero 1"
          class="absolute inset-0 md:relative w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </section>
  );
}
