import React from 'react';

export default React.memo( ({url, alt}) =>
  <div className="bg-logo"><img src={url} alt={alt} /></div>
);