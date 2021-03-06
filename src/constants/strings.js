// ES6 module syntax
import LocalizedStrings from 'react-native-localization'

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

export let strings = new LocalizedStrings({
  en: {
    authScreenStrring1: 'Cybemed 360',
    authScreenStrring2: 'Check in',
    authScreenStrring3: ' If you are critically ill DO NOT',
    authScreenStrring4: ' continue, contact medical staff',
    authScreenStrring5: ' The easiest and quickest way to',
    authScreenStrring6: ' check in is with mobile BANK ID. If',
    authScreenStrring7: 'you have it, use it!',
    authScreenStrring8: ' Bank ID this phone',
    authScreenStrring9: 'MANUAL ID CHECK',
    qrAuthScreenString1: 'Please use your BANK ID on your',
    qrAuthScreenString2: 'mobile phone and scan this QR code',
    centuryScreenString1: 'Your ID will be verified by',
    centuryScreenString2: 'healthcare staff',
    centuryScreenString3: 'In which millennium are you born ?',
    personalNumberScreenString1: 'Please specify your social security number',
    homeScreenString1: ' Please choose your medical problem in the lsit below',
    logout: 'log out',
    logoutModalString1: ' Do you want to logout ?',
    yes: 'Yes',
    no: 'No',
    languageModalString1: 'Please select any language',

    submit: 'Submit',
    settings: 'Settings',
    settingsScreenString1: 'Auto switch questions',
    settingsScreenString2: 'Set Time Limit (sec)',
    ok: 'Ok',
    cancel: 'Cancel',
    noResultsFound: 'No result found',
    selectedCountry: 'Selected Country',
    back: 'Back',
    home: 'Home',
    next: 'Next',
    finalScreenString1: 'Do you want to answer another',
    finalScreenString2: 'medical chat ?',
    finalScreenString3: 'No, I am done ',
    notification: 'Notification',
    dataNotFound: 'Data not found!',
    personalNumber: 'Personal number',
    personalNumberString: 'Please enter correct Personal Number',
    noInternet: 'No Internet',
    noInternetString: 'Please check your Internet Connection',
    inputPlaceholder: 'Enter your value here..',
    about: 'About',
    lowBattery: 'Battery low.Please connect to power socket.',
    selectDate: 'Please select date'
  },
  sv: {
    authScreenStrring1: 'Cybemed 360',
    authScreenStrring2: 'Checka in ',
    authScreenStrring3: 'Om du är svårt sjuk FORTSÄTT INTE!',
    authScreenStrring4: 'Kontakta personal',
    authScreenStrring5: 'Det snabbaste och enklaste sättet att ',
    authScreenStrring6: 'logga in är med BankID',
    authScreenStrring7: 'Om du har det, använd det!',
    authScreenStrring8: 'Mobilt BankID',
    authScreenStrring9: 'Manuell inloggning utan BankID',
    qrAuthScreenString1: 'Var vänlig använd BankID på din ',
    qrAuthScreenString2: 'mobiltelefon och scanna denna QR kod',
    centuryScreenString1: 'Din identitet kommer att kontrolleras',
    centuryScreenString2: 'av personalen',
    centuryScreenString3: 'Under vilket århundrade är du född?',
    personalNumberScreenString1: 'Vänligen ange ditt personnummer',
    homeScreenString1:
      'Vänligen välj dina medicinska problem i listan nedanför',
    logout: 'Logga ut',
    logoutModalString1: 'Vill du logga ut?',
    yes: 'Ja',
    no: 'Nej',
    languageModalString1: 'Vänligen välj språk',
    submit: 'Skicka',
    settings: 'Inställningar',
    settingsScreenString1: 'Automatiskt framförflyttning mellan frågor',
    settingsScreenString2: 'Ställ tid',
    ok: 'OK',
    cancel: 'Avbryt',
    noResultsFound: 'Inget resultat funnet',
    selectedCountry: 'Välj land',
    back: 'Bakåt',
    home: 'Startsida',
    next: 'Nästa',
    finalScreenString1: 'Vill de svara på fler ',
    finalScreenString2: ' medicinska frågor?',
    finalScreenString3: 'Nej, jag är klar',
    notification: 'Meddelande',
    dataNotFound: 'Inget data funnet!',
    personalNumber: 'Personnummer',
    personalNumberString: 'Vänligen ange korrekt personnummer',
    noInternet: 'Ingen internetanslutning',
    noInternetString: 'Vänligen kontrollera internetanslutningen',
    inputPlaceholder: 'Skriv ditt svar här',
    about: 'Om',
    lowBattery: 'Batteriet är lågt. Anslut till eluttaget.',
    selectDate: 'Vänligen välj datum'
  }
})
