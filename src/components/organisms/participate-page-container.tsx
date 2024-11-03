"use client";

import { useEffect } from "react";
import { CompaniesContainer } from "../molecules/companies-container";
import { Footer } from "../molecules/footer";
import { VideoContainer } from "../molecules/video-container";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { QuoteContainer } from "../molecules/quote-container";
import { ParticipateContainer } from "../molecules/participate-container";

interface Props {}

export const ParticipatePageContainer = ({}: Props) => {
  const locale = useLocale();
  const router = useRouter();
  const translations = useTranslations("navbar");
  const route = translations("participate").toLocaleLowerCase();

  useEffect(() => {
    router.replace(`/${locale}/${route}`);
  }, [locale, route, router, translations]);

  return (
    <>
      <div className="relative flex w-full flex-col items-center laptop:justify-around pb-12 mt-[70px] gap-20">
        <VideoContainer />
        <CompaniesContainer />
        <QuoteContainer />
        <ParticipateContainer />
      </div>
      <Footer />
    </>
  );
};
