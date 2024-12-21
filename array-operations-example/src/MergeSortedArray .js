import React, { useState } from "react";

const MergeSortedArray = () => {
  // Başlangıç dizileri
  const [arr1, setArr1] = useState([1, 3, 5, 7]);
  const [arr2, setArr2] = useState([2, 4, 6, 8]);
  const [mergedArray, setMergedArray] = useState([]);

  // Dizileri birleştiren fonksiyon
  const mergeSortedArrays = (arr1, arr2) => {
    let merged = [];
    let i = 0;
    let j = 0;

    // İki diziyi karşılaştırarak birleştirme işlemi
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }

    // Kalan elemanları ekleme
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }

    return merged;
  };

  // Birleştirme işlemini tetikleyen fonksiyon
  const handleMerge = () => {
    const result = mergeSortedArrays(arr1, arr2);
    setMergedArray(result); // Sonucu state'e kaydet
  };

  return (
    <div style={styles.container}>
      <h2>Merge Sorted Arrays</h2>

      {/* Dizi 1 */}
      <div style={styles.inputContainer}>
        <h3>Array 1</h3>
        <input
          type="text"
          value={arr1.join(", ")}
          onChange={(e) => setArr1(e.target.value.split(",").map(Number))}
          style={styles.input}
        />
      </div>

      {/* Dizi 2 */}
      <div style={styles.inputContainer}>
        <h3>Array 2</h3>
        <input
          type="text"
          value={arr2.join(", ")}
          onChange={(e) => setArr2(e.target.value.split(",").map(Number))}
          style={styles.input}
        />
      </div>

      {/* Birleştirme Butonu */}
      <button onClick={handleMerge} style={styles.button}>
        Merge Arrays
      </button>

      {/* Sonuç */}
      <div>
        <h3>Merged Array</h3>
        <p>
          {mergedArray.length > 0
            ? mergedArray.join(", ")
            : "No merged array yet."}
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    marginTop: "5px",
    width: "200px",
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default MergeSortedArray;
