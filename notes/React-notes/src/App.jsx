import Header from "./lib/components/layout/Header";
import Footer from "./lib/components/layout/Footer";
import Container from "./lib/components/layout/Container";
import Home from "./app/pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Home />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
