import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		int a = in.nextInt();
		String str = "";
		
		if (a%4 == 0) {
			for(int i = 0; i < a/4; i++) {
				str = str.concat("long ");
			}
		}
		System.out.println(str+"int");
		
	}
}