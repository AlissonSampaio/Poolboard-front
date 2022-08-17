import { useState } from "react";
import { Player } from "../../pages/Home/useHome";
import "./styles.css";

type CardProps = {
  player: Player;
  playerPoints: number;
  onClickFunction: () => void;
};

export default function Card({
  player,
  playerPoints,
  onClickFunction,
}: CardProps) {
  return (
    <>
      <div className="main-container">
        <div className="cards">
          <div className="card">
            <div className="multi-button">
              <button
                className="fa-solid fa-plus"
                onClick={onClickFunction}
              ></button>
            </div>
            <img className="card__image" src={player.url_image} alt="" />
            <div className="card__footer">
              <h2 className="card__title">{player.name}</h2>
              <h3 className="card__points">{playerPoints}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
