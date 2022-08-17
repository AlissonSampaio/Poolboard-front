import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

import Card from "../../components/Card";

import vs from "../../assets/images/vs.png";
import "./styles.css";
import { data } from "autoprefixer";
import useHome from "./useHome";

export default function Home() {
  const {
    loadingMatchData,
    player,
    opponent,
    errorLoadingMatchData,
    playerPoints,
    changePlayerPoints,
    changeOpponentPoints,
    opponentPoints,
    changePlayer,
    leftList,
    rightList,
    changeOpponent,
  } = useHome();

  if (loadingMatchData || !Boolean(player) || !Boolean(opponent)) {
    return <p>CARREGANDO...</p>;
  }

  if (errorLoadingMatchData) {
    return (
      <>
        <strong>Vixe</strong>
        <button>Tentar novamente</button>
      </>
    );
  }

  return (
    <>
      <div className="glow flex items-center justify-center">
        <h1 className="xl:text-8xl lg:text-7xl md:text-5xl sm:text-2xl text-center self-center">
          POOL SCOREBOARD
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-center">
        {player ? (
          <div>
            <Card
              player={player}
              playerPoints={playerPoints!}
              onClickFunction={changePlayerPoints}
            ></Card>
            <Select
              value={player?.name}
              options={leftList.map((player, index) => {
                return { value: player, label: player.name };
              })}
              styles={{
                option: (provided, state) => ({
                  ...provided,
                  color: "rgb(17 24 39)",
                  backgroundColor: "rgb(249 250 251)",
                  bordercolor: "rgb(209 213 219)",
                }),
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(selectedOption) => {
                changePlayer(selectedOption?.value);
              }}
            ></Select>
          </div>
        ) : null}
        <img src={vs} style={{ alignSelf: "center", maxHeight: "250px" }}></img>
        {opponent ? (
          <div>
            <Card
              player={opponent}
              playerPoints={opponentPoints!}
              onClickFunction={changeOpponentPoints}
            ></Card>
            <Select
              name="players"
              id="players"
              value={opponent?.name}
              options={rightList.map((player, index) => {
                return { value: player, label: player.name };
              })}
              styles={{
                option: (provided, state) => ({
                  ...provided,
                  color: "rgb(17 24 39)",
                  backgroundColor: "rgb(249 250 251)",
                  bordercolor: "rgb(209 213 219)",
                }),
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(selectedOption) => {
                changeOpponent(selectedOption.value);
              }}
            ></Select>
          </div>
        ) : null}
      </div>
    </>
  );
}
