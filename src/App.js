import React from 'react';
import GlobalStyles from './Components/SiteStructure/GlobalStyles';
import Header from './Components/Header';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles/>
      <Header headingText="Movie Search"/>
    </React.Fragment>
  );
}

export default App;
