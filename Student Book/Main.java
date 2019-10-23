import java.io.*;
public class Main {
    public static void main( String[] args ) {

        Input in = new Input();
        System.out.println();
        System.out.println("*** ------------------------------------------------------------------------------------------------- ***");
        System.out.println("This Application Should be used only for Education Purposes. Please avoid Typos as they will close the application and tell you to try again.");
        System.out.println("*** ------------------------------------------------------------------------------------------------- ***");        
        System.out.println();
        String start = in.getValues("What do you want to do, Search, Add, Delete, View OR Exit (Only Capitals)?"); //Asking the user what he want to do in the Application
        
        if (start.matches("EXIT")){ //To exit the application
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
            System.exit(0); //Exit the Application
        }
        else if (start.matches("ADD")){ //To Add new entry into the file
            System.out.println();
            String name = in.getValues("Enter Student Name (Only letters allowed, at least one character)");
            
            if(name.matches("[a-zA-Z]+(\\s+[a-zA-Z]+)*")){ //Regex to check the input
                String name1=name;
                String s_number = in.getValues("Enter Student Number (Upper case 'C' followed by 6 digits)");
                
                if(s_number.matches("[C]{1}[0-9]{6}")){ //Regex to check the input
                    String course_name = in.getValues("Enter Course Name (Only letters allowed, at least one character)");
                
                    if(course_name.matches("[a-zA-Z]+(\\s+[a-zA-Z]+)*")){ //Regex to check the input
                        String course_id = in.getValues("Enter Course ID (2 upper case letters, 4 digits)");
                    
                        if(course_id.matches("[A-Z]{2}[0-9]{4}")){ //Regex to check the input
                            String house_no = in.getValues("Enter House Number (At least one digit followed by at most one letter)");
                        
                            if(house_no.matches("[0-9]+[a-zA-Z]")){ //Regex to check the input
                                String street_name = in.getValues("Enter Street Name (Only letters allowed, at least one character)");
                            
                                if(street_name.matches("[a-zA-Z]+(\\s+[a-zA-Z]+)*")){ //Regex to check the input
                                    String town = in.getValues("Enter Town (Only letters allowed, at least one character)");
                                
                                    if(town.matches("[a-zA-Z]+(\\s+[a-zA-Z]+)*")){ //Regex to check the input
                                        String postcode = in.getValues("Enter Postcode (2 upper case letters, 1 digit, 2 upper case letters)");
                                    
                                        if(postcode.matches("[A-Z]{2}[0-9]{1}[A-Z]{2}")){ //Regex to check the input
                                            StudentBookFunctions sb = new StudentBookFunctions();
                                            sb.add(s_number, name1, course_id, course_name, house_no, street_name, town, postcode); //Calls the add method
                                            System.out.println();
                                            String file = in.getValues("Name a file where you want to add this data (It should be a .txt file or .bin)");
                                            System.out.println();
                                            System.out.println("STUDENT ADDED SUCCESSFULLY!");
                                            sb.Write(file); //Calls the Write Method
                                            System.out.println();
                                            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
                                            System.out.println();
                                        }else{
            System.out.println("TYPO!, Please Try Again");
        }
                                    }else{
            System.out.println("TYPO!, Please Try Again");
        }
                                }else{
            System.out.println("TYPO!, Please Try Again");
        }
                            }else{
            System.out.println("TYPO!, Please Try Again");
        }
                        }else{
            System.out.println("TYPO!, Please Try Again");
        }
                    }else{
            System.out.println("TYPO!, Please Try Again");
        }
                }else{
            System.out.println("TYPO!, Please Try Again");
        }
            }else{
            System.out.println("TYPO!, Please Try Again");
        }

        }
        else if (start.matches("SEARCH")){ //To Search the data

            System.out.println();
            String search_file = in.getValues("Name a file where you want to search the data (It should be a .txt file or .bin)");
            String option = in.getValues("Search by CourseName OR Address OR EntryNumber? (Only Capitals Without Spaces)");
            
            if (option.matches("COURSENAME")){ //To search using the coursename
                String keyword = in.getValues("Enter the Course Name (Substring)");
                System.out.println();
                System.out.println("---------------------------------------------------------------------------------------------------------");
                System.out.println();
                StudentBookFunctions sb = new StudentBookFunctions();
                sb.SearchCourse(search_file,keyword); //Calls the SearchCourse method
                System.out.println();
                System.out.println("If empty, NOT FOUND!");
                System.out.println();
                System.out.println("FINISH -------------------------------------------------------------------------------------------------");
                System.out.println();
        }
            else if (option.matches("ADDRESS")){ //To search using the address
                String keyword = in.getValues("Enter Address (Substring)");
                System.out.println();
                System.out.println("---------------------------------------------------------------------------------------------------------");
                System.out.println();
                StudentBookFunctions sb = new StudentBookFunctions();
                sb.SearchAddress(search_file,keyword); //Calls the Seaech Address Method
                System.out.println();
                System.out.println("If empty, NOT FOUND!");
                System.out.println();
                System.out.println("FINISH -------------------------------------------------------------------------------------------------");
                System.out.println();
            }
            else if (option.matches("ENTRYNUMBER")){ //To search using the Position of the enteries
                System.out.println();
                System.out.println("MESSAGE : Please note that the starting point should be greater than or equal to 1 and the stopping point should be greater than or equal to the starting point. If the stopping point exceeds the number of enteries, You will see all the enteries.");
                System.out.println();
                String sTart = in.getValues("Enter Starting Point (Only Integers)");
                if (sTart.matches("[0-9]+")){ //Regex to check the input
                    int startInt = Integer.parseInt(sTart); //Converts the String into an integer
                    if (startInt >=1){
                        String stop = in.getValues("Enter Stopping Point (Only Integers)");
                        if (stop.matches("[0-9]+")){ //Regex to check the input
                            int stopInt = Integer.parseInt(stop); //Converts the String into an integer
                            if (stopInt >= startInt){
                                System.out.println();
                                System.out.println("All the Students in the Range : ------------------------------------------------------------------------");
                                System.out.println();
                                StudentBookFunctions sb = new StudentBookFunctions();
                                sb.DisplayEnteries(search_file, startInt, stopInt); //Calls the DisplayEnteries method
                                System.out.println();
                                System.out.println("If Empty, NOT IN RANGE");
                                System.out.println();
                                System.out.println("FINISH -------------------------------------------------------------------------------------------------");
                                System.out.println();
                    }else{
                        System.out.println("Error!, Please Try Again");
                    }
                }else{
                    System.out.println("Error!, Please Try Again");
                }
            }else{
                System.out.println("Error!, Please Try Again");
            }
        }else{
            System.out.println("Error!, Please Try Again");
        }
    }
        else{
            System.out.println("TYPO!, Please Try Again");
        }
    }
        else if (start.matches("VIEW")){ //To view all the data in the specified file
            System.out.println();
            StudentBookFunctions sb = new StudentBookFunctions();
            String file = in.getValues("Name a file which you want to view (It should be a .txt file or .bin)");
            System.out.println();
            System.out.println("All the Students in the Databse : ----------------------------------------------------------------------");
            System.out.println();
            sb.Read(file); //Calls the Read Method
            System.out.println();
            System.out.println("FINISH -------------------------------------------------------------------------------------------------");
            System.out.println();
        }
        else if(start.matches("DELETE")){ //To delete an entry
            System.out.println();
            String file = in.getValues("Name a file from which you want delete (It should be a .txt file or .bin)");
            System.out.println();
            StudentBookFunctions sb = new StudentBookFunctions();
            sb.Read(file); //Calls the Read Method
            System.out.println();
            String choice = in.getValues("Delete by Student Number or Position in the list (Only Capitals without Spaces)");
            if (choice.matches("STUDENTNUMBER")){ //To delete by Student Number
                String sNumber = in.getValues("Enter Student Number (Upper case 'C' followed by 6 digits)");
                if(sNumber.matches("[C]{1}[0-9]{6}")){ //Regex to check the input
                    sb.DeleteS(file, sNumber); //Calls the DeleteS Method
                    System.out.println();
                    System.out.println("If found, STUDENT DELETED SUCCESSFULLY! else application closed");
                    System.out.println();
                    System.out.println("FINISH -------------------------------------------------------------------------------------------------");
                    System.out.println();
                }
                else{
                System.out.println("TYPO!, Please Try Again");
                }
            }else if(choice.matches("POSITION")){
                System.out.println();
                System.out.println("MESSAGE : Please note that the Position should be greater than or equal to 1 and if the position exceeds the number of enteries, then No Student would be deleted.");
                System.out.println();
                String pos = in.getValues("Enter Position (Only Integers)");
                if(pos.matches("[0-9]+")){
                    int position = Integer.parseInt(pos);
                    if(position >= 1){
                        sb.DeleteP(file, position); //Calls the DeleteP Method
                        System.out.println();
                        System.out.println("If found, STUDENT DELETED SUCCESSFULLY! else application closed");
                        System.out.println();
                        System.out.println("FINISH -------------------------------------------------------------------------------------------------");
                        System.out.println();
                    }else{
                        System.out.println("Error!, Please Try Again");
                    }
                }else{
                    System.out.println("Error!, Please Try Again");
                }
            }else{
                System.out.println("TYPO!, Please Try Again");
            }
        }
        else{
            System.out.println("TYPO!, Please Try Again");
        }
    }
}