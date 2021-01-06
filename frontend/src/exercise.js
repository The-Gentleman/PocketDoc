class Exercise {

    constructor(exercise, exerciseAttributes){
        this.id = exercise.id
        this.name = exerciseAttributes.name
        this.reps = exerciseAttributes.reps
        this.patient_id = exerciseAttributes.patient_id
        Exercise.all.push(this)
    }    

    static viewCurrentExercises(){
    const exerciseEndpoint = 'http://localhost:3000/api/v1/exercises';
    fetch(exerciseEndpoint)
        .then(response => response.json())
        .then(exercises => {
            const exercisesData = exercises.data
            exercisesData.forEach(exercise => {
                const exerciseInfo = `
                <br>
                <label>Exercise Name: ${exercise.attributes.name}</label>
                <br>
                <label>Suggested Reps: ${exercise.attributes.reps}</label>
                <br><br>
                `
                document.querySelector("#view-exercise-container").innerHTML += exerciseInfo;
            })
        })

    }

    static exerciseForm(){
        const exerciseForm = `
            <br>
            <form id="create-exercise-form">
              <label>Patient Name:</label>
              <select id="exercises" name="exercises">
                <option value="1">Ted</option>
              </select>
              <br><br>
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
      document.querySelector('#exercise-form-container').innerHTML += exerciseForm;
      document.querySelector("#create-exercise-form").addEventListener("submit", (e) => Exercise.exerciseFormHandler(e));
    }

    static exerciseFormHandler(e){
            e.preventDefault(e);
            const patientValueString = document.querySelector("#exercises").value
            const patientValue = parseInt(patientValueString);
            const exerciseName =  document.querySelector("#input-title").value;
            const numberOfRepsString = document.querySelector("#reps").value;
            const numberOfReps = parseInt(numberOfRepsString);
            Exercise.exerciseFetch(exerciseName, numberOfReps, patientValue);
    }

    static exerciseFetch(name, reps, patient_id){
        const exerciseEndpoint = 'http://localhost:3000/api/v1/exercises'
        const bodyData = {name, reps, patient_id}
        fetch(exerciseEndpoint, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(bodyData)
        })
            .then(response => response.json())
            .then(exercises => {
                const exerciseAttributes = exercises.data.attributes;
                const exercisesData = exercises.data 

                let newExercise = new Exercise(exercises.data, exercises.data.attributes)
                const exerciseMarkup = `
                    <input type="hidden" id="exercisesID" name="exercisesID" value="${exercises.data.id}">
                    <label>Exercise Name: ${exerciseAttributes.name}</label>
                    <br><br>
                    <label>Number of Reps: ${exerciseAttributes.reps}</label>
                    <br><br>
                </div>
                `
                document.querySelector("#exercise-data-container").innerHTML += exerciseMarkup;

            })
    }   
}
Exercise.all = [];
