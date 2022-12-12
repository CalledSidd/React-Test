import React from "react";

const Hello = () => {
    // return (
    //     <div className: 'SampleClass>
    //         <h1>Hwllo Sidharth</h1>
    //     </div>
    // )
    return React.createElement('div',
    {id: 'hello', className : 'Sample Class'},
    React.createElement('h1', null , 'Hello Sidhath'))
}
export default Hello