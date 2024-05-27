import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const MUITest = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [count, setCount] = useState(0);

  const handleInitialClick = () => {
    setShowButtons(true);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      {!showButtons ? (
        <Button variant="contained" color="primary" onClick={handleInitialClick}>
          Show Increment/Decrement
        </Button>
      ) : (
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" onClick={handleIncrement}>
            Increment
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDecrement}>
            Decrement
          </Button>
        </Stack>
      )}
      <p>Count: {count}</p>
    </div>
  );
};

export default MUITest;
