'''
Student Number - C1636215
Full Name - Aarna Bedi
'''

# Imports
import os
import csv
from collections import defaultdict
import matplotlib.image as mpimg
import pandas as pd
import numpy as np
import math
from matplotlib import *

# Main function used to execute the code
def main(directory, person, calcDegrees):

    values = []
    
    # Function to calculate distance between two coordinates
    def calculateDistance(x1, y1, x2, y2):    
        dist = math.sqrt((x2-x1)**2 + (y2-y1)**2) # Euclidean distance Formula
        return dist
    
    # Function to calculate degrees between two coordinates
    def calDegrees(x1,y1,x2,y2):
        k = math.atan2(y2-y1, x2-x1) # Using Math library's atan method so that it can compute the angle and its correct quadrant
        degrees2 = math.degrees(k) # Then convert the result into degrees as it was in radians
        return degrees2
    
    def readcsv(filename):
        columns = defaultdict(list) # Used a dictionary to map column headings to column values

        with open(filename) as f:
            reader = csv.DictReader(f)
            for row in reader:
                for (k,v) in row.items():
                    columns[k].append(v)
                    
        allParticipants = columns["Participant"]
        allIndexes = columns["Index"]
        x_fixations = columns["Fixation Position X [px]"]
        y_fixations = columns["Fixation Position Y [px]"]
        
        if not person: # We want to populate values for all participants if not specified
            populateValues(allIndexes, x_fixations, y_fixations)
            
        else:
            specificPersonIndexes = getIndexes(person, allParticipants) # Get indexes from the CSV rows for the spcified participant so that we can get correct fixations for the same
            populateValues(specificPersonIndexes, x_fixations, y_fixations)
    
    # Function to populate calculated values into a list
    def populateValues(indexes, x_fixations, y_fixations):
        for i, val in enumerate(indexes[:-1]):
            if indexes[i+1] is "1": # If index becomes 1, then consider it as a new participant
                i += 1
            
            if calcDegrees:
                values.append(
                calDegrees(
                    float(x_fixations[i]),                      
                    float(y_fixations[i]),       
                    float(x_fixations[i+1]),                      
                    float(y_fixations[i+1])
                )
            )
                
            else:
                values.append(
                calculateDistance(
                    float(x_fixations[i]),                      
                    float(y_fixations[i]),       
                    float(x_fixations[i+1]),                      
                    float(y_fixations[i+1])
                )
            )
      
    # Function to return a list of indexes where it matches the given participant
    def getIndexes(participant, list):
        return [n for n, item in enumerate(list) if item == participant]
         
    # Function to locate all the files with a .csv extension in a given directory
    def findcsv(path):
        extension = ".csv"
        result = []
        for root, dirs, files in os.walk(path): # os.walk generates filenames in a directory tree
            for file in files:
                if file.endswith(extension):
                    result.append(os.path.join(root, file))
                
        if len(result) == 0:
            print("ERROR!: CSVs not found.Please check again - [FOR : " + extension + "]")
             
        return result

    # Start of the main function
    listOfCsvs = findcsv(directory)
    for csvFile in listOfCsvs:
        readcsv(csvFile) # Run the loop for every CSV found
    
    return values

#Degrees For R
degreesR = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-RRR", "", True) # Boolean parameter is used to switch between distance/degrees calculation
degreesR1 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-RRR", "R1", True)
degreesR2 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-RRR", "R2", True)
degreesR3 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-RRR", "R3", True)

#Degrees For P
degreesP = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-PP", "", True)
degreesLesleyA = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-PP", "LesleyA", True)
degreesMitko = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-PP", "Mitko", True)

#Degrees For T
degreesT = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-TTT", "", True)
degreesP02 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-TTT", "P02", True)
degreesP07 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-TTT", "P07", True)
degreesP08 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-TTT", "P08", True)
    
#Distance For R
distanceR = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-RRR", "", False)
distanceR1 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-RRR", "R1", False)
distanceR2 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-RRR", "R2", False)
distanceR3 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-RRR", "R3", False)

#Distance For P
distanceP = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-PP", "", False)
distanceLesleyA = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-PP", "LesleyA", False)
distanceMitko = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-PP", "Mitko", False)

#Distance For T
distanceT = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-TTT", "", False)
distanceP02 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-TTT", "P02", False)
distanceP07 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-TTT", "P07", False)
distanceP08 = main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data/MLO-TTT", "P08", False)