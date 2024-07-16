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


import { useEffect, useState } from 'react';
import './main.scss';
import { convert } from './service/main.service';

function Main() {
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [amount, setAmount] = useState(null);
    const [output, setOutput] = useState(null);

    useEffect(()=>{
        console.info('use effect')
        handleConvert();

        return ()=>{
        };
    }, [handleSwap]);

    /**
     * Handle convert button click
     * @returns null
     */
    function handleConvert() {
        console.info('Convert begins');

        if(fromCurrency === '' || toCurrency === '' || amount < 0 ){
            console.info('Invalid');
            return;
        }
        const output = convert(fromCurrency.toLowerCase(), parseFloat(amount), toCurrency.toLowerCase());
        setOutput(output);

        console.info('Convert ends');
    }

    /**
     * Handle reset button click
     * @returns null
     */
    function handleReset() {
        console.info('Reset begins');

        setFromCurrency('');
        setToCurrency('');
        setAmount(0);
        setOutput(null);

        console.info('Reset ends');
    }

    /**
     * Handle swap button click
     * @returns null
     */
    function handleSwap() {
        console.info('Swap begins');

        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);

        console.info('Swap ends');
    }


    return (
        <div className='cc-container'>
            <div className='cc-wrapper'>
                <h1 className='cc-header'>Currency Converter</h1>

                <div className='cc-body'>
                    <div className='cc-inpwrap'>
                        <input type="number" name="input_1" id='input_1' className="cc-input" min="1" placeholder="Number Input..." value={amount === null ? '' : amount} onChange={e => setAmount(e.target.value)}/>
                        <select name='cc-select' id='cc-select_1' aria-label='currency 1' value={fromCurrency} onChange={e => setFromCurrency(e.target.value)}>
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
                        <select name='cc-select_2' id='cc-select_2' aria-label='currency 2' value={toCurrency} onChange={e => setToCurrency(e.target.value)}>
                            <option value="">--Please choose an option--</option>
                            <option value="usd">US Dollar - USD</option>
                            <option value="inr">Indian Rupee - INR</option>
                            <option value="eur">Euro - EUR</option>
                            <option value="gbp">UK Pound - GBP</option>
                        </select>
                    </div>
                </div>

                <div className="cc-footer">
                    <button type="button" className="btn btn-success" onClick={handleConvert}>Convert</button>
                    <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>
                </div>

                <div className='cc-result' id='output'>{output && `Output - ${output} ${toCurrency.toUpperCase()}`}</div>
            </div>
        </div>
    )
}

export default Main;