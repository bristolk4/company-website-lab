const express = require('express');
const app = express();
const pastwork = [ 
    //   section: "projects",
    //   items: [
        {
          title: "Project Alpha",
          description: "A custom e-commerce platform that increased client sales by 25%.",
          completionDate: "2023-05-10"
        },
        {
          title: "Project Beta",
          description: "An AI-powered tool that improved workflow efficiency for a logistics company.",
          completionDate: "2024-02-15"
        },
        {
          title: "Project Gamma",
          description: "A mobile app for a financial services company to streamline customer service.",
          completionDate: "2024-07-20"
        }
      ]

const staff = [
    //   section: "staff",
    //   items: [
        {
          name: "Alice Johnson",
          position: "CEO & Founder",
          bio: "Alice has over 20 years of experience in tech startups and business development."
        },
        {
          name: "Bob Smith",
          position: "Lead Developer",
          bio: "Bob specializes in full-stack development and has a background in AI integration."
        },
        {
          name: "Carol Lee",
          position: "Head of Marketing",
          bio: "Carol has a passion for creative branding and oversees all client outreach."
        }
      ]

const externallinks = [
    // {
    //   section: "externalLinks",
    //   items: [
        {
          description: "Our LinkedIn Profile",
          link: "https://www.linkedin.com/company/yourcompany"
        },
        {
          description: "GitHub Repository",
          link: "https://github.com/yourcompany"
        },
        {
          description: "Our Blog",
          link: "https://yourcompany.com/blog"
        }
      ]


app.get('/', (req, res) => {
  res.render('home.ejs');
});

app.get('/history', (req, res) => {
    res.render('history.ejs')
});


app.get('/pastwork', (req, res) => {
    const project = req.params.project 
    res.render('pastwork.ejs', {pastwork: pastwork, project: project})
});


app.get('/staff', (req, res) => {
    const staffmember = req.params.staffmember
    res.render('staff.ejs', {staff: staff, staffmember: staffmember})
});

app.get('/externallinks', (req, res) => {
    res.render('externallinks.ejs', {externallinks: externallinks})
});

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
});


app.listen(3000);
