import React from 'react'
import Title from '../ui/Title'
import SubTitle from '../ui/SubTitle'
import ProductItem from '../ProductItem'

const BestSelling = ({ products }) => {
    return (
        <section className="py-[70px]">
            <div className="container mx-auto ">
                <div className="flex justify-between items-end mb-[60px]">
                    <div>
                        <Title title={"This Month"} />
                        <SubTitle subtitle={'Best Selling Products'} />
                    </div>

                </div>
                <div className='grid grid-cols-4 gap-[30px]'>
                    {
                        products.map((product) => (
                            <ProductItem key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BestSelling