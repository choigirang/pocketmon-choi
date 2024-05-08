"use client";

import React, { Suspense, useState } from "react";

const Loading = React.lazy(() => import("./loading"));
const PartOne = React.lazy(() => import("./(part)/partOne"));
const PartTwo = React.lazy(() => import("./(part)/partTwo"));

/** 2024/05/05 - pokemon 에서 보여질 스토리, setStep을 이용한 컴포넌트 전환 */
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
