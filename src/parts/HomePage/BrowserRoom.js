import React, {
  useEffect
} from 'react'
import useAsync from '../../helpers/hooks/useAsync'
import fetch from '../../helpers/fetch'

export default function BrowserRoom() {
  const {
    data,
    status,
    error,
    run,
    isLoading
  } = useAsync({
    data: {
      username: ""
    }
  });

  useEffect(() => {
    run(fetch({
      url: "/api/categories/?page=1&limit=4"
    }));
  }, [run]);
  console.log(data, status, error);
  

  const ratioClassNames = {
    wrapper: {
      default: {
        "1/9": "col-span-9 row-span-1"
      },
      md: {
        "1/4": "md:col-span-4 md:row-span-1",
        "2/2": "md:col-span-2 md:row-span-2",
        "2/3": "md:col-span-3 md:row-span-2",
      },
    },
    meta: {
      "1/9": "top-0 bottom-0 left-0 flex flex-col justify-center pl-48  md:pl-72",
      "1/4": "top-0 bottom-0 left-0 flex flex-col justify-center pl-48  md:pl-72",
      "2/2": "inset-0 md:bottom-auto flex md:items-center flex-col justify-center pl-48  md:pl-0 md:pt-12",
      "2/3": "inset-0 md:bottom-auto flex md:items-center flex-col justify-center pl-48  md:pl-0 md:pt-12",
    },
  }


  return (
 <section className="flex bg-gray-100 py-16 px-4" id="browse-the-room">
      <div className="container mx-auto">
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            browse the room <br className="" />that we designed for you
          </h3>
      </div>
      
      <div className="grid grid-cols-9 grid-rows-2 gap-4">
          {isLoading ? "Loading" :
            data.data.map((item, index) => {
              return (
               <div key={item.id}
              className={`relative card 
              ${ ratioClassNames?.wrapper.default?.[item.ratio.default]
                } ${ ratioClassNames?.wrapper.md?.[item.ratio.md]}`}
          style={{ height: index === 0 ? 180 : "auto"}}
        >
          <div className="card-shadow rounded-xl">
            <img
              src={`/images/content/${item.imageUrl}`}
              alt={item.title}
              className="object-cover object-center w-full h-full overflow-hidden overlay rounded-xl"
            />
          </div>
          <div className={`overlay ${ ratioClassNames?.meta?.[item.ratio.md]}`}
          >
              <h5 className="text-lg font-semibold">{item.title}</h5>
                <span className="">
                  {item.products} item{item.products > 1 ? "s" : ""}
                </span>
          </div>
                </div>
            )             
            })
      }
      </div>
    </div>
  </section>
  )
}
