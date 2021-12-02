import React from "react";
import { Link} from "react-router-dom";
import CardViewer from "./CardViewer";
function CardEditor(props) {
  
  const removeCard = (event) => {
    let temp = props.result;
    let index = event.target.dataset.index;
    temp.splice(index, 1);
    props.setResult([...temp]);
  };
  return (
    <div id="Table">
      <table>
        <tbody>
          <tr>
            <th>Front</th>
            <th>Back</th>
            <th>Delete</th>
          </tr>
         {/*  {console.log(`result: ${props.result} `)} */}
          {props.result.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>
                  <button data-index={index} onClick={removeCard}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    <Link to="/CardViewer">
        <button>Go to Viewer</button>
      </Link> 
     {/* 
      <CardViewer result={props.result} />  */}
     
    </div>
  );
}
export default CardEditor;
