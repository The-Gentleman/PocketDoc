class Api::V1::PatientsController < ApplicationController
    
    def index 
        patients = Patient.all 
        render json: PatientSerializer.new(patients)
    end 

    def create
        patient = Patient.new(patient_params)
        if patient.save 
            render json: patient, status: :accepted
        else 
            render json: {errors: syllabus.errors.full_messages}, status: :unprocessible_entity 
            # unprocessible_entity is a 402 error saying that syntax is okay, 
            # but you probably failed some validations
        end 
    end 


    private
    def patient_params
        params.require(:patient).permit(:name, :diagnosis)
    end 
end
