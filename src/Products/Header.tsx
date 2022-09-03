import { useState } from "react";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Header</p>
      </div>
    </>
  );
}

export default Header;
