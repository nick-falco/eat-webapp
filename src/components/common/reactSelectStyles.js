// react-select styles

const customStyles = {
    control: (base, state) => ({
        ...base,
        height: "11px",
        backgroundColor: "#f0f0f0",
        border: "1px solid #ccc",
        fontSize: "14px",
        borderRadius: "4px",
        outline: null,
        transition: "border-color 0.3s ease-in-out",
        marginTop: "10px",
        marginBottom: "10px",
        marginLeft: "0px",
        marginRight: "10px",
    }),
    menuList: base => ({
        ...base,
        maxHeight: "500px"
    })
}

export {customStyles};