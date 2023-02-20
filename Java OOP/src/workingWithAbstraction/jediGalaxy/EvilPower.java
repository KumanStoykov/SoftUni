package workingWithAbstraction.jediGalaxy;

public class EvilPower {

    public void move(Field field, int rowEvil, int colEvil) {
        while (rowEvil >= 0 && colEvil >= 0) {
            if (field.isInBounds(rowEvil, colEvil)) {
                field.setValue(rowEvil, colEvil, 0);
            }
            rowEvil--;
            colEvil--;
        }
    }
}
