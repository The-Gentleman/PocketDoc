class Api::V1::ExercisesController < ApplicationController

    def index 
        exercises = Exercise.all 
        render json: ExerciseSerializer.new(exercises)
    end 
end