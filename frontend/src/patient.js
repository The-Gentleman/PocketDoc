class Patient {
    constructor(patient, patientAttributes){
        this.id = patient.id
        this.name = patientAttributes.name
        this.diagnosis = patientAttributes.diagnosis
        Patient.all.push(this)
    }
}
Patient.all = []
