import React from 'react'
import  "../../helpers/format/currency"
import Gis from "../../Gis/gis"



export default function ProductDetails({ data }) {
  const [slider, setSlider] = React.useState(() => data?.imgUrls?.[0] || "");

  // const { dispatch } = useGlobalContext();

  return (
    <section className="container mx-auto">
      <div className="flex flex-wrap my-4 md:my-12">
        <div className="w-full md:hidden px-4">
          <h2 className="text-5xl font-semibold">{data.title}</h2>
          <span className="text-xl">{data.price.currency()}</span>
        </div>
        <div className="flex-1">
          <div className="slider">
            <div className="thumbnail">
              {data?.imgUrls?.map((item) => {
                return (
                  <div
                    className="px-2"
                    key={item}
                    onClick={() => setSlider(item)}
                  >
                    <div
                      className={[
                        "item",
                        slider === item ? "bg-gray-100 selected" : "",
                      ].join(" ")}
                    >
                      <img
                        src={item}
                        alt={item}
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="preview">
              <div className="item rounded-lg h-full overflow-hidden">
                <img
                  src={slider}
                  alt={slider}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 md:p-6">
          <h2 className="text-5xl font-semibold">{data.title}</h2>
          <p className="text-xl">{data.price}</p>
          <hr className="my-8" />

          <h6 className="text-xl font-semibold mb-4">About the product</h6>
          <p className="text-xl">{data.description}</p>
          <Gis/>
        </div>
      </div>
    </section>
  );
}