'''
Student Number - C1636215
Full Name - Aarna Bedi
'''

# Imports
from __future__ import division
import matplotlib.pyplot as plt
import pandas as pd
%matplotlib inline

plt.rcParams.update({'figure.figsize':(16,10), 'figure.dpi':100}) # Generic properties for all the figures
plt.subplots_adjust(hspace = 0.7) # Defining horizontal space

# Plot Histogram on distance for R1
# Getting max/min values from the lists to use as limits for x-axis
maxDistanceR1 = max(distanceR1)
minDistanceR1 = min(distanceR1)

plt.subplot(3,3,1)  # Used to define on which axis figure will display
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceR1, maxDistanceR1, 1), normed = True, color = 'r') # Bins are set between max and min distance
plt.xlim(minDistanceR1, maxDistanceR1) # Limit for x-axis
plt.hist(distanceR1, **kwargs) # Creates the histogram for given list and properties, ** means that it's a magic variable that allows us to pass keyword variable length arguments to a function
plt.gca().set(title='Expert Radiologists (R1) (Distance)'); # Sets the title

# Plot Histogram on distance for R2
maxDistanceR2 = max(distanceR2)
minDistanceR2 = min(distanceR2)

plt.subplot(3,3,2)
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceR2, maxDistanceR2, 1), normed = True, color = 'r')
plt.xlim(minDistanceR2, maxDistanceR2)
plt.hist(distanceR2, **kwargs)
plt.gca().set(title='Expert Radiologists (R2) (Distance)');

# Plot Histogram on distance for R3
maxDistanceR3 = max(distanceR3)
minDistanceR3 = min(distanceR3)

plt.subplot(3,3,3)
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceR3, maxDistanceR3, 1), normed = True, color = 'r')
plt.xlim(minDistanceR3, maxDistanceR3)
plt.hist(distanceR3, **kwargs)
plt.gca().set(title='Expert Radiologists (R3) (Distance)');

# Plot Histogram on distance for P02
maxDistanceP02 = max(distanceP02)
minDistanceP02 = min(distanceP02)

plt.subplot(3,3,4)
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceP02, maxDistanceP02, 1), normed = True, color = 'g')
plt.xlim(minDistanceP02, maxDistanceP02)
plt.hist(distanceP02, **kwargs)
plt.gca().set(title='Trainee (P02) (Distance)');

# Plot Histogram on distance for P07
maxDistanceP07 = max(distanceP07)
minDistanceP07 = min(distanceP07)

plt.subplot(3,3,5)
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceP07, maxDistanceP07, 1), normed = True, color = 'g')
plt.xlim(minDistanceP07, maxDistanceP07)
plt.hist(distanceP07, **kwargs)
plt.gca().set(title='Trainee (P07) (Distance)');

# Plot Histogram on distance for P08
maxDistanceP08 = max(distanceP08)
minDistanceP08 = min(distanceP08)

plt.subplot(3,3,6)
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceP08, maxDistanceP08, 1), normed = True, color = 'g')
plt.xlim(minDistanceP08, maxDistanceP08)
plt.hist(distanceP08, **kwargs)
plt.gca().set(title='Trainee (P08) (Distance)');

# Plot Histogram on distance for LesleyA
maxDistanceLesleyA = max(distanceLesleyA)
minDistanceLesleyA = min(distanceLesleyA)

plt.subplot(3,3,7)
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceLesleyA, maxDistanceLesleyA, 1), normed = True, color = 'b')
plt.xlim(minDistanceLesleyA, maxDistanceLesleyA)
plt.hist(distanceLesleyA, **kwargs)
plt.gca().set(title='Physicists (LesleyA) (Distance)');

# Plot Histogram on distance for LesleyA
maxDistanceMitko = max(distanceMitko)
minDistanceMitko = min(distanceMitko)

plt.subplot(3,3,8)
kwargs = dict(alpha=0.5, bins = np.arange(minDistanceMitko, maxDistanceMitko, 1), normed = True, color = 'b')
plt.xlim(minDistanceMitko, maxDistanceMitko)
plt.hist(distanceMitko, **kwargs)
plt.gca().set(title='Physicists (Mitko) (Distance)');