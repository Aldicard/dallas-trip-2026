# Dallas Trip AirBnb Interactive html Artifact
---

# Goal:  create a dynamic, interactive, html artifact that can be sent to people (text, email, copy/past) that will overview the group with the current options for the Dallas trip and include all information pertaining to the trip up to this point.

---

## Trip Info:

### Members:
	- count: 10

### Carpool Estimates: 
	**prompt**: calculate and estimate the cost of gas per person 
	- 3 car minimum
		- 2025 Toyota Mini Van,Hybrid
		- 2020ish Nissan Rogue, Gas
		- Unknown, Gas
	- starting location: "Norman Oklahoma"
	- ending location: "Dallas Texas"

### Airbnb data:
	- *airbnb_1*: 
		- "link": "https://www.airbnb.com/rooms/39370647?adults=1&check_in=2026-07-24&check_out=2026-07-26&children=0&infants=0&pets=0&wishlist_item_id=11006457461775&source_impression_id=p3_1782265803_P3dlxMeE4caz8bTz&previous_page_section_name=1000"
		- "title": "Design Magazine Ft Contemp 4BR Western Dallas Home"
		- "price": "$1160.00"
			"cost_per_person": "calculate the cost per person split by members.count
		- summary: sub prompt = "access the link and gather the major details about this listing such number of bedrooms, number of bathrooms, entertainment amenities, most notible location it is near, main thing that makes this option stand out. Provide micro summary of this listing here."
	- *airbnb_2*: 
		- "link": "https://www.airbnb.com/rooms/750594075849936083?adults=1&check_in=2026-07-24&check_out=2026-07-26&children=0&infants=0&pets=0&wishlist_item_id=11006486927903&source_impression_id=p3_1782265513_P3_1iq0MT53Q2MQB&previous_page_section_name=1000"
		- "title": "Modern Tropical 5 BR/8BEDS Home in Dallas w/ Yard"
		- "price": "$1092.00"
			"cost_per_person": "calculate the cost per person split by members.count
		- summary: sub prompt = "access the link and gather the major details about this listing such number of bedrooms, number of bathrooms, entertainment amenities, most notible location it is near, main thing that makes this option stand out. Provide micro summary of this listing here."
	- *airbnb_3*: 
		- "link" : "https://www.airbnb.com/rooms/1042033181648081031?adults=1&check_in=2026-07-24&check_out=2026-07-26&children=0&infants=0&pets=0&wishlist_item_id=11006457341675&source_impression_id=p3_1782264985_P3rAfw5ite2BSVE9&previous_page_section_name=1000"
		- "title": "Oasis Pool, Hot Tub, Games; Sleeps 14; Near Dallas"
		- "price": "$1661.00"
			"cost_per_person": "calculate the cost per person split by members.count
		- summary: sub prompt = "access the link and gather the major details about this listing such number of bedrooms, number of bathrooms, entertainment amenities, most notible location it is near, main thing that makes this option stand out. Provide micro summary of this listing here."

### Climbing Gym data:
	- our prefered gyms are the movement gyms in Texas
		- location_data: "https://movementgyms.com/location-finder/"
	- find the top 5 gyms in the Dallas area based on public opinion and reviews.

### Shopping: Places we want to shop at
	- microcenter
	- Ikea
	- louis vuitton
	- The Scent room
	- northpark mall
	- gallary mall
	- Amir Oud House Of Royal Fragrance

### Restaurants: 
	**prompt**: "Find the top 3 restaurants in each price bracket priced per meal"
		- 10 to 20
		- 20 to 50
		- 50 to 100

---

### Requirements: 
	**Functionality**:
		- this artifact must not be dependant on opening it in the claude or claude code application on desktop or mobile in order for it to function properly.
		- it is REQUIRED for this artifact to function completely standalone so that I may send it to my members for them to view and interact with it both on their phones (iphone/samsung) and their computers (windows10, windows11, mac).
	**Design**: visually appealing and digestible without being overstimulating.
		- soft color pallete that is easy on the eyes while still making the user feel excited for this trip.
		- darker theme
	**Interactive Map**: interactive map of the Dallas area that users can zoom in an out of and manupulate. Map must have the following pins. When the user clicks on the pin a pop up should expand from the pin with a quick view and link to the external webage for that item.
		***interactive***:
			- same interactive navigation usability and functionality has google maps for both mobile and desktop user interface.
		***Pins***: 
			*home icon**: mark the location of the following airbnbs with a pin that looks like a home on the map.
				- $airbnb_1
				- $airbnb_2
				- $airbnb_3
			*shopping icon*:
				- add all locations listed in "Shopping".
			*restaurant icon*:
				- add all locations returned from "Restaurants".
			*climbing gym incon*:
				- add all locations listed in "Climbing Gym Data"
		***Dynamic Popup***:
			- when the user clicks on a pin a small overview will dynamically expand to provide a basic overview of the location.
				- images
				- summary
				- link to the external webpage to get direct info from the items source.
				- if airbnb then provide the data for airbnb_1, airbnb_2, or airbnb_3 (link, title, price per person, summary).
	**Cost Analysis**:
		- I want a page, tab, or section that allows the user to click on each of the airbnb options which will cause the airbnb to be highlighted on the interactive map, and then populate a cost analysis table for that location which will included the per person cost of lodging and travel.
	**Summary**:
		- when the user clicks on one of the 3 airbnb options it will populate a summary section below the cost analysis that will provide the pros and cons of this airbnb. This should include, notible facts, proximity to location we want to visit listed in trip info, stand-out ammenities such as a pool or entertainment.