![img](https://jwmcgettigan.com/assets/projects/Renegade.jpg)

## About the Project

Renegade was a self driving car that me and my classmate [David Cicerrello](https://www.linkedin.com/in/david-ciccarello/) spent a semester working on for our Autonomous Robotic Systems course, instructed by [Dean Bushey](https://www.linkedin.com/in/dean-bushey/). The course was composed of 4-5 groups of students each with their own car competitively completing a series of increasingly difficult challenges throughout the semester. The course was based on the [MIT racecar project](https://racecar.mit.edu/).

### What kind of car was Renegade?

Renegade was a [Traxxas 74076 Rally 1/10 Brushless Rally Racer](https://www.amainhobbies.com/traxxas-rally-rtr-1-10-4wd-rally-racer-tra74076-1/p403885) that we took apart and put back together so that it gained a brain and some senses. In particular, the brain was the NVIDIA Jetson TX2 and the sensors were the [Hokuyo Laser Range Finder](https://www.robotshop.com/en/hokuyo-ust-10lx-scanning-laser-rangefinder.html) (lidar) and [StereoLabsZED](https://www.stereolabs.com/zed/) (stereoscopic camera).

![img](https://jwmcgettigan.com/assets/projects/renegade/component_diagram.svg)

Renegade's brain was an Ubuntu Linux distribution which used ROS for node/service based communication between the different hardware components and the behavior logic. The behavior logic was programmed in Python using libraries such as rospy, numpy, and opencv-python.

## What were the challenges?

The following challenges were a means to familiarize ourselves with sensor technologies, sensor fusion, and node/service based communication (w/ROS).

### Line Following

Use the ZED stereoscopic camera to stay centered a line (blue tape).

This was our first challenge and the one that forced me to learn python very quickly as I hadn't used it before this taking this course.

1. Line Following:

    

   Use the line detector to determine the steering angle and speed, keeping the car centered on the line.

   1. **Line Detection:** Detect the relative orientation and distance of the robot to line.
   2. **Steering Controller:** Adjusts the steering angle to align the robot with the line.

<iframe src="https://www.youtube-nocookie.com/embed/kyWz21H-jaM?rel=0&amp;mute=1&amp;modestbranding=1&amp;origin=https://jwmcgettigan.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="margin: 0px; position: relative; box-sizing: border-box; width: 200px; height: 355.547px;"></iframe>

<iframe src="https://www.youtube-nocookie.com/embed/bWIslaxpfDk?rel=0&amp;mute=1&amp;modestbranding=1&amp;origin=https://jwmcgettigan.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="margin: 0px; position: relative; box-sizing: border-box; width: 200px; height: 355.547px;"></iframe>

### Obstacle Detection & Lane Centering

Use a Lidar to stay centered between walls and to stop before obstacles.

It was particularly satisfying when we had this functionality working for every scenario we could think of.

1. Obstacle Detection:

    

   Detect if there is an obstacle in front of the robot.

   1. **Safety Controller:** Stops the car when there is an obstacle right in front of the car.

2. Lane Centering:

    

   Use the wall detector to determine the steering angle and speed, keeping the car equidistant between walls.

   1. **Wall Detection:** Detect the relative orientation and distance of the robot to the surrounding walls.
   2. **Steering Controller:** Adjusts the steering angle to align the robot with the corridor.

<iframe src="https://www.youtube-nocookie.com/embed/_oDNLpHoLfE?rel=0&amp;mute=1&amp;modestbranding=1&amp;origin=https://jwmcgettigan.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="margin: 0px; position: relative; box-sizing: border-box; width: 200px; height: 355.547px;"></iframe>

<iframe src="https://www.youtube-nocookie.com/embed/9-QTUsi3jeA?rel=0&amp;mute=1&amp;modestbranding=1&amp;origin=https://jwmcgettigan.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="margin: 0px; position: relative; box-sizing: border-box; width: 440px; height: 356px;"></iframe>

### Visual Servoing Serpentine & Pole Bending

Use the ZED camera and Lidar to navigate around certain landmarks (yellow cones and an orange cube) while maintaining a serpentine pattern.

We used the ZED camera for object recognition and the Lidar for distance measurements.

1. Polebending:

    

   Drive parallel, perform U-turns, and execute serpentine.

   1. **Serpentine:** Swivel through a series of cones.
   2. **Collision Avoidance:** Move to the left or right of a cone instead of into it.
   3. **Parking:** Park car in front of a cone

<iframe src="https://www.youtube-nocookie.com/embed/ZQqze9KQkP8?rel=0&amp;mute=1&amp;modestbranding=1&amp;origin=https://jwmcgettigan.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="margin: 0px; position: relative; box-sizing: border-box; width: 633px; height: 356px;"></iframe>

### A Multi-Car Race

Use the ZED camera and Lidar to navigate through different lane types while contending with another autonomous vehicle.

The idea behind this 'final challenge' was to test what we learned from all of our earlier challenges while adding the element of another vehicle in the mix. We had to go through the course as fast as possible while avoiding the other vehicle.

1. Obstacle Detection:

    

   Detect if there is a vehicle near the robot.

   1. **Safety Controller:** Stops or maneuvers the car when too close to another object.

2. Lane Centering (w/Walls):

    

   Use the wall detector to determine the steering angle and speed, keeping the car equidistant between walls.

   1. **Wall Detection:** Detect the relative orientation and distance of the robot to the surrounding walls.
   2. **Steering Controller:** Adjusts the steering angle to align the robot with the corridor.

3. Lane Centering (w/Lines):

    

   Use the line detector to determine the steering angle and speed, keeping the car centered between the lines.

   1. **Line Detection:** Detect the relative orientation and distance of the robot to the surrounding lines.
   2. **Steering Controller:** Adjusts the steering angle to align the robot between the lines.

<iframe src="https://www.youtube-nocookie.com/embed/nmcDLAjBWmQ?rel=0&amp;mute=1&amp;modestbranding=1&amp;origin=https://jwmcgettigan.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="margin: 0px; position: relative; box-sizing: border-box; width: 633px; height: 356px;"></iframe>