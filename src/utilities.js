import mParticle from '@mparticle/web-sdk';

export function logMethod(name, value) {
    console.log(name + " " + value);
    switch (name) {
        case 'change_user_button':
            changeUser(value);
            break;
        case 'fn_button':
            logFirstName(value);
            break;
        case 'ln_button':
            logLastName(value);
            break;
        case 'email_button':
            logEmail(value);
            break;
        case 'gender_button':
            logGender(value);
            break;
        case 'country_button':
            logCountry(value);
            break;
        case 'birthday_button':
            logBirthday(value);
            break;
        case 'home_city_button':
            logHomeCity(value);
            break;
        case 'phone_number_button':
            logPhoneNumber(value);
            break;
        default:
            break;
    }

}
export function logCustomAttribute(name, value) {
  
    mParticle.Identity.getCurrentUser().setUserAttribute(name, value);

}
export function logCustomEvent(name, property) {
    mParticle.logEvent(name);
}
export function logPurchase(productId, currency, price, quantity) {
    // Log Attribute to Braze
    //console.log(productId + " " + currency + " " + price + " " + quantity);

}

function changeUser(value) {
   
    var identityRequest = {
        userIdentities: {
          customerid: value,    
        }
    };
    mParticle.Identity.login(identityRequest);
}

function logFirstName(value) {
   
    mParticle.Identity.getCurrentUser().setUserAttribute("$FirstName",value);


}

function logLastName(value) {
    mParticle.Identity.getCurrentUser().setUserAttribute("$LastName",value);
}

function logEmail(value) {
    var identityRequest = {
        userIdentities: { email: value }
  }
  mParticle.Identity.modify(identityRequest);
}
function logGender(value) {
    mParticle.Identity.getCurrentUser().setUserAttribute("$Gender",value);
}
function logCountry(value) {
    mParticle.Identity.getCurrentUser().setUserAttribute("$Country",value);
}
function logBirthday(value) {
    const age = new Date().getFullYear().toString() - value.substring(0,4);
    mParticle.Identity.getCurrentUser().setUserAttribute("$Age",age);
}
function logHomeCity(value) {
    mParticle.Identity.getCurrentUser().setUserAttribute("$City",value);
}
function logPhoneNumber(value) {
    mParticle.Identity.getCurrentUser().setUserAttribute("$Mobile",value);
}

