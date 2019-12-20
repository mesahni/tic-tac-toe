import React from 'react';

function Square(props){
    return (
	    <button id="square_button" className="square" onClick={() => props.onClick()}>
			{props.value}
		</button>
	)
}
export default Square;
