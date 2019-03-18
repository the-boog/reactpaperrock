import React from 'react';
import {Menu, Button} from 'semantic-ui-react';

const Home = () => (
<div>
  <div style= {{display: "flex", justifyContent: "center", padding: "60px", flexWrap: "wrap",}}>
    <h1 style= {{fontSize: "5em", textAlign: "center"}}>Welcome To ROCK PAPER SCISSORS!</h1>
  </div>
  <div style= {{display: "flex", justifyContent: "center", padding: "10px", flexWrap: "wrap",}}>
    <Button color="red" inverted size="massive" style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap"}}><a href="/app">Let's get Started!</a></Button>
  </div>
</div>
);

export default Home;