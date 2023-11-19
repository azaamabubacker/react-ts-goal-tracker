import Header from "./scenes/Header";
import MainApp from "./scenes/MainApp";

function App() {
  return (
    <>
      <main className="mx-auto mt-4 w-1/2 rounded-lg bg-background-light px-16">
        <Header />
        <MainApp />
      </main>
    </>
  );
}

export default App;
