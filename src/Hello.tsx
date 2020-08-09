import React, { useState, } from 'react';

type HelloProps = {
  defaultGreeting: string,
}

export function Hello({ defaultGreeting }: HelloProps) {
  const [greeting, setGreeting] = useState(defaultGreeting);
  return <>
    <input type="text" value={greeting} onChange={e => setGreeting(e.target.value)} />
    <h1>Hello {greeting}</h1>
  </>
}
