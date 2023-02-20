package workingWithAbstraction.jediGalaxy;

public class Field {
    private int[][] starsFiled;

    public Field(int rows, int cols) {
        this.starsFiled = new int[rows][cols];
        fillInGalaxy(rows, cols, starsFiled);
    }

    private void fillInGalaxy(int rows, int cols, int[][] galaxy) {
        int value = 0;
        for (int row = 0; row < rows; row++) {
            for (int col = 0; col < cols; col++) {
                galaxy[row][col] = value++;
            }
        }
    }

    public boolean isInBounds(int row, int col) {
        return row >= 0 && col >= 0 && row < starsFiled.length && col < starsFiled[row].length;
    }

    public int getValue(int row, int col) {
        return this.starsFiled[row][col];
    }
    public void setValue(int row, int col, int newValue) {
        this.starsFiled[row][col] = newValue;
    }

    public int getColLength(){
        return starsFiled[1].length;
    }
}
