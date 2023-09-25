# Goal
Plan and develop school interactive page where pupils and teachers share their individual summer activities. 

# User Experience
I aimed to keep the site attractive for specific age of people that range between primary and secondary school children, accordingly i have chosen the following colours and fonts.

### **Colour Scheme**
I have chosen the green palette colors as follow:
- `#ececa3` : Borders (Header, Footer, Posts).
- `#607c3c` : active icons.
- `#abc32f` : 
- `#b5e550` :
- `#809c13` : 

![colour schema](./src/assets/color-pallete.png)

### **Typography**
I have chosen fonts that are readable and not formal at the same time.
- `Gluten` : the main font.
- `Playfair Display` : used for the written posts and comments. 
- `Font awesome` : used for icons

# User stories
User stories has been divided and done within fixed iterations, each iteration last for 5 days.

### **Epic 1 - General functionalities**
- As a first time website visitor I can see one page website, so i can notice all the capabilities at one time.
- As a first time website visitor I can see a friendly UI which comes with a design and colors that children like.
- As a website user (teacher/pupil) I can view a navbar from all pages, so i can navigate easily between pages, 

### **Epic 2 - Main functionalities**
- As a user (teacher/pupil) i can create an account, so i can access all features.
- As a registered user, i can login, so i can benefit my access priviliges.
- As a logged in user, I can logout, so I can secure my account.
- As a logged in user, I can edit my profile, so I can view/update my information.
- As a logged in user, I can write picnics suggestions so other pupils and teachers can consider.
- As a logged in user, I can comment on others posts so i can share my opnion. 
- As a logged in user, I can like a post to encourage the post owner to participate more.
- As a logged in user, I can follow a pupil or a teacher so i can see their adventures. 

### **Epic 3 - Customizations**
- Customize cards dimentions (sign in card, post card, comment card, followers card)
- adjust colors of (links, borders, cards shadow, fonts, icons) by using  [these colors](#colour-scheme).

### **Target Audience**
- Storytellers  who enjoy sharing their fun times experience.
- School pupils who  value being engaged in discussions and interactions.
- Joy seekers who actively seek out new places, experiences, and adventures.

# Features
### **Existing features**
- **Main page**
- **Header**
- **Account management**
- **User profile**
- **Add/Remove Post**
- **Comment/Like**
- **Follow**
- **Footer**
### **Future Features**
- **Website reviews**

# Wireframes
I've used [Balsamiq](https://balsamiq.com/wireframes) to design the website wireframes, 
I've created wireframes for different screen sizes (desktop, mobile).
<details><summary>Home</summary>
<img src="./src/assets/wireframes/home-page.png">
</details>
<details><summary>Sign in</summary>
<img src="./src/assets/wireframes/signin-page.png">
</details>
<details><summary>Profile page</summary>
<img src="./src/assets/wireframes/profile-page.png">
</details>
<details><summary>Edit post</summary>
<img src="./src/assets/wireframes/edit-post.png">
</details>
<details><summary>Edit profile</summary>
<img src="./src/assets/wireframes/edit-profile.png">
</details>

# System Design
The Database for this project is a relational DB, consists of four tables, Profiles, Posts, Comments, Likes, Followers.
The backend has been developed using the Django REST Framework. The ERD and the API functionalities are clearly expressed here in the [Backend](https://github.com/Nazek-Altayeb/fun_times_api) project.

# Agile development process
The development process went smoothly with the use of the Github roadmap project board.
I named my project in the Github **fun times**.
I created and prioritized  the issues according to `MOSCOW`.
I have followed the iterative approach, each sprint last for 5 days.
- **Sprint 1 (Aug 22nd To 26th, 2023)**
    - [x] [User story: Setup environment](https://github.com/Nazek-Altayeb/fun-times/issues/1) <code style="color:red">(Must have)</code>
    - [x] [User story: Add project Goal and User-Stories to the readme](https://github.com/Nazek-Altayeb/fun-times/issues/2) <code style="color:#5319E7">(Should have)</code>
    - [x] [User story: Add navigation bar](https://github.com/Nazek-Altayeb/fun-times/issues/3) <code style="color:red">(Must have)</code>
- **Sprint 2 (Aug 23rd To 31th, 2023)**
    - [x] [User story: Registration](https://github.com/Nazek-Altayeb/fun-times/issues/4), moved to sprint 3<code style="color:red">(Must have)</code>
    - [x] [User story: Login](https://github.com/Nazek-Altayeb/fun-times/issues/5), moved to sprint 4 <code style="color:red">(Must have)</code>
    - [x] [User story: Logout](https://github.com/Nazek-Altayeb/fun-times/issues/6), moved to sprint 5 <code style="color:red">(Must have)</code>
    - [x] [User story: Profile management](https://github.com/Nazek-Altayeb/fun-times/issues/7), moved to sprint 5 <code style="color:red">(Must have)</code>
    - [x] [Deploy to Heroku](https://github.com/Nazek-Altayeb/fun-times/issues/9)<code style="color:#5319E7">(Should have)</code>
- **Sprint 3 (Sep 1st To 5th, 2023)**
    - [x] [User story: Registration](https://github.com/Nazek-Altayeb/fun-times/issues/4)<code style="color:red">(Must have)</code>
    - [x] Fix issues caused by configuration errors <code style="color:red">(Must have)</code>
- **Sprint 4 (Sep 6th To 10th, 2023)**
    - [x] [User story: Login](https://github.com/Nazek-Altayeb/fun-times/issues/5) <code style="color:red">(Must have)</code>
    - [] [Combine the API and the front-end in the same workspace](https://github.com/Nazek-Altayeb/fun-times/issues/8) <code style="color:#5319E7">(Should have)</code>
- **Sprint 5 (Sep 11th To 15th, 2023)**
    - [x] [User story: Logout](https://github.com/Nazek-Altayeb/fun-times/issues/6) <code style="color:red">(Must have)</code>
    - [x] [User story: Profile management](https://github.com/Nazek-Altayeb/fun-times/issues/7) <code style="color:#5319E7">(Should have)</code>
    - [x] [User story: Create post](https://github.com/Nazek-Altayeb/fun-times/issues/10) <code style="color:red">(Must have)</code>

# Bugs
### **Fixed bugs**
- Bug: Route element is not recognized, 
    - fix: down grade the react-router-dom to version 5
- Bug: Navigation breaks
    - uninstall React and React-dom version 18, install version 17 
- Bug: Refresh token is not working properly, means logged in user have to login again after page refresh. 

# Testing 
To Do ......
Here stays a link for the mannual testing, and bugs ...!


# Tools & Technologies
The website has been implemented with the use of a variety of technologies.

- [HTML](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [CSS](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [JSX](https://legacy.reactjs.org/docs/introducing-jsx.html) used for user interaction on the site.
- [Python](https://www.python.org) used as the back-end programming language.
- [Git](https://git-scm.com) used for version control.
- [GitHub](https://github.com) used for secure online code storage.
- [CodeAnyWhere](https://codeanywhere.com) used as a cloud-based IDE for development.
- [React Bootstrap](https://react-bootstrap.netlify.app/) used as the front-end CSS framework for modern responsiveness and pre-built components.
- [Django](https://www.djangoproject.com) used as the Python framework for the site.
- [PostgreSQL](https://www.postgresql.org) used as the relational database management.
- [ElephantSQL](https://www.elephantsql.com) used as the Postgres database.
- [Heroku](https://www.heroku.com) used for hosting the deployed back-end site.
- [Django Summernote](https://github.com/summernote/django-summernote) used for the body field for blog posts.
- [DB Diagram](https://dbdiagram.io/d) used for desiging the ER diagram.
- [Balsamiq](https://balsamiq.com/) used for designing the website UI.

# Deployment
The website was deployed using Heroku, following the steps below:

1. **Create a [Heroku](https://dashboard.heroku.com/) Account**: If you do not have a Heroku account already, create one. Heroku is a platform that enables developers to build, run, and operate applications entirely in the cloud.
2. **Prepare your Application**: Commit and push your code to your GitHub repository. Ensure that all necessary changes have been made and the latest version of the application is ready for deployment.
3. **Create a New Application on Heroku**: From your Heroku dashboard, create a new application. Choose an appropriate name for your application and select a region.
4. **Set Environment Variables**: Ensure the environmental variables are also added to your Heroku app settings under the Config Vars section. This is done to protect sensitive data and also to allow the services to communicate with your Heroku app.
5. **Deployment Process**: In the Heroku dashboard, navigate to the "Deploy" section of your application. Here, you will be able to link your GitHub repository to your Heroku app. Ensure that the repository and branch that contain the version of your app that you wish to deploy are selected. Finally, click "Deploy Branch" under the "Manual deploy" section.
6. **Verify Deployment**: After the deployment process completes, Heroku will provide a URL to the live application. Open this URL in your browser to ensure the application has been deployed successfully and is functioning as expected.

**Fork**

You can for fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in upper right hand corner
3. Wait for the forking process to complete. Once done, you will have a copy of the repository in your GitHub account.

**Clone**

You can clone the repository by following these steps:
1. Go to the GitHub repository 
2. Locate the Code button above the list of files and click it 
3. Select your preferred method for cloning: HTTPS, SSH, or GitHub CLI, and click the copy button to copy the repository URL to your clipboard.
4. Open Git Bash (or your preferred terminal).
5. Change the current working directory to the location where you want the cloned directory to be created.
6. Type the command **'git clone'** followed by the URL you copied in step 3. The command should look like this: **git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY**.
7. Press Enter to create your local clone.

# Credits

**Fonts**
[Google Fonts](https://fonts.google.com/).

**Code**
- Code Institute walk through project.

# **Aknowledgement**
- I programmed the project with the help of the open resource code os the Code Institute LMS, and i extended it the way that serve my idea.
- Many thanks to Mentor **Antonio Rodriguez** for continuous helpful feedback.
- Thanks to Tutors support at Code Institute for their support.
