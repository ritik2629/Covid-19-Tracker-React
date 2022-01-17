import React from "react";
import styles from "./App.module.css";
import corona from '../src/assets/image.png'
import { Cards,CountryPicker } from "./components";
import { fetchData} from "./api";

class App extends React.Component {
   state ={
       data:{},
       country:''
   }
   async componentDidMount(){
        const fetchedData= await fetchData()
        console.log(fetchedData)
        this.setState({data:fetchedData})
    }

    handleCountryChange =async(country)=>{
      const fetchedData= await fetchData(country)
      // console.log(country)
      this.setState({data:fetchedData,country:country})
      console.log(fetchedData)
    }


  render() {
      const {data}= this.state;
    return (
      <div className={styles.container}>
      <img className={styles.image} src={corona} alt="corona-img"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}
export default App;
