'''
Student Number - C1636215
Full Name - Aarna Bedi
'''

# Imports
import matplotlib.pyplot as plt
import pandas as pd
%matplotlib inline

plt.rcParams.update({'figure.figsize':(16,10), 'figure.dpi':100}) # Generic properties for all the figures
plt.subplots_adjust(hspace = 0.7) # Defining horizontal space

# Plot Histogram on degrees for R1
plt.subplot(3,3,1) # Used to define on which axis figure will display
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'r') # Bins are set between max and min distance
plt.xlim(-181, 181) # Limit for x-axis
plt.hist(degreesR1, **kwargs) # Creates the histogram for given list and properties, ** means that it's a magic variable that allows us to pass keyword variable length arguments to a function
plt.gca().set(title='Expert Radiologists (R1) (Degrees)'); # Sets the title

# Plot Histogram on degrees for R2
plt.subplot(3,3,2)
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'r')
plt.xlim(-181, 181)
plt.hist(degreesR2, **kwargs)
plt.gca().set(title='Expert Radiologists (R2) (Degrees)');

# Plot Histogram on degrees for R3
plt.subplot(3,3,3)
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'r')
plt.xlim(-181, 181)
plt.hist(degreesR3, **kwargs)
plt.gca().set(title='Expert Radiologists (R3) (Degrees)');

# Plot Histogram on degrees for P02
plt.subplot(3,3,4)
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'g')
plt.xlim(-181, 181)
plt.hist(degreesP02, **kwargs)
plt.gca().set(title='Trainee (P02) (Degrees)');

# Plot Histogram on degrees for P07
plt.subplot(3,3,5)
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'g')
plt.xlim(-181, 181)
plt.hist(degreesP07, **kwargs)
plt.gca().set(title='Trainee (P07) (Degrees)');

# Plot Histogram on degrees for P08
plt.subplot(3,3,6)
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'g')
plt.xlim(-181, 181)
plt.hist(degreesP08, **kwargs)
plt.gca().set(title='Trainee (P08) (Degrees)');

# Plot Histogram on degrees for LesleyA
plt.subplot(3,3,7)
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'b')
plt.xlim(-181, 181)
plt.hist(degreesLesleyA, **kwargs)
plt.gca().set(title='Physicists (LesleyA) (Degrees)');

# Plot Histogram on degrees for LesleyA
plt.subplot(3,3,8)
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'b')
plt.xlim(-181, 181)
plt.hist(degreesMitko, **kwargs)
plt.gca().set(title='Physicists (Mitko) (Degrees)');