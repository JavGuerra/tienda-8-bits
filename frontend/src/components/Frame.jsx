import { memo } from 'react';

export default memo( ({children, bg}) =>
    <div className={"frame " + bg}>{children}</div>
);