# Synapsis Recruitment - Challenge Test

![Project Image](https://ajicfyapwuyotrfthhvu.supabase.co/storage/v1/object/public/project/Screenshot%202024-01-20%20230758.png)

## Table of Contents

- [How to Use](#how-to-use)
- [Features](#features)



## How To Use

1. **Clone the repository:**

   ```bash
   git clone https://github.com/irfan-za/blog-19.git
2. **Add ENV**

   rename file `.env.example` to `.env` and put your API_URL % ACCESS_TOKEN inside that file. 

3. **Install Dependencies**
 
   Use the package manager [pnpm](https://pnpm.io/id/installation) to install dependencies.

    ```bash
    npm i
    ```
3. **Run Project**
   ```bash
    npm run dev
   ```
   Then visit [http://localhost:3000](http://localhost:3000) in your browser.


## Features

### Blog Post List

1. **Pagination:**
   - Displays a list of blog posts with pagination for an optimal user experience.
   - Users can navigate through different pages to explore all of blog posts.

### Blog Post Detail

1. **Detailed View:**
   - Clicking on a blog post shows a detailed view with the post content, comments, and the author.
   - Users can engage with the blog post by reading comments.

2. **Comment Section:**
   - Each blog post detail page includes a section for user comments.
   - Users can read comments on the blog post page.

### Users Page

1. **CRUD Operations:**
   - Create, read, update, and delete user information from a centralized Users page.

2. **Search Functionality:**
   - Includes a search feature for quickly finding specific users based on user name.
   - Search results update dynamically without requiring a page refresh.

### Responsive Design

1. **Optimized for All Devices:**
   - The app features a responsive design, ensuring a consistent and user-friendly experience across various devices, including desktops, tablets, and smartphones.

### Server-Side Rendering

1. **Optimized Performance:**
   - Utilizes server-side rendering to optimize app performance.
   - Enhances page load times and overall responsiveness for a better user experience.

### Pagination

1. **Efficient Data Display:**
   - Implements pagination for efficient data display, particularly in contexts with a large amount of content.
   - Allows users to navigate through paginated content seamlessly.

### User Interface

1. **Intuitive UI:**
   - Prioritizes clarity, simplicity, and user-friendly user interface for a positive user experience.

### React Hooks

- **useState:** Managed handling filter data, and showing modal functionality.

- **useEffect:** Used useEffect for filtering data in users.


### Hybrid Application (SSR & CSR)

1. **SSR (Server-Side Rendering):**
   - Implemented SSR on blog list, blog detail. and user detail page for improved performance.

2. **CSR (Client-Side Rendering):**
   - Implemented CSR on the navbar and table component that need interactivity.

### 404 Not Found Page

- Implemented a custom 404 Not Found page to handle unexpected routes.
