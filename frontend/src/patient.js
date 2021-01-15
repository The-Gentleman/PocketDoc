class Patient {
    constructor(patient, patientAttributes){
        this.id = patient.id
        this.name = patientAttributes.name
        this.diagnosis = patientAttributes.diagnosis
        Patient.all.push(this)
    }    

    static getPatient(){
        const patientEndPoint = 'http://localhost:3000/api/v1/patients'
        fetch(patientEndPoint)
        .then(response => response.json())
        .then(patient => {
                const patientAttributes = patient.data
                patientAttributes.sort(function(a,b){
                    const patientA = a.attributes.name
                    const patientB = b.attributes.name
                    if (patientA < patientB){
                        return -1;
                    }
                    if (patientA > patientB){
                        return 1;
                    }
                    return 0;
                })

                patientAttributes.forEach(patient => {   
                    const newPatient = new Patient(patient, patient.attributes)
                    
                    const patientDiagnosis = `
                    <div id="patient-container">
                    <h2>Patient Name: ${patient.attributes.name}</h2>
                    <h3>Patient Diagnosis: ${patient.attributes.diagnosis}</h3>
                    <div class="exercise-button-container">
                    <button id="exercise-button"type="submit" class="btn btn-secondary">Assign an Exercise</button>
                    </div>
                    </div>
                    `
                    
                    document.querySelector('#patient-container').innerHTML += patientDiagnosis;
                    document.getElementById("exercise-button").addEventListener("click", Exercise.exerciseForm);
                    
                })
            })
        }
        
    
}
Patient.all = []
