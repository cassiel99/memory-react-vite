import { useState} from "react";

export function useInput(iniialValue) {
    const [value, setValue] = useState(iniialValue);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    return {value, onChange };
}