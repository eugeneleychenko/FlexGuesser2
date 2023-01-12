import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const ChecklistApp = () => {
  const [clothes, setClothes] = useState([
    { name: "3 Underwear", checked: false, emoji: "🩲" }
  ]);
  const [newClothes, setNewClothes] = useState("");

  const handleCheck = (index) => {
    const newClothes = [...clothes];
    newClothes[index].checked = !newClothes[index].checked;
    setClothes(newClothes);
  };

  const handleAddClothes = (e) => {
    setNewClothes(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newClothes === "") return;
    const newItem = { name: newClothes, checked: false, emoji: "😊" };
    const newClothesList = [...clothes, newItem];
    setClothes(newClothesList);
    setNewClothes("");
  };

  return (
    <div>
      <h1>Gleason's Packing List</h1>
      <div className="row">
        {clothes.map((item, index) => (
          <div className="col-4" key={index}>
            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(index)}
                  style={{ position: "relative", marginRight: "10px" }}
                />
                {item.name} {item.emoji}
              </label>
            </div>
          </div>
        ))}
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newClothes}
              onChange={handleAddClothes}
              placeholder="Add new item"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChecklistApp;
