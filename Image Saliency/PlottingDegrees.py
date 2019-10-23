'''
Student Number - C1636215
Full Name - Aarna Bedi
'''

# Imports
import matplotlib.pyplot as plt
import pandas as pd
%matplotlib inline

plt.rcParams.update({'figure.figsize':(16,4), 'figure.dpi':100}) # Generic properties for all the figures

# Plot Histogram on degrees for R
plt.subplot(1,3,1) # Used to define on which axis figure will display
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'r') # Bins are set between -180 and 180 because result is in degrees
plt.xlim(-181, 181) # Limit for x-axis
plt.hist(degreesR, **kwargs) # Creates the histogram for given list and properties, ** means that it's a magic variable that allows us to pass keyword variable length arguments to a function
plt.gca().set(title='Expert Radiologists (Degrees)'); # Sets the title

# Plot Histogram on degrees for P
plt.subplot(1,3,2)
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'b')
plt.xlim(-181, 181)
plt.hist(degreesP, **kwargs)
plt.gca().set(title='Physicists (Degrees)');

# Plot Histogram on degrees for T
plt.subplot(1,3,3)
kwargs = dict(alpha=0.5, bins = np.arange(-181, 181, 1), normed = True, color = 'g')
plt.xlim(-181, 181)
plt.hist(degreesT, **kwargs)
plt.gca().set(title='Trainee (Degrees)');