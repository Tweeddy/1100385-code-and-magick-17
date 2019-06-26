'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = document.querySelector('.setup-similar-list');
document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARDS_NUMBER = 4;
var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COLORS_FOR_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLORS_FOR_EYES = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomNumber = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
};

var generateWizard = function (firstName, surname, colorsForCoat, colorsForEyes) {
  var wizardData = {};
  wizardData.name = firstName[getRandomNumber(0, firstName.length - 1)] + ' ' + surname[getRandomNumber(0, surname.length - 1)];
  wizardData.coatColor = colorsForCoat[getRandomNumber(0, colorsForCoat.length - 1)];
  wizardData.eyesColor = colorsForEyes[getRandomNumber(0, colorsForEyes.length - 1)];
  return wizardData;
};

var createWizard = function () {
  var wizardList = [];
  for (var i = 0; i < WIZARDS_NUMBER ; i++) {
    var wizardShape = generateWizard(FIRST_NAME, SURNAME, COLORS_FOR_COAT, COLORS_FOR_EYES);
    wizardList[i] = wizardShape;
  }
  return wizardList;
};

var renderWizard = function () {
  var wizardList = createWizard();
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardList.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardList[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardList[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardList[i].eyesColor;
    fragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(fragment);
};
renderWizard();