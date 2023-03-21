var errors = {};
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const numberRegex = /^[0-9]+$/;
const phoneNumberRegex = /^[0-9+ ]+$/;
// const phoneNumberRegex = /^[0-9()+- ]+$/;

export const requestPickUpValidation = (formData) => {
    errors = {};

    if (!formData.qid) {
        errors.senderName = "QID/Bussines ID is required";
    }
    if (!formData.shippersName) {
        errors.shippersName = "Shippers Name is required";
    }

    // phone number validation
    if (!formData.shippersMobileNumber) {
        errors.shippersMobileNumber = "Shippers Mobile Number is required";
    } else if (!phoneNumberRegex.test(formData.shippersMobileNumber)) {
        errors.shippersMobileNumber = "Invalid Phone Number";
    }

    // email validation
    if (!formData.shippersEmail) {
        errors.shippersEmail = "Shippers Email is required";
    } else if (!emailRegex.test(formData.shippersEmail)) {
        errors.shippersEmail = "Shippers Email is invalid";
    }

    if (!formData.shippersAddress) {
        errors.shippersAddress = "Shippers Address is required";
    }
    if (!formData.pickUpTime) {
        errors.pickUpTime = "Pick Up Time is required";
    }
    if (!formData.receiverName) {
        errors.receiverName = "Receiver Name is required";
    }

    // phone number validation
    if (!formData.receiverPhoneNumber1) {
        errors.receiverPhoneNumber1 = "Receiver Phone Number 1 is required";
    } else if (!phoneNumberRegex.test(formData.receiverPhoneNumber1)) {
        errors.receiverPhoneNumber1 = "Invalid Phone Number";
    }

    // phone number validation
    if (!formData.receiverPhoneNumber2) {
        errors.receiverPhoneNumber2 = "Receiver Phone Number 2 is required";
    } else if (!phoneNumberRegex.test(formData.receiverPhoneNumber2)) {
        errors.receiverPhoneNumber2 = "Invalid Phone Number";
    }

    if (!formData.receiverAddress) {
        errors.receiverAddress = "Receiver Address is required";
    }
    if (!formData.receiverDistrict) {
        errors.receiverDistrict = "District/Province/Region is required";
    }

    // zip code validation
    // if (!numberRegex.test(formData.receiverZipCode)) {
    //     errors.receiverZipCode = "Invalid Zip Code";
    // }

    return errors;
}