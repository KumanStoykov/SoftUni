function constructionCrew(inputObj) {



  if(inputObj['dizziness'] === true) {
      inputObj['levelOfHydrated'] = (inputObj['weight'] / 10) * inputObj['experience'];
      inputObj['dizziness'] = false;
      
      return inputObj

  } else {
      return inputObj;
  }
 
}

console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }));