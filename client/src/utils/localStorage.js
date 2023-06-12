export const getSavedInmateIds = () => {
    const savedInmateIds = localStorage.getItem('saved_inmates')
      ? JSON.parse(localStorage.getItem('saved_inmates'))
      : [];
  
    return savedInmateIds;
  };

export const saveInmateLs = (inmateInfo) => {
    console.log(inmateInfo);
    if (inmateInfo) {
      localStorage.setItem('saved_inmates', JSON.stringify(inmateInfo));
    } else {
      localStorage.removeItem('saved_inmates');
    }
  };
  
export const saveInmateIds = (inmateIdArr) => {

    if (inmateIdArr.length) {
      localStorage.setItem('saved_inmates', JSON.stringify(inmateIdArr));
    } else {
      localStorage.removeItem('saved_inmates');
    }
  };
  
export const removeInmateId = (inmateId) => {
    const savedInmateIds = localStorage.getItem('saved_inmates')
      ? JSON.parse(localStorage.getItem('saved_inmates'))
      : null;
  
    if (!savedInmateIds) {
      return false;
    }
  
    const updatedSavedInmateIds = savedInmateIds?.filter((savedInmateId) => savedInmateId !== inmateId);
    localStorage.setItem('saved_inmates', JSON.stringify(updatedSavedInmateIds));
  
    return true;
  };