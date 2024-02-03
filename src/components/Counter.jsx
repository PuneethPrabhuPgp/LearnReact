import React,{useState, useEffect, useLayoutEffect} from "react";

const Counter = (props) => {
  const { name, PI } = props;
  console.log('component loads');
  const [count, setCount] = useState(0);

  const incCounter = () => {
    setCount(count => count + 1);
  }

  const decCounter = () => {
    setCount(count => count - 1)
  }

  useEffect(() => {
    console.log('called everytime')
  }); // componentDidMount / componentDidUpdate

  useEffect(() => {
    console.log('called only first time')

    return (() => {
      console.log('component will unmount, will be called just before component unmounts')
    })
  }, []); // componentDidMount

  useEffect(() => {
    console.log('called when name changes')
    setCount(0);
  }, [name]); // componentDidUpdate

  // useLayoutEffect(() => {
  //   console.log('printed before render')
  // },[])

  const renderText = () => {
    console.log('return printed')
    const a = `Counter Component for ${name} with the PI value ${PI} with count value being ${count}`;
    return a
  }

  return (
    <div>
     {renderText()}
      <div style={{ marginTop: '10px' }}>
        <button onClick={incCounter}> Increment</button>
        <button onClick={decCounter}> Decrement</button>
      </div>
    </div>
  )
}

export default Counter
