class ExerciseSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :reps, :patient_id
end
