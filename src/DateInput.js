import React from 'react';

function DateInput(props) {
    let userUpdateAPIUrl = props.userUpdateAPIUrl;
    let userInput = document.getElementById('userinput');

    

return (
    <div className='date-input'>
        <input id='userinput' placeholder='Enter date in yyyy-mm-dd format'></input>
        <button onClick={ evt => {
            userUpdateAPIUrl(userInput.value);
        }

        }>Go</button>
    </div>
);
}

export default DateInput;