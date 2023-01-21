package streamsFilesAndDirectories;

import java.io.*;
import java.util.Comparator;
import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;

public class WordCount {

    public static void main(String[] args) throws IOException {

        BufferedReader words = new BufferedReader(new FileReader("resources/words.txt"));
        BufferedReader text = new BufferedReader(new FileReader("resources/text.txt"));

        PrintWriter pw = new PrintWriter(new FileWriter("resources/result.txt"));

        String[] wordsSplit = words.readLine().split("\\s+");
        String[] textSplit = text.readLine().split("\\s+");

        Map<String, Integer> wordCounter = new HashMap<>();

        for (String w : wordsSplit) {
            wordCounter.putIfAbsent(w, 0);
            for (String textWord : textSplit) {
                if(w.equals(textWord)) {
                    wordCounter.put(w, wordCounter.get(w) + 1);
                }
            }
        }

        wordCounter.entrySet().stream().sorted(Map.Entry.comparingByValue(Comparator.reverseOrder())).forEach(e -> pw.println(e.getKey() + " - " + e.getValue()));

        pw.close();
        words.close();
        text.close();
    }
}
