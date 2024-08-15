import { useState } from 'react';
import { Groupoid } from './groupoid';
import { TermOperation } from './termoperation';

export function Menu() {

    const [size, setSize] = useState(3);

    return (
        <div className="app-menu-container">
            <div className="app-menu">
                <h4>Application Steps</h4>
                <div className="panel">
                    <div className="panel-heading">Groupoid</div>
                    <div className="panel-body"><Groupoid size={size} setSize={setSize}></Groupoid></div>
                </div>
                <div className="panel">
                    <div className="panel-heading">Target Term Operation</div>
                    <div className="panel-body"><TermOperation size={size}></TermOperation></div>
                </div>
            </div>
        </div>
    );
}