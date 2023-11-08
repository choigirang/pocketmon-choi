import PockemonBg from "@/components/folder/PockemonBg";
import PartOne from "@/components/tutorial/PartOne";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

export default function Pockemon() {
  const [showPockemonBg, setShowPockemonBg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPockemonBg(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container>
      {showPockemonBg && <PockemonBg />}
      <PartOne />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
