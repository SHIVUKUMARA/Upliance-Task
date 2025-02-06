import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("#ffffff");

  const updateBackground = (newCount) => {
    if (newCount > 0) {
      setBgColor(`rgba(0, 100, 255, ${Math.min(1, newCount * 0.1)})`); 
    } else if (newCount < 0) {
      setBgColor(`rgba(255, 0, 0, ${Math.min(1, Math.abs(newCount) * 0.1)})`); 
    } else {
      setBgColor("#ffffff"); 
    }
  };

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    updateBackground(newCount);
  };

  const handleDecrement = () => {
    const newCount = count - 1;
    setCount(newCount);
    updateBackground(newCount);
  };

  const handleReset = () => {
    setCount(0);
    setBgColor("#ffffff"); 
  };

  return (
    <>
    <div
      style={{ minHeight: "100vh", backgroundColor: bgColor, transition: "background-color 0.5s" }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card className="text-center p-4 shadow" style={{ width: "500px" }}>
        <Card.Body>
          <Card.Title className="fs-3">Counter: {count}</Card.Title>
          <div className="d-flex justify-content-between mt-5">
            <Button variant="success" onClick={handleIncrement}>
              Increment
            </Button>
            <Button variant="danger" onClick={handleDecrement}>
              Decrement
            </Button>
            <Button variant="warning" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    </>
  );
};

export default Counter;
