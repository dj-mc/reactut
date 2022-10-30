import React, { useState } from 'react';

const Input = ({ label, input_text, on_input }) => {
  return (
    <label>
      {label} <input value={input_text} onChange={on_input} />
    </label>
  );
};

const SyncInput = () => {
  const [input_text, set_input_text] = useState('');

  const handle_input_change = (e) => {
    set_input_text(e.target.value);
  };

  return (
    <>
      <h2>Two Synced Inputs</h2>

      <Input
        label="First input"
        input_text={input_text}
        on_input={handle_input_change}
      />

      <br />

      <Input
        label="Second input"
        input_text={input_text}
        on_input={handle_input_change}
      />
    </>
  );
};

export { SyncInput };
