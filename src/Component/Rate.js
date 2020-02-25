import React from 'react'

const Rate = (props) => {

        let star= [] 
        for(let i=0;i<5;i++) {
            if(i < props.rating) {
                star.push(<span onClick={()=>props.starIndex(i+1)}>★</span>)

            }
            else {
                star.push(<span 
                  onClick={() => props.starIndex(i + 1)}
                  >☆</span>);
              }
        

        }
    return <div>{star}</div>

    
}
export default Rate;