import { memo } from 'react';

export default memo( ({footer, link}) => (
  <p>🎯&nbsp;&nbsp;<a href={link} target="_blank">{footer}</a></p>
));
