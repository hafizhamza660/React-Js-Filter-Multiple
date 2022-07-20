import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data/dummy-data";

function App() {
  const [ids, setIds] = useState(data.option);
  const [subOptions] = useState(data.subOption);
  const [newArr, setNewArr] = useState([]);

  const setVal = (index, e, type, isCheck) => {
    inputChangeHandler(index, e, type, !isCheck);
  };

  const conditionCheck = () => {
    let temp = [...subOptions];
    let newArr = temp.filter((item) =>
      ids.find(({ id, type, isCheck }) => isCheck && item.id === id)
    );
    console.log(newArr);
    setNewArr(newArr);
  };

  useEffect(() => {
    conditionCheck();
  }, [ids]);

  function inputChangeHandler(
    inputIdentifire,
    enteredId,
    enteredValue,
    ischecked
  ) {
    let temp = [...ids];
    temp[inputIdentifire] = {
      id: enteredId,
      type: enteredValue,
      isCheck: ischecked,
    };

    setIds(temp);
  }

  return (
    <section className="mainContainer">
      <div className="header">
        {ids.map((item, index) => {
          return (
            <label
              htmlFor={`n${item.id}`}
              className={"button_check"}
              key={item.id}
            >
              <input
                type={"checkbox"}
                name={item.type}
                value={item.id}
                onChange={() => setVal(index, item.id, item.type, item.isCheck)}
                id={`n${item.id}`}
              />
              {item.type}
            </label>
          );
        })}
      </div>

      <div className="mainContent">
        {!newArr.length <= 0
          ? newArr.map((item, index) => {
              return (
                <p key={index} className={"renderSecond"}>
                  {item.value}
                </p>
              );
            })
          : subOptions.map((item, index) => {
              return (
                <p key={index} className={"renderSecond"}>
                  {item.value}
                </p>
              );
            })}
      </div>
    </section>
  );
}

export default App;
