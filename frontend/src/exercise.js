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
    


    
}
Exercise.all = [];
