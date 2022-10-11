import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [bot, setBot] = useState([])
  const [army, setArmy] = useState([])
  const apiURL = "http://localhost:8002/bots"

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => setBot(data))
  }, [])

  function deleteBot(delBot) {

    const apiDel = `http://localhost:8002/bots/${delBot.id}`

    const updatedBot = bot.filter((obj) => obj.id !== delBot.id)
    setBot(updatedBot)

    const newBotArmy = army.filter((botz) => botz.id !== delBot.id)
    setArmy(newBotArmy)

    fetch(apiDel, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(r => r.json())
  }

  function addBot(botz) {
    const botFilterArmy = army.filter((obj) => obj.id !== botz.id)
    const newBotArmy = [...botFilterArmy, botz]
    setArmy(newBotArmy)
  }

  function releaseBotArmy(obj) {
    const newBotArmy = army.filter((botz) => botz.id !== obj.id)
    setArmy(newBotArmy)
  }

  return (
    <div>
      <YourBotArmy army={army} deleteBot={deleteBot} releaseBotArmy={releaseBotArmy} />
      <BotCollection data={bot} addBot={addBot} deleteBot={deleteBot} />
    </div>
  )
}

export default BotsPage;
