export const addEducationID = (currentEducation, currentEducationToAdd) => {
   return [...currentEducation, { ...currentEducationToAdd, id: currentEducation.length }];
  };
  