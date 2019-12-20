import React from 'react';
import logo from './logo.svg';
import './App.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './Component/Section1/Section1'
import Section2 from './Component/Section2/Section2'
import Section3 from './Component/Section3/Section3'
import Section4 from './Component/Section4/Section4'
import Data from '../src/Component/Data/Data.json'
import Table from './Component/Table/Consumer'
import Form from '../src/Component/Form/Consumer'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import LoginForm from '../src/Component/LoginForm/Loginform'
import Validation from '../src/Component/validation/validation'
import { useTranslation } from 'react-i18next';
import '../src/Component/locales/chi/translation.json'
import validation from '../src/Component/validation/validation';

function App() {
  const { t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang);

  }
    
  return (
    <div>
      <LoginForm/>
      <Section1/>
      <Section2/>
      <Section3/>
        {/* <nav style={{width:'100%',padding:'2rem 0', backgroundColor:'grey'}}>
      <button onClick={()=>handleClick('en')}> English</button>
      <button onClick={()=>handleClick('ko')}>korean </button>
        <button onClick={()=>handleClick('chi')}>chinese</button>



        </nav>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <p>{t('Thanks,1')}</p>
      </header> */}


         {/* <BrowserRouter>
      <Switch>
          <Route  path={"/"} exact={true} component={Section1} />
          <Route path={"/section1"} component={Section2}/>
          <Route path={"/section2"} component={Section3}/>
        
        
      </Switch>
     
     </BrowserRouter> */}
{/* 
    <Table/> */}
     {/* <BrowserRouter>
      <Switch>
          <Route  path={"/"} exact={true} component={Home} />
          <Route path={"/Contactus"} component={Contactus}/>
          <Route path={"/LogInPage"} component={LogInPage}/>
        
      </Switch>
     
     </BrowserRouter> */}
  
      {/* /* <Home/> */}
     
      
      
 </div>
  );
}

export default App;






// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       Data:Data,
//       direction:{
//         name:'asc',
//       }
      
//     }
//       this.sortBy = this.sortBy.bind(this)
//       this.sortByDec = this.sortByDec.bind(this)
//       this.clearAll= this.clearAll.bind(this)
//       this.editData= this.editData.bind(this,Data.id)
//   }
// sortBy(key){
//     Data.sort((a,b) => a.firstName.localeCompare(b.firstName));
    
//     this.setState({Data: Data});
  
// }

// sortByDec(key){
//   Data.sort((a,b) => b.firstName.localeCompare(a.firstName)); this.setState({Data: Data});
// }
// clearAll=(i)=>{
//  let Data=this.state.Data;
//  Data.splice(i,1);
//  this.setState({
//    Data:Data
//  })
// }

// editData = (index,e) => {
//   for (var i = 0; i < i.length; i++) {
//     if (e[i].Id === '5dd12d281a9295b917b58de2') {
//       e[i].firstName = "Thomas";
//       break;
//     }
//   }
//   this.setState({ 
//      e: Data,
//   })
// }
 
//   render(){
//     return (
//    <div>
       
//         <Table Data={this.state.Data}
//         sortBy={this.sortBy}
//         sortByDec={this.sortByDec}
//         clearAll={this.clearAll}
//         editData={this.editData}
//         />
      
//         {/* <Section0/> */}
//          {/* <Section4/>
//          <Section3/>
//          <Section2/>
//          <Section1/> */}
//       </div>
      
//     )
//   }

//   }


