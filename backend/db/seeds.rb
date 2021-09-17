ted = Patient.create(name: "Ted", diagnosis: "sprained neck")
marshal = Patient.create(name: "Marshall", diagnosis: "broken hip")
barney = Patient.create(name: "Barney", diagnosis: "broken hand")
alex = Patient.create(name: "Alex", diagnosis: "sore throat")
zeshan = Patient.create(name: "Zeshan", diagnosis: "overworked and underpaid")

Exercise.create(name: "Push ups", reps: 5, patient_id: ted.id)
Exercise.create(name: "Pull ups", reps: 10, patient_id: ted.id)
Exercise.create(name: "Rows", reps: 15, patient_id: ted.id)
