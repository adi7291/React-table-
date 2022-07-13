import "./app.css";
import Card from "./component/Card";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import MainContent from "./component/MainComponent";

import countryData from "./component/counntryData";
import CountryState from "./component/CountryState";

function App() {

 
 
  return (
    <div className="App">
      <Header />
      
      {/* <Card/> 
      <Hero/>
      <Footer/> */}

      <table>
        <thead>
          <tr>
            <th>COUNTRY</th>
            <th>CAPITAL</th>
          </tr>
        </thead>
        <tbody>
          {countryData.map(countaryState=>(
            <tr>
              <td>{countaryState.country}</td>
              <td>{countaryState.city}</td>
            </tr>
          )
            
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
