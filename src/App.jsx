import './app.scss';
import Navbar from './components/navbar/Navbar';
import Test from './Test';

const App = () => {
  return <div>
    <section>
      <Navbar />
    </section>
    <section>Parallax</section>
    <section>Services</section>
    <section>Parallax</section>
    <section>Portflio1</section>
    <section>Portflio2</section>
    <section>Portflio3</section>
    <section>Contact</section>
    {/* <Test /> */}
  </div>;
};

export default App;
