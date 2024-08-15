import './App.css';
import { Menu } from './components/menu';

function runAlgorithm() {
  return
}

function app() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Evolution of Algebraic Terms
        </h1>
      </header>
      <div className="app-content">
        <Menu />
        <div className="app-container">
          <h4>Overview</h4>
          <p>
            This application serves as a practical demonstration of the algorithms outlined in the research paper titled
            "Evolution of Algebraic Terms 4: Biological Beam Algorithms" by David M. Clark and Nicholas C. Falco, published
            in the International Journal of Algebra and Computation.
          </p>
          <p>
            The primary objective of this application is to systematically design a digital circuit based on a given
            performance specification, utilizing the selected algorithm on groupoids of size 3 or larger. The application
            is able to find a single solution from an incredibly large solution space in only seconds.
          </p>
          <h4>How to use this program</h4>
          <p>
            To use the application, <b>fill out the form in the left-hand menu and click "Run Algorithm" when ready</b>.
            The algorithms output will appear in the panel below.
          </p>
          <p>
            You must select the algorithm, groupoid, and target term operation. Please note that the web interface has
            limitations for solving groupoids larger than 5. To solve groupoids larger than 5, use
            the <a href="https://www.github.com/nick-falco/eat">Python command line application</a> from GitHub to run the
            algorithm on your local computer.
          </p>
          <p>
            <button className="btn btn-primary" onClick={runAlgorithm()}>Run Algorithm</button>
          </p>
          <div className="panel">
            <div className="panel-heading">Algorithm Output</div>
            <div className="panel-body"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default app;
