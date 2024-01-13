// import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import React from "react";
// import StarRating from "./StarRating";

import "./index.css";
import App from "./App";

// function Test() {
//   const [moviesRating, setMoviesRating] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onSetRating={setMoviesRating} />
//       <p>This movie was rated {moviesRating} stars.</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
