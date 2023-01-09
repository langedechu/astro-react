import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="cards">
        <div className="card">
          <div className="card-bg"></div>

          <div className="title-wrapper">
            <h1 className="title">Just Astro.</h1>
            <p className="subtitle">The best you can have.</p>
          </div>

          <p className="content">
            The Astro Team invites you to see our projects.
          </p>
        </div>
        <div className="card">
          <div className="card-bg"></div>

          <div className="title-wrapper">
            <h1 className="title">Just You.</h1>
            <p className="subtitle">Join the adventure.</p>
          </div>

          <p className="content">Follow our lead, dive into the deep space.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
