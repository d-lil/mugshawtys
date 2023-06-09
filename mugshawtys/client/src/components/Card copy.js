{inmateLoading &&
  <div>Loading...</div>}

  {inmateData!=undefined && 
    
  inmateData.users.map(
    (character, index) =>
      ({inmateId: character._id,
      inmateName: character.username,
      inmateImage: character.image,
      inmateAge: character.age,
      inmateGender: character.gender,
      inmateAbout: character.about
    }) &&
      (character.inmateGender == preferences ||
        preferences == "both") && (
        <TinderCard className="swipe" key={character.inmateId}>
          <div
            style={{
              backgroundImage: "url(" + character.inmateImage + ")",
            }}
            className="card"
          >
            <h3 className="cardName">
              <b>{character.inmateName}</b> - {character.inmateAge}{" "}
            </h3>
          </div>
        </TinderCard>
      )
  
)}