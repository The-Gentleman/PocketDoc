document.addEventListener('DOMContentLoaded', () => {
    getPatient()
})

function getPatient(){
    const patientEndPoint = 'http://localhost:3000/api/v1/patients'
    // 1 of 3
    fetch(patientEndPoint)
        .then(response => response.json())
        .then(patient => {
                const patientInfo = `
                <div id="patient-container">
                <h2>Patient Name: ${patient.data[0].attributes.name}</h2>
                <h3>Patient Diagnosis: ${patient.data[0].attributes.diagnosis}</h3>
                <button id="exercise-button"type="submit" class="btn btn-secondary">Assign an Exercise</button>
                </div>
                `
        document.querySelector('#patient-container').innerHTML += patientInfo
        document.getElementById("exercise-button").addEventListener("click", exerciseForm);
        })
}

function exerciseForm(){
    const exerciseForm = `
    <br>
      <label>Exercise Name:</label>
      <input id='input-title' type="text" name="title" value=""
      placeholder="Exercise name" class="input-text" required>
      <br><br>
      <label>Number of Reps:</label>
      <input type="number" id="reps" name="reps" min="1" max="50"
      placeholder="reps" class="input-number" required>
      <br><br>
      <input id="submit" type="submit" name="submit" value="Create Exercise" class="submit">
      <br><br>
    </form>
  `
  document.querySelector('#exercise-form-container').innerHTML += exerciseForm
}

function exerciseFormHandler(event){
    const exerciseName =  document.querySelector("#input-title").value;
    const numberOfRepsString = document.querySelector("#reps").value;
    const numberOfReps = parseInt(numberOfRepsString);
    exerciseFetch(exerciseName, numberOfReps, patientValue);
}




