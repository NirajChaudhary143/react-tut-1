import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const listItem = [
    "Kathmandu",
    "Bhaktapur",
    "Lalitpur",
    "Dhangadhi",
    "Kailali",
  ];
  const [visibleAlert, setAlertVisible] = useState(false);
  return (
    <>
      {visibleAlert && (
        <Alert onClose={() => setAlertVisible(false)}>I am alert</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </>
  );
}

export default App;
