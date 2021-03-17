import React from "react";

import { Navbar } from "components";
import { PaymentLayout } from "layouts";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="offer">
        <PaymentLayout />
      </div>
    </div>
  );
}

export default App;
