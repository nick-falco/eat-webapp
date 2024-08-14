import { useState } from 'react';
import { Square, StaticSquare } from './square';


export function Groupoid() {

    const squares = useState([Array(9).fill(null)]);

    function handleChange(i) {
        return
    }

    return (
        <div className="menu-component">
            <div className="groupoid-row">
                <StaticSquare value="*" />
                <StaticSquare value="0" />
                <StaticSquare value="1" />
                <StaticSquare value="2" />
            </div>
            <div className="groupoid-row">
                <StaticSquare value="0" />
                <Square value={squares[0]} onSquareChange={() => handleChange(0)} />
                <Square value={squares[1]} onSquareChange={() => handleChange(1)} />
                <Square value={squares[2]} onSquareChange={() => handleChange(2)} />
            </div>
            <div className="groupoid-row">
                <StaticSquare value="1" />
                <Square value={squares[3]} onSquareChange={() => handleChange(3)} />
                <Square value={squares[4]} onSquareChange={() => handleChange(4)} />
                <Square value={squares[5]} onSquareChange={() => handleChange(5)} />
            </div>
            <div className="groupoid-row">
                <StaticSquare value="2" />
                <Square value={squares[6]} onSquareChange={() => handleChange(6)} />
                <Square value={squares[7]} onSquareChange={() => handleChange(7)} />
                <Square value={squares[8]} onSquareChange={() => handleChange(8)} />
            </div>
        </div>
    );
}