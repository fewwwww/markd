import React, { useCallback, useState } from 'react';
import Editor from './editor'
import Preview from './preview';

const App = () => {
  const [doc, setDoc] = useState('# Hello World!\n')
  const handleDocChange = useCallback( newDoc => {
    setDoc(newDoc)
  }, [])

  return (
    <div
      className="App"
      style={{
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <Editor
        onChange={handleDocChange}
        initialDoc={doc}
      />
      <Preview
        doc={doc}
      />
    </div>
  );
}

export default App;
