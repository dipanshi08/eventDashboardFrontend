import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css';
import NavBar from './NavBar';
import axios from 'axios'
import SingleEvent from './SingleEvent'

class listEvents extends React.Component {
  componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'CREATOR')
      this.props.history.push('/events') 
  }
  componentDidMount(){
    this.assign();
  }
  
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    }
    state = {
    event:null,
    current:"newevent",
    data :null,

    };
  
  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    });
  }
  assign= () =>{
  //var user_email = sessionStorage.getItem("user_email");
  var config = {
  method: 'get',
  url: 'api/events'
  };
  axios(config)
  .then( (response) => {
    this.setState({data:response.data});
  })
  .catch((error) =>{
    console.log(error);
  });
  }
 


  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='events'/>
   <div class=" main-panel ">

    <div class="sidenav" data-color="black" data-background-color="white"  >
      
      
      <div class="sidebar-wrapper">
      {this.state.data===null ? null :
      <ul class="nav" >
        {this.state.data.map(listitem => (
            <li className="nav-item">
            <button onClick={()=> this.setState({event:listitem})}>
              {listitem['title']}
              <p>{listitem['description']}</p>
              </button>
            </li>
          ))}
      </ul>
      }
      </div>
    </div>
    
   
  </div>
  <div class="sidepanel">
    <div class="content">
        {this.state.event!==null?
        <SingleEvent data={this.state.event}/>:
        null}

      </div>
  </div>



  </div>
</div>   
);
}
}
export default withRouter(listEvents);