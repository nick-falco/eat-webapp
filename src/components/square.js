export function Square({ value, setValue, squareNumber, className = '', size=3, isEditable=true}) {

    const onSquareKeyDown = (event) => {
        if (!isEditable)
            return;
        const keyPressed = event.key;
        // Check if the entered value is valid
        if (!isNaN(parseInt(keyPressed)) && parseInt(keyPressed) < size) {
            setValue(keyPressed, squareNumber);
        } else if (keyPressed === 'Backspace' || keyPressed === 'Delete') {
            // Allow deletion of invalid values using Backspace or Delete keys
            setValue("", squareNumber);
        } else if (keyPressed === 'Tab') {
            // do nothing since we just want to move to the next square
        } else {
            event.preventDefault(); // Prevents the input of invalid values
        }
    };

    const onSquareChange = (event) => {
        onSquareKeyDown(event)
    };

    return (
        <input type="text" disabled={!isEditable} className={`square ${className}`} value={value} onKeyDown={(e) => onSquareKeyDown(e)} onChange={(e) => onSquareChange(e)}>
        </input>
    );
};

export function StaticSquare({ value, className = '' }) {

    return (
        <div className={`square staticSquare ${className}`}>
            {value}
        </div>
    );
};