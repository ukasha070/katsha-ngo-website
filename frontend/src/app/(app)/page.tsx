/**
 * features articles
 */
import AppSidebar from "@/components/AppSidebar";
import FaQs from "@/components/FaQs";
import Hero from "@/components/Hero";
import Networks from "@/components/Networks";
import Testimonials from "@/components/Testimonials";
import { Articles } from "@/components/cards/ArticleCard";
import FeaturedArticleCard from "@/components/cards/FeaturedArticleCard";
import Newsletter from "@/components/forms/Newsletter";
import SearchForm from "@/components/forms/SearchForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Networks />
      <SearchForm />
      <FeaturedArticleCard />
      <Articles />
      <FaQs />
      <Testimonials />
      <Newsletter />
      <AppSidebar />
    </>
  );
}
