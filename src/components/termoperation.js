import { useState, useCallback, useEffect } from 'react';
import { Square, StaticSquare } from './square';


export function TermOperation({ size }) {

	const maxSize = Math.pow(5, 3);
	const [squares, setSquares] = useState(() => Array(maxSize).fill(""));

    useEffect(() => {
        // Clear the values of the squares array when the size variable changes
        setSquares(Array(maxSize).fill(''));
    }, [size, maxSize]);

    const handleSetSquare = useCallback(
        (value, squareNumber) => {
            setSquares((squares) => {
                const updatedSquares = [...squares];
                updatedSquares[squareNumber] = value;
                return updatedSquares;
            });
        },
        []
    );

	const renderTermOperationHeader = () => {
		return (
			<div className="groupoid-row" key="header">
				<StaticSquare key="header-variables" className="wide" value="x y z" />
				<StaticSquare key="header-target" className="wide" value="t(x, y, z)" />
			</div>
		);
	};

	const renderTermOperationRow = (x, y, z, idx) => {
		return (
			<div className="groupoid-row" key={`row-${idx}`}>
				<StaticSquare
					key={`static-square-${x}-${y}-${z}`}
					className="wide"
					value={`${x} ${y} ${z}`} />
                <Square
				    key={`square-${x}-${y}-${z}`}
                    value={squares[idx]}
                    squareNumber={idx}
                    setValue={handleSetSquare}
					className="wide"
                    size={size} />
			</div>
		);
	};

	const rows = []
	rows.push(renderTermOperationHeader());
	let idx = 0;
	for (let x = 0; x < size; x++) {
		for (let y = 0; y < size; y++) {
			for (let z = 0; z < size; z++) {
				rows.push(renderTermOperationRow(x, y, z, idx));
				idx++;
			}
		}
	}

	return (
		<div className="menu-component">
			{rows}
		</div>
	);
}