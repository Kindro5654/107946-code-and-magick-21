'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var WIZARD_COAT = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var RANDOM_NAME = WIZARD_NAMES[Math.floor(WIZARD_NAMES.length * Math.random())] + WIZARD_SURNAMES[Math.floor(WIZARD_SURNAMES.length * Math.random())];
var RANDOM_COAT = WIZARD_COAT[Math.floor(WIZARD_COAT.length * Math.random())];
var RANDOM_EYES = WIZARD_EYES[Math.floor(WIZARD_EYES.length * Math.random())];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizards = [
  {
    name: RANDOM_NAME,
    coatColor: RANDOM_COAT,
    eyesColor: RANDOM_EYES
  },
  {
    name: RANDOM_NAME,
    coatColor: RANDOM_COAT,
    eyesColor: RANDOM_EYES
  },
  {
    name: RANDOM_NAME,
    coatColor: RANDOM_COAT,
    eyesColor: RANDOM_EYES
  },
  {
    name: RANDOM_NAME,
    coatColor: RANDOM_COAT,
    eyesColor: RANDOM_EYES
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
