import React from 'react';

const PortfolioItem = (props) => {
    return (
        <div>
            <h2>The Thing I have done.</h2>
            <div>You are viewing portfolio item {props.match.params.id}</div>
        </div>
    );
}

export default PortfolioItem;
