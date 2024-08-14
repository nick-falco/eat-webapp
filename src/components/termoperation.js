import { useState } from 'react';
import { Square, StaticSquare } from './square';

export function TermOperation() {

	const squares = useState([Array(27).fill(null)]);

	function handleChange(i) {
		return
	}

	return (
		<div className="menu-component">
			<div className="groupoid-row">
				<StaticSquare className="wide" value="x y z" />
				<StaticSquare className="wide" value="t(x, y, z)" />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="0 0 0" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="0 0 1" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="0 0 2" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="0 1 0" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="0 1 1" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="0 1 2" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="0 2 0" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="0 2 1" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="0 2 2" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="1 0 0" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="1 0 1" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="1 0 2" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="1 1 0" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="1 1 1" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="1 1 2" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="1 2 0" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="1 2 1" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="1 2 2" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="2 0 0" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="2 0 1" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="2 0 2" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="2 1 0" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="2 1 1" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="2 1 2" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="2 2 0" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="2 2 1" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
			<div className="groupoid-row">
				<StaticSquare className="wide" value="2 2 2" />
				<Square value={squares[0]} className="wide" onSquareChange={() => handleChange(0)} />
			</div>
		</div>
	);
}