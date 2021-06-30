import React from "react";
import { useLocation } from 'wouter';

function LinkA({ url, children, isExternal, target }) {
  const setLocation = useLocation()[1]
  const handleLink = () => setLocation(url)
  return (
    <a href={isExternal ? url : false} target={target ?? '_self'} onClick={!isExternal ? handleLink : undefined}>
      {children ?? url}
    </a>
  );
}

export default LinkA;
