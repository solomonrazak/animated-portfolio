import './app.scss';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Test from './Test';

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services">Parallax</section>
    <section>Services</section>
    <section id="Portfolio">Parallax</section>
    <section>Portflio1</section>
    <section>Portflio2</section>
    <section>Portflio3</section>
    <section id="Contact">Contact</section>
    {/* <Test /> */}
  </div>;
};

export default App;
