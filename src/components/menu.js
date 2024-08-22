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
        setOutput("");
        try {
          const response = await fetch('https://eat-backend-api-dvjbaed3bq-uc.a.run.app/runeat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              groupoid: groupoidData.filter(value => value !== ''),
              target: targetOperation.filter(value => value !== '')
            })
          });
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const reader = response.body.getReader();
          let result = '';
          let total_result = '';
      
          const handleChunk = ({ done, value }) => {
            if (done) {
              // All data has been received
              return;
            }
      
            // Convert the received chunk to text
            const chunk = new TextDecoder().decode(value);
      
            // Accumulate the received chunk
            result += chunk;
      
            // Split the accumulated result by newline
            const lines = result.split('\n');
      
            // Process each line
            for (let i = 0; i < lines.length - 1; i++) {
              const line = lines[i];
              if (line.trim() === '') {
                continue;
              }
              // Process the line as desired
              total_result += line;
              total_result += '\n';
              // Call setOutput or update the React data source with the line
            }
            // Set output to result up to this point
            setOutput(total_result);
            // Keep the remaining incomplete line for the next chunk
            result = lines[lines.length - 1];
            // Read the next chunk
            return reader.read().then(handleChunk);
          };
          // Start reading the response stream
          return reader.read().then(handleChunk);
        } catch (error) {
          console.error('Error during AJAX call:', error);
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