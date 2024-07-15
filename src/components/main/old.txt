/**
 * TODOS
 * 1. Implement Swap -- LATER
 * 2. Add a for loop
 * 3. Use real time data
 * 4. Explore the possibility of states for input, select and output
 * 5. Search currency -- (EXPLORE ALTERNATIVES)
 * 
 * 5.2 Change UI and make it responsive
 *
 * 
 * 6. Two way data binding
 * 6.2 colour options
 * 
 * 7. Implement a form -- not req
 * 8. Two way conversion 
 * 9. Graph
 */


import './main.scss';
import { convert } from './service/main.service';
// import * as exchangeRate from './assets/usd.json';

function Main() {

    /**
     * Handle convert button click
     * @returns null
     */
    function handleconvert() {
        console.log('Convert begins');
        const inp_1 = document.querySelector('#input_1').value;
        const sel_1 = document.querySelector('#cc-select_1').value;
        const sel_2 = document.querySelector('#cc-select_2').value;
        const output_el = document.querySelector('#output');

        if(sel_1 === '' || sel_2 === '' || inp_1 <= 0 ){
            console.log('Invalid');
            return;
        }
        const output = convert(sel_1.toLowerCase(), parseFloat(inp_1), sel_2.toLowerCase());
        output_el.innerHTML = `Output - ${output} ${sel_2.toUpperCase()}`;
    }

    /**
     * Handle reset button click
     * @returns null
     */
    function handleReset() {
        console.log('Reset begins');
        const inp_1_el = document.querySelector('#input_1');
        const sel_1_el = document.querySelector('#cc-select_1');
        const sel_2_el = document.querySelector('#cc-select_2');
        const output_el = document.querySelector('#output');

        inp_1_el.value = null;
        sel_1_el.value = '';
        sel_2_el.value = '';
        output_el.innerHTML = '';
    }

    /**
     * Handle swap button click
     * @returns null
     */
    function handleSwap() {
        console.log('Swap');
    }


    return (
        <div className='cc-container'>
            <div className='cc-wrapper'>
                <div className='cc-header' role='heading' aria-level='1'>Currency Converter</div>

                <div className='cc-body'>
                    <div className='cc-inpwrap'>
                        <input type="number" name="input_1" id='input_1' className="cc-input" min="1" placeholder="Number Input..."/>
                        <select name='cc-select' id='cc-select_1' aria-label='currency 1'>
                            <option value="">--Please choose an option--</option>
                            <option value="usd">US Dollar - USD</option>
                            <option value="inr">Indian Rupee - INR</option>
                            <option value="eur">Euro - EUR</option>
                            <option value="gbp">UK Pound - GBP</option>
                        </select>
                    </div>
                    <div className=''>
                        <button type="button" className="btn btn-secondary" onClick={handleSwap}>Swap</button>
                    </div>
                    <div className='cc-inpwrap'>
                        <select name='cc-select_2' id='cc-select_2' aria-label='currency 2'>
                            <option value="">--Please choose an option--</option>
                            <option value="usd">US Dollar - USD</option>
                            <option value="inr">Indian Rupee - INR</option>
                            <option value="eur">Euro - EUR</option>
                            <option value="gbp">UK Pound - GBP</option>
                        </select>
                    </div>
                </div>

                <div className="cc-footer">
                    <button type="button" className="btn btn-success" onClick={handleconvert}>Convert</button>
                    <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>
                </div>

                <div className='cc-result' id='output'></div>
            </div>
        </div>
    )
}

export default Main;