package exams._10_02_2023.rabbits;


import java.util.List;

public class Main {

    public static void main(String[] args) {

        //Initialize the repository (Cage)
        Cage cage = new Cage("Wildness", 20);
        //Initialize entity
        Rabbit rabbit = new Rabbit("Fluffy", "Blanc de Hotot");
        //Print Rabbit
        System.out.println(rabbit); // Rabbit (Blanc de Hotot): Fluffy

        //Add Rabbit
        cage.add(rabbit);
        System.out.println(cage.count()); //1
        //Remove Rabbit
        cage.removeRabbit("Rabbit Name"); //false

        Rabbit secondRabbit = new Rabbit("Bunny", "Brazilian");
        Rabbit thirdRabbit = new Rabbit("Jumpy", "Cashmere Lop");
        Rabbit fourthRabbit = new Rabbit("Puffy", "Cashmere Lop");
        Rabbit fifthRabbit = new Rabbit("Marlin", "Brazilian");

        //Add Rabbits
        cage.add(secondRabbit);
        cage.add(thirdRabbit);
        cage.add(fourthRabbit);
        cage.add(fifthRabbit);

        //Sell Rabbit by name
        System.out.println(cage.sellRabbit("Bunny")); //Rabbit (Brazilian): Bunny
        //Sell Rabbit by species
        List<Rabbit> soldSpecies = cage.sellRabbitBySpecies(("Cashmere Lop"));

        soldSpecies.forEach(f -> {
            System.out.println(f.getName());

        });
        //Jumpy
        //Puffy

        System.out.println(cage.report());
        //Rabbits available at Wildness:
        //Rabbit (Blanc de Hotot): Fluffy
        //Rabbit (Brazilian): Marlin


    }
}
