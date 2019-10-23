class StudentBookEntry {

    // DEfining private strings which will be used to store values
    private String name;
    private String s_number;
    private String course_name;
    private String course_id;
    private String house_no;
    private String street_name;
    private String town;
    private String postcode;

    //Will take the values and put them into the variables
    public StudentBookEntry(String inSNumber, String inName, String inCourseID, String inCourseName, String inHouseNO, String inStreetName, String inTown, String inPostcode) {
        name = inName;
        s_number = inSNumber;
        course_name = inCourseName;
        course_id = inCourseID;
        house_no = inHouseNO ;
        street_name = inStreetName ;
        town = inTown ;
        postcode = inPostcode ;
    }

    public String getName( ) { //Can be used to get Student Name
        return name;
    }
    public String getStudentNumber( ) { //Can be used to get Student Number
        return s_number;
    }
    public String getCourseName( ) { //Can be used to get Course Name
        return course_name;
    }
    public String getCourseID( ) { //Can be used to get Course ID
        return course_id;
    }
    public String getHouseNO( ) { //Can be used to get House Number
        return house_no;
    }
    public String getStreetName( ) { //Can be used to get Street Name
        return street_name;
    }
    public String getTown( ) { //Can be used to get Town
        return town;
    }
    public String getPostcode( ) { //Can be used to get Postcode
        return postcode;
    }

    public String toString( ) { //To format the Output
        return "(" + s_number + "), " + name + ", (" + course_id + "), " + course_name + ", " + house_no + ", " + street_name + ", " + town + ", " + postcode;
    }
}