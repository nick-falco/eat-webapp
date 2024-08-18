import { useState, useCallback, useEffect } from 'react';
import { Square, StaticSquare } from './square';


export function TermOperation({ size, maxSize, squares, setSquares }) {

	const [target, setTarget] = useState(() => "ternary-discriminator");

	useEffect(() => {
		// Clear the values of the squares array when the size variable changes
		setSquares(Array(maxSize).fill(''));
		handleSetTarget(target);
	}, [size, maxSize, setSquares, target]);

	useEffect(() => {
		// Clear the values of the squares array when the size variable changes
		handleSetTarget(target);
	}, [target]);


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

	const getTermOperationInputs = () => {
		const rows = [];
		for (let x = 0; x < size; x++) {
			for (let y = 0; y < size; y++) {
				for (let z = 0; z < size; z++) {
					rows.push([x, y, z]);
				}
			}
		}
		return rows;
	}

	const handleSetTarget = (targetOperation) => {
		/*
		Set term operation target
		*/
		let target = [];
		if (targetOperation === "ternary-discriminator") {
			target = getTernaryDescriminatorTarget();
		} else if (targetOperation === "manual") {
			squares.fill("");
		}
		target.forEach((t, idx) => {
			handleSetSquare(t, idx);
		});
		setTarget(targetOperation);
	}

	const getTernaryDescriminatorTarget = () => {
		/*
		Returns target solution, representing the ternary
		descriminator:

		d(a, b, c) := {c if a == b; a if a != b}
		*/
		const rows = [];
		getTermOperationInputs().forEach((triple) => {
			let x = triple[0];
			let y = triple[1];
			let z = triple[2];
			if (x === y)
				rows.push(z);
			else
				rows.push(x)
		});
		return rows;
	}

	const rows = []
	rows.push(renderTermOperationHeader());
	getTermOperationInputs().forEach((triple, idx) => {
		let x = triple[0];
		let y = triple[1];
		let z = triple[2];
		rows.push(renderTermOperationRow(x, y, z, idx));
	});

	return (
		<div className="menu-component">
			<div>
				<label htmlFor="target-select">Target:</label>
				<select id="target-select" onChange={(e) => handleSetTarget(e.target.value)}>
					<option value="ternary-discriminator">Ternary Descriminator</option>
					<option value="manual">Manual</option>
				</select>
			</div>
			{rows}
		</div>
	);
}