// Check if the inmate data is loading
{inmateLoading &&
  <div>Loading...</div>}

{inmateData!=undefined && 

// Map through the array of users in the inmate data
inmateData.users.map(
  (character, index) =>
    // Create an object for each inmate with specific properties
    ({inmateId: character._id,
    inmateName: character.username,
    inmateImage: character.image,
    inmateAge: character.age,
    inmateGender: character.gender,
    inmateAbout: character.about
  }) &&
    // Check if the inmate's gender matches the preferences
    (character.inmateGender == preferences ||
      preferences == "both") && (

      // Render a TinderCard component for each inmate that matches the preferences
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
