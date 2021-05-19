projects = [
    {
        'project_name':'Todo list',
        'project_image_url': 'https://images.unsplash.com/photo-1603189720205-5cb5cdbc233e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'project_description': 'this is a des',
        'project_url': 'https://django-to-do-list-app.herokuapp.com/'
    },
    {
        'project_name':'Love home',
        'project_image_url': 'https://images.unsplash.com/photo-1603189720205-5cb5cdbc233e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'project_description': 'this is a des',
        'project_url': 'https://mdazukalonwabo.github.io/Lovehome/LoveHome.html'
    },
    {
        'project_name':'project3',
        'project_image_url': 'https://images.unsplash.com/photo-1603189720205-5cb5cdbc233e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'project_description': 'this is a des',
        'project_url': '#aboutMe'
    },
    {
        'project_name':'project4',
        'project_image_url': 'https://images.theconversation.com/files/379026/original/file-20210115-21-90wsyw.jpg?ixlib=rb-1.1.0&rect=7%2C131%2C4876%2C2438&q=45&auto=format&w=1356&h=668&fit=crop',
        'project_description': 'this is a des',
        'project_url': '#aboutMe'
    },
    {
        'project_name':'project5',
        'project_image_url': 'https://images.unsplash.com/photo-1603189720205-5cb5cdbc233e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        'project_description': 'this is a des',
        'project_url': '#aboutMe'
    },
]

function displayProjects(){
    var project;
    for (project = 0; project < projects.length; project++) {
        $("#projectRow").append(`<div class='col-12 col-md-4 col-lg-3 pt-3 projectCardLink'>
            <a href=${projects[project].project_url} target='_blank'>
                <div class='card'>
                    <div class='cardImage' style="background-image: url(${projects[project].project_image_url})"></div>
                        <div class='card-body d-flex '>
                        <h5 class='card-title'>${projects[project].project_name}sds</h5>
                        <p class='card-text'>${projects[project].project_description}</p>
                    </div>
                </div>
            </a>
            </div>`
        )
    }
}

displayProjects()
  