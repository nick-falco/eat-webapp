import { useState } from 'react';

export function Algorithm() {
    return (
        <select>
            <option value="MFBA">Male Female Beam Algorithm</option>
            <option value="FBA">Female Beam Algorithm</option>
            <option value="SBA">Sample Beam Algorithm</option>
            <option value="DDA">Deep Drilling Algorithm</option>
        </select>
    );
}