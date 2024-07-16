import { useState } from "react"
import './Themetoggle.scss';

export function Themetoggle() {
    const [showToggle, setShowToggle] = useState(null);

    function toggle() {
        setShowToggle((showToggle)=> !showToggle);
    }
    return (
        <>
            <div className={`cc-mthemetoggle__overlay ${showToggle ? '-open' : ''}`}></div>
            <button type="button" className="cc-mthemetoggle__button" aria-label="Toggle theme" onClick={toggle}></button>
        </>
    )
}