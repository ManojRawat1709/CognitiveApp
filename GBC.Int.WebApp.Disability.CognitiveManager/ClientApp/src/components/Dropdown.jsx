import React from 'react';

const Dropdown = (props) => {
    const { data } = props;
    return (
        <div>
            <select name="dropdown" id="dropdownid">
                {
                    data.map(x => {
                        return <option value={x.headerName} key={x.headerName}> {x.headerName} </option>
                    })
                }
            </select>
        </div>
    );
}
export default Dropdown;