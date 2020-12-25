class Api::V1::PatientsController < ApplicationController
    
    def index
        patients = Patient.all 
        render json: patients 
    end 
end
