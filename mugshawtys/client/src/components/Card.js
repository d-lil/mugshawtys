import React, { useState, useMemo, useRef } from 'react'
import TinderCard from 'react-tinder-card'
import './Card.css'

const db = [
  {
    name: 'Saoirse',
    url: 'https://www.mindfood.com/wp-content/uploads/2018/10/Saoirse-Ronan-M.jpeg'
  },
  {
    name: 'Brendan',
    url: 'https://imengine.public.prod.dur.navigacloud.com/?uuid=A207CDAC-187A-4AD4-B9FA-AC9E233E43AB&function=original&type=preview'
  },
  {
    name: 'Lujan',
    url: 'https://pbs.twimg.com/ext_tw_video_thumb/1569885466433929218/pu/img/SZUskyRF83Km_50l.jpg'
  },
  {
    name: 'Pitt',
    url: 'https://i.insider.com/536a4500ecad042454b1a77a?width=1018&format=jpeg'
  }
]

function Card () {
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

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
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
      <h1>Babes Behind Bars</h1>
      <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons'>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}>Undo swipe!</button>
        <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
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