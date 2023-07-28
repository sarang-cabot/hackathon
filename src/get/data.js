import data1 from "../data/5ba60d91-b952-de1b-e35d-eea1ce8ea67c";
import data2 from "../data/6eb9f136-121e-2f36-9115-d450c210dced";
import data3 from "../data/9d996be3-72e0-763b-495c-01d38b80d5db";
import data4 from "../data/80eeeee8-7e7c-fbfc-e245-baeac8a40f3d";
import data5 from "../data/898c1dc8-2c3d-7afa-5e61-eeadba8f7864";
import data6 from "../data/930cd369-bd0e-fc8c-28fc-65b22cac7d60";
import data7 from "../data/0724714f-947b-6cab-ee85-b0de7a9ad3f7";
import data8 from "../data/aeff9fe6-13d5-5391-30df-8a2913a25557";
import data9 from "../data/d82b9cf4-0d48-cdb6-75ff-a62361e3fb78";
import data10 from "../data/ebf0d007-a52f-5364-5c32-2ba094b88f16";
import data11 from "../data/ec865d34-e498-5dec-6108-4aa409bfa55f";

export const getPatientList = () => [
  data1,
  data2,
  data3,
  data4,
  data5,
  data6,
  data7,
  data8,
  data9,
  data10,
  data11,
];

function getPatientData(patient) {
  var dictPatient = {};
  var observation = [];
  var encounter = [];
  var immunization = [];
  var resources = patient.entry;
  resources.forEach((element) => {
    if (element.resource.resourceType == "Patient") {
      element.resource.name.forEach((name) => {
        if (name.use == "official") {
          dictPatient.name = name.given[0];
          dictPatient.id = element.resource.id;
          dictPatient.prefix = name.prefix[0];
        }
      });
      element.resource.address.forEach((address) => {
        dictPatient.city = address.city;
        dictPatient.country = address.country;
        dictPatient.address = address.line[0];
        dictPatient.state = address.state;
        dictPatient.postalCode = address.postalCode;
      });
    }
    if (
      element.resource.resourceType == "Observation" &&
      element.resource.hasOwnProperty("valueQuantity")
    ) {
      var observationDict = {};
      observationDict.type = element.resource.code.text;
      observationDict.status = element.resource.status;
      observationDict.issuedDate = element.resource.issued;
      observationDict.effectiveDateTime = element.resource.effectiveDateTime;
      observationDict.value = element.resource.valueQuantity.value;
      observationDict.unit = element.resource.valueQuantity.unit;
      observation.push(observationDict);
    }
    if (element.resource.resourceType == "Encounter") {
      var encounterDict = {};
      encounterDict.status = element.resource.status;
      encounterDict.startDate = element.resource.start;
      encounterDict.endDate = element.resource.end;
      encounterDict.doctor = element.resource.participant[0].individual.Display;
      encounterDict.type = element.resource.type[0].text;
      encounter.push(encounterDict);
    }
    if (element.resource.resourceType == "Immunization") {
      var immunizationData = {};
      immunizationData.status = element.resource.status;
      immunizationData.vaccineCode = element.resource.vaccineCode.text;
      immunizationData.Date = element.resource.occurrenceDateTime;
      immunization.push(immunizationData);
    }
  });
  dictPatient.observation = observation;
  dictPatient.encounter = encounter;
  dictPatient.immunization = immunization;
  return dictPatient;
}

export function getParsedPatients() {
  return getPatientList().map((item) => getPatientData(item));
}
