import { useRef, useState } from "react";

const StopWatch = () => {
  const [now, setNow] = useState(null);
  const [start, setStart] = useState(null);
  const inrevalRef = useRef(null);

  let secondsPassed = 0;

  const handleStartClick = () => {
    setNow(Date.now());
    setStart(Date.now());

    clearInterval(inrevalRef.current);
    inrevalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  const handleStopClick = () => {
    clearInterval(inrevalRef.current);
  }

  if (start != null && now != null) {
    secondsPassed = (now - start) / 1000;
  }

  return (
    <>
      <h1>Time passed: { secondsPassed.toFixed(3) }</h1>
      <button onClick ={ handleStartClick }>Start</button>
      <button onClick = { handleStopClick }>Stop</button>
    </>
  );
}

export default StopWatch;
