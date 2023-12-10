import Button from "./components/Button";
import Alert from "./components/Alert";
import { useEffect, useState } from "react";

function App() {
  const listItem = [
    "Kathmandu",
    "Bhaktapur",
    "Lalitpur",
    "Dhangadhi",
    "Kailali",
  ];
  const [visibleAlert, setAlertVisible] = useState(false);
  useEffect(() => {
    if (visibleAlert === true) {
      alert("ALert is visible");
    } else {
      alert("Alert is hidden");
    }
    return () => {
      alert("Cleared every thing");
    };
  }, [visibleAlert]);
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
