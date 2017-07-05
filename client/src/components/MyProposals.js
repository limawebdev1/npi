import React from 'react'
import Nav from './Nav'
import MyProposalList from './MyProposalList'

class MyProposals extends React.Component {
   constructor(props) {
     super(props)
     this.state = {
       proposals:[]
     }
   }
   componentWillMount() {
      fetch(`/api/proposals/0`, {
         credentials:'include'
      })
      .then(res => res.json())
      .then(proposals => {
         console.log('my props', proposals);
         this.setState({
          proposals:proposals
         })
      })
   }
   render(){
      if (this.state.proposals.length == 0){
         return (
           <div >
            <Nav />
            <div className="container propMain">
               <div className="row">
                  <div className="componentTitle"> My Proposals</div>
               </div>
               <a href="/wizard1"><button className="btn newBtnMy  light-blue darken-2">New Proposal</button></a>
            </div>
          </div>
         )
      }
      return (
        <div>
            <Nav />
            <div className="container propMain">
               <div className="row">
                  <div className="row">
                     <div className="componentTitle"> My Proposals</div>
                  </div>
                  <a href="/wizard1"><button className="btn newBtnMy  light-blue darken-2">New Proposal</button></a>
               </div>
               <MyProposalList proposals={this.state.proposals} />
            </div>
        </div>
      )
   }

}

export default MyProposals
