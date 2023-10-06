import Nav from "./components/Nav";
import CustomReviews from "./sections/CustomReviews";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import SuperQuality from "./sections/SuperQuality";

const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding-x py-10">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomReviews />
    </section>
    <section
      className="padding-x
    sm:py-32 py-16 w-full"
    >
      <PopularProducts />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <PopularProducts />
    </section>
  </main>
);

export default App;
