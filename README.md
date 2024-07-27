# Tinder-like Recommendation System

This project is a web application built with ReactJS and TypeScript that mimics the recommendation functionality of Tinder. It provides a swiping interface where users can like or dislike profiles based on various attributes, such as university and interests, with some randomness.

## Features

- User profile cards with swipe functionality
- 2-second loader before loading the next card
- Counting likes, dislikes, and total profiles viewed
- Fully responsive and visually appealing side navigation bar to view the main user's profile details
- Attractive and interactive UI with animations similar to Tinder

## Technologies Used

- ReactJS
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

src/
│
├── components/
│ ├── Loader.tsx
│ ├── Navbar.tsx
│ ├── Recommendations.tsx
│ ├── Sidebar.tsx
│ └── UserProfileComponent.tsx
│
└── App.tsx


### Components

- `Loader.tsx`: Displays a loading spinner.
- `Navbar.tsx`: The navigation bar with a button to toggle the sidebar on mobile devices.
- `Recommendations.tsx`: Handles the recommendation logic and swiping functionality.
- `Sidebar.tsx`: Displays the main user's profile details and can be toggled on mobile devices.
- `UserProfileComponent.tsx`: Represents individual user profile cards.

## Data Structure

### User Profile

A user profile consists of the following attributes:
- `id`: Unique identifier for the user
- `name`: Name of the user
- `gender`: Gender of the user
- `location`: Location of the user
- `university`: University of the user
- `interests`: List of interests of the user

### Example User Profile

```typescript
const mockUserProfile = {
  id: 1,
  name: 'John Doe',
  gender: 'Male',
  location: 'New York',
  university: 'NYU',
  interests: ['music', 'coding', 'gaming'],
};
```
# Recommendation Logic
The recommendation logic prioritizes users who are from the same university and share similar interests, while also introducing some randomness. Here's a breakdown of the logic:

- Filter out the main user from the list of all profiles.
- Calculate a score for each profile based on the following criteria:
- Add 3 points if the profile's university matches the main user's university.
- Add 1 point for each shared interest.
- Add a small random value to each score to introduce randomness.
- Sort profiles by their scores in descending order.
- Select the top 10 profiles for recommendations.

@startuml

class UserProfile {
  - id: number
  - name: string
  - gender: string
  - location: string
  - university: string
  - interests: string[]
}

class Recommendations {
  + userProfile: UserProfile
  + allProfiles: UserProfile[]
  + generateRecommendations(): UserProfile[]
  + handleSwipe(direction: 'right' | 'left'): void
}

class Sidebar {
  + profile: UserProfile
  + isOpen: boolean
  + onClose(): void
}

class UserProfileComponent {
  + profile: UserProfile
  + onSwipe(direction: 'right' | 'left'): void
}

Recommendations --> UserProfile
Recommendations --> UserProfileComponent
Sidebar --> UserProfile

@enduml

 ```bash
# Clone the repository
git clone https://github.com/Ashish-chanchal/VPassignement
cd VPassignement

# Install dependencies
npm install

# Start the development server
npm run dev
```
Open your browser and navigate to http://localhost:3000.
