"use client";

import React, { Suspense, useState } from "react";

const Loading = React.lazy(() => import("./loading"));
const PartOne = React.lazy(() => import("./partOne"));
const PartTwo = React.lazy(() => import("./partTwo"));

export default function Story() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  return (
    <React.Fragment>
      <Suspense>
        {step === 0 && <Loading setStep={nextStep} />}
        {step === 1 && <PartOne setStep={nextStep} />}
        {step === 2 && <PartTwo />}
      </Suspense>
    </React.Fragment>
  );
}
