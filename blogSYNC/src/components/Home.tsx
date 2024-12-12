import { useState } from "react";

const HomePage = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);

  const handleClick = () => {
    setName((prev) => (prev == "mario" ? "luigi" : "mario"));
    setAge((prev) => (prev == 25 ? 30 : 25));
  };
  return (
    <div className="homepage">
      <h2>Home</h2>
      <p>
        {name} is {age}
      </p>
      <button onClick={handleClick}>Hi</button>
    </div>
  );
};

export default HomePage;
