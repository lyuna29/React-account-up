import styled from "styled-components";
import { useState } from "react";
import MonthNavigation from "../components/MonthNavigation";
import ExpenseList from "../components/ExpenseList";
import CreateExpense from "../components/CreateExpense";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Section = styled.section`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
`;

export default function Home({ expenses, setExpenses }) {
  const [month, setMonth] = useState(1);
  const navigate = useNavigate();

  const filteredExpenses = expenses.filter(
    (expense) => expense.month === month
  );

  const mainloginclick = () => {
    navigate("/auths/login");
  };
  return (
    <div>
      <button onClick={mainloginclick}>로그인</button>
      <Container>
        <MonthNavigation month={month} setMonth={setMonth} />
        <CreateExpense
          month={month}
          expenses={expenses}
          setExpenses={setExpenses}
        />
        <ExpenseList expenses={filteredExpenses} />
      </Container>
    </div>
  );
}
