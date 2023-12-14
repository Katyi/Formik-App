import React from "react";
import "./ProgressBarLine.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import Dot from '../../assets/Dot.svg';
import Check from '../../assets/Check.svg';

const ProgressBarLine = ({ page, onPageNumberClick }) => {
  var stepPercentage = 0;
  if (page === "page1") {
    stepPercentage = 0;
  } else if (page === "page2") {
    stepPercentage = 50;
  } else if (page === "page3") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
            {stepPercentage === 0 ? <img src={Dot} alt="" /> : null }
            {stepPercentage > 0 ? <img src={Check} alt="" /> : null }
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
          >
            {stepPercentage === 50 ? <img src={Dot} alt=""/> : null }
            {stepPercentage > 50 ? <img src={Check} alt="" /> : null }
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            {stepPercentage === 100 ? <img src={Dot} alt=""/> : null }
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default ProgressBarLine;
