import React from 'react'

export default function ShoppingCart() {
  return (
    <div className="w-full px-4 mb-4 md:w-8/12 md:mb-0" id="shopping-cart">
            <div
              className="flex pb-3 mt-8 mb-4 border-b border-gray-200 flex-start md:border-b-0"
            >
              <h3 className="text-2xl">peminjaman barang</h3>
            </div>

            <div className="hidden mb-4 border-b border-gray-200 md:block">
              <div className="flex items-center pb-2 -mx-4 flex-start">
                <div className="flex-none px-4">
                  <div className="" style={{width: 90}}>
                    <h6>Photo</h6>
                  </div>
                </div>
                <div className="w-5/12 px-4">
                  <div className="">
                    <h6>Nama Barang</h6>
                  </div>
                </div>
                <div className="w-5/12 px-4">
                  <div className="">
                    <h6>Kode</h6>
                  </div>
                </div>
                <div className="w-2/12 px-4">
                  <div className="text-center">
                    <h6>Action</h6>
                  </div>
                </div>
              </div>
            </div>

            <p id="cart-empty" className="hidden py-8 text-center">
              Ooops... Cart is empty
              <a href="details.html" className="underline">Shop Now</a>
            </p>

            
            <div
              className="flex flex-wrap items-center mb-4 -mx-4 flex-start"
              data-row="1"
            >
              <div className="flex-none px-4">
                <div className="" style={{width: 90, height: 90}}>
                  <img
                    src="./images/content/chair-1.png"
                    alt="chair-1"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1 w-auto px-4 md:w-5/12">
                <div className="">
                  <h6 className="text-lg font-semibold leading-8 md:text-xl">
                    Batuan A
                  </h6>
                  <span className="text-sm md:text-lg">artefak</span>
                  <h6
                    className="block text-base font-semibold md:text-lg md:hidden"
                  >
                    1234
                  </h6>
                </div>
              </div>
              <div
                className="flex-none hidden w-auto px-4 md:flex-1 md:w-5/12 md:block"
              >
                <div className="">
                  <h6 className="text-lg font-semibold">12345</h6>
                </div>
              </div>
              <div className="w-2/12 px-4">
                <div className="text-center">
                  <button
                    data-delete-item="1"
                    className="px-3 py-1 text-red-600 border-none focus:outline-none"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
                        
            <div
              className="flex flex-wrap items-center mb-4 -mx-4 flex-start"
              data-row="2"
            >
              <div className="flex-none px-4">
                <div className="" style={{width: 90, height: 90}}>
                  <img
                    src="./images/content/chair-2.png"
                    alt="chair-2"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1 w-auto px-4 md:w-5/12">
                <div className="">
                  <h6 className="text-lg font-semibold leading-8 md:text-xl">
                    batuan b
                  </h6>
                  <span className="text-sm md:text-lg">vertebrata</span>
                  <h6
                    className="block text-base font-semibold md:text-lg md:hidden"
                  >
                    1234
                  </h6>
                </div>
              </div>
              <div
                className="flex-none hidden w-auto px-4 md:flex-1 md:w-5/12 md:block"
              >
                <div className="">
                  <h6 className="text-lg font-semibold">1234</h6>
                </div>
              </div>
              <div className="w-2/12 px-4">
                <div className="text-center">
                  <button
                    data-delete-item="2"
                    className="px-3 py-1 text-red-600 border-none focus:outline-none"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
            

            
            <div
              className="flex flex-wrap items-center mb-4 -mx-4 flex-start"
              data-row="3"
            >
              <div className="flex-none px-4">
                <div className="" style={{width: 90, height: 90}}>
                  <img
                    src="./images/content/chair-3.png"
                    alt="chair-3"
                    className="object-cover w-full h-full rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1 w-auto px-4 md:w-5/12">
                <div className="">
                  <h6 className="text-lg font-semibold leading-8 md:text-xl">
                    batuan b
                  </h6>
                  <span className="text-sm md:text-lg">1234</span>
                  <h6
                    className="block text-base font-semibold md:text-lg md:hidden"
                  >
                    1234
                  </h6>
                </div>
              </div>
              <div
                className="flex-none hidden w-auto px-4 md:flex-1 md:w-5/12 md:block"
              >
                <div className="">
                  <h6 className="text-lg font-semibold">12345</h6>
                </div>
              </div>
              <div className="w-2/12 px-4">
                <div className="text-center">
                  <button
                    data-delete-item="3"
                    className="px-3 py-1 text-red-600 border-none focus:outline-none"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>

          </div>
  )
}
