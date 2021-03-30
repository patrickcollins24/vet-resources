import { useState } from 'react';

const useVetReg = (callback) => {
    const [info, setInfo] = useState({});

    const onSubmit = (e) => {
        if (e) {
            e.preventDefault();
        }
        callback();
    }

    return null;
}

export default useVetReg;
