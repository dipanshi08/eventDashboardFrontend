import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import '../material.css'

import NavBar from './NavBar';

class CCalendar extends React.Component {
  state = {
    data : null
}

componentWillMount(){
    var user_id = sessionStorage.getItem("user_id");
    var user_role = sessionStorage.getItem("user_role");
    if(user_id===null || user_role !== 'CREATOR')
      this.props.history.push('/') 
  }


componentDidMount(){
    this.assign();
  }

assign= () =>{

  var config = {
  method: 'get',
  url: 'http://localhost:8080/api/eventsByUserId/2'

  
  };
axios(config)
.then( (response) => {
  this.setState({data:response.data});
  console.log(this.state.data);
})
.catch((error) =>{
  console.log(error);
});
}

  render(){
  return (
     <div >
    
  <div class="wrapper ">
    <NavBar current='creator-calendar' />
   <div class=" main-panel jumbotron">
    <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin ]}
      events={this.state.data}
      /*{[
    { title: 'event 1', date: '2020-06-01T19:30' },
    { title: 'event 2', date: '2020-06-02' }
  ]}*/
   /></div>
  </div>
</div>   
);
}
}
export default withRouter(CCalendar);

