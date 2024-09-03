import { useState, useEffect } from 'react';
import { customStyles } from './common/reactSelectStyles';
import Select, { components } from 'react-select';
import { Groupoid } from './groupoid';

export function GroupoidSelect({ size, setSize, maxSize, squares, setSquares }) {

    const defaultSizeOptions = [
        { value: 3, label: "3 element groupoid" },
        { value: 4, label: "4 element groupoid" },
        { value: 5, label: "5 element groupoid" },
    ]

    const defaultGroupoidOptions = {
        // n-element primal algebra has n^n^k different k-ary term operations.
        3: [
            // EAT 2 - A1 primal groupoid
            { value: [2, 1, 2, 1, 0, 0, 0, 0, 1],
                name: "2 1 2\n1 0 0\n0 0 1",
                label: "EAT 2: A1 primal"},
        ],
        4: [
            // EAT 1 - B1 primal groupoid
            { value: [1, 3, 1, 0, 3, 2, 0, 1, 0, 1, 3, 1, 1, 0, 2, 0],
                name: "1 3 1 0\n3 2 0 1\n0 1 3 1\n1 0 2 0",
                label: "EAT 1: B1 primal"},
            // EAT 3 - D1 primal groupoid
            { value: [1, 3, 1, 2, 1, 2, 2, 3, 2, 0, 0, 3, 2, 2, 1, 2],
                name: "1 3 1 2\n1 2 2 3\n2 0 0 3\n2 2 1 2",
                label: "EAT 3: D1 primal"},
            // EAT 3 - D6 idemprimal groupoid
            { value: [3, 0, 0, 3, 2, 2, 1, 0, 3, 0, 2, 0, 2, 0, 1, 3],
                name: "3 0 0 3\n2 2 1 0\n3 0 2 0\n2 0 1 3",
                label: "EAT 3: D6 idemprimal"},
        ],
        5: [
            // Pi groupoid
            { value: [1, 4, 1, 0, 4, 2, 1, 0, 3, 0, 3, 4, 2, 4, 3, 2, 3, 3, 4, 1, 2, 1, 4, 3, 3],
                name: "1 4 1 0 4\n2 1 0 3 0\n3 4 2 4 3\n2 3 3 4 1\n2 1 4 3 3",
                label: "Pi groupoid"},
            // EAT 2 - P1 primal groupoid
            { value: [3, 2, 0, 4, 0, 2, 4, 1, 1, 1, 1, 1, 3, 0, 1, 1, 3, 4, 1, 0, 0, 1, 0, 1, 0],
                name: "3 2 0 4 0\n2 4 1 1 1\n1 1 3 0 1\n1 3 4 1 0\n0 1 0 1 0",
                label: "EAT 2: P1 primal"}, 
            // EAT 2 - P2 primal groupoid
            { value: [2, 1, 2, 4, 1, 0, 4, 4, 1, 4, 0, 4, 4, 1, 3, 1, 1, 2, 1, 3, 1, 1, 0, 0, 3],
                name: "2 1 2 4 1\n0 4 4 1 4\n0 4 4 1 3\n1 1 2 1 3\n1 1 0 0 3",
                label: "EAT 2: P2 primal"},
            // EAT 2 - NQ primal groupoid
            { value: [1, 4, 0, 2, 3, 3, 2, 4, 0, 1, 2, 0, 3, 2, 4, 0, 3, 1, 4, 2, 4, 1, 2, 3, 0],
                name: "1 4 0 2 3\n3 2 4 0 1\n2 0 3 2 4\n0 3 1 4 2\n4 1 2 3 0",
                label: "EAT 2: NQ primal"},
        ],
    };

    const [selectedSizeOption, setSelectedSizeOption] = useState(defaultSizeOptions[0]);
    const [selectedGroupoidOption, setSelectedGroupoidOption] = useState(defaultGroupoidOptions[size][0]);

    const [options, setOptions] = useState(defaultGroupoidOptions[size]);

    useEffect(() => {
        // Change options depending on selected groupoid size
        setOptions(defaultGroupoidOptions[size]);
        setSelectedGroupoidOption(defaultGroupoidOptions[size][0])
    }, [size]);

    useEffect(() => {
        // we need to maintan the size of the groupoid array to the max value to prevent react errors
        const groupoidValues = selectedGroupoidOption.value;
        const extendedArray = [...groupoidValues, ...Array(maxSize - groupoidValues.length).fill('')];
        setSquares(extendedArray);
    }, [selectedGroupoidOption]);

    const CustomOption = (props) => {
        // Split the name by newline character or any other delimiter and map to JSX
        const customName = props.data.name.split('\n').map((line, index) => (
            <div className='custom-option' key={index}>{line}</div>
        ));

        return (
            <components.Option {...props}>
                {props.data.label}
                {customName}
            </components.Option>
        );
    };

    const handleSizeSelectChange = (selectedSizeOption) => {
        setSelectedSizeOption(selectedSizeOption);
        setSize(selectedSizeOption.value);
    };

    const handleGroupoidSelectChange = (selectedGroupoidOption) => {
        setSelectedGroupoidOption(selectedGroupoidOption);
    };

    return (
        <>
            <div>
                <div>Size:</div>
                <Select
                    value={selectedSizeOption}
                    options={defaultSizeOptions}
                    placeholder="Select a groupoid size"
                    isSearchable={false}
                    onChange={handleSizeSelectChange}
                    styles={customStyles}
                />
            </div>
            <div>
                <div>Groupoid:</div>
                <Select
                    value={selectedGroupoidOption}
                    options={options}
                    placeholder="Select a groupoid"
                    isSearchable={false}
                    onChange={handleGroupoidSelectChange}
                    components={{ Option: CustomOption }}
                    styles={customStyles}
                />
            </div>
            <Groupoid
                size={size}
                maxSize={maxSize}
                squares={squares}
                setSquares={setSquares}
                isEditable={false}
            />
        </>
    );
}