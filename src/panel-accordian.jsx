import React, { useState } from 'react';

const Panel = ({ title, children, is_active, on_show }) => {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {is_active ? <p>{children}</p> : <button onClick={on_show}>Show</button>}
    </section>
  );
};

const Accordian = () => {
  // Index of child component to display, initially 0
  const [active_idx, set_active_idx] = useState(0);

  return (
    <>
      <h2>Accordian</h2>

      <Panel
        title="About"
        // Hardcoded index for each child
        is_active={active_idx === 0} // True if active index is 0
        on_show={() => set_active_idx(0)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque libero,
        aspernatur eius a adipisci consequatur quo eligendi recusandae?
        Aspernatur repudiandae commodi impedit voluptates facilis dolorum
        maiores minus quaerat quis sit.
      </Panel>

      <Panel
        title="More Info"
        is_active={active_idx === 1}
        on_show={() => set_active_idx(1)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta quas
        possimus veniam ex quisquam necessitatibus facilis harum, aperiam qui!
        Delectus doloremque at eius reprehenderit voluptate veritatis fugit id
        eum maiores.
      </Panel>
    </>
  );
};

export { Accordian };
