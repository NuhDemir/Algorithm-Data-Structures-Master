package staticArray;

public class staticArrayExample {
    public static void main(String[] args) {
        // Statik dizi tanımlaması: 5 elemanlı bir integer dizisi
        int[] staticArray = new int[5];

        // Diziye veri ekleme
        staticArray[0] = 10;
        staticArray[1] = 20;
        staticArray[2] = 30;
        staticArray[3] = 40;
        staticArray[4] = 50;

        // Dizi elemanlarını yazdırma
        System.out.println("Dizi Elemanları:");
        for (int i = 0; i < staticArray.length; i++) {
            System.out.println("Element at index " + i + ": " + staticArray[i]);
        }

        // Statik dizinin uzunluğunu yazdırma
        System.out.println("Dizinin uzunluğu: " + staticArray.length);
    }
}
