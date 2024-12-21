package hashcode;

import java.util.Arrays;

public class hashCodeExample {

    public static void main(String[] args) {
        long[] array1 = {10L,20L,30L,40L};
        long[] array2 = {30L,40L,50L,60L};
        long[] array3 = {40L,50L,60L,70L,80L,90l};

//calculate hashcode

        int hash1 = Arrays.hashCode(array1);
        int hash2 = Arrays.hashCode(array2);
        int hash3 = Arrays.hashCode(array3);

        System.out.println("Hash code of array1: "+ hash1);
        System.out.println("Hash code of array2: "+ hash1);
        System.out.println("Hash code of array3: "+ hash1);


        System.out.println("Are array1 and array2 equal? : "+ (hash1 ==hash2));
        System.out.println("Are array 2 and array3 equals? : "+ (hash2==hash3));




    }

}
