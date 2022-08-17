import React from "react";
import Data from "./Data";
export default function App()
{
  const [mySet, setState] = React.useState(Data)
  const [currQues, setQues] = React.useState(0)
  const [counter, setCounter] = React.useState(0)
  const [score, setScore] = React.useState(false)

  function handleClick(isTrue)
  {
    if(isTrue)
    {
      setCounter(counter+1)
    }
    const nextQues = currQues + 1
    if(nextQues<mySet.length)
    {
      setQues(nextQues)
    }
    else
    {
      setScore(true)
    }
  }

  const myData = mySet[currQues].ans.map((item) =>{
    return (<button onClick={(()=>handleClick(item.isTrue))}>{item.answers}</button>)
  })
  return(
  <div className="container">
  {score ?
    (<div className="result-section">You scored {counter} out of {mySet.length}
    </div>) : <><div className="ques-section">
      <div className="ques-number"><span>Question {currQues}</span>/{mySet.length}</div>
      <div className="question">{mySet[currQues].ques}</div>
    </div>
    <div className="ans-section">
      {myData}
    </div>  </>
 } 
  </div>)
}