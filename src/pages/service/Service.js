import { useState } from "react";

function StatementList(props) {
    
    const arr = props.data;
    const statementList = arr.map((val, index) => <li key={index}>{val}</li>);
    return <ul>{statementList}</ul>
  }

function Services() {
    const [history, setHistory] = useState(0);
  const [statement, setStatement] = useState(1);
     const [total, setTotal] = useState (2);
     const [holder, setHolder] = useState(0);
    // const [textOut, setTextOut] = useState("");

    let textOut = "";
  switch(holder) {
      
      case 0:
          textOut = "This is history";
      break;
      case 1:
          textOut = "This is statement";
      break;
      case 2:
          textOut = "This is total balance";
          break;
          
          default:
          textOut = "unknown option";
          break;
      }

    return(
        <>
        <div id="first-main">
<div id="main">
<div id="first-btn">
<button className='first-btn'
onClick={() => 
setHolder(history)
}>History</button>
     </div>
<div id="second-btn">
<button onClick={() => setHolder(statement)
      }>Statement</button>   
      </div>
<div id="third-btn">
<button onClick={() =>
setHolder(total)
  }>Total</button>
</div>
</div>
<div style={{backgroundColor:"lightblue"}}>{textOut}
<StatementList data={contacts} />
</div>
</div>
        </>
    )
}

const contacts = ['James Smith '+ 47 + ' South Africa' + ' 076 762 5232',
'Thomas Anderson '+ 53 + ' Brazil' + ' 072 904 5630', 'Bruce Wayne '+ 24 + ' USA'+' 066 575 0985']; 

export default Services;