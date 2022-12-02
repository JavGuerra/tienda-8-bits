import React from 'react';

export default React.memo( ({footer, link}) => (
  <p>🎯&nbsp;&nbsp;<a href={link} target="_blank">{footer}</a></p>
));
