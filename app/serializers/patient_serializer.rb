class PatientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :diagnosis
end