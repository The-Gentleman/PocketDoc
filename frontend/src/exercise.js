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
    // 2 of 3
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
      document.querySelector("#create-exercise-form").addEventListener("submit", (e) => exerciseFormHandler(e));
    }





}
Exercise.all = [];
