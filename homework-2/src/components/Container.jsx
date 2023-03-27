//Components
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const Container = () => {
  return (
    <section className="todoapp">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};

export default Container;
