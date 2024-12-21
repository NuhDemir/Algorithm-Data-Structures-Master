import java.util.Arrays;
import java.util.List;

public class ArrayToListExample {
    public static void main(String[] args) {
        // Bir dizi (array) tanımlayalım
        String[] namesArray = {"Alice", "Bob", "Charlie", "David"};

        // Arrays.asList() metodunu kullanarak diziyi listeye dönüştürelim
        List<String> namesList = Arrays.asList(namesArray);

        // Listeyi ekrana yazdıralım
        System.out.println("Initial List: " + namesList);

        // Liste üzerinde değişiklik yapalım
        namesList.set(1, "Robert");  // Bob yerine Robert koyuyoruz

        // Listeyi tekrar yazdıralım
        System.out.println("Modified List: " + namesList);

        // Diziyi kontrol edelim; değişikliklerin diziye yansıdığını görebiliriz
        System.out.println("Array after modification: " + Arrays.toString(namesArray));
    }
}
