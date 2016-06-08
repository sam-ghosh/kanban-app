import React from 'react';

export default ({children, ...props}) => {
    // console.log(JSON.stringify({children}));
    // console.log(children[1]);
    //console.log(children.map(c => c.to);
    console.log({...props});
    return <div {...props}>
        {children}
    </div>;

}
