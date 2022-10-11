import React from "react";
import BotCard from "./BotCard";

function BotCollection({ data, addBot, deleteBot }) {
  // Your code here

  function handleClick(obj) {
    addBot(obj)
  }

  return (
    <div className="ui four column grid">
      <div className="row">
        {data.map((obj) =>
          <BotCard bot={obj} handleClick={handleClick} key={obj.id} deleteBot={deleteBot} />
        )}
      </div>
    </div>
  );
}

export default BotCollection;
