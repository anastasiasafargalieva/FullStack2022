import React from "react";

const Find = ({currentQuery, handleQueryChange}) =>
    <div>
        Look for the countries <input value={currentQuery} onChange={handleQueryChange} />
    </div>

export default Find