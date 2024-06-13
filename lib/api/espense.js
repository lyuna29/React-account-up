import axios from "axios";

const JSON_SERVER_HOST = "http://localhost:5002";

export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_HOST}/expenses`);
    return response.data;
  } catch (err) {
    alert("뭔가 잘못된 것 같아요");
  }
};

export const postExpense = async (newExpense) => {
  try {
    const response = await axios.post(
      `${JSON_SERVER_HOST}/expenses`,
      newExpense
    );
    return response.data;
  } catch (err) {
    console.log(err);
    alert("뭔가 잘못된 것 같음");
  }
};
