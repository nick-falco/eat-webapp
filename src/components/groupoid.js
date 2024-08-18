import { useState, useCallback, useEffect } from 'react';
import { Square, StaticSquare } from './square';


export function Groupoid({ size, setSize, maxSize, squares, setSquares}) {

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

    const renderHeaderRow = (size) => {
        const cells = [];
        cells.push(<StaticSquare key={`top-header-cell-operator`} value="*" />);
        for (let colIndex = 0; colIndex < size; colIndex++) {
            cells.push(<StaticSquare key={`top-header-cell-${colIndex}`} value={colIndex} />);
        }

        return (
            <div className="groupoid-row" key="header-row">
                {cells}
            </div>
        );
    };

    const renderRow = (size, rowNumber) => {
        const cells = [];
        cells.push(<StaticSquare key={`left-header-cell-${rowNumber}`} value={rowNumber} />);
        for (let colIndex = 0; colIndex < size; colIndex++) {
            let squareNumber = rowNumber * size + colIndex;
            cells.push(
                <Square key={`cell-${squareNumber}`}
                    value={squares[squareNumber]}
                    squareNumber={squareNumber}
                    setValue={handleSetSquare}
                    size={size} />);
        }

        return (
            <div key={`row-${rowNumber}`} className="groupoid-row">
                {cells}
            </div>
        );
    };

    const rows = [];
    rows.push(renderHeaderRow(size));
    for (let rowIndex = 0; rowIndex < size; rowIndex++) {
        rows.push(renderRow(size, rowIndex));
    }

    return (
        <>
            <div>
                <label htmlFor="size-select">Size:</label>
                <select id="size-select" onChange={(e) => setSize(e.target.value)}>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div>
                {rows}
            </div>
        </>
    );
}