import React, { useState } from 'react'
import DisplayData from './DisplayData'

const RTONumberPlate = (props) => {

    const [luckyData, setLuckyData] = useState([]);
    const [showTable, setShowtable] = useState(false);
    const [rtoData, setRtoData] = useState({ fistNumber: '', lastNumber: '', favNumber : ''});

    const changeHandler = (e) => {
        setRtoData({ ...rtoData, [e.target.name]: e.target.value });
        console.log(rtoData);
    }
    const getLuckyNumber = (e) => {
        //alert("fistNumber : " + rtoData.fistNumber + " lastNumber : " + rtoData.lastNumber + " favNumber : " + rtoData.favNumber)
        setLuckyData([7787, 2123, 2123, 3223, 4332,8874,9876]);
        setShowtable(true);
        e.preventDefault();
    }
    const reset = () => {
        setRtoData({ fistNumber: '', lastNumber: '', favNumber: '' });
        setShowtable(false);
    }
    const rowClicked = (number) => {
        
        alert(number);
    }

    return (
        <div>
            <form className="border border-light p-5" onSubmit={e => getLuckyNumber(e) }>
                <div className="mb-3 row">
                    <label htmlFor="firstNumber" className="form-label col-sm-2">FirstNumber</label>
                    <input type="text" id="firstNumber" name="fistNumber" className="form-control col-sm-10" placeholder="FirstNumber" value={rtoData.fistNumber} onChange={e => changeHandler(e)} />
                </div>
                <div className="form-group row">
                    <label htmlFor="lastNumber" className="form-label col-sm-2">LastNumber</label>
                    <input type="text" id="lastNumber" name = "lastNumber" className="form-control col-sm-10" placeholder="LastNumber" value={rtoData.lastNumber} onChange={e => changeHandler(e)} />
                    </div>
                <div className="mb-3 row">
                    <label htmlFor="favNumber" className="form-label col-sm-2">FavNumber</label>
                    <input type="text" id="favNumber" name="favNumber" className="form-control col-sm-10" placeholder="FavNumber" value={rtoData.favNumber} onChange={e => changeHandler(e)} />
                </div>
                <div className="text-center mt-4 mb-3">
                    <button type="submit" id="btnGetNumber" className="col-sm-2 btn btn btn-primary mr-2">GetLuckyNumber</button>
                    <button type="button" id="btnReset" onClick={reset} className="col-sm-2 btn btn btn-primary">Reset</button>
                </div>
                {showTable && <DisplayData numbers={luckyData} rowClicked={rowClicked} />}
             </form>
       </div>
        );
}
export default RTONumberPlate