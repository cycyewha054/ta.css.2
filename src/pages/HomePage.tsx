import React from 'react';

export const HomePage = () => {
  return (
    <div className="m-4 space-y-10">
      <div className="space-y-4">
        <img src="https://images.unsplash.com/photo-1649642607757-723a3e55401b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="w-full h-72 object-cover rounded-2xl"
        />
      </div>


      <div className="space-y-4">
        <div className="text-2xl  font-bold ">Category</div>

        <div className="flex space-x-6 ">
          <div>
            <img
              src="https://media.istockphoto.com/photos/food-for-healthy-brain-picture-id1299079243?b=1&k=20&m=1299079243&s=170667a&w=0&h=vav4VYNuuV0Qc4fl2JhROewXaKGEYnhlXddiB4PCKm8="
              alt=""
              className='w-20 h-20 object-cover rounded-full'
            />
            <div className='text-center mt-1'>일식</div>
          </div>

          <div>
            <img
              src="https://media.istockphoto.com/photos/seamless-food-background-made-of-opened-canned-food-picture-id1348369752?b=1&k=20&m=1348369752&s=170667a&w=0&h=qO0uQSCqPhqOpXumVH-mfulVvITddkgY4AzsGEk5zlM="
              alt=""
              className='w-20 h-20 object-cover rounded-full'
            />
            <div className='text-center mt-1'>중식</div>
          </div>

          <div>
            <img
              src="https://media.istockphoto.com/photos/growth-of-food-sales-or-growth-of-market-basket-or-consumer-price-picture-id1329491626?b=1&k=20&m=1329491626&s=170667a&w=0&h=3jSbXJTJaarZscy4Q0Un9Hw4r22gC68KI2dJTX8OneU="
              alt=""
              className='w-20 h-20 object-cover rounded-full'
            />
            <div className='text-center mt-1'>한식</div>
          </div>

          <div>
            <img
              src="https://media.istockphoto.com/photos/classic-thai-food-dishes-picture-id1312283557?b=1&k=20&m=1312283557&s=170667a&w=0&h=hXAmitFiH9z0mK3GZdMDbkkcSl8Em84LIIlkHnVhpPE="
              alt=""
              className='w-20 h-20 object-cover rounded-full'
            />
            <div className='text-center mt-1'>양식</div>
          </div>
        </div>
      </div>



      <div>
        <div className="text-2xl  font-bold mb-4">List</div>

        <div className='border p-4 rounded-md'>
          <div>
            <img
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60"
              alt=""
              className="w-full h-60 object-cover rounded-xl"
            />
            <div className="mt-4">
              <div className="text-lg font-semibold">Card title</div>
              <div className="text-gray-500">
                Sed vel turpis adipiscing penatibus orci neque. Erat sed fermentum ipsum vel quis quam.
                Nunc etiam dui tortor, non in aliquam lacinia tempor.
              </div>
              <div className="mt-4 flex justify-end space-x-3 ">
                <div className='bg-gray-800 rounded-md text-white text-center py-3 px-4'>button</div>
                <div className='bg-gray-800 rounded-md text-white text-center py-3 px-4'>button</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="text-2xl  font-bold mb-4">Today's Special</div>

        <div className="flex justify-start space-x-6">
          <div>
            <img
              src="https://media.istockphoto.com/photos/plant-based-vegan-food-for-a-healthy-lifestyle-picture-id1301035781?b=1&k=20&m=1301035781&s=170667a&w=0&h=Mk4zLtRIxQ2QG8w8ObQ8cKUZFSpCLsCIhBNO_H9-YsI="
              alt=""
              className='w-24 h-40 object-cover rounded-xl' />
          </div>

          <div>
            <div className="text-lg font-semibold mb-2">식당 이름</div>
            <div className="text-gray-800 w-44">말이 필요 없는 서울 최고의 식당 중 하나</div>
            <div className="text-gray-400">서울시 강남구 청담동</div>
          </div>
        </div>
      </div>


      <div className='border'>
      </div>


      <div>
        <img src="https://media.istockphoto.com/photos/interior-of-a-modern-cozy-french-restaurant-picture-id1314951233?b=1&k=20&m=1314951233&s=170667a&w=0&h=XgyJ96HAeBPpC4c6PnvlN8pnIJw7PAkNhwySVvX2JQk="
          alt=""
          className="w-full h-72 object-cover rounded-2xl"
        />

        <div className="text-lg font-semibold mt-4 mb-2">이화여대 아맛나 식당</div>
        <div className="text-gray-600">서울특별시 서대문구 대현동 11-1</div>
        <div className="text-gray-600">02-1234-5678</div>
        <div className="text-gray-600 mb-8">MON-SUN 12:00 PM - 9:00 PM</div>

        <div className='bg-gray-800 rounded-full text-white text-center text-lg py-5 px-4'>네이버 지도로 길찾기
        </div>
      </div>

    </div>
  );
};
