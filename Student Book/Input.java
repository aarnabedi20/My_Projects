import java.util.Scanner;

public class Input{ //Created a Scanner class which will be used throughout the application
    Scanner in;
    
public Input() {
    in = new Scanner(System.in); //Defining the Scanner Class
}
public String getValues( String prompt ) {
    System.out.print( prompt + " : " ); //Ask for the input
    String result = in.nextLine(); //Put the value into result
    return result; //Return the result
   }
}