"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "../Modal";

export type Product = {
  title: string;
  price: number;
  image: string;
  description: string;
};
function ProductCard({
  product,
  buttonText,
}: {
  product: Product;
  buttonText: string;
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className='border'>
      <Modal
        isOpen={Boolean(selectedProduct)}
        onDismiss={() => setSelectedProduct(null)}
      >
        <div>
          <h1 className='text-slate-950 font-semibold'>
            {selectedProduct?.title}
          </h1>
        </div>
        <div className='flex lg:flex-row flex-col items-center'>
          <div className='flex-1'>
            {selectedProduct?.image && (
              <div className='relative h-[400px] flex items-center justify-center'>
                <Image
                  src={selectedProduct?.image}
                  alt=''
                  height={300}
                  width={150}
                  className='object-contain'
                />
              </div>
            )}
          </div>

          <div className='flex-1'>
            <p>{selectedProduct?.description}</p>
          </div>
        </div>

        <button className='bg-black w-full text-white py-2 mt-4'>Add</button>
      </Modal>
      <div className='relative flex items-center justify-center lg:h-[450px] h-[300px] bg-gray-50'>
        <Image
          src={product.image}
          alt={product.title}
          height={150}
          width={150}
          className='object-contain object-center'
        />
      </div>
      <div className='p-4'>
        <h1>{product.title}</h1>
        <div>
          <span>${product.price}</span>
        </div>
        <div className='mt-3'>
          <button
            onClick={() => handleSelect(product)}
            className='bg-black px-4 py-2 text-white text-sm'
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
