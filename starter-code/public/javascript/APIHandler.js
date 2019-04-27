class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  renderPerson(name, occupation, cartoon, weapon) {
  
    var divName = document.createElement('div');
    divName.className = 'name';
    divName.innerHTML = name;
    var divOccupation = document.createElement('div');
    divOccupation.className = 'occupation';
    divOccupation.innerHTML = occupation;
    var divCartoon = document.createElement('div');
    divCartoon.className = 'cartoon';
    cartoon ? divCartoon.innerHTML = 'Sim!' : divCartoon.innerHTML = 'Não!'
    var divWeapon = document.createElement('div');
    divWeapon.className = 'weapon';
    divWeapon.innerHTML = weapon;
  
    var divCharacterInfo = document.createElement('div');
    divCharacterInfo.className = 'character-info';
    divCharacterInfo.appendChild(divName);
    divCharacterInfo.appendChild(divOccupation);
    divCharacterInfo.appendChild(divCartoon);
    divCharacterInfo.appendChild(divWeapon);
  
    var divCharactersContainer = document.querySelector('.characters-container');
    divCharactersContainer.appendChild(divCharacterInfo);
  }

  getFullList(person) {
    var divCharactersContainer = document.querySelector('.characters-container');
    divCharactersContainer.innerHTML = '';

    person.forEach((item) => {
      let {name,occupation,weapon,cartoon} = item;
      this.renderPerson(name,occupation,weapon,cartoon);
    })
  }

  getOneRegister(person) {
    var divCharactersContainer = document.querySelector('.characters-container');
    divCharactersContainer.innerHTML = '';

    console.log(person);
    let {name,occupation,weapon,cartoon} = person;
    this.renderPerson(name,occupation,weapon,cartoon);
  }

  createOneRegister() {
    console.log('criou')
  }

  updateOneRegister() {
    console.log('updatou')
  }

  deleteOneRegister() {
    console.log('deletou')
  }
}