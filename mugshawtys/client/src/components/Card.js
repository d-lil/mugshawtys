import React, { useState, useMemo, useRef, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './Card.css'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_USERS, QUERY_ME } from '../utils/queries'
import { SAVE_INMATE } from '../utils/mutations'
import { saveInmateIds, removeInmateId, getSavedInmateIds } from '../utils/localStorage'

const db = [
  {
    username: 'Saoirse',
    image: 'https://www.mindfood.com/wp-content/uploads/2018/10/Saoirse-Ronan-M.jpeg',
    age: '26',
  },
  {
    username: 'Brendan',
    image: 'https://imengine.public.prod.dur.navigacloud.com/?uuid=A207CDAC-187A-4AD4-B9FA-AC9E233E43AB&function=original&type=preview',
    age: '31',
  },
  {
    username: 'Lujan',
    image: 'https://pbs.twimg.com/ext_tw_video_thumb/1569885466433929218/pu/img/SZUskyRF83Km_50l.jpg',
    age: '25',
  },
  {
    username: 'Pitt',
    image: 'https://i.insider.com/536a4500ecad042454b1a77a?width=1018&format=jpeg',
    age: '29',
  }
]
const preferences = "male"
function Card () {
  // const { loading, error, data } = useQuery(QUERY_ME);
  const { loading: inmateLoading, data: inmateData } = useQuery(QUERY_USERS);

  // const preferences = data?.me.preferences;

  const inmateInfo = inmateData && inmateData.users.map((inmate) => ({
    _id: inmate._id,
    inmateName: inmate.username,
    inmateImage: inmate.image,
    inmateAge: inmate.age,
    inmateGender: inmate.gender,  
  }));
  console.log(inmateInfo);
 
  // if (preferences == "male") {
  //   let db = inmateInfo.filter(function (el) {
  //      el.gender == "male"
  //      return db
  //   }) 
  //   console.log(db);
  // } else if (preferences == "female") {
  //   let db = inmateInfo.filter(function (el) {
  //      el.gender == "female"
  //      return db
  //   }) 
  //   console.log(db);
  // } else if (preferences == "both") {
  //   let db = inmateInfo
  //   return db
  // }
  // console.log(db);

  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (username, idx) => {
    console.log(`${username} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className='cardDiv'>
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
      <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.username}
            onSwipe={(dir) => swiped(dir, character.username, index)}
            onCardLeftScreen={() => outOfFrame(character.username, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.image + ')' }}
              className='card'
            >
              <h3 className="cardName"><b>{character.username}</b> - {character.age}  </h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>✖</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>↪</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>🖤</button>
      </div>
      {lastDirection ? (
        <h6 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h6>
      ) : (
        <h6 className='infoText'>
          You can only undo once you have swiped!
        </h6>
      )}
    </div>
  )
}

export default Card