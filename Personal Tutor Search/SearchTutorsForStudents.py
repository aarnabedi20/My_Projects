students = {'kuber':{'StudentNumber':'1652079','Surname':'Kalra','Forename 1':'Kuber','Forename 2':'Shah','Course':'COMSC','Year':'2016/17','Email':'KalraK@cardiff.ac.uk','Tutor':'Natasha Edwards'},'hello':{'StudentNumber':'1','Surname':'bye','Forename 1':'Hello','Forename 2':'','Course':'COMSC','Year':'2016/17','Email':'hellobye@cardiff.ac.uk','Tutor':'Kirill Sidorov'}}
tutors = {'kirill':{'Surname':'Sidorov','Forename 1':'Kirill','Forename 2':'','Speciality':'UFBSCMSA','Part/FullTime':'full','Current':'2','Email':'SidorovKi@cardiff.ac.uk','Students':['1652079','1']}}

#from assignStudents import*
from tkinter import *

def main_window():
    master = Tk()
    master.title("Search for Tutor")

    label1 = Label(master, text="Search by Student Name or Student Number ? ")
    label1.pack()
    restrict_string1 = StringVar()
    inp1 = Entry(master, width=30, textvariable=restrict_string1)
    inp1.pack()
    inp1.focus_set()

    def new_window():
        option=inp1.get().lower().replace(" ", "")
        if option=="name" or option=="studentname":
            master = Tk()
            master.title("Search by name")

            restrict_string2 = StringVar()
            restrict_string3 = StringVar()
            restrict_string4 = StringVar()

            label2 = Label(master, text="Enter Forename 1 (Required) : ")
            label2.pack()
            inp2 = Entry(master, width=30, textvariable=restrict_string2)
            inp2.pack()
            inp2.focus_set()

            label3 = Label(master, text="Enter Forename 2 (Leave Blank if None) : ")
            label3.pack()
            inp3 = Entry(master, width=30, textvariable=restrict_string3)
            inp3.pack()
            inp3.focus_set()

            label4 = Label(master, text="Enter Surname (Required) : ")
            label4.pack()
            inp4 = Entry(master, width=30, textvariable=restrict_string4)
            inp4.pack()
            inp4.focus_set()

            label6 = Label(master, text="Result : ")
            label6.pack()
            inp6=Entry(master, width=30)
            inp6.pack()

            def search_name(forename1,sname):
                for key in students:
                    if str(students[key]['Forename 1'].lower()).replace(" ", "")==str(forename1) and str(students[key]['Surname'].lower().replace(" ", ""))==str(sname):
                        ans1=students[key]['Tutor']
                        inp6.delete(0, END)
                        inp6.insert(0,ans1)
                        break;
                else:
                    inp6.delete(0, END)
                    inp6.insert(0,"Try Again !")
                    return;

            def check_inputs_name(FN1,SUR):
                if FN1=="" or SUR=="":
                    inp6.delete(0, END)
                    inp6.insert(0,"Forename 1 or Surname can't be blank")
                else:
                    search_name(FN1,SUR)
                return;

            def lowercase_name(F1,F2,Sur):
                F1=F1.lower().replace(" ", "")
                F2=F2.lower().replace(" ", "")
                Sur=Sur.lower().replace(" ", "")
                check_inputs_name(F1,Sur)

            def inputs():
                input1 = inp2.get()
                input2 = inp3.get()
                input3 = inp4.get()
                lowercase_name(input1,input2,input3)
                return;

            button2 = Button(master, text="Search", width=10, command=inputs)
            button2.pack()

            mainloop()


        elif option=="number" or option=="studentnumber":
            master = Tk()
            master.title("Search by number")

            restrict_string5 = StringVar()

            label5 = Label(master, text="Enter Student Number : ")
            label5.pack()
            inp5 = Entry(master, width=30, textvariable=restrict_string5)
            inp5.pack()
            inp5.focus_set()

            label7 = Label(master, text="Result : ")
            label7.pack()
            inp7=Entry(master, width=30)
            inp7.pack()

            def search_number():
                snumber=inp5.get()
                for key1 in students:
                    if str(students[key1]['StudentNumber'])==str(snumber):
                        ans2=students[key1]['Tutor']
                        inp7.delete(0, END)
                        inp7.insert(0,ans2)
                        break;
                else:
                    inp7.delete(0, END)
                    inp7.insert(0,"Try Again !")
                return;

            button3 = Button(master, text="Search", width=10, command=search_number)
            button3.pack()

            mainloop()
            
        else:
            inp1.delete(0, END)
            inp1.insert(0,"Please try Again !")
        return;

    button1 = Button(master, text="Proceed", width=10, command=new_window)
    button1.pack()

    mainloop()
    return;

main_window()
