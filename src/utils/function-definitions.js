import { useRef, useState, useEffect } from "react";

export function useHover() {
    const ref = useRef();
    const [isHovered, setIsHovered] = useState(false);

    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);

    useEffect(() => {
        const refCopy = ref;
        refCopy.current.addEventListener("mouseenter", enter);
        refCopy.current.addEventListener("mouseleave", leave);

        return () => {
            refCopy.current.removeEventListener("mouseenter", enter);
            refCopy.current.removeEventListener("mouseleave", leave);
        };
    }, []);
    
    return [ref, isHovered];
}


export const interchangeMetrics = (array1, array2, id1, id2) => {
    return array1.map(obj1 => {
        if (obj1.id === id1) {
            return array2.find(obj2 => obj2.id === id2);
        } else if (obj1.id === id2) {
            return array2.find(obj2 => obj2.id === id1);
        } else {
            return obj1;
        }
    });
}