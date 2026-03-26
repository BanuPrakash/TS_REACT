import { forwardRef, useImperativeHandle, useRef } from "react";

// const CustomInput = forwardRef((props, ref) => {
const CustomInput = ({ref, ...props}) => {
    const inRef = useRef();

    useImperativeHandle(ref, () => ({
        clear: () => {
            inRef.current.value = "";
        },
        // focus: () => {
        //     inRef.current.focus();
        // }
    }));

    return <input ref={inRef} {...props} />
};

export default function Container() {
    const inputRef = useRef();
    const handleClear = () => {
        inputRef.current.clear();
    }
    return (
        <div>
            <CustomInput ref={inputRef} placeholder="Enter Text" />
            <button onClick={handleClear} >Clear Contents</button>
        </div>
    )
}