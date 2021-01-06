class Patient {
    constructor(patient, patientAttributes){
        this.id = patient.id
        this.name = patientAttributes.name
        this.diagnosis = patientAttributes.diagnosis
        Patient.all.push(this)
    }    

    static getPatient(){
        const patientEndPoint = 'http://localhost:3000/api/v1/patients'
        // 1 of 3
        fetch(patientEndPoint)
            .then(response => response.json())
            .then(patient => {
                const patientAttributes = patient.data
                patientAttributes.forEach(patient => {            
                    const newPatient = new Patient(patient, patient.attributes)
                    const patientInfo = `
                    <div id="patient-container">
                    <input type="hidden" id="patient-id" name="patient-id" value="${patient.id}">
                    <h2>Patient Name: ${patient.attributes.name}</h2>
                    <h3>Patient Diagnosis: ${patient.attributes.diagnosis}</h3>
                    <div class="exercise-button-container">
                    <button id="exercise-button"type="submit" class="btn btn-secondary">Assign an Exercise</button>
                    </div>
                    </div>
                    `
                    document.querySelector('#patient-container').innerHTML += patientInfo;
                    document.getElementById("exercise-button").addEventListener("click", Exercise.exerciseForm);
            
        })
            })
        }
        
    
}
Patient.all = []
