import React from 'react';
import { withRouter } from 'react-router-dom';
import '../material.css'
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import { store } from 'react-notifications-component';
import axios from 'axios';

class NavBar extends React.Component {
    
    state = {
      current : this.props.current,
      data : "",
      length:""
  }
  /*async componentDidMount() {
  try {
            setInterval(async () => {
              await axios.get('api/events')
        .then( (response) => {
        this.setState({data:response.data,
        length:response.data.length});
        //alert(this.state.data.length)

        this.notify(this.state.data.length)
        })
        .catch((error) =>{
        console.log(error);
        });
            }, 30000);
          } catch(e) {
            console.log(e);
          }
  }
*/
  notify = ($head) => {
      store.addNotification(
          {
          title: $head+ " new events",
          message: <a href="/dash">hello</a>,
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration:3000,
            click:false,
            showIcon:true
          }
          }
      )
    


  }
     
  render(){
    var user_name = sessionStorage.getItem("user_name");
  return (
    
     <div class="sidebar" data-color="purple" data-background-color="white"  >
      <div style={{position:'absolute', z_index:1}}><ReactNotification /></div>
      <div class="text" style={{marginTop:'40px',marginBottom:'30px',textAlign:'center', textTransform:'uppercase' }}>
         <h3> {user_name}</h3>
      </div>
      
      <div class="sidebar-wrapper">
      <hr/>
      <ul class="nav" >

      <div>
      {this.state.current === 'creator-dash' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/creator-dash">
              <p>Dashboard</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/creator-dash">
              <p>Dashboard</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'creator-calendar' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/creator-calendar">
              <p>Calendar</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/creator-calendar">
              <p>Calendar</p>
            </a>
          </li> 
          }
      </div>
      
      <div>
      {this.state.current === 'newevent' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/newevent">
              <p>Create Event</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/newevent">
              <p>Create Event</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'newgroup' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/newgroup">
              <p>Create Group</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/newgroup">
              <p>Create Group</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'events' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/events">
              <p>All Events</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/events">
              <p>All Events</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'updateevent' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/updateevent">
              <p>Update Events</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/updateevent">
              <p>Update Events</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'delevent' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/delevent">
              <p>Delete an Event</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/delevent">
              <p>Delete an Event</p>
            </a>
          </li> 
          }
      </div>
      
      <div>
      {this.state.current === 'creator-alerts' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/creator-alerts">
              <p>Alerts</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/creator-alerts">
              <p>Alerts</p>
            </a>
          </li> 
          }
      </div>
      <div>
      {this.state.current === 'logout' ? 
        <li class="nav-item ">
            <a class="nav-link active" href="/logout">
              <p>Logout</p>
            </a>
          </li> 
          : 
          <li class="nav-item ">
            <a class="nav-link" href="/logout">
              <p>Logout</p>
            </a>
          </li> 
          }
      </div>
       
        </ul>
      </div>
      </div>
    

);
}
}
export default withRouter(NavBar);