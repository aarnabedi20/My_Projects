'''
Student Number - C1636215
Full Name - Aarna Bedi
'''

# Imports
from collections import defaultdict
from matplotlib import cm
from scipy.ndimage.filters import gaussian_filter #For heatmap
import os
import csv
import numpy as np
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import pandas as pd

# Main function used to execute the code
def main(path, filename, initial, names, showHeatmap):
    
    # Fucntion used for finding an image in a directory
    def findimage(imageName, path):
        imageFound = True 
        for root, dirs, files in os.walk(path): # os.walk generates filenames in a directory tree
            if imageName in files:
                return os.path.join(root, imageName) # Return the full path of the found file
            else:
                imageFound = False
                
        print("ERROR!: Image not found. Please check your directory/image name - [FOR : " + imageName + "]")
          
    # Function used for finding the CSVs
    def findcsv(imageName, path):
        imageName += ".csv" # As the image names and CSV names are identical, just appending .csv at the end to find it
        result = []
        for root, dirs, files in os.walk(path):
            if imageName in files:
                result.append(os.path.join(root, imageName)) # Keep adding the found files into a list
                
        if len(result) == 0:
            print("ERROR!: CSVs not found. Please check again - [FOR : " + imageName + "]")
             
        return result
    
    # Function used to read the CSV from memory and perform various operations on the data
    def readcsv(imagepath, filename, participants, imageTitle):
        
        # Variables defined here are global so that they can be used throughout
        global figureCounter
        global axis
        
        imageCounter = 1 # A counter to keep up with the number of images (for subplot parameter)
        
        columns = defaultdict(list) # Used a dictionary to map column headings to column values

        with open(filename) as f:
            reader = csv.DictReader(f)
            for row in reader:
                for (k,v) in row.items():
                    columns[k].append(v) # Appending/Mapping heading and value into the dictionary
                    
        allParticipants = columns["Participant"]
        allParticipantsUnique = list(set(allParticipants)) # Because the values are repeated, converted it into a set to get unique participants

        xFixationsScatterList = []
        yFixationsScatterList = []
        
        #Getting the X and Y fixations for all participants
        if len(participants) == 1 and participants[0] == "All":
            x_fixations = columns["Fixation Position X [px]"]
            y_fixations = columns["Fixation Position Y [px]"]
            imageCounter = 3
            
            axis = plt.subplot(1,imageCounter,figureCounter) # Difining a subplot axis to be used everywhere
            for index in range(len(x_fixations)-1): # -1 the length because index starts from 0
                xFixationsScatterList.append(float(x_fixations[index])) # Converting values into float here because they are strings when read from the CSV
                yFixationsScatterList.append(float(y_fixations[index]))
           
        #Getting the X and Y values for a specific participant
        else:
            for participant in participants:
                indexes = getIndexes(participant, allParticipants) # Get indexes from the CSV rows for the spcified participant so that we can get correct fixations for the same
    
                if len(indexes) == 0:
                    print("ERROR!: Participant not found in the CSV. Please check again - [FOR : " + participant + "]")

                x_fixations = columns["Fixation Position X [px]"]
                y_fixations = columns["Fixation Position Y [px]"]
        
                axis = plt.subplot(1,imageCounter,figureCounter)
                for index in indexes:
                    xFixationsScatterList.append(float(x_fixations[index]))
                    yFixationsScatterList.append(float(y_fixations[index]))
        
        xFixationsArray = np.array(xFixationsScatterList) # Converting fixation list into an array here so that it can be used for plotting
        yFixationsArray = np.array(yFixationsScatterList)
        
        plt.rcParams.update({'figure.figsize':(16,4), 'figure.dpi':100}) # Generic properties for all the figures
        
        # For heatmap plot
        if showHeatmap:
            heatImg, extent = heatmapPlot(xFixationsArray, yFixationsArray, 50)
            axis.imshow(heatImg, extent=extent, origin = 'lower', cmap=cm.jet) # Origin here is lower to allign with the scatter; Cmap is the colour map to differentiate colours
            showImage(imagepath, axis, imageTitle)
        
        # For normal scatter plot
        else:
            axis.scatter(xFixationsArray, yFixationsArray, s=25, color="red") # s=25 is the Sigma value
            showImage(imagepath, axis, imageTitle)

        figureCounter += 1
       
    # Function to return a list of indexes where it matches the given participant
    def getIndexes(participant, list):
        return [n for n, item in enumerate(list) if item == participant]
    
    # Function for displaying the image 
    def showImage(imagepath, axis, imageTitle):
        img = mpimg.imread(imagepath)
        plt.gca().set(title=imageTitle)  
        
        if showHeatmap:
            axis.imshow(img, cmap='Greys', alpha = 0.5) # Again colour map is used so that heat image can be differentiated from the base image
        else:
            axis.imshow(img)
    
    # Function for setting heatmap properties and creating the heatmap image for plotting
    def heatmapPlot(x, y, s, bins=400): # Bins have given a default value of 400 so that it's easier to analyse
        heatmap, xedges, yedges = np.histogram2d(x, y, bins=bins)
        heatmap = gaussian_filter(heatmap, sigma=s) # Signa here is used for smoothing iver neighbours
        extent = [xedges[0], xedges[-1], yedges[0], yedges[-1]]
        return heatmap.T, extent
       
    # Start of the main function
    imagepath = findimage(filename, path)
    
    if not imagepath: # We don't want the code to execute any further if it cannot find the image
        return
    
    csvpaths = findcsv(filename, path)
    
    if not csvpaths:
        return
    
    csvpaths.sort() # Sorting the CSV list so that its easier to get directories using indexes
    
    if len(names) == 1 and names[0] == "All":
        readcsv(imagepath, csvpaths[1], names, "Expert Radiologists")
        readcsv(imagepath, csvpaths[0], names, "Physicists")
        readcsv(imagepath, csvpaths[2], names, "Trainee")
        
    elif initial == "R":
        readcsv(imagepath, csvpaths[1], names, "Expert Radiologists")
         
    elif initial == "P":
        readcsv(imagepath, csvpaths[0], names, "Physicists")
        
    elif initial == "T":
        readcsv(imagepath, csvpaths[2], names, "Trainee")
        
    else:
        print("ERROR!: Doctor not found. Please check again - [FOR : " + initial + "]")

figureCounter = 1
main("/Users/aarnabedi/Desktop/FYP/FinalYearProject/Data", "194404_892864__41_FOR PRESENTATION_00003.bmp", "R", ["All"], False) # Boolean parameter is used to switch between heatmap/general plotting

