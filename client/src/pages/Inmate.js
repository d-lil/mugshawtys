import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_INMATE } from '../utils/queries';

const SingleInmate = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  // const { inmateId } = useParams();
  const inmateId = "4";
  const { loading, data } = useQuery(QUERY_SINGLE_INMATE, {
    variables: { inmateId: inmateId },
  });

  const inmate = data?.inmate || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  // Once the data is loaded, display the inmate's information
  return (
    <div className="my-3">
      <h3 className="card-header bg-dark text-light p-2 m-0">
      <img src = {inmate.inmateImage} className="rounded-circle mb-3" alt="inmate image" width = "150" height = "150" />
        {inmate.inmateName}
      </h3>
      <p>{inmate.inmateAge} - {inmate.inmateGender}</p>
      <blockquote
        className="p-4"
        style={{
          fontSize: '1.5rem',
          fontStyle: 'italic',
          border: '2px dotted #1a1a1a',
          lineHeight: '1.5',
        }}
      >
        {inmate.inmateAbout}
      </blockquote>
      
    </div>
  );
};

export default SingleInmate;