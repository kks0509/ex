import ProductItem from '@/components/ProductItem'
import { data } from '@/utils/data'

export default function Home() {
  const { product } = data

  // 제품 리스트를 세 개의 영역으로 나누기
  const saleProducts = product.slice(0, 6);
  const manProducts = product.slice(6, 18);
  const womanProducts = product.slice(18, 35);

  return (
    <div>
      {/* 영역 1: Sale */}
      <div className="text-center ml-4"> {/* 왼쪽 마진 추가 */}
      <h1 className="text-9xl md:text-16xl font-bold py-10 text-black underline">
          On Sale!
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"> 
          {saleProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      {/* 영역 2: Man */}
      <div className="text-center ml-4"> {/* 왼쪽 마진 추가 */}
        <h1 className="text-9xl md:text-16xl font-bold py-10">
          Man
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"> 
          {manProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      {/* 영역 3: Woman */}
      <div className="text-center ml-1"> {/* 왼쪽 마진 추가 */}
        <h1 className="text-9xl md:text-16xl font-bold py-10">
          Woman
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6"> 
          {womanProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
