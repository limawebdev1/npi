import React from 'react'
import ProposalListItem from './ProposalListItem'

const ProposalList = (props) => {
   console.log('proposallist props', props.proposals);

   let el = null
   if (props.proposals.length > 0){
      let ProposalItems =
      props.proposals.map((proposal, i)=> {
         return (
            <ProposalListItem key={i} data={i + 1} proposal={proposal} />
         )
      })
      el = ProposalItems
      console.log('win', el);
   }

   return (
      <div>
         {el}
      </div>
   )

   }

export default ProposalList