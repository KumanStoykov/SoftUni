package exams._25_06_2022.workout;

import java.util.ArrayList;
import java.util.List;

public class Workout {
    private String type;
    private int exerciseCount;
    private List<Exercise> exercises;

    public Workout(String type, int exerciseCount) {
        this.type = type;
        this.exerciseCount = exerciseCount;
        exercises = new ArrayList<>();
    }

    public void addExercise(Exercise exercise) {
        if(exerciseCount >= exercises.size() + 1) {
            exercises.add(exercise);
        }
    }
    public boolean removeExercise(String name, String muscle) {
        return exercises.removeIf(e -> e.getName().equals(name) && e.getMuscle().equals(muscle));
    }

    public Exercise getExercise(String name, String muscle) {
        return exercises.stream().filter(e -> e.getName().equals(name) && e.getMuscle().equals(muscle))
                .findFirst()
                .orElse(null);
    }

    public Exercise getMostBurnedCaloriesExercise() {
        Exercise exercise = null;
        int mostBurned = 0;
        for (Exercise e: exercises) {
            if(e.getBurnedCalories() > mostBurned) {
                mostBurned = e.getBurnedCalories();
                exercise = e;
            }
        }

        return exercise;
    }

    public int getExerciseCount() {
        return exercises.size();
    }

    public String getStatistics() {
        StringBuilder sb = new StringBuilder();
        sb.append("Workout type: ").append(type).append(System.lineSeparator());

        exercises.forEach(e -> sb.append(e.toString()).append(System.lineSeparator()));

        return sb.toString();
    }
}
