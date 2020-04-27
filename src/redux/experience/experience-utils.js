export const addExperienceID = (currentExperience, currentExperienceToAdd) => {
    return [...currentExperience, { ...currentExperienceToAdd, id: currentExperience.length }];
   };
   