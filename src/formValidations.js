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
    if (!formData.shipperName) {
        errors.shipperName = "Shippers Name is required";
    }

    // phone number validation
    if (!formData.shipperMobileNo) {
        errors.shipperMobileNo = "Shippers Mobile Number is required";
    } else if (!phoneNumberRegex.test(formData.shipperMobileNo)) {
        errors.shipperMobileNo = "Invalid Phone Number";
    }

    // email validation
    if (!formData.shipperMail) {
        errors.shipperMail = "Shippers Email is required";
    } else if (!emailRegex.test(formData.shipperMail)) {
        errors.shipperMail = "Shippers Email is invalid";
    }

    if (!formData.shipperAddress) {
        errors.shipperAddress = "Shippers Address is required";
    }
    if (!formData.DateTime) {
        errors.DateTime = "Pick Up Time is required";
    }
    if (!formData.consignName) {
        errors.consignName = "Receiver Name is required";
    }

    // phone number validation
    if (!formData.consignMobileNo1) {
        errors.consignMobileNo1 = "Receiver Phone Number 1 is required";
    } else if (!phoneNumberRegex.test(formData.consignMobileNo1)) {
        errors.consignMobileNo1 = "Invalid Phone Number";
    }

    // phone number validation
    if (!formData.consignMobileNo2) {
        errors.consignMobileNo2 = "Receiver Phone Number 2 is required";
    } else if (!phoneNumberRegex.test(formData.consignMobileNo2)) {
        errors.consignMobileNo2 = "Invalid Phone Number";
    }

    if (!formData.addressLine) {
        errors.addressLine = "Receiver Address is required";
    }
    if (!formData.district) {
        errors.district = "District/Province/Region is required";
    }

    // zip code validation
    // if (!numberRegex.test(formData.receiverZipCode)) {
    //     errors.receiverZipCode = "Invalid Zip Code";
    // }

    return errors;
}