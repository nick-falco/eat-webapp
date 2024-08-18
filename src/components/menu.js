import { useState } from 'react';
import { Groupoid } from './groupoid';
import { TermOperation } from './termoperation';


export function Menu({setOutput}) {

    const numInputValues = 5;

    const [size, setSize] = useState(3);
    const maxTermOperationSize = Math.pow(numInputValues, 3);
    const [targetOperation, setTargetOperation] = useState(() => Array(maxTermOperationSize).fill(""));
    const maxGroupoidSize = Math.pow(numInputValues, 2);
    const [groupoidData, setGroupoidData] = useState(() => Array(maxGroupoidSize).fill(""));

    const runAlgorithm = async () => {
        try {
            // Replace 'your-endpoint-url' with the actual endpoint URL
            const response = await fetch('http://localhost:8000/runeat', {
                method: 'POST',
                headers: {
                    // Add any required headers here
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    groupoid: groupoidData.filter(value => value !== ''),
                    target: targetOperation.filter(value => value !== '')
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Use the data from the response
            console.log(data);

            // Optionally, return the data if you need to use it outside of this method
            setOutput(data);
        } catch (error) {
            console.error("Error during AJAX call:", error);
        }
    };

    return (
        <div className="app-menu-container">
            <div className="app-menu">
                <button className="btn btn-primary" onClick={runAlgorithm}>Run Algorithm</button>
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