import React from 'react';

function Dropdown(props) {
const updateAPIUrl = props.updateAPIUrl;

return (
    <div className='date-dropdown'>
        <select onChange={evt => {
            updateAPIUrl(evt.target.value);
        }}>
            <option value = 'today' >Today</option>
            <option value = '2012-03-14'>2012-03-14</option>
        </select>
    </div>

);
}


export default Dropdown;