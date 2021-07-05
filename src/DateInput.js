import React from 'react';

function DateInput(props) {
    let userUpdateAPIUrl = props.userUpdateAPIUrl;
    let userInput = document.getElementById('userinput');

    

return (
    <div className='date-input'>
        <input id='userinput' placeholder='yyyy-mm-dd'></input>
        <button className='wiggle' onClick={ evt => {
            userUpdateAPIUrl(userInput.value);
        }

        }>GO</button>
    </div>
);
}

export default DateInput;