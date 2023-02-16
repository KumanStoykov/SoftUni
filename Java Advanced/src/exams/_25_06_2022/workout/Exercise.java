package exams._25_06_2022.workout;

public class Exercise {
    private String name;
    private String muscle;
    private int burnedCalories;

    public Exercise(String name, String muscle, int burnedCalories) {
        setName(name);
        setMuscle(muscle);
        setBurnedCalories(burnedCalories);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMuscle() {
        return muscle;
    }

    public void setMuscle(String muscle) {
        this.muscle = muscle;
    }

    public int getBurnedCalories() {
        return burnedCalories;
    }

    public void setBurnedCalories(int burnedCalories) {
        this.burnedCalories = burnedCalories;
    }

    @Override
    public String toString() {
        return String.format("Exercise: %s, %s, %d", getName(), getMuscle(), getBurnedCalories());
    }
}
