
const express = require('express');
const router = express.Router();
const jsonData = require('../jsonData/data.json');
const projectInfo = jsonData.projects;


router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id) -1;
    res.locals.project = projectInfo[id];
    res.locals.title = projectInfo[id].project_name;
    res.locals.description = projectInfo[id].description;
    res.locals.technologies = projectInfo[id].technologies;
    res.locals.live_link = projectInfo[id].live_link;
    res.locals.github_link = projectInfo[id].github_link;
    res.locals.image_1 = projectInfo[id].image_urls[1];
    res.locals.image_2 = projectInfo[id].image_urls[2];
    res.locals.image_3 = projectInfo[id].image_urls[3];
    res.render('project', {
        title: res.locals.title,
        description: res.locals.description,
        technologies: res.locals.technologies,
        live_link: res.locals.live_link,
        github_link: res.locals.github_link,
        image1: res.locals.image_1,
        image2: res.locals.image_2,
        image3: res.locals.image_3
    });
});

module.exports = router;