
document.addEventListener('DOMContentLoaded', () => {
    getPatients();
    exerciseButtons();
})

function getPatients(){
    const patientEndPoint = 'http://localhost:3000/api/v1/patients'
    // 1 of 3
    fetch(patientEndPoint)
        .then(response => response.json())
        .then(patients => {
             patients.data.forEach(patient => {
                const patientInfo = `
                <h2>Patient Name: ${patient.attributes.name}</h2>
                <h3>Patient Diagnosis: ${patient.attributes.diagnosis}</h3>
                <button id="exercise-button"type="submit" class="btn btn-secondary">Assign an Exercise</button>
                <br><br>
                `
        document.querySelector('#patient-container').innerHTML += patientInfo;

            })
        })
}
// all the assign exercise buttons ---> document.querySelectorAll("#exercise-button")
function exerciseButtons(){
   buttons = document.querySelectorAll("#exercise-button")
   buttons.forEach(button => {
       button.addEventListener("click", exerciseForm )
   })
   
}

function exerciseForm(){
    debugger
}

