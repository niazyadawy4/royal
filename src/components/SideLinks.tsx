import Link from 'next/link'
import React from 'react'

const SideLinks = () => {
  return (
    <aside className='pt-10 border-r border-button border-border-semi-transparent'>
        <ul className='flex flex-col gap-4'>
            <li> <Link href={'/'}>Woman’s Fashion</Link> </li>
            <li> <Link href={'/'}>Men’s Fashion</Link> </li>
            <li> <Link href={'/'}>Electronics</Link> </li>
            <li> <Link href={'/'}>Home & Lifestyle</Link> </li>
            <li> <Link href={'/'}>Sports & Outdoor</Link> </li>
            <li> <Link href={'/'}>Baby’s & Toys</Link> </li>
            <li> <Link href={'/'}>Groceries & Pets</Link> </li>
            <li> <Link href={'/'}>Health & Beauty</Link> </li>
        </ul>
    </aside>
  )
}

export default SideLinks