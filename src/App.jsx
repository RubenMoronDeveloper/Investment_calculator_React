import { useState } from "react";
import { Table } from "./assets/Components/Chart/Table";
import { Form } from "./assets/Components/Form/Form";
import { Header } from "./assets/Components/Header/Header";
function App() {
  const [investmentData, setInvestmentData] = useState("");

  const handleInvestmentData = (investmentData) => {
    setInvestmentData(investmentData);
  };

  return (
    <div>
      <Header />
      <Form handleInvestmentData={handleInvestmentData} />
      {investmentData.length !==0 && <Table investmentData={investmentData}/> }
    </div>
  );
}

export default App;
