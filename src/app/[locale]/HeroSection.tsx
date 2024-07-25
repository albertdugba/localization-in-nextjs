import { useTranslations } from "next-intl";

export const HeroSection = () => {
  const t = useTranslations("Hero");
  return (
    <section className='Hero-banner flex items-center justify-center lg:p-8 p-4'>
      <div className='flex flex-col'>
        <h1 className='lg:text-3xl text-lg text-white text-center'>
          {t("title")}
        </h1>
        <div className='flex items-center justify-center'>
          <button className='bg-black text-white px-6 py-2 w-fit my-8'>
            {t("ctaButton")}
          </button>
        </div>
      </div>
    </section>
  );
};
