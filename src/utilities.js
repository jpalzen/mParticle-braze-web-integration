import mParticle from '@mparticle/web-sdk';

export function logMethod(name, value) {
    console.log(name + " " + value);
    switch (name) {
        case 'change_user_button':
            changeUser(value);
            break;
        /*case 'fn_button':
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
            break;*/
        default:
            break;
    }

}
export function logCustomAttribute(name, value) {
    // Log Attribute to Braze
    /*braze.getUser().setCustomUserAttribute(
        name,
        value
    );*/
    mParticle.Identity.getCurrentUser().setUserAttribute(name, value);

}
export function logCustomEvent(name, property) {
    // Log Attribute to Braze
    console.log(name + " " + property);
    //braze.logCustomEvent(name);
    mParticle.logEvent(name);
}
export function logPurchase(productId, currency, price, quantity) {
    // Log Attribute to Braze
    //console.log(productId + " " + currency + " " + price + " " + quantity);

   // braze.logPurchase(productId, price, currency, quantity);
}

function changeUser(value) {
    console.log("ChangeUser to : "+value)
    //braze.changeUser(value);
    var identityRequest = {
        userIdentities: {
          customerid: value,    
        }
    };
    mParticle.Identity.login(identityRequest);
}
/*
function logFirstName(value) {
    braze.getUser().setFirstName(value);

}

function logLastName(value) {
    braze.getUser().setLastName(value);
}

function logEmail(value) {
    braze.getUser().setEmail(value);
}
function logGender(value) {
    braze.getUser().setGender(value);
}
function logCountry(value) {
    braze.getUser().setCountry(value);
}
function logBirthday(value) {
    braze.getUser().setDateOfBirth(value.substring(8), value.substring(5, 7), value.substring(0, 4));
}
function logHomeCity(value) {
    braze.getUser().setHomeCity(value);
}
function logPhoneNumber(value) {
    braze.getUser().setPhoneNumber(value);

}
*/
