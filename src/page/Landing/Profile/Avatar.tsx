import React from 'react';

interface Props {
  src: string;
  alt: string;
}

function Avatar(props: Props) {
  const { src, alt } = props;

  return <img src={src} alt={alt} />;
}

export default Avatar;