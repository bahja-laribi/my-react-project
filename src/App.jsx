// import * as React from "react";

// const title = "React";

// function App() {
  
// const title = "React";
//   return(
//     <div>
//       <h1>Hello {title}</h1>
//       <label htmlFor="search">Search:</label>
//       <input id="search" type= "text"/>
//     </div>
//   );
// }
// export default App;

// import * as React from "react";

// const telcome = {
//   greeting:"Hey",
//   title:"React",
// };

// function App() {
//   return(
//     <div>
//       <h1>
//        {welcome.greeting} {welcome.title}</h1>
//       <label htmlFor="search">Search:</label>
//       <input id="search" type= "text"/>
//     </div>
//   );
// }
// export default App;

import * as React from "react";
function getTitle(title) {
  return title;
}
function App() {
  return(
    <div>
      <h1>Hello {getTitle("React")}</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type= "text"/>
    </div>
  );
}
export default App;