import './main.scss';
// import * as exchangeRate from './assets/usd.json';

function Main() {
    function handleconvert() {
        console.log('Convert begins');
    }
    function handleReset() {
        console.log('Reset begins');
    }
    return (
        <>
            <div className='cc-wrapper'>
                <div className='cc-header' role='heading' aria-level='1'>Currency Converter</div>

                <div className="c-cC__wrap">
                    <div className="c-cC__input">
                        <div className="c-cC__input-top">
                            <div className="c-cC__input-wrap">
                                <input type="number" name="input_1_val" id='input_1_val' className="c-cC__input-field" min="1" placeholder="Number Input..."/>
                                <select name='cc-select' id='cc-select' aria-label='currency 1'>
                                    <option value="">--Please choose an option--</option>
                                    <option value="usd">US Dollar - USD</option>
                                    <option value="inr">Indian Rupee - INR</option>
                                    <option value="eur">Euro - EUR</option>
                                    <option value="gbp">UK Pound - GBP</option>
                                </select>
                            </div>
                            <div className="">
                                <button type="button" className="btn btn-secondary">Swap</button>
                            </div>
                            <div className="c-cC__input-wrap">
                                <select name='cc-select_2' id='cc-select_2' aria-label='currency 2'>
                                <option value="">--Please choose an option--</option>
                                    <option value="usd">US Dollar - USD</option>
                                    <option value="inr">Indian Rupee - INR</option>
                                    <option value="eur">Euro - EUR</option>
                                    <option value="gbp">UK Pound - GBP</option>
                                </select>
                                <input type="number" name="output" className="c-cC__input-field" placeholder="output" disabled />
                            </div>
                        </div>
                        <div className="c-cC__input-bottom">
                            <button type="button" className="btn btn-success" onClick={handleconvert}>Convert</button>
                            <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>
                        </div>
                    </div>

                    <div className='c-cc__result'>
                        Converted value = ""-""
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;