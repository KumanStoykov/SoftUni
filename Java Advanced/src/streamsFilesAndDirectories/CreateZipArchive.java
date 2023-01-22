package streamsFilesAndDirectories;

import java.io.FileOutputStream;
import java.io.IOException;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

public class CreateZipArchive {

    public static void main(String[] args) throws IOException {

        ZipOutputStream zipOutput = new ZipOutputStream(new FileOutputStream("resources/files.zip"));

        String[] files = {"resources/inputOne.txt", "resources/inputTwo.txt", "resources/result.txt"};

        for (String file : files) {
            zipOutput.putNextEntry(new ZipEntry(file));
        }

        byte[] bytes = new byte[1024];

        zipOutput.write(bytes);

        zipOutput.close();
    }
}
