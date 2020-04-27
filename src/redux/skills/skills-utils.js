export const addSkillsID = (currentSkills, currentSkillsToAdd) => {
    return [...currentSkills, { ...currentSkillsToAdd, id: currentSkills.length }];
   };
   