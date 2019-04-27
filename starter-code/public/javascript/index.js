const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    axios.get('http://localhost:8000/characters')
      .then((person) => {
        charactersAPI.getFullList(person.data)
      }).catch((error) => {
        console.log(error)
      })
  }

  document.getElementById('fetch-one').onclick = function () {
    var charId = document.querySelector('input[name=character-id]');
    axios.get('http://localhost:8000/characters/' + charId.value)
    .then((person) => {
      charactersAPI.getOneRegister(person.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  document.getElementById('delete-one').onclick = function () {
    var charId = document.querySelector('input[name=character-id]');
    charactersAPI.DeleteOneRegister()
    axios.delete('http://localhost:8000/characters/:id');
  }

  // document.getElementById('edit-character-form').onsubmit = function () {

  //   axios.put('http://localhost:8000/characters/:id');
  // }

  // document.getElementById('new-character-form').onsubmit = function () {

  //   axios.post('http://localhost:8000/characters/');
  // }
});

// btnFetchAll = document.querySelector('#fetch-all');
// btnFetchOne = document.querySelector('#fetch-one');
// btnCreate = document.querySelector('#send-data');
// btnDelete = document.querySelector('#delete-one');
// btnUpdate = document.querySelector('#update-data');

// btnFetchAll.addEventListener('click', charactersAPI.getFullList)
// btnFetchOne.addEventListener('click', charactersAPI.getOneRegister)
// btnCreate.addEventListener('click', charactersAPI.createOneRegister)
// btnDelete.addEventListener('click', charactersAPI.deleteOneRegister)
// btnUpdate.addEventListener('click', charactersAPI.updateOneRegister)
