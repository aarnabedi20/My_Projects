import java.util.ArrayList;
import java.io.*;

public class StudentBookFunctions {

    private ArrayList<StudentBookEntry> entries; //Used Array List because they can change their length or size automatically according to the values

    public StudentBookFunctions( ) {
        entries = new ArrayList<StudentBookEntry>();
    }

    //To add the new values into the Array List
    public void add( String s_number, String name, String course_id, String course_name, String house_no, String street_name, String town ,String postcode ) {
		entries.add(new StudentBookEntry(s_number, name, course_id, course_name, house_no, street_name, town, postcode));
    
    }
    public void Write(String file){ //To write the entry from the Array List into the .txt or .bin file
        try {
            FileWriter writer = new FileWriter( file , true); //Used the boolean true to preserve the previous data and Append the new one
            PrintWriter out = new PrintWriter( writer );
            for (int i = 0; i < entries.size(); i++) { //For loop to go through the values in the Array List
            out.println(entries.get(i) + " "); //Print the data into the file
        
        }   out.close(); //Closing the file
    }
        catch ( Exception e ) { //May be thrown by Writer
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
    }

    public void Read(String file ){ //To Read the file and output the data on the screen
        try {
            FileReader reader = new FileReader( file );
            BufferedReader in = new BufferedReader( reader );
            String s;
            while ( (s = in.readLine()) != null ) { //While there are lines with data to read, the loop will run
                System.out.println( new StringBuffer(s)); //While the loop runs, Output the data
        
        }   in.close(); //Closing the file
    }
        catch ( FileNotFoundException e ) { //May be thrown by File Reader
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
        catch ( IOException e ) {  //May be thrown by Read Line
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
    }

    public void SearchCourse(String file, String data){ //To Search the values that contains the substring of the course name
        try {
            FileReader reader = new FileReader( file );
            BufferedReader in = new BufferedReader( reader );
            String s;
            while ( (s = in.readLine()) != null ) { //While there are lines with data to read, the loop will run
                String a[] = s.split(","); //Split the values after the comma and put them into an Array
                String course_Name = a[3]; //The value at position 3 in the array is copied into a variable course_name
                
                course_Name = course_Name.toLowerCase(); //Modify the string and make it lowercase
                course_Name = course_Name.replaceAll("[^a-zA-Z\\s]", "").replaceAll("\\s+", " "); //Modify the string and replace everything accept letters
                course_Name = course_Name.replaceAll(" ",""); //Modify the string and remove the spaces
                
                data = data.toLowerCase(); //Modify the string and make it lowercase
                data = data.replaceAll("[^a-zA-Z\\s]", "").replaceAll("\\s+", " "); //Modify the string and replace everything accept letters
                data = data.replaceAll(" ",""); //Modify the string and remove the spaces
                
                if (course_Name.matches(".*"+data+".*")) { //If the substring matches
                    System.out.println( new StringBuffer(s)); //Output the data if matches
                }
        
        }   in.close(); //Closing the file
    }
        catch ( FileNotFoundException e ) { //May be thrown by File Reader
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
        catch ( IOException e ) {  //May be thrown by Read Line
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
    }

    public void SearchAddress(String file, String data){ //To Search the values that contains the substring of any of the address field
        try {
            FileReader reader = new FileReader( file );
            BufferedReader in = new BufferedReader( reader );
            String s;
            while ( (s = in.readLine()) != null ) { //While there are lines with data to read, the loop will run
                String a[] = s.split(","); //Split the values after the comma and put them into an Array
                String house = a[4]; //The value at position 4 in the array is copied into a variable house
                String street = a[5]; //The value at position 5 in the array is copied into a variable street
                String toWn = a[6]; //The value at position 6 in the array is copied into a variable toWn
                String post = a[7]; //The value at position 7 in the array is copied into a variable post

                house = house.toLowerCase(); //Modify the string and make it lowercase
                house = house.replaceAll("[^a-zA-Z\\s]", "").replaceAll("\\s+", " "); //Modify the string and replace everything accept letters
                house = house.replaceAll(" ",""); //Modify the string and remove the spaces
                
                street = street.toLowerCase(); //Modify the string and make it lowercase
                street = street.replaceAll("[^a-zA-Z\\s]", "").replaceAll("\\s+", " "); //Modify the string and replace everything accept letters
                street = street.replaceAll(" ",""); //Modify the string and remove the spaces
                
                toWn = toWn.toLowerCase(); //Modify the string and make it lowercase
                toWn = toWn.replaceAll("[^a-zA-Z\\s]", "").replaceAll("\\s+", " "); //Modify the string and replace everything accept letters
                toWn = toWn.replaceAll(" ",""); //Modify the string and remove the spaces
                
                post = post.toLowerCase(); //Modify the string and make it lowercase
                post = post.replaceAll("[^a-zA-Z\\s]", "").replaceAll("\\s+", " "); //Modify the string and replace everything accept letters
                post = post.replaceAll(" ",""); //Modify the string and remove the spaces
                
                data = data.toLowerCase(); //Modify the string and make it lowercase
                data = data.replaceAll("[^a-zA-Z\\s]", "").replaceAll("\\s+", " "); //Modify the string and replace everything accept letters
                data = data.replaceAll(" ",""); //Modify the string and remove the spaces
                
                if (house.matches(".*"+data+".*") || street.matches(".*"+data+".*") || toWn.matches(".*"+data+".*") || post.matches(".*"+data+".*")) { //If the substring matches
                    System.out.println( new StringBuffer(s)); //Output the data if matches
                }
        
        }   in.close(); //Closing the file
    }
        catch ( FileNotFoundException e ) { //May be thrown by File Reader
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
        catch ( IOException e ) {  //May be thrown by Read Line
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
    }

    public void DisplayEnteries(String file, int start, int stop ){ //To Search using the Entry Range
            try {
            FileReader reader = new FileReader( file );
            BufferedReader in = new BufferedReader( reader );
            String s;
            int count = 0; //Variable count would be used to get the line Number
            while ( (s = in.readLine()) != null ) { //While there are lines with data to read, the loop will run
                count++; //Increment count by 1
                if (start <= count && count <= stop){ //if count lies between the range
                    System.out.println( new StringBuffer(s)); //Output the data
                }
            
            }   in.close(); //Closing the file
        }
        catch ( FileNotFoundException e ) { //May be thrown by File Reader
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
        catch ( IOException e ) {  //May be thrown by Read Line
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
    }

    public void DeleteS(String file, String sNumber){ //To delete the students, this will clear the whole text file and then write data to it again but leaving the one value that matches the input of the user
        try {
            Writer output = new BufferedWriter( new FileWriter( file ,true) ); //Used the boolean true to preserve the previous data and Append the new one
            FileReader reader = new FileReader( file );
            BufferedReader in = new BufferedReader( reader );
            String s;
            while ( (s = in.readLine()) != null ) { //While there are lines with data to read, the loop will run
                String a[] = s.split(","); //Split the values after the comma and put them into an Array
                String id = a[0]; //The value at position 1 in the array is copied into a variable id
                if (!id.equals("("+sNumber+")")) { //the values which do not match the student number
                    PrintWriter writer = new PrintWriter(file);
                    writer.print(""); //To clear the whole file
                    writer.close(); //Closing the file
                output.write(s + "\n"); //Write the new values except for the matched one
            }
        
        }   in.close(); //Closing the file
            output.close(); //Closing the file
    }
        catch ( FileNotFoundException e ) { //May be thrown by File Reader
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
        catch ( IOException e ) {  //May be thrown by Read Line
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
    }

    public void DeleteP(String file, int position){ //To delete the students, this will clear the whole text file and then write data to it again but leaving the one value that matches the input of the user
        try {
            Writer output = new BufferedWriter( new FileWriter( file ,true) ); //Used the boolean true to preserve the previous data and Append the new one
            FileReader reader = new FileReader( file );
            BufferedReader in = new BufferedReader( reader );
            String s;
            int count = 0; //Variable count would be used to get the line Number
            while ( (s = in.readLine()) != null ) { //While there are lines with data to read, the loop will run
                count++; //Increment count by 1
                if (count != position) { //the values which do no match the position
                    PrintWriter writer = new PrintWriter(file);
                    writer.print(""); //To clear the whole file
                    writer.close(); //Closing the file
                output.write(s + "\n"); //Write the new values except for the matched one
            }
        
        }   in.close(); //Closing the file
            output.close(); //Closing the file
    }
        catch ( FileNotFoundException e ) { //May be thrown by File Reader
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
        catch ( IOException e ) {  //May be thrown by Read Line
            System.out.println( e );
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the program
        }
    }
}