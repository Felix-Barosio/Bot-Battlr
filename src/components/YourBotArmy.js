import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ army, releaseBotArmy, deleteBot }) {
  //your bot army code here...

  function handleClick(bot) {
    releaseBotArmy(bot)
  }
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {army.map((bot) =>
            <BotCard bot={bot} handleClick={handleClick} key={bot.id} deleteBot={deleteBot} />
          )}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
