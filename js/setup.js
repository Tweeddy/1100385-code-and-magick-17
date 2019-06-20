'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var randomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}
var getData = function ()  {
  var wizardData = {};
  var firstName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surname = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  wizardData.name = firstName[randomInteger(0, firstName.length - 1)] + ' ' + surname[randomInteger(0, surname.length - 1)];
  var colorsForCoat = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  wizardData.coatColor = colorsForCoat[randomInteger(0, colorsForCoat.length -1 )];
  var colorsForEyes = ['black', 'red', 'blue', 'yellow', 'green'];
  wizardData.eyesColor = colorsForEyes[randomInteger(0, colorsForEyes.length -1 )];
  return wizardData;
};
var wizardList = [];
var createWizard = function (wizards) {
  for (var i = 0; i < 4; i++) {
    var wizardShape = getData();
    wizards[i] = wizardShape; 
  };
  return wizards;
};
createWizard(wizardList);

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizardList.length; i++) {
  fragment.appendChild(renderWizard(wizardList[i]));
};
var similarListElement = document.querySelector('.setup-similar-list');
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
