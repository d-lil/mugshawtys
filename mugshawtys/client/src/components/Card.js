import React, { useState, useMemo, useRef, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import './Card.css'
import { useQuery, useMutation } from '@apollo/client'
import { QUERY_USERS, QUERY_ME } from '../utils/queries'
import { SAVE_INMATE } from '../utils/mutations'
import { saveInmateLs, removeInmateId, getSavedInmateIds } from '../utils/localStorage'

const db = [
  {
    inmateId: '1',
    inmateName: 'Saoirse',
    inmateImage: 'https://www.mindfood.com/wp-content/uploads/2018/10/Saoirse-Ronan-M.jpeg',
    inmateAge: '26',
  },
  {
    inmateId: '2',
    inmateName: 'Brendan',
    inmateImage: 'https://imengine.public.prod.dur.navigacloud.com/?uuid=A207CDAC-187A-4AD4-B9FA-AC9E233E43AB&function=original&type=preview',
    inmateAge: '31',
  },
  {
    inmateId: '3',
    inmateName: 'Lujan',
    inmateImage: 'https://pbs.twimg.com/ext_tw_video_thumb/1569885466433929218/pu/img/SZUskyRF83Km_50l.jpg',
    inmateAge: '25',
  },
  {
    inmateId: '4',
    inmateName: 'Pitt',
    inmateImage: 'https://i.insider.com/536a4500ecad042454b1a77a?width=1018&format=jpeg',
    inmateAge: '29',
  }
]

function Card () {
  const { loading, data } = useQuery(QUERY_ME);
  const { loading: inmateLoading, data: inmateData } = useQuery(QUERY_USERS);
  
  const preferences = data?.me.preferences;

  // const db = inmateData && inmateData.users.map((inmate) => ({
  //   inmateId: inmate._id,
  //   inmateName: inmate.username,
  //   inmateImage: inmate.image,
  //   inmateAge: inmate.age,
  //   inmateGender: inmate.gender,  
  // }));
  // console.log(db);
  // function filterGender() {
  //   if (preferences == "male") {
  //     let newdb = db.filter(function (el) {
  //       return el.inmateGender == "male"
  //     }) 
    
  //     return newdb;
  //   }
  
  // }
  // console.log(filterGender());

  // } else if (preferences == "female") {
  //   let newdb = db.filter(function (el) {
  //     return el.gender == "female"
       
  //   }) 
  //   console.log(newdb);
  // }
  // } else if (preferences == "both") {
  //   let db = inmateInfo
  //   return 
  // }
  const [savedInmateIds, setSavedInmateIds] = useState(getSavedInmateIds());
  const [saveInmate, { error }] = useMutation(SAVE_INMATE);
  // useEffect(() => {
  //   return () => saveInmateIds(savedInmateIds);
  // });
  console.log(error)
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
  const swiped = (direction, character, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
     try { if (direction === 'right') {

        saveInmateLs({
          variables: { inmateInfo: {...character}},
        });
        console.log({
          variables: { inmateInfo: {...character}},
        }) 
        saveInmate({
          variables: { inmateInfo: {...character}},
        });
      } }
      catch (err) {
        console.error(error);
      } 
      
  }

  const outOfFrame = (username, idx) => {
    console.log(`${username} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()

  }

  const swipe = async (dir, character) => {
    console.log("hi");
    if (canSwipe && currentIndex < db.length) {
      
      await childRefs[currentIndex].current.swipe(dir)
       const test = await dir;
      
      
  
      } 
              // Swipe the card!
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
            key={character.inmateId}
            onSwipe={(dir) => swiped(dir, character, index)}
            onCardLeftScreen={() => outOfFrame(character.inmateName, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.inmateImage + ')' }}
              className='card'
            >
              <h3 className="cardName"><b>{character.inmateName}</b> - {character.inmateAge}  </h3>
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