const express = require('express');
const router = express.Router();

const projects = require('../jsonData/data.json');

router.get('/:id', (req, res, next)=> {
    res.statusCode = 200;
    let id = req.params;
    if (id >= projects.length){
        next();
    }
    
  const projectName = projects[id].project_name;

  // Deconstuctoring all the project data
  const {
    technologies,
    image_urls,
    description,
    github_link,
    live_link
  } = projects[id];

  const projectInfo = {
    projectName,
    technologies,
    image_urls,
    description,
    github_link,
    live_link
  };
  
  return res.render('project', {
    projectInfo
  });
});

module.exports = router;
