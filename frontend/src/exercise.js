class Exercise {

    constructor(exercise, exerciseAttributes){
        this.id = exercise.id
        this.name = exerciseAttributes.name
        this.reps = exerciseAttributes.reps
        this.patient_id = exerciseAttributes.patient_id
        Exercise.all.push(this)
    }    
}
Exercise.all = [];
