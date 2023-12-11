// 'use client'는 Next.js에서 사용되지 않습니다.

export default function Info() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-20 lg:-mt-8 pb-40">
        <a href="/product/info/page1" className="w-full block col-span-3 shadow-2xl flex items-center justify-center mt-10">
          <div className="relative overflow-hidden">
            <img
              src="/event2.jpg"
              alt="event1"
              className="transform hover:scale-125 transition duration-2000 ease-out"
            />
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
              FAQ!
            </h1>
          </div>
        </a>

        <a href="/product/info/page2" className="w-full block col-span-3 shadow-2xl flex items-center justify-center">
          <div className="relative overflow-hidden">
            <img
              src="/event.jpg"
              alt="event1"
              className="transform hover:scale-125 transition duration-2000 ease-out"
            />
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
              Christmas event
            </h1>
          </div>
        </a>

        <a href="/product/info/page3" className="w-full block col-span-3 shadow-2xl flex items-center justify-center">
          <div className="relative overflow-hidden">
            <img
              src="/event3.jpg"
              alt="event1"
              className="transform hover:scale-125 transition duration-2000 ease-out"
            />
            <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-black rounded-md px-2">
              Team member Information
            </h1>
          </div>
        </a>
      </div>
    </div>
  );
}
