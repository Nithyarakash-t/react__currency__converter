import { useRef, useState } from "react"
import './Themetoggle.scss';

export function Themetoggle() {
    const [showToggle, setShowToggle] = useState(null);

    function toggle() {
        setShowToggle((showToggle)=> !showToggle);
    }
    return (
        <>
            <div className={`cc-themetoggle__overlay ${showToggle ? "-open" : (showToggle === false ? "-collapse" : "")}`}></div>
            <button type="button" className="cc-themetoggle__button" aria-label="Toggle theme" onClick={toggle}></button>
        </>
    )
}