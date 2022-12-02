import { memo } from 'react';

export default memo( ({url, alt}) =>
  <div className="bg-logo"><img src={url} alt={alt} /></div>
);