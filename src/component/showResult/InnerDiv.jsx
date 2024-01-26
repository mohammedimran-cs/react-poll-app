import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import MyContext from '../form/MyContext';


const InnerDiv = (props) => {

  const { winner } = useContext(MyContext);

  let messiPercentage = winner.messiPercentage;
  let ronaldoPercentage = winner.ronaldoPercentage;
  let check = false;

  if(props.percentage > ronaldoPercentage || props.percentage > messiPercentage) {
    check = true;
  }
  else if(messiPercentage === ronaldoPercentage) {
    check =true;
  }

  return (
    <div className="inner-div">
      <div className="percent-name">
        <h4 id="messi-percent">{`${props.percentage} %`}</h4>
        <h2>{props.name}</h2>
      </div>

      <div className="show-bar">
        <div className="messi-tick" style={{visibility : check ? 'visible' :'hidden'}}>
        <FontAwesomeIcon icon={faCircleCheck} />
        </div>
        <progress className="myProgress" id="myProgressMessi" value={`${props.percentage}`} max="100"></progress>
      </div>
    </div>
  );
};

export default InnerDiv;
