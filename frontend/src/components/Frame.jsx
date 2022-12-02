import React from 'react';

export default React.memo( ({children, bg}) =>
    <div className={"frame "+bg}>{children}</div>
);