import React from "react";

export function slowChangeValue(reactSetter: React.Dispatch<React.SetStateAction<number>>, delta: number, target: number) {
    let isValue = false;

    function callback() {
        setTimeout(() => {
            reactSetter((currentValue: number) => {
                const update = currentValue + delta;
                if (update >= target) {
                    isValue = true;
                    return target;
                }
    
                return update;
            });
    
            if (!isValue) callback();
        }, 0);
    }

    callback();
}