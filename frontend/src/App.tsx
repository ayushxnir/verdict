import Footer from "./components/Footer";
import Header from "./components/Header";
import Information from "./components/Information";
import Vote from "./components/Vote";

const App = () => {
  return (
    <>
      <div className="has-sidemenu" lang="en-US" dir="ltr">
        <section className="overflow-hidden-x">
          <main className="main min-vh-100" id="top">
            <Header />
            <Vote />
            <Information />
            <Footer />
          </main>
        </section>
      </div>
    </>
  );
};

export default App;
