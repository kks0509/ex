import { data } from '@/utils/data'
import Image from 'next/image'
import Link from 'next/link'


export default function ProductDetailPage({ params: { id } }) {
  const product = data.product_man.find((x) => x.id === id)
  if (!product) {
    return <div>Product Not Found</div>
  }
  return (
    <div>
      <div className="py-2">
        <Link href="/">back to main manu</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>
              <hr className="my-3" />
              Description:
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}