import React, { useState, useMemo, useRef, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./Card.css";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USERS, QUERY_ME } from "../utils/queries";
import { SAVE_INMATE } from "../utils/mutations";
import {
  saveInmateLs,
  removeInmateId,
  getSavedInmateIds,
} from "../utils/localStorage";
import Auth from "../utils/auth";


const Card = (newDb) => {

  const db = newDb.data;
  console.log(db);
 
  const [saveInmate] = useMutation(SAVE_INMATE);

  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
 

    // used for outOfFrame closure
    const currentIndexRef = useRef(currentIndex);

    const childRefs = useMemo(
      () =>
        Array(db.length)
          .fill(0)
          .map((i) => React.createRef()),
      []
    );

    const updateCurrentIndex = (val) => {
      setCurrentIndex(val);
      currentIndexRef.current = val;
    };

    const canGoBack = currentIndex < db.length - 1;

    const canSwipe = currentIndex >= 0;
  

  // set last direction and decrease current index
  const swiped = async (direction, character, index) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
      return false;
    }
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
    try {
      const storedInmate = JSON.parse(localStorage.getItem("saved_inmates"));

      console.log(character.inmateId);

      if (direction === "right") {
        if (storedInmate === null) {
          const { data } = await saveInmate({
            variables: { inmateInfo: { ...character } },
          });
          saveInmateLs({
            variables: { inmateInfo: { ...character } },
          });
        } else if (
          storedInmate.variables.inmateInfo.inmateId !== character.inmateId
        ) {
          const { data } = saveInmate({
            variables: { inmateInfo: { ...character } },
          }).then((data) => {
        
            saveInmateLs({
              variables: { inmateInfo: { ...character } },
            });
          });
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  const outOfFrame = (username, idx) => {
    console.log(
      `${username} (${idx}) left the screen!`,
      currentIndexRef.current
    );
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir, character) => {
    console.log("hi");
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir);
      const test = await dir;
    }
    // Swipe the card!
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="cardDiv">
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <div className="cardContainer">
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={character.inmateId}
            onSwipe={(dir) => swiped(dir, character, index)}
            onCardLeftScreen={() => outOfFrame(character.inmateName, index)}
          >
            <div
              style={{ backgroundImage: "url(" + character.inmateImage + ")" }}
              className="card"
            >
              <h4 className="cardName">
                <b>{character.inmateName}</b> - {character.inmateAge}{" "}
              </h4>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          ✖
        </button>

        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("right")}
        >
          🖤
        </button>
      </div>
      <div className="backButton">
      <button
          style={{ backgroundColor: !canGoBack && "#c3c4d3" }}
          onClick={() => goBack()}
        >
          ↪
        </button>
      </div>
      {lastDirection ? (
        <h6 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h6>
      ) : (
        <h6 className="infoText">You can only undo once you have swiped!</h6>
      )}
    </div>
  );
}

export default Card;
