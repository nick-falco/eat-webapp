import { useState, useEffect } from 'react';
import { Groupoid } from './groupoid';
import { TermOperation } from './termoperation';


const EAT_BACKEND_API_URL = 'https://eat-backend-api-dvjbaed3bq-uc.a.run.app/runeat';


export function Menu({ setOutput, isLoading, setIsLoading }) {

    const numInputValues = 5;

    const [size, setSize] = useState(3);
    const maxTermOperationSize = Math.pow(numInputValues, 3);
    const [targetOperation, setTargetOperation] = useState(() => Array(maxTermOperationSize).fill(""));
    const maxGroupoidSize = Math.pow(numInputValues, 2);
    const [groupoidData, setGroupoidData] = useState(() => Array(maxGroupoidSize).fill(""));
    const [formValid, setFormValid] = useState(false);
    const [abortController, setAbortController] = useState(null);

    useEffect(() => {
        // Check if the form is valid
        if (isLoading) {
            setFormValid(false);
            return;
        }
        const groupoid = groupoidData.filter(value => value !== '');
        const target = targetOperation.filter(value => value !== '');
        const expectedGroupoidSize = Math.pow(size, 2);
        const expectedTermOperationSize = Math.pow(size, 3);
        if (groupoid.length === expectedGroupoidSize && target.length === expectedTermOperationSize) {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [groupoidData, targetOperation, isLoading, size]);

    const runAlgorithm = async () => {
        // Run the algorithm and display the output to the user 
        if (!formValid) {
            return;
        }
        setIsLoading(true);
        setOutput("");

        // Abort any previous AJAX calls when Cancel button is clicked
        const controller = new AbortController();
        const signal = controller.signal;
        setAbortController(controller);

        fetch(EAT_BACKEND_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                groupoid: groupoidData.filter(value => value !== ''),
                target: targetOperation.filter(value => value !== '')
            }),
            signal: signal,
        })
        .then(response => {
            if (!response.ok) {
                setIsLoading(false);
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.body.getReader();
        })
        .then(reader => {
            let result = '';
            let total_result = '';
        
            const handleChunk = ({ done, value }) => {
                if (done) {
                    setIsLoading(false);
                    return;
                }
        
                if (signal.aborted) {
                    setIsLoading(false);
                    return; // Early return to stop processing the stream
                }
        
                const chunk = new TextDecoder().decode(value);
                result += chunk;
                const lines = result.split('\n');
        
                for (let i = 0; i < lines.length - 1; i++) {
                    const line = lines[i];
                    console.log(line.trim())
                    if (line.trim() === '') continue;
                    if (line.trim() === '#HEARTBEAT#') continue;
                    total_result += line + '\n';
                }
        
                setOutput(total_result);
                result = lines[lines.length - 1];
                return reader.read().then(handleChunk);
            };
        
            return reader.read().then(handleChunk);
        })
        .catch(error => {
            if (error.name === 'AbortError') {
                let countdown = 5;
                const intervalId = setInterval(() => {
                  /* We need to wait ~5 seconds before clearing the output since the server may
                  still be processing the request. There is a max of 5 seconds of latency
                  before the server will send the #HEARTBEAT# signal to the client, which
                  will cancel the processing on the server if the client has cancelled. */
                  setOutput(`Cancelling Request... ${countdown}\n`);
                  countdown -= 1;
                  if (countdown < 0) {
                    clearInterval(intervalId);
                    setIsLoading(false)
                    setOutput('');
                  }
                }, 1200); // 1.2 seconds. We give a litte extra time to account for latency
            } else {
                console.error('Error during AJAX call:', error);
                setIsLoading(false);
                setOutput('Error during AJAX call: ' + error.message);
            }
        });
    };

    return (
        <div className="app-menu-container">
            <div className="app-menu">
                <div className="loading-container">
                    <button className="btn btn-primary" disabled={!formValid} onClick={runAlgorithm}>Run Algorithm</button>
                    {isLoading && <button className="btn btn-danger" onClick={() => abortController?.abort()}>Cancel</button>}
                    {isLoading && <div className="loading-animation"></div>}
                </div>
                <div className="panel">
                    <div className="panel-heading">Groupoid</div>
                    <div className="panel-body"><Groupoid size={size} setSize={setSize} maxSize={maxGroupoidSize} setSquares={setGroupoidData} squares={groupoidData}></Groupoid></div>
                </div>
                <div className="panel">
                    <div className="panel-heading">Performance Specification</div>
                    <div className="panel-body"><TermOperation size={size} squares={targetOperation} setSquares={setTargetOperation} maxSize={maxTermOperationSize}></TermOperation></div>
                </div>
            </div>
        </div>
    );
}