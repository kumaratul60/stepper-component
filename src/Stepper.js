// It will accept a list a components,
//  based on the size of the list
// it will generate steps

import React, { useState } from "react";

const Stepper = ({ list }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const stepCounts = list.length;
  const steps = [];

  for (let i = 0; i < stepCounts; i++) {
    steps.push(
      <div
        key={i}
        className={`steps ${currentStep >= i ? "active" : ""}`}
        onClick={() => {
          setCurrentStep(i);
        }}
      >
        {i + 1}
      </div>
    );
  }

  const progressLineWidth = (100 / (stepCounts - 1)) * currentStep;

  const onPrev = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onNext = () => {
    if (currentStep !== currentStep - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <section className="stepper">
      <div className="steps-container">
        <div className="steps-wrapper">{steps}</div>
        <div
          className="progress-line"
          style={{ width: `${progressLineWidth}%` }}
        >
          {" "}
        </div>
      </div>

      {/* <button onClick = {onPrev}>Prev</button> {" "} 
      <button onClick = {onNext}>Next</button> */}
      {/* to pass extra property  in stepper componnet use React.cloneElement */}
      {/* <h2>{list[currentStep]} </h2> */}
      <div>{React.cloneElement(list[currentStep], { onNext, onPrev })}</div>
    </section>
  );
};

export default Stepper;
