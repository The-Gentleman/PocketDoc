ted = Patient.create(name: "Ted", diagnosis: "sprained neck")

Exercise.create(name: "Push ups", reps: 5, patient_id: ted.id)
Exercise.create(name: "Pull ups", reps: 10, patient_id: ted.id)
Exercise.create(name: "Rows", reps: 15, patient_id: ted.id)
