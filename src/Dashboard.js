import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar'





class Dashboard extends React.Component {

    
  
  render(){  return (
      <div className="app" >
      <Sidebar activemenu={'DASHBOARD'} />
      <main>
          <div className="container-fluid" >
            <div className="row" >
                <div className="col-12 shadow-sm rounded bg-white" >
                  <h6 className="text-header py-3 mb-0 font-weight-bold line-hight-1">Admin Dashboard<br></br>
                  <span className="text-muted small">Summery</span></h6>
                </div>
            </div>
 
          </div>
          
      </main>
    </div>
    );
  
  }
  }
  
  export default Dashboard;
  