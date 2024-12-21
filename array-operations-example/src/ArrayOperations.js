import React, { useState } from "react";

const ArrayOperations = () => {
  // Başlangıç dizisi
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  // push() örneği: Diziye bir eleman ekler
  const handlePush = () => {
    if (inputValue.trim() !== "") {
      const newArray = [...array];
      newArray.push(Number(inputValue));
      setArray(newArray);
      setMessage(`Pushed ${inputValue} to the array!`);
      setInputValue(""); // input'u temizle
    } else {
      setMessage("Please enter a valid number.");
    }
  };

  // pop() örneği: Dizinin son elemanını çıkarır
  const handlePop = () => {
    const newArray = [...array];
    const removedElement = newArray.pop(); // Son elemanı çıkar
    setArray(newArray);
    setMessage(`Popped ${removedElement} from the array!`);
  };

  // shift() örneği: Dizinin ilk elemanını çıkarır
  const handleShift = () => {
    const newArray = [...array];
    const removedElement = newArray.shift(); // İlk elemanı çıkar
    setArray(newArray);
    setMessage(`Shifted ${removedElement} from the array!`);
  };

  // unshift() örneği: Diziye ilk sıraya eleman ekler
  const handleUnshift = () => {
    if (inputValue.trim() !== "") {
      const newArray = [...array];
      newArray.unshift(Number(inputValue)); // 0 elemanını başa ekle
      setArray(newArray);
      setMessage(`Unshifted ${inputValue} to the array!`);
      setInputValue(""); // input'u temizle
    } else {
      setMessage("Please enter a valid number.");
    }
  };

  // splice() örneği: Diziye bir eleman ekler veya bir elemanı çıkarır
  const handleSplice = () => {
    if (inputValue.trim() !== "") {
      const newArray = [...array];
      newArray.splice(2, 1, Number(inputValue)); // 2. indeksten başla, 1 eleman sil ve yerine girdiği değeri ekle
      setArray(newArray);
      setMessage(`Spliced at index 2 with ${inputValue}!`);
      setInputValue(""); // input'u temizle
    } else {
      setMessage("Please enter a valid number.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Array Operations - Learn and Modify Arrays</h2>
      <p>Current Array: {JSON.stringify(array)}</p>

      <div style={styles.buttonContainer}>
        {/* Input field to add numbers */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a number"
          style={styles.inputField}
        />
        <button onClick={handlePush} style={styles.button}>
          Push
        </button>
        <button onClick={handlePop} style={styles.button}>
          Pop
        </button>
        <button onClick={handleShift} style={styles.button}>
          Shift
        </button>
        <button onClick={handleUnshift} style={styles.button}>
          Unshift
        </button>
        <button onClick={handleSplice} style={styles.button}>
          Splice
        </button>
      </div>

      <p>{message}</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  buttonContainer: {
    margin: "20px 0",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  inputField: {
    padding: "10px",
    fontSize: "16px",
    margin: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
};

export default ArrayOperations;
