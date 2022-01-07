'use strict';
//Liskov Substitution Principle

class Person {}

class Member extends Person {
  access() {
    console.log('you have access');
  }
}
class Guest extends Person {
  isGuest = true;
}
class Frontend extends Member {
  canCreateFrontend() {}
}
class Backend extends Member {
  canCreateBackend() {}
}
class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error(
      'you have not an access, please go to where you came from '
    );
  }
}

function openSecretDoor(person) {
  person.access();
}
console.log(openSecretDoor(new Frontend()));
//console.log(openSecretDoor(new PersonFromDifferentCompany()));
