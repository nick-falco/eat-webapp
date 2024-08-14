export function Square({ value, onSquareChange, className = '' }) {
    return (
        <input className={`square ${className}`} onChange={onSquareChange}>
        </input>
    );
}



export function StaticSquare({ value, className = '' }) {

    return (
        <div className={`square staticSquare ${className}`}>
            {value}
        </div>
    );

}