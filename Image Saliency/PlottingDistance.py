# Imports
from __future__ import division
import matplotlib.pyplot as plt
import pandas as pd
%matplotlib inline

plt.rcParams.update({'figure.figsize':(16,4), 'figure.dpi':100}) # Generic properties for all the figures

# Plot Histogram on distance for R
# Getting max/min values from the lists to use as limits for x-axis
maxDistanceR = max(distanceR) 
minDistanceR = min(distanceR)

plt.subplot(1,3,1) # Used to define on which axis figure will display
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceR, maxDistanceR, 1), normed = True, color = 'r') # Bins are set between max and min distance
plt.xlim(minDistanceR, maxDistanceR) # Limit for x-axis
plt.hist(distanceR, **kwargs) # Creates the histogram for given list and properties, ** means that it's a magic variable that allows us to pass keyword variable length arguments to a function
plt.gca().set(title='Expert Radiologists (Distance)'); # Sets the title

# Plot Histogram on distance for P
maxDistanceP = max(distanceP)
minDistanceP = min(distanceP)

plt.subplot(1,3,2)
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceP, maxDistanceP, 1), normed = True, color = 'b')
plt.xlim(minDistanceP, maxDistanceP)
plt.hist(distanceP, **kwargs)
plt.gca().set(title='Physicists (Distance)');

# Plot Histogram on distance for T
maxDistanceT = max(distanceT)
minDistanceT = min(distanceT)

plt.subplot(1,3,3)
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceT, maxDistanceT, 1), normed = True, color = 'g')
plt.xlim(minDistanceT, maxDistanceT)
plt.hist(distanceT, **kwargs)
plt.gca().set(title='Trainee (Distance)');