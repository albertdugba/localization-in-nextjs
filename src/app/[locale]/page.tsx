import { useMessages, useTranslations } from "next-intl";
import ProductCard, { Product } from "./Card";

type TLocales = "Product";

export default function Index() {
  const t = useTranslations<TLocales>("Product");
  const messages: any = useMessages();

  const products = Object.values(messages.Product.data) as unknown as Product[];

  return (
    <div>
      <div className='mt-4'>
        <div className='mb-4'>
          <h1>{t("title")}</h1>
        </div>

        <div className='my-5'>
          <input
            type='text'
            placeholder='Search for your products'
            className='border px-3 py-2 w-full outline-none focus:ring-2 ring-gray-700'
          />
        </div>
        <ul className='grid lg:grid-cols-3 grid-cols-1 gap-9'>
          {products.map((product: Product, i: number) => (
            <li key={i}>
              <ProductCard
                buttonText={t("productCardMeta.buttonText")}
                key={i}
                product={product}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
