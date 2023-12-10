import React from 'react'
import Link from 'next/link'

export default function page3() {
  return (
    <div>
<h1 className="text_header">안서진</h1>
      <ul className="text_p hover:bg-slate-100">
        <Link href="https://github.com/annseojin/annseojin">
          깃허브 주소: https://github.com/annseojin/annseojin{' '}
          <br />
        </Link>
      </ul>
    </div>
  )
}
