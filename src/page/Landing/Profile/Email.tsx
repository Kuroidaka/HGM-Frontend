import React from 'react';

interface Props {
  email: string;
}

function Email(props: Props) {
  const { email } = props;

  return <p>{email}</p>;
}

export default Email;