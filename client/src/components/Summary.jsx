import React from 'react';
import LargeWidget from './LargeWidget';
import { render } from 'react-dom';

export default class Summary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { trip } = this.props;
    const { title, city } = trip;

    return (
      <div className="AK-container-summary">
        <div className="AK-container-header-summary">
          <div className="AK-header-summary">
            <div className="AK-text1-summary">Step 2</div>
            <div className="AK-text2-summary">Your trip summary</div>
          </div>
        </div>
        <div className="AK-container-content-summary">
          <div className="AK-container-start-end">
            <div className="AK-header-start-end">{title}</div>
            <div className="AK-container-inner-start-end">
              <img className="AK-icon-start-end" src="start-end-icon.png" alt="start-end-icon" />
              <div className="AK-container-text-start-end">
                <div className="AK-text1-start-end">START</div>
                <div className="AK-text2-start-end">Wednesday 4th March 2020, {city}</div>
                <div className="AK-text1-start-end">END</div>
                <div className="AK-text2-start-end">Wednesday 11th March 2020, {city}</div>
              </div>
            </div>
          </div>
          <div className="AK-container-payment">
            <LargeWidget trip={trip} />
          </div>
        </div>
      </div>
    );
  }
};

// const Summary = (props) => {
//   const { trip } = props;
//   const { title, city } = trip;
//   return (
//     <div className="AK-container-summary">
//       <div className="AK-container-header-summary">
//         <div className="AK-header-summary">
//           <div className="AK-text1-summary">Step 2</div>
//           <div className="AK-text2-summary">Your trip summary</div>
//         </div>
//       </div>
//       <div className="AK-container-content-summary">
//         <div className="AK-container-start-end">
//           <div className="AK-header-start-end">{title}</div>
//           <div className="AK-container-inner-start-end">
//             <img className="AK-icon-start-end" src="start-end-icon.png" alt="start-end-icon" />
//             <div className="AK-container-text-start-end">
//               <div className="AK-text1-start-end">START</div>
//               <div className="AK-text2-start-end">Wednesday 4th March 2020, {city}</div>
//               <div className="AK-text1-start-end">END</div>
//               <div className="AK-text2-start-end">Wednesday 11th March 2020, {city}</div>
//             </div>
//           </div>
//         </div>
//         <div className="AK-container-payment">
//           <LargeWidget trip={trip} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Summary;
