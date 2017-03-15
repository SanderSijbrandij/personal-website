# Clean up
Admin.destroy_all
StaticPage.destroy_all
Tag.destroy_all
Project.destroy_all

# Create admin user
Admin.create(email:                 'admin@example.com',
            password:               'foobar',
            password_confirmation:  'foobar')

# Create pages
StaticPage.create(link:     'about',
                  title:    'About me',
                  content:  '<p>Hey everyone! I\'m Sander and this is a little CMS I made to practice my React/Rails skills on. For now, it works with HTML only. I want to make my own WYSIWYG editor to be able to properly use a good CSS framework. That might take a lot of time :)</p>
                             <p>I live on the west coast of the Netherlands, specifically Voorburg (Den Haag area). I\'m also in Amsterdam a lot :)</p>
                             <p><strong>I\'m currently looking for work, so don\'t hesitate to contact me if you like what you see!</strong></p>
                             <p>My focus is primarily on back-end, however I absolutely love React and definitely wouldn\'t mind working on the front-end either :)</p>')

StaticPage.create(link: 'contact',
                  title: 'Contact',
                  content: '<p>You can always send me an e-mail at <a href="mailto:ssijbrandij@gmail.com">ssijbrandij@gmail.com</a>. I will get back to you as soon as I can, usually within a day or two.</p>Hopefully.')

# Create tags
tags = []
tags << Tag.create(text: 'Ruby on Rails')
tags << Tag.create(text: 'ReactJS')
tags << Tag.create(text: 'FeathersJS')
tags << Tag.create(text: 'Front-end')
tags << Tag.create(text: 'Back-end')
tags << Tag.create(text: 'WebSockets')

# Create projects
Project.create!(title: 'Sample Project',
              subtitle: 'This is a seed',
              description: 'this project is here to showcase and test the website. Do not think anything of it, please.',
              image: 'http://placehold.it/1200x800',
              github: 'http://github.com/SanderSijbrandij/',
              preview: '#',
              tags: [tags[0], tags[1]])

Project.create!(title: 'Another Project',
              subtitle: 'This is also a seed',
              description: 'Maybe a bit of a longer description text this time? I really enjoyed working on this project seeing as it was made for a banana. Yes, a banana.',
              image: 'http://placehold.it/1200x800',
              github: 'http://github.com/SanderSijbrandij/',
              preview: 'http://github.com/SanderSijbrandij/',
              tags: [tags[2], tags[1]])

Project.create!(title: 'Another Project 2',
              subtitle: 'This is also a seed',
              description: 'Maybe a bit of a longer description text this time? I really enjoyed working on this project seeing as it was made for a banana. Yes, a banana.',
              image: 'http://placehold.it/1200x800',
              github: '#',
              preview: 'http://github.com/SanderSijbrandij/',
              tags: [tags[1], tags[2]])

Project.create!(title: 'Another Project 3',
              subtitle: 'This is also a seed',
              description: 'Maybe a bit of a longer description text this time? I really enjoyed working on this project seeing as it was made for a banana. Yes, a banana.',
              image: 'http://placehold.it/1200x800',
              github: '#',
              preview: '#',
              tags: [tags[3], tags[1]])

Project.create!(title: 'Another Project 4',
              subtitle: 'This is also a seed',
              description: 'Maybe a bit of a longer description text this time? I really enjoyed working on this project seeing as it was made for a banana. Yes, a banana.',
              image: 'http://placehold.it/1200x800',
              github: 'http://github.com/SanderSijbrandij/',
              preview: 'http://github.com/SanderSijbrandij/',
              tags: [tags[4], tags[5], tags[2]])
