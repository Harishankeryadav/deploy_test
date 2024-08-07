// import React from 'react';
// import BfhlData from './components/BfhlData';

// function App() {
//   axios.default.withCredentials = true;
//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     axios.post('testdeploy-pink.vercel.app',)
//     .then(result => console.log(result))
//     .catch(err => console.log("error is ", err))
//   }
//   return (
//     <div className="App">
//       <header className="App-header">
//         <BfhlData />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import axios from 'axios';
import BfhlData from './components/BfhlData';

function App() {
  axios.defaults.withCredentials = true;  // Corrected to defaults
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://testdeploy-pink.vercel.app/bfhl')  // Added https:// and the endpoint
      .then(result => console.log(result))
      .catch(err => console.log("error is ", err));
  }

  return (
    <div className="App">
      <header className="App-header">
        <BfhlData />
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default App;
