import { useEffect, useState } from "react";

export function useLocalStorage(key, initialValue = null) {
    const [state, setState] = useState(() => {
        const savedValue = window.localStorage.getItem(key);
        if (savedValue === null) return initialValue;
        return savedValue
    });

    useEffect(() => {
        const valueToStore = state;
        window.localStorage.setItem(key, valueToStore);
    }, [key, state]);

    return [state, setState];
}