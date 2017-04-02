public class Schachbrett {
  public static void main (String[] args) {
    for (int i=1; i <= 8; i++) {
      for (int j=i; j <= 8+i-1; j++)
        if (j < 10 && j != i)
          System.out.print(" " + j + " ");
        else
          System.out.print(j + " ");
      System.out.println();
    }
  }
}