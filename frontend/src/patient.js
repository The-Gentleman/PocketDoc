class Patient {
    constructor(patient, patientAttributes){
        this.id = patient.id
        this.name = patientAttributes.name
        this.diagnosis = patientAttributes.diagnosis
        Patient.all.push(this)
    }

    getPatient(){
        const patientEndPoint = 'http://localhost:3000/api/v1/patients'
        // 1 of 3
        fetch(patientEndPoint)
            .then(response => response.json())
            .then(patient => {
                const patientAttributes = patient.data
                patientAttributes.forEach(patient => {            
                    const newPatient = new Patient(patient, patient.attributes)
                    return `
                    <div id="patient-container">
                    <input type="hidden" id="patient-id" name="patient-id" value="${this.id}">
                    <h2>Patient Name: ${this.name}</h2>
                    <h3>Patient Diagnosis: ${this.diagnosis}</h3>
                    <div class="exercise-button-container">
                    <button id="exercise-button"type="submit" class="btn btn-secondary">Assign an Exercise</button>
                    </div>
                    </div>
                    `
                    document.getElementById("exercise-button").addEventListener("click", exerciseForm);
            
        })
            })
        }
    

}
Patient.all = []
