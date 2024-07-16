import { useState } from "react"
import './Themetoggle.scss';

export function Themetoggle() {
    const [showToggle, setShowToggle] = useState(null);

    function toggle() {
        setShowToggle((showToggle)=> !showToggle);
    }
    return (
        <>
            <div className={`cc-nthemetoggle__overlay ${showToggle !==null && showToggle ? '-open' : '-close'}`}></div>
            <button type="button" className="cc-nthemetoggle__button" aria-label="Toggle theme" onClick={toggle}></button>
        </>
    )
}