import React from 'react';

interface Props {
  name: string;
}

function Name(props: Props) {
  const { name } = props;

  return <h2>{name}</h2>;
}

export default Name;