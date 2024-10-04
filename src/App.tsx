import { useState } from "react";
import "./App.css";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";

function App() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <Button>Click me</Button>
      <Input type="email" placeholder="Email" />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        // className="rounded-md border"
      />
    </>
  );
}

export default App;
