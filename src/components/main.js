import { useState, useEffect } from 'react';
import { Menu } from './menu';


export function Main() {

    const [output, setOutput] = useState();
    const [isLoading, setIsLoading] = useState(false);


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
                <Menu setOutput={setOutput} isLoading={isLoading} setIsLoading={setIsLoading} />
                <div className="app-container">
                    <h4>Overview</h4>
                    <p>
                        Demonstrating "Evolution of Algebraic Terms 4: Biological Beam Algorithms" by David M. Clark and Nicholas C. Falco, as published in the International Journal of Algebra and Computation.
                    </p>
                    <h4>Usage</h4>
                    <p>
                        <b>Fill out the form on the left and click "Run Algorithm"</b> to see results below.
                    </p>
                    <p>
                        For groupoids over 5, use the <a href="https://www.github.com/nick-falco/eat">command line version</a> on GitHub.
                    </p>
                    <div className="panel">
                        <div className="panel-heading">
                            Algorithm Output
                        </div>
                        <div className="panel-body output">
                            {!isLoading && !output && <div>Submit form to see output (Note the exectution times are faster on the command line version)</div>}
                            {output}
                            {isLoading && <div className="loading-animation-pulse"></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};