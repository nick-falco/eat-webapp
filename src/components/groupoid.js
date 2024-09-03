import { useState, useCallback, useEffect } from 'react';
import { Square, StaticSquare } from './square';


export function Groupoid({ size, maxSize, squares, setSquares, isEditable=true }) {

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
                    isEditable={isEditable}
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
        <div>
            {rows}
        </div>
    );
}