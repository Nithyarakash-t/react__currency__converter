import { useEffect } from 'react';
import './Converter.scss';

function Convert() {

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                `https://api.frankfurter.app/latest`
            );
            const data = await res?.json();

            console.log(res, data);
        }

        fetchData();
        return () => {
        };
      }, []
    );

    return (
        <></>
    )
}

export default Convert;