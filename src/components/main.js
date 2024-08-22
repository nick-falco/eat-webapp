import { useState, useEffect } from 'react';
import { Menu } from './menu';


export function Main() {

    const [output, setOutput] = useState();

    useEffect(() => {
        const handleResize = () => {
          const appContainer = document.querySelector('.app-container');
          if (appContainer) {
            appContainer.scrollTo(0, appContainer.scrollHeight);
          }
        };
    
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Call handleResize immediately in case the element needs to be scrolled initially
        handleResize();
    
        // Cleanup function
        return () => window.removeEventListener('resize', handleResize);
      }, [output]); // Empty dependency array means this effect runs once on mount and cleanup on unmount

    return (
        <div className="app">
            <header className="app-header">
                <h1>
                    Evolution of Algebraic Terms
                </h1>
            </header>
            <div className="app-content">
                <Menu setOutput={setOutput} />
                <div className="app-container">
                    <h4>Overview</h4>
                    <p>
                        This application serves as a practical demonstration of the algorithms outlined in the research paper titled
                        "Evolution of Algebraic Terms 4: Biological Beam Algorithms" by David M. Clark and Nicholas C. Falco, published
                        in the International Journal of Algebra and Computation.
                    </p>
                    <h4>How to use this program</h4>
                    <p>
                        To use the application, <b>fill out the form in the left-hand menu and click "Run Algorithm" when ready</b>.
                        The algorithms output will appear in the panel below.
                    </p>
                    <p>
                        You must select or manually define a groupoid and target term operation. Please note that the web interface has
                        limitations for solving groupoids larger than 5. To solve groupoids larger than 5, use
                        the <a href="https://www.github.com/nick-falco/eat">Python command line application</a> from GitHub to run the
                        algorithm on your local computer.
                    </p>
                    <div className="panel">
                        <div className="panel-heading">Algorithm Output</div>
                        <div className="panel-body output">
                            {output}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};