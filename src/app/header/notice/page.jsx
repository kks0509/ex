//className="transform hover:scale-125 transition duration-2000 ease-out"
//위 코드는 마우스를 올렸을 때 대상 이미지가 움직이도록 하는 설정

import React from 'react';

export default function Notice() {
  return (
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-20 lg:-mt-8 pb-40">
          <br></br>
          <a
            href="/app/header/notice/content/page1"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/event.jpg"
                alt="event1"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
                Event: 1
              </h1>
            </div>
          </a>
          <a
            href="/app/header/notice/content/page2"
            className="w-full block col-span-3  sm:col-span-2 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/event2.png"
                alt="event2"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
                Event: 2
              </h1>

            </div>
          </a>
          
        </div>
      </div>

  );
}