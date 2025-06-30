import React, { useEffect } from 'react';

const ReciptScanner = () => {
  const [text, setText] = React.useState('');
  const [onScanComplete, setOnScanComplete] = React.useState(null);

  useEffect(() => {
    if (text) {
      onScanComplete(text);
    }
  }, [text, onScanComplete]);

  return (
    // Rest of the component code
  );
};

export default ReciptScanner; 