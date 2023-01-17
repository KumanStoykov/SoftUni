package setsAndMaps;

import java.util.*;

public class UserLogs {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        TreeMap<String, LinkedHashMap<String, Integer>> users = new TreeMap<>();

        String command = scanner.nextLine();

        while (!command.equals("end")) {
            String[] inputSplit = command.split("[= ]");
            String nickname = inputSplit[5];
            String ip = inputSplit[1];

            users.putIfAbsent(nickname, new LinkedHashMap<>());

            if (users.get(nickname).containsKey(ip)) {
                users.get(nickname).put(ip, users.get(nickname).get(ip) + 1);
            } else {
                users.get(nickname).put(ip, 1);
            }

            command = scanner.nextLine();
        }

        for (Map.Entry<String, LinkedHashMap<String, Integer>> username : users.entrySet()) {
            int counter = 0;
            System.out.println(username.getKey() + ":");
            for (Map.Entry<String, Integer> address : username.getValue().entrySet()) {
                counter++;
                if (counter == username.getValue().size()) {
                    System.out.print(address.getKey() + " => " + address.getValue() + ".");
                } else {
                    System.out.print(address.getKey() + " => " + address.getValue() + ", ");
                }
            }
                System.out.println();
        }
    }
}
