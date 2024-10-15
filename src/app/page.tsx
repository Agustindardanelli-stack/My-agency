import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Mi Agencia de Marketing</title>
        <meta name="description" content="Impulsa tu negocio con nuestra agencia de marketing digital" />
      </Head>

      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;